var async = require('async'),
	fs = require('fs'),
	hwpdata = require('./hwpdata.js'),
	ole_doc = require('ole-doc'),
	zlib = require('zlib');

var HEnum = hwpdata.enum,
	HNode = hwpdata.node,
	HTag = hwpdata.tag,
	HRecord = hwpdata.record;

var err = function(f,s){f(new Error(s));};
var todo = function(f,s){err(f, (s?"TODO: "+s:"TODO"));};

var getBuffer = function(stream, callback){
	var buffers = [];
	stream.on('error', function(e){
		callback(e);
	});
	stream.on('data', function(buffer){
		buffers.push(buffer);
	});
	stream.on('end', function(){
		callback(null, Buffer.concat(buffers));
	});
};

var getRawBuffer = function(meta, stream, callback){
	getBuffer(stream, function(e, buffer){
		if(e){callback(e); return;}
		if(meta.compressed){
			zlib.inflateRaw(buffer, function(e, buffer){
				if(e){callback(e); return;}
				else callback(null, buffer);
			});
		}else callback(null, buffer);
	});
};

var readUTF16 = function(buffer, ind, len){
	for(var s='', i=ind; i<ind+len; i+=2){
		s += String.fromCharCode(buffer.readUInt16LE(i));
	}
	return s;
};

// From https://bitbucket.org/decalage/olefileio_pl
var getPropSet = function(stream, callback){
	getBuffer(stream, function(e, buffer){
		if(e){callback(e); return;}
		var set = {}, numProps = buffer.readUInt32LE(0x34);
		var id, offset, type, count, value;
		for(var i=0;i<numProps;i++){
			id = buffer.readUInt32LE(0x38+i*8);
			offset = buffer.readUInt32LE(0x3C+i*8)+0x30;
			type = buffer.readUInt32LE(offset);
			switch(type){
				case 1: // VT_NULL
					value = null;
					break;
				case 2: // VT_I2
					value = buffer.readInt16LE(offset+4);
					break;
				case 18: // VT_UI2
					value = buffer.readUInt16LE(offset+4);
					break;
				case 3: case 10: // VT_I4, VT_ERROR
				case 19: // VT_UI4
					value = buffer.readUInt32LE(offset+4);
					break;
				case 8: case 30: // VT_BSTR, VT_LPSTR
					count = buffer.readUInt32LE(offset+4);
					value = buffer.toString('ascii', offset+8, offset+8+count-1);
					break;
				case 65: // VT_BLOB
					count = buffer.readUInt32LE(offset+4);
					value = buffer.slice(offset+8, offset+8+count);
					break;
				case 31: // VT_LPWSTR
					count = buffer.readUInt32LE(offset+4);
					value = readUTF16(buffer, offset+8, count*2);
					if(value[value.length-1] === '\u0000')
						value = value.slice(0,-1);
					break;
				case 64: // VT_FILETIME
					value = buffer.readUInt32LE(offset+4)/1e7;
					value += buffer.readUInt32LE(offset+8)*429.4967296;
					value -= 134774*86400;
					value = new Date(value*1000);
					break;
			}
			set[id] = value;
		}
		callback(null, set);
	});
};

var OLEDoc = ole_doc.OleCompoundDoc;
var HWP = function HWP(){
	this._doc = null;
	this._hml = null;
	this._hwp_meta = null;
};

HWP.prototype._loaded = false;
HWP.prototype._loading = false;

/*
**  HWP5 파일로부터 HWP 문서를 읽어오기.
**  Load HWP document from HWP5 file.
*/
HWP.prototype.loadFromHWP = function(file, callback){
	var _this = this;
	
	if(this._loaded || this._loading){
		err(callback, "HWP document is alreadly loaded!"); return;
	}
	this._loading = true;
	
	var _cb = function(e){
		this._loading = false;
		callback(e);
	};

	this._doc = new OLEDoc(file);
	this._doc.on('err', function(e){
		_cb(e);
	});
	this._doc.on('ready', function(){
		getBuffer(_this._doc.stream('FileHeader'), function(e, buffer){
			if(e){_cb(e); return;}
			if('HWP Document File' !== buffer.toString('utf8', 0, 17)){
				err(_cb, "Invalid header string!"); return;
			}
			_this._hml = new HNode.HWPML();

			// Reading metadata (HWP specific)
			var version = buffer.readUInt32LE(32);
			var meta = {}, bits;
			meta.version = [version>>24, 0xFF&(version>>16), 0xFF&(version>>8), 0xFF&version];
			bits = buffer.readUInt32LE(36);
			meta.compressed = !!(bits&0x01);
			meta.encrypted = !!(bits&0x02);
			meta.distributed = !!(bits&0x04);
			if(meta.encrypted || meta.distributed){
				todo(_cb, "Can\'t open "+(meta.encrypted?'encrypted':'distributed')+" HWP file.");
				return;
			}
			_this._hwp_meta = meta;
			
			_this._setHead(function(e){
				if(e){_cb(e); return;}
				_this._setBody(function(e){
					if(e){_cb(e); return;}
					_this._loaded = true;
					_cb(null);
				});
			});
		});
	});
	this._doc.read();
};

