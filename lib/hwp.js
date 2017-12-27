"use strict";

var fs = require('fs'),
	hwpdata = require('./hwpdata.js'),
	ole_doc = require('./ole-doc.js'),
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
		var _buffers = buffers; buffers = null;
		callback(null, Buffer.concat(_buffers));
	});
};

var getRawBuffer = function(meta, stream, callback){
	getBuffer(stream, function(e, buffer){
		if(e){callback(e); return;}
		if(meta.compressed){
			zlib.inflateRaw(buffer, function(e, buffer){
				if(e) callback(e);
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
	this._hwp5_records = {};
};

HWP.debug = false;
HWP.prototype._loaded = false;
HWP.prototype._loading = false;

var debug_warn = function(){
	if(HWP.debug) console.warn.apply(console, arguments);
}, debug_info = function(){
	if(HWP.debug) console.info.apply(console, arguments);
};

/*
**  HWP5 파일로부터 HWP 문서를 읽어오기.
**  Load HWP document from HWP5 file.
*/
HWP.prototype.loadFromHWP = function(file, callback, option){
	var _this = this;
	
	if(this._loaded || this._loading){
		err(callback, "HWP document is alreadly loaded!"); return;
	}
	this._loading = true;
	
	var _cb = function(e){
		_this._loading = false;
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
					}, option);
				}, option);
			}, option);
		});
	});
	this._doc.read();
};

var readFillBrush = function readFillBrush(record){
	var a_brush = record.attr.FillBrush;
	if(!a_brush) return null;
	var fillBrush = new HNode.FILLBRUSH();
	var i, innerBrush = null;
	if(a_brush.WindowBrush){
		innerBrush = new HNode.WINDOWBRUSH();
		innerBrush.setAttr(a_brush.WindowBrush);
	}
	if(a_brush.Gradation){
		innerBrush = new HNode.GRADATION();
		innerBrush.setAttr(a_brush.Gradation);
		for(i=0; i<a_brush.Gradation.ColorNum; i++){
			var color = new HNode.COLOR();
			color.attr.Value = a_brush.Gradation._Colors[i].value;
			innerBrush.add(color);
		}
	}
	if(innerBrush) fillBrush.add(innerBrush);
	return fillBrush.children.length > 0 ? fillBrush : null;
}

