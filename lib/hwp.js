var fs = require('fs'),
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
					_this._setTail(function(e){
						if(e){_cb(e); return;}
						_this._loaded = true;
						_cb(null);
					});
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
						var borderFillID = 1, charShapeID = 0, tabDefID = 0, numberingID = 1, bulletDefID, paraShapeID = 0, styleID = 0;
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

									elem.setAttr(r.attr);
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
								case 'TAB_DEF':
									list = mappingTable.getChild('TABDEFLIST');
									elem = new HNode.TABDEF();
									elem.attr.Id = tabDefID++;
									list.add(elem);

									elem.setAttr(r.attr, 'AutoTabLeft AutoTabRight'.split(' '));
									// TODO: TABITEM
									break;
								case 'NUMBERING':
									list = mappingTable.getChild('NUMBERINGLIST');
									elem = new HNode.NUMBERING();
									elem.attr.Id = numberingID++;
									list.add(elem);

									elem.setAttr(r.attr, ['Start']);
									for(k=0;k<7;k++){
										var phead = new HNode.PARAHEAD();
										phead.attr.Level = k+1;
										phead.setAttrWithFilter(r.attr.ParaHeads[k], function(name){
											return name != 'value';
										});
										phead.value = r.attr.ParaHeads[k].value;
										elem.add(phead);
									}
									break;
									// TODO: BULLET
								case 'PARA_SHAPE':
									list = mappingTable.getChild('PARASHAPELIST');
									elem = new HNode.PARASHAPE();
									elem.attr.Id = paraShapeID++;
									list.add(elem);

									elem.setAttr(r.attr);
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
								case 'FORBIDDEN_CHAR':
									// TODO
									console.log(r.attr);
								default:
									console.warn("Warning [head>mapping]: not processing record %s", r.name);
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
		numSections = this._hml.getChild('HEAD').attr.SecCnt;
	
	// TODO: distributed or encrypted
	try{
		this._setSections(body, this._doc.storage('BodyText'), 0, numSections, callback);
	}catch(e){
		callback(e); return;
	}
};

// Reads sections
HWP.prototype._setSections = function(body, storage, sid, numSections, callback){
	var _this = this;
	if(sid == numSections){
		callback(null); return;
	}
	getRawBuffer(this._hwp_meta, storage.stream('Section'+sid), function(e, buffer){ try{
		if(e){callback(e); return;}
		var section = new HNode.SECTION();
		var tree = HRecord.getTree(0, buffer);

		section.attr.Id = sid;
		_this._getHMLs(section, tree);

		body.add(section);
		_this._setSections(body, storage, sid+1, numSections, callback);
	}catch(e2){callback(e2); return;}});
};

// Get multiple HMLs
HWP.prototype._getHMLs = function(parent, records){
	records.forEach(function(record){
		var hml = this._getHML(parent, record);
		if(hml) parent.add(hml);
	}, this);
	return;
};