// Reads head
HWP.prototype._setHead = function(callback){
	if(!this._hml || this._hml.findChild('HEAD')){
		err(callback, "Invalid _setHead invocation!"); return;
	}

	var meta = this._hwp_meta,
		head = this._hml.getChild('HEAD'),
		_this = this;
	
	var summary = head.getChild('DOCSUMMARY');
	getPropSet(this._doc.stream('\x05HwpSummaryInformation'), function(e, set){
		if(e){callback(e); return;}
		if(set[0x02]) summary.getChild('TITLE').value =		set[0x02];
		if(set[0x03]) summary.getChild('SUBJECT').value =	set[0x03];
		if(set[0x04]) summary.getChild('AUTHOR').value =	set[0x04];
		if(set[0x05]) summary.getChild('KEYWORDS').value =	set[0x05];
		if(set[0x06]) summary.getChild('COMMENTS').value =	set[0x06];
		if(set[0x14]) summary.getChild('DATE').value =		set[0x14];
		// TODO_SOMETIME: Fill additional fields

		var setting = head.getChild('DOCSETTING');
		getRawBuffer(meta, _this._doc.stream('DocInfo'), function(e, buffer){ try{
			if(e){callback(e); return;}
			var docInfoTree = HRecord.getTree(0, buffer);
			for(var i=0;i<docInfoTree.length;i++){
				var record = docInfoTree[i];
				switch(record.name){
					case 'DOCUMENT_PROPERTIES':
						head.attr.SecCnt = record.attr.SecCnt;
						setting.getChild('BEGINNUMBER').setAttr(record.attr.BeginNumber);
						setting.getChild('CARETPOS').setAttr(record.attr.CaretPos);
						break;
					case 'ID_MAPPINGS':
						var j, list, theNode, k;
						var mappingTable = head.getChild('MAPPINGTABLE');
						var fontCounts = record.attr.FontCount.map(function(x){
							return x.value;
						}), fontKind = 0, fontNum = 0;
						var borderFillID = 1, charShapeID = 0, tabDefID, numberingID, bulletDefID, paraShapeID = 0, styleID = 0;
						for(j=0;j<record.children.length;j++){
							var r = record.children[j];
							switch(r.name){
								case 'FACE_NAME':
									list = mappingTable.getChild('FACENAMELIST');
									while(fontKind<6 && fontCounts[fontKind] == fontNum){
										fontKind++; fontNum = 0;
									}
									var fontface = list.getChildWith('FONTFACE', 'Lang', HEnum.LangType[fontKind]);
									elem = new HNode.FONT();
									elem.attr.Id = fontNum++;
									fontface.add(elem);

									elem.attr.Name = r.attr.Name;
									elem.attr.Type = r.attr.Type;

									if(r.attr.SubstFont){
										elem.getChild('SUBSTFONT').setAttr(r.attr.SubstFont);
									}
									if(r.attr.TypeInfo){
										elem.getChild('TYPEINFO').setAttr(r.attr.TypeInfo);
									}
									// TODO_SOMETIME: Default Font
									break;
								case 'BORDER_FILL':
									list = mappingTable.getChild('BORDERFILLLIST');
									elem = new HNode.BORDERFILL();
									elem.attr.Id = borderFillID++;
									list.add(elem);

									elem.attr.ThreeD = r.attr.ThreeD;
									elem.attr.Shadow = r.attr.Shadow;
									
									// TODO: Slash, BackSlash, CrookedSlash, CounterSlash, BreakCellSeparateLine

									elem.getChild('LEFTBORDER').setAttr(r.attr.LeftBorder);
									elem.getChild('RIGHTBORDER').setAttr(r.attr.RightBorder);
									elem.getChild('TOPBORDER').setAttr(r.attr.TopBorder);
									elem.getChild('BOTTOMBORDER').setAttr(r.attr.BottomBorder);
									elem.getChild('DIAGONAL').setAttr(r.attr.Diagonal);

									// TODO: WINDOWBRUSH
									break;
								case 'CHAR_SHAPE':
									list = mappingTable.getChild('CHARSHAPELIST');
									elem = new HNode.CHARSHAPE();
									elem.attr.Id = charShapeID++;
									list.add(elem);

									elem.setAttr(r.attr, 'Height TextColor ShadeColor UseFontSpace UseKerning SymMark BorderFillId'.split(' '));
									
									for(k=0;k<7;k++){
										elem.getChild('FONTID').attr[HEnum.LangType[k]] = r.attr.FontIDs[k].value;
										elem.getChild('RATIO').attr[HEnum.LangType[k]] = r.attr.FontRatios[k].value;
										elem.getChild('CHARSPACING').attr[HEnum.LangType[k]] = r.attr.FontCharSpacings[k].value;
										elem.getChild('RELSIZE').attr[HEnum.LangType[k]] = r.attr.FontRelSizes[k].value;
										elem.getChild('CHAROFFSET').attr[HEnum.LangType[k]] = r.attr.FontCharOffsets[k].value;
									}

									if(r.attr.Italic) elem.getChild('ITALIC');
									if(r.attr.Bold) elem.getChild('BOLD');

									// TODO: UNDERLINE, STRIKEOUT, OUTLINE

									if(r.attr.Shadow.Type){
										elem.getChild('SHADOW').setAttr(r.attr.Shadow);
									}

									if(r.attr.Emboss) elem.getChild('EMBOSS');
									if(r.attr.Engrave) elem.getChild('ENGRAVE');
									if(r.attr.SuperScript) elem.getChild('SUPERSCRIPT');
									if(r.attr.SubScript) elem.getChild('SUBSCRIPT');
									break;
									// TODO: TAB_DEF, NUMBERING, BULLET
								case 'PARA_SHAPE':
									list = mappingTable.getChild('PARASHAPELIST');
									elem = new HNode.PARASHAPE();
									elem.attr.Id = paraShapeID++;
									list.add(elem);

									elem.setAttrWithFilter(r.attr, function(name){
										return name != 'ParaMargin' && name != 'ParaBorder';
									});

									elem.getChild('PARAMARGIN').setAttr(r.attr.ParaMargin);
									elem.getChild('PARABORDER').setAttr(r.attr.ParaBorder);
									break;
								case 'STYLE':
									list = mappingTable.getChild('STYLELIST');
									elem = new HNode.STYLE();
									elem.attr.Id = styleID++;
									list.add(elem);

									elem.setAttr(r.attr);
									break;
								default:
									console.warn("Warning [haed>mapping]: not processing record %s", r.name);
							}
						}
						break;
					default:
						console.warn("Warning [head]: not processing record %s", record.name);
				}
			}
			callback(null);
		}catch(e2){callback(e2);}});
	});
};