// Reads head
HWP.prototype._setHead = function(callback, option){
	if(!this._hml || this._hml.findChild('HEAD')){
		err(callback, "Invalid _setHead invocation!"); return;
	}

	var meta = this._hwp_meta,
		head = this._hml.getChild('HEAD'),
		_this = this;
	
	var summary = head.getChild('DOCSUMMARY');
	getPropSet(this._doc.stream('\x05HwpSummaryInformation'), function(e, set){
		if(e){callback(e); return;}
		
		var not_empty = function(s){
			return s && !s.match(/^(?:[\r\n])*$/);
		};

		if(not_empty(set[0x02])) summary.getChild('TITLE').value =		set[0x02];
		if(not_empty(set[0x03])) summary.getChild('SUBJECT').value =	set[0x03];
		if(not_empty(set[0x04])) summary.getChild('AUTHOR').value =		set[0x04];
		if(not_empty(set[0x14])) summary.getChild('DATE').value =		set[0x14];
		if(not_empty(set[0x05])) summary.getChild('KEYWORDS').value =	set[0x05];
		if(not_empty(set[0x06])) summary.getChild('COMMENTS').value =	set[0x06];
		// TODO_SOMETIME: Fill additional fields

		var setting = head.getChild('DOCSETTING');
		getRawBuffer(meta, _this._doc.stream('DocInfo'), function(e, buffer){ try{
			if(e){callback(e); return;}
			var docInfoTree = HRecord.getTree(0, buffer);
			if(option.saveTree) _this._hwp5_records.docInfo = docInfoTree;
			docInfoTree.forEach(function(record){
				var elem;
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
						record.children.forEach(function(r){
							switch(r.name){
								case 'BIN_DATA':
									list = mappingTable.getChild('BINDATALIST');
									elem = new HNode.BINITEM();
									list.add(elem);

									elem.setAttr(r.attr);
									break;
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

									var fillBrush = readFillBrush(r);
									if(fillBrush) elem.add(fillBrush);
									break;
								case 'CHAR_SHAPE':
									list = mappingTable.getChild('CHARSHAPELIST');
									elem = new HNode.CHARSHAPE();
									elem.attr.Id = charShapeID++;
									list.add(elem);

									elem.setAttr(r.attr, 'Height TextColor ShadeColor UseFontSpace UseKerning SymMark BorderFillId'.split(' '));
									
									for(k=0;k<7;k++){
										elem.getChild('FONTID').attr[HEnum.LangType[k]] = r.attr._FontIDs[k].value;
										elem.getChild('RATIO').attr[HEnum.LangType[k]] = r.attr._FontRatios[k].value;
										elem.getChild('CHARSPACING').attr[HEnum.LangType[k]] = r.attr._FontCharSpacings[k].value;
										elem.getChild('RELSIZE').attr[HEnum.LangType[k]] = r.attr._FontRelSizes[k].value;
										elem.getChild('CHAROFFSET').attr[HEnum.LangType[k]] = r.attr._FontCharOffsets[k].value;
									}

									if(r.attr._Italic) elem.getChild('ITALIC');
									if(r.attr._Bold) elem.getChild('BOLD');

									// TODO: OUTLINE
									if(r.attr.Underline.Type != null){
										if(r.attr.Underline.Type != 'Center'
											|| r.attr.Strikeout.Type == null
											|| r.attr.Strikeout.Type == 'None'
											|| r.attr.Underline.Color != r.attr.Strikeout.Color
											|| r.attr.Underline.Shape != r.attr.Strikeout.Shape)
											elem.getChild('UNDERLINE').setAttr(r.attr.Underline);
									}

									if(r.attr.Strikeout.Type != null){
										if(r.attr.Strikeout.Type != 'None')
											elem.getChild('STRIKEOUT').setAttr(r.attr.Strikeout);
									}

									if(r.attr.Shadow.Type != null){
										elem.getChild('SHADOW').setAttr(r.attr.Shadow);
									}

									if(r.attr._Emboss) elem.getChild('EMBOSS');
									if(r.attr._Engrave) elem.getChild('ENGRAVE');
									if(r.attr._SuperScript) elem.getChild('SUPERSCRIPT');
									if(r.attr._SubScript) elem.getChild('SUBSCRIPT');
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
									elem = new HNode.FORBIDDENSTRING();
									for(k=0;k<4;k++){
										var forbidden = new HNode.FORBIDDEN();
										forbidden.attr.Id = k;
										forbidden.value = r.attr['_f'+k]
										elem.add(forbidden);
									}
									head.add(elem);
									break;
								default:
									console.warn("Warning [head>mapping]: not processing record %s", r.name);
									debug_warn(r.toString());
							}
						});
						break;
					case 'COMPATIBLE_DOCUMENT':
						// TODO: 이것 구조 알아내기 (하지만 매우 힘들 듯)
						break;
					default:
						console.warn("Warning [head]: not processing record %s", record.name);
						debug_warn(record.toString());
				}
			});
			callback(null);
		}catch(e2){callback(e2);}});
	});
};

// Reads body
HWP.prototype._setBody = function(callback, option){
	if(!this._hml || this._hml.findChild('BODY')){
		err(callback, "Invalid _setBody invocation!"); return;
	}

	var body = this._hml.getChild('BODY'),
		numSections = this._hml.getChild('HEAD').attr.SecCnt;
	
	// TODO: distributed or encrypted
	try{
		if(option.saveTree) this._hwp5_records.sections = [];
		this._setSections(body, this._doc.storage('BodyText'), 0, numSections, callback, option);
	}catch(e){
		callback(e); return;
	}
};