// Get single HML
HWP.prototype._getHML = function(parent, record){
	var node = null;
	switch(record.name){
		case 'PARA_HEADER':
			/*
			**  PARA_CHAR_SHAPE, PARA_LINE_SEG가 딱 하나씩 있음.
			**  PARA_TEXT는 없을 수 있음. (빈 것과 똑같이 취급됨.)
			**  CTRL_HEADER는 0개 이상 올 수 있고, PARA_TEXT에서 사용하고 있음.
			*/
			node = new HNode.P();
			node.setAttr(record.attr, 'ParaShape Style PageBreak ColumnBreak InstId'.split(' '));
			// 0이면 생략되는 듯?
			if(node.attr.InstId == 0) delete node.attr.InstId;

			var recordTable = [], i, ch, id;
			var controlTable = [], controlIndex = [];
			
			// 테이블 생성
			for(i=0; i<record.children.length; i++){
				ch = record.children[i];
				id = ch.name;
				if(id == 'CTRL_HEADER'){
					if(!controlTable[ch.type])
						controlTable[ch.type] = [];
					controlTable[ch.type].push(ch);
					controlIndex[ch.type] = 0;
				}else{
					if(!recordTable[id])
						recordTable[id] = [];
					recordTable[id].push(ch);
				}
			}
			
			// No Text
			if(!recordTable['PARA_TEXT']) break;
			
			// 예상하지 못했던 것들
			if(!recordTable['PARA_CHAR_SHAPE']
				|| recordTable['PARA_CHAR_SHAPE'].length>1
				|| recordTable['PARA_TEXT'].length>1){
				throw new Error("TODO: Other than 1 PARA_TEXT or CHAR_SHAPE");
			}

			if(recordTable['PARA_RANGE_TAG']){
				console.warn("Warning [text]: not processing PARA_RANGE_TAG (markpen, ...)");
			}

			var textElem = null, si, ei, cid, celem,
				text = recordTable['PARA_TEXT'][0].text,
				shape = recordTable['PARA_CHAR_SHAPE'][0].values,
				shapeInd = 0, shapeID = 0, next, buffer = [], elem;
			
			var clearBuffer = function(){
				if(textElem) buffer.forEach(function(elem){
					textElem.add(elem);
				});
				textElem = new HNode.TEXT();
				node.add(textElem);
				buffer = [];
			};

			if(shape.length == 0 || shape[0].start != 0){
				throw new Error("PARA_CHAR_SHAPE must have a CHAR_SHAPE starts from 0!");
			}

			for(i=0; i<text.length; i++){
				next = i+1<text.length? text[i+1].start: recordTable['PARA_TEXT'][0].data.length/2;
				// 지나친 게 있는지 확인
				while(shapeInd < shape.length && shape[shapeInd].start < text[i].start){
					console.warn("Warning [text]: ShapeInd pointing in non-texts");
					shapeInd++;
				}
				// 시작 지점에서 시작하는 새 CharShape 확인
				if(shapeInd < shape.length && text[i].start >= shape[shapeInd].start){
					clearBuffer();
					textElem.attr.CharShape = shape[shapeInd].charShape;
					shapeInd++;
				}
				switch(text[i].type){
					case 'text':
						si = 0;
						while(shapeInd < shape.length && shape[shapeInd].start < next){
							elem = new HNode.CHAR();
							ei = shape[shapeInd].start - text[i].start;
							elem.value = String.fromCharCode.apply(String, text[i].data.slice(si, ei));
							buffer.push(elem);
							clearBuffer();
							textElem.attr.CharShape = shape[shapeInd].charShape;
								shapeInd++; si = ei;
						}
						elem = new HNode.CHAR();
						elem.value = String.fromCharCode.apply(String, text[i].data.slice(si));
						buffer.push(elem);
						break;
					case 1: case 12: case 14: // Reserved
					case 2: // SecDef / ColDef
					case 3: // Field Start
					case 11: // Drawing Object / Table
					case 15: // Hidden Comment
					case 16: // Header / Footer
					case 17: // Footnote / Endnote
					case 18: // Numbering
					case 21: // Page Control
					case 22: // Bookmark
					case 23: // Dutmal
						cid = String.fromCharCode(text[i].data[1]>>8, text[i].data[1]&0xFF, text[i].data[0]>>8, text[i].data[0]&0xFF);
						if(!controlTable[cid] || controlTable[cid].length <= controlIndex[cid]){
							console.error("Error [text]: control [%s] can't be found!", cid);
							break;
						}
						celem = this._getHML(textElem, controlTable[cid][controlIndex[cid]++]);
						if(celem) buffer.push(celem);
						break;
					default:
						console.warn("Warning [text]: not processing text %s", text[i].type);
				}
			}
			buffer.forEach(function(elem){
				textElem.add(elem);
			});

			break;
		case 'PAGE_DEF':
			node = new HNode.PAGEDEF();
			node.setAttr(record.attr);
			node.getChild('PAGEMARGIN').setAttr(record.attr.PageMargin);
			break;
		case 'FOOTNOTE_SHAPE':
			var isEnd = false;
			if(parent.findChild('FOOTNOTESHAPE')){
				isEnd = true;
				node = new HNode.ENDNOTESHAPE();
			}else{
				node = new HNode.FOOTNOTESHAPE();
			}
			record.attr.NotePlacement.Place = HEnum.get((isEnd?'End':'Foot')+'NoteShapePlaceType', record.attr.NotePlacement.Place);
			node.getChild('AUTONUMFORMAT').setAttr(record.attr.AutoNumFormat);
			node.getChild('NOTELINE').setAttr(record.attr.NoteLine);
			node.getChild('NOTESPACING').setAttr(record.attr.NoteSpacing);
			node.getChild('NOTENUMBERING').setAttr(record.attr.NoteNumbering);
			node.getChild('NOTEPLACEMENT').setAttr(record.attr.NotePlacement);
			break;
		case 'PAGE_BORDER_FILL':
			var fillCount = parent.findChildren('PAGEBORDERFILL').length;
			node = new HNode.PAGEBORDERFILL();
			node.setAttr(record.attr);
			node.attr.Type = HEnum.get('PageBorderFillType', fillCount);
			node.getChild('PAGEOFFSET').setAttr(record.attr.PageOffset);
			break;
		case 'CTRL_HEADER':
			// CTRL_HEADER
			var shapeObject = null;
			if(record.attr.ShapeObject){
				shapeObject = new HNode.SHAPEOBJECT();
				shapeObject.setAttrWithFilter(record.attr.ShapeObject, function(name){
					return !(name == 'TextWrap' && this.Position.TreatAsChar == true);
				});
				shapeObject.getChild('SIZE').setAttr(record.attr.ShapeObject.Size);
				shapeObject.getChild('POSITION').setAttr(record.attr.ShapeObject.Position);
				shapeObject.getChild('OUTSIDEMARGIN').setAttr(record.attr.ShapeObject.OutsideMargin);
				if(record.attr.ShapeObject.ShapeComment.value)
					shapeObject.getChild('SHAPECOMMENT').value = record.attr.ShapeObject.ShapeComment.value;
			}
			switch(record.type){
				case 'secd': // SECDEF
					node = new HNode.SECDEF();
					node.setAttr(record.attr);
					node.getChild('STARTNUMBER').setAttr(record.attr.StartNumber);
					node.getChild('HIDE').setAttr(record.attr.Hide);
					this._getHMLs(node, record.children);
					break;
				case 'cold': // COLDEF
					node = new HNode.COLDEF();
					node.setAttr(record.attr);
					break;
				case 'tbl ': // TABLE
					node = new HNode.TABLE();
					var r_table = record.children[0];
					if(r_table.name != 'TABLE'){
						console.warn("Warning [body>control>tbl]: strange tbl");
						break;
					}
					node.setAttr(r_table.attr);
					node.getChild('INSIDEMARGIN').setAttr(r_table.attr.InsideMargin);
					var i, row_len, j, k, ind=1, r_list, r_cell, r_para, row, cell, plist;
					for(i=0; i<r_table.attr._RowSizes.length; i++){
						row = new HNode.ROW();
						node.add(row);
						row_len = r_table.attr._RowSizes[i].value;
						for(j=0; j<row_len; j++){
							r_list = record.children[ind++];
							if(r_list.name != 'LIST_HEADER'){
								console.warn("Warning [body>control>tbl>list]: starnge list %s", r_list.name);
								break;
							}
							r_cell = new HRecord.LIST_CELL(r_list.data.slice(r_list.offset));
							cell = new HNode.CELL();
							cell.setAttr(r_cell.attr);
							if(r_cell.attr.HasMargin){
								cell.getChild('CELLMARGIN').setAttr(r_cell.attr.CellMargin);
							}
							
							plist = new HNode.PARALIST();
							plist.setAttr(r_list.attr);

							row.add(cell);
							cell.add(plist);
							for(k=0;k<r_list.attr._ParaCount;k++){
								r_para = record.children[ind++];
								if(r_para.name != 'PARA_HEADER'){
									console.warn("Warning [body>control>tbl>list]: strange para %s", r_para.name);
									break;
								}
								plist.add(this._getHML(cell, r_para));
							}
						}
					}
					break;
				case 'eqed': // EQUATION
					node = new HNode.EQUATION();
					if(record.children.length != 1 || record.children[0].name != 'EQEDIT'){
						console.warn("Warning [body>control>eqed]: strange eqed");
						break;
					}
					node.setAttr(record.children[0].attr);
					node.getChild('SCRIPT').value = record.children[0].attr.Script.value;
					break;
				default:
					console.warn("Warning [body>control]: not processing control header '%s'", record.type);
			}
			if(shapeObject && node) node.children.unshift(shapeObject);
			break;
		default:
			console.warn("Warning [%s]: not processing record %s", parent.name, record.name);
	}
	return node;
};

HWP.prototype._setTail = function(callback){
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
HWP.prototype.toHML = function(verbose){
	if(!this._loaded || !this._hml) return null;
	return this._hml.toHML(verbose);
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
		(function(callback){
			try{ switch(type){
				case 'hwp':
					doc.loadFromHWP(file, callback);
					break;
				case 'hml':
					doc.loadFromHML(file, callback);
					break;
				default:
					err(callback, "Unknown HWP file type is given: "+type);
					return;
			} }catch(e){callback(e);}
		})(function(e){
			if(e) callback(e);
			else callback(null, doc);
		});
	}
};