// Reads body
HWP.prototype._setBody = function(callback){
	if(!this._hml || this._hml.findChild('BODY')){
		err(callback, "Invalid _setBody invocation!"); return;
	}

	var body = this._hml.getChild('BODY'),
		_this = this;
	
	// TODO
	callback(null);
};

/*
**  HML 파일로부터 HWP 문서를 읽어오기.
**  Load HWP document from HML file.
*/
HWP.prototype.loadFromHML = function(file, callback){
	if(this._loaded || this._loading){
		err(callback, "HWP document is alreadly loaded!"); return;
	}
	todo(callback);
};

/*
**  HML string으로 변환
**  Convert to HML String
*/
HWP.prototype.toHML = function(){
	if(!this._loaded || !this._hml) return null;
	return this._hml.toHML();
};

module.exports = {
	'HWP': HWP,
	'open': function(file, type, callback){
		if(typeof type == 'function'){
			callback = type;
			type = 'hwp'; // HWP only (for now)
		}
		if(typeof type == 'string'){
			type = type.toLowerCase();
		}

		var doc = new HWP();
		async.waterfall([
			function(callback){
				switch(type){
					case 'hwp':
						doc.loadFromHWP(file, callback);
						break;
					case 'hml':
						doc.loadFromHML(file, callback);
						break;
					default:
						err(callback, "Unknown HWP file type is given: "+type);
						return;
				}
			}
		], function(e){
			if(e) callback(e);
			else callback(null, doc);
		});
	}
};