// Reads sections
HWP.prototype._setSections = function(body, storage, sid, numSections, callback, option){
	var _this = this;
	if(sid == numSections){
		callback(null); return;
	}
	getRawBuffer(this._hwp_meta, storage.stream('Section'+sid), function(e, buffer){ try{
		if(e){callback(e); return;}
		var section = new HNode.SECTION();
		var tree = HRecord.getTree(0, buffer);
		if(option.saveTree) _this._hwp5_records.sections.push(tree);

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

var CHAR_TO_TAG = {
	'9': 'TAB',
	'10': 'LINEBREAK',
	'24': 'HYPEN',
	'30': 'NBSPACE',
	'31': 'FWSPACE'
};

var CHAR_TAGS = {};
(function(){
	for(var i in CHAR_TO_TAG) CHAR_TAGS[CHAR_TO_TAG[i]] = true;
}());

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

			// RANGE_TAG를 모아 놓음 [인덱스, 태그, 시작 여부 데이터]
			var rangeArr = [], range_i = 0;
			
			// 테이블 생성
			for(i=0; i<record.children.length; i++){
				ch = record.children[i];
				id = ch.name;
				if(id == 'CTRL_HEADER'){
					if(!controlTable[ch.attr._Type])
						controlTable[ch.attr._Type] = [];
					controlTable[ch.attr._Type].push(ch);
					controlIndex[ch.attr._Type] = 0;
				}else if(id == 'PARA_RANGE_TAG'){
					ch.attr._Data.forEach(function(r){
						rangeArr.push([r.start, r.data>>24, true, r.data&0xFFFFFF]);
						rangeArr.push([r.end, r.data>>24, false, r.data&0xFFFFFF]);
					});
				}else{
					if(!recordTable[id])
						recordTable[id] = [];
					recordTable[id].push(ch);
				}
			}

			rangeArr.sort(function(x, y){
				return x[0] - y[0];
			});

			// No Text
			if(!recordTable['PARA_TEXT']) break;
			
			// 예상하지 못했던 것들
			if(!recordTable['PARA_CHAR_SHAPE']
				|| recordTable['PARA_CHAR_SHAPE'].length>1
				|| recordTable['PARA_TEXT'].length>1){
				throw new Error("TODO: Other than 1 PARA_TEXT or CHAR_SHAPE");
			}

			var textElem = null, si, ei, cid, celem,
				text = recordTable['PARA_TEXT'][0].text, control_offset = 0,
				shape = recordTable['PARA_CHAR_SHAPE'][0].values,
				shapeInd = 0, shapeID = 0, next, buffer = [], elem;
			
			// Range 태그를 elem에 삽입한다.
			var insertRange = function insertRange(elem, start, end){
				while(range_i < rangeArr.length){
					var rangeTag=null, r=rangeArr[range_i], current=r[0]-control_offset;
					// Inclusive
					if(current < start){
						console.warn("Warning [text]: out-of-range (too early) range tag");
						continue;
					}
					if(current > end) break;
					switch(r[1]){
						case 2: // MARKPENBEGIN, MARKPENEND
							if(r[2]){
								rangeTag = new HNode.MARKPENBEGIN();
								rangeTag.attr.Color = r[3];
							}else{
								rangeTag = new HNode.MARKPENEND();
							}
							break;
						default:
							console.warn("Warning [text]: not processing range tag %d", rangeArr[range_i][1]);
					}
					if(rangeTag){
						rangeTag.offset = current-start;
						elem.add(rangeTag);
					}
					range_i++;
				}
			};

			// 버퍼를 클리어 하고, inline character는 합친다.
			var clearBuffer = function clearBuffer(end){
				if(textElem){
					var currentChar = null;
					buffer.forEach(function(elem){
						if(currentChar == null && elem.name == 'CHAR') currentChar = elem;
						else if(currentChar){
							if(elem.name == 'CHAR'){
								currentChar.value += elem.value;
							}else if(CHAR_TAGS[elem.name]){
								elem.offset = currentChar.value.length;
								currentChar.add(elem);
							}else{
								textElem.add(currentChar);
								currentChar = null;
								textElem.add(elem);
							}
						}else if(CHAR_TAGS[elem.name]){
							currentChar = new HNode.CHAR();
							currentChar.value = "";
							elem.offset = 0;
							currentChar.add(elem);
						}else{
							textElem.add(elem);
						}
					});
					if(currentChar != null) textElem.add(currentChar);
				}
				if(end) return;
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
					clearBuffer(false);
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
							// Range Tag 삽입
							insertRange(elem, si, ei);
							buffer.push(elem);
							clearBuffer(false);
							textElem.attr.CharShape = shape[shapeInd].charShape;
								shapeInd++; si = ei;
						}
						elem = new HNode.CHAR();
						elem.value = String.fromCharCode.apply(String, text[i].data.slice(si));
						// Range Tag 삽입
						insertRange(elem, si, text[i].data.length);
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
					case 9: // TAB
					case 10: // LINEBREAK
					case 24: // HYPEN
					case 30: // NBSPACE
					case 31: // FWSPACE
						buffer.push(new HNode[CHAR_TO_TAG[text[i].type]]());
						break;
					default:
						console.warn("Warning [text]: not processing text %s", text[i].type);
				}
				
				// 컨트롤 문자에 의한 오프셋을 더한다.
				if(text[i].type != 'text' && 'data' in text[i]) control_offset += text[i].data.length + 2;
			}
			if(buffer.length) clearBuffer(true);
			if(range_i < rangeArr.length){
				console.warn("Warning [text]: out-of-range (too late) range tag");
				debug_warn(record.toString());
			}
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
			switch(record.attr._Type){
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
				case 'pgnp': // PAGENUM
					node = new HNode.PAGENUM();
					node.setAttr(record.attr);
					break;
				case 'tbl ': // TABLE
					// TODO: 코드 다시 쓰기
					node = new HNode.TABLE();
					var r_table = record.children[0];
					if(r_table.name != 'TABLE'){
						console.warn("Warning [body>control>tbl]: expected TABLE, got %s", r_table.name);
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
								console.warn("Warning [body>control>tbl>list]: expected LIST_HEADER, got %s", r_list.name);
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
									console.warn("Warning [body>control>tbl>list]: expected PARA_HEADER, got %s", r_para.name);
									break;
								}
								plist.add(this._getHML(cell, r_para));
							}
						}
					}
					break;
				case 'gso ': // SHAPEOBJ
					node = this._getHML(parent, record.children[0]);
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
				case 'foot': // FOOTER
				default:
					console.warn("Warning [body>control]: not processing control header '%s'", record.attr._Type);
					debug_warn(record.toString());
			}
			if(shapeObject && node) node.children.unshift(shapeObject);
			break;
		case 'SHAPE_COMPONENT':
			var drawingObject = null, i;
			var shapeComponent = new HNode.SHAPECOMPONENT(), renderingInfo;
			shapeComponent.setAttr(record.attr);
			shapeComponent.getChild('ROTATIONINFO').setAttr(record.attr.RotationInfo);
			renderingInfo = shapeComponent.getChild('RENDERINGINFO');
			renderingInfo.getChild('TRANSMATRIX').setAttr(record.attr.RenderingInfo.TransMatrix);
			record.attr.RenderingInfo._ScaRotMatrices.forEach(function(elem){
				var scaMatrix = new HNode.SCAMATRIX(), rotMatrix = new HNode.ROTMATRIX();
				scaMatrix.setAttr(elem.ScaMatrix); rotMatrix.setAttr(elem.RotMatrix);
				renderingInfo.add(scaMatrix); renderingInfo.add(rotMatrix);
			});
			// Process children of each SHAPE_COMPONENTs
			var procShapeRecord = (function procShapeRecord(tag, func){
				if(!func) func = function simpleAttrSet(elem){
					node.setAttr(elem.attr);
				};

				// DRAWINGOBJECT -> SHAPECOMPONENT를 그 곳에 추가
				// no DRAWINGOBJECT -> SHAPECOMPONENT를 바로 노드에 추가 (CONTAINER)
				if(tag) drawingObject = node.getChild('DRAWINGOBJECT');
				else node.add(shapeComponent);

				// TODO: check _Count
				var drawText = null, paraList = null;
				record.children.forEach(function(elem){
					switch(elem.name){
						case 'LIST_HEADER':
							var textMargin, r_drawtext = new HRecord.LIST_DRAWTEXT(elem.data.slice(elem.offset));
							drawText = new HNode.DRAWTEXT();
							drawText.setAttr(r_drawtext.attr);
							textMargin = drawText.getChild('TEXTMARGIN');
							textMargin.setAttr(r_drawtext.attr.TextMargin);
							paraList = drawText.getChild('PARALIST');
							paraList.setAttr(elem.attr);
							drawingObject.add(drawText);
							break;
						case 'PARA_HEADER':
							if(paraList == null){
								console.warn("Warning [%s>SHAPE_COMPONENT]: PARA_HEADER without LIST_HEADER", parent.name);
								break;
							}
							paraList.add(this._getHML(drawText, elem));
							break;
						case 'SHAPE_COMPONENT':
							// From CONTAINER
							if(node.name != 'CONTAINER'){
								console.warn("Warning [%s>SHAPE_COMPONENT]: SHAPE_COMPONENT in %s", parent.name, node.name);
							}
							node.add(this._getHML(node, elem));
							break;
						default:
							if(tag && elem.name == 'SHAPE_COMPONENT_'+tag){
								func(elem); break;
							}
							console.warn("Warning [%s>SHAPE_COMPONENT]: not processing child record %s", parent.name, elem.name);
							debug_warn(elem.toString());
					}
				}, this);
			}).bind(this);
			record.children.forEach.bind(record.children);
			// TODO: 도형 안 텍스트 처리하기
			switch(record.attr._Type){
				case '$lin': // LINE
					node = new HNode.LINE();
					procShapeRecord('LINE');
					break;
				case '$col': // CONNECTLINE
					node = new HNode.CONNECTLINE();
					procShapeRecord('LINE', function(elem){
						var r_connect = new HRecord.SHAPE_COMPONENT_CONNECTLINE(elem.data);
						node.setAttr(r_connect.attr);
						r_connect.attr._ControlPoints.forEach(function(cp){
							var controlPoint = new HNode.CONTROLPOINT();
							controlPoint.setAttr(cp);
							node.add(controlPoint);
						});
					});
					break;
				case '$rec': // RECTANGLE
					node = new HNode.RECTANGLE();
					procShapeRecord('RECTANGLE');
					break;
				case '$ell': // ELLIPSE
					node = new HNode.ELLIPSE();
					procShapeRecord('ELLIPSE');
					break;
				case '$arc': // ARC
					node = new HNode.ARC();
					procShapeRecord('ARC');
					break;
				case '$pol': // POLYGON
					node = new HNode.POLYGON();
					procShapeRecord('POLYGON', function(elem){
						elem.attr._Points.forEach(function(p){
							var point = new HNode.POINT();
							point.setAttr(p); node.add(point);
						});
					});
					break;
				case '$cur': // CURVE
					node = new HNode.CURVE();
					procShapeRecord('CURVE', function(elem){
						var i, segment, attr = elem.attr;
						for(i=1; i<attr._Count; i++){
							segment = new HNode.SEGMENT();
							segment.attr.X1 = attr._Points[i-1]._X;
							segment.attr.Y1 = attr._Points[i-1]._Y;
							segment.attr.X2 = attr._Points[i]._X;
							segment.attr.Y2 = attr._Points[i]._Y;
							segment.attr.Type = attr._Types[i-1].value;
							node.add(segment);
						}
					});
					break;
				case '$con': // CONTAINER
					node = new HNode.CONTAINER();
					// It does not contain any properties
					procShapeRecord();
					break;
				case '$ole': // OLE
					node = new HNode.OLE();
					procShapeRecord('OLE');
					break;
                case '$pic':	// TODO: '$pic' case가 처리되지 않으면 오류가 발생하여 toHML() 함수가 정상적으로 호출되지 않는 증상이 있습니다. 임시방편으로 아래 코드를 작성 해두었습니다.
                    node = new HNode.PICTURE();
                    break;
				default:
					console.warn("Warning [%s>SHAPE_COMPONENT]: not processing shape type %s", parent.name, record.attr._Type);
					debug_warn(record.toString());
			}
			if(drawingObject){
				var toAdd = [];
				toAdd.unshift(shapeComponent);
				if(record.attr.LineShape){
					var lineShape = new HNode.LINESHAPE();
					lineShape.setAttr(record.attr.LineShape);
					toAdd.unshift(lineShape);
				}
				var fillBrush = readFillBrush(record);
				if(fillBrush) toAdd.unshift(fillBrush);
				if(record.attr.Shadow){
					var shadow = new HNode.SHADOW();
					shadow.setAttr(record.attr.Shadow);
					toAdd.unshift(shadow);
				}

				toAdd.forEach(function(e){
					drawingObject.children.unshift(e);
				});
			}
			break;
		default:
			console.warn("Warning [%s]: not processing record %s", parent.name, record.name);
			debug_warn(record.toString());
	}
	return node;
};

HWP.prototype._setTail = function(callback, option){
	// TODO
	callback(null);
};

/*
**  HML 파일로부터 HWP 문서를 읽어오기.
**  Load HWP document from HML file.
*/
HWP.prototype.loadFromHML = function loadFromHML(file, callback, option){
	if(this._loaded || this._loading){
		err(callback, "HWP document is alreadly loaded!"); return;
	}
	todo(callback);
};

/*
**  HML string으로 변환
**  Convert to HML String
*/
HWP.prototype.toHML = function toHML(verbose){
	if(!this._loaded || !this._hml) return null;
	return this._hml.toHML(verbose);
};

/*
**  converter를 이용해 무언가로 변환하기
**  Convert to something using converter
*/
HWP.prototype.convertTo = function convertTo(converter){
	if(!this._loaded || !this._hml) return null;
	return converter(this._hml);
};

module.exports = {
	'HWP': HWP,
	'open': function(file, option, callback){
		if(typeof option == 'function'){
			callback = option;
			option = {'type': 'hwp'};
		}
		if(typeof option == 'string'){
			option = {
				'type': option.toLowerCase()
			};
		}

		var doc = new HWP();
		(function(callback){
			try{ switch(option.type){
				case 'hwp':
					doc.loadFromHWP(file, callback, option);
					break;
			case 'hml':
					doc.loadFromHML(file, callback, option);
					break;
				default:
					err(callback, "Unknown HWP file type is given: "+option.type);
					return;
			} }catch(e){callback(e);}
		})(function(e){
			if(e) callback(e);
			else callback(null, doc);
		});
	},
	'converter': require("./converter/index.js")
};
