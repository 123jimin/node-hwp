/**
*
*  This code is generated from /format/hwp-node-record.js and
*  /format/hwp.format via /generate.js with jison.
*
**/

var root;
root={'record':{},'node':{},'tag':{},'enum':{}};
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// FIXME: null
// HWPML nodes
// 3. 루트 엘리먼트
root.node.HWPML = function Node_HWPML(){
	this.name = "HWPML"; this.attr = {};
	this.attr.Version = "2.8";
	this.attr.SubVersion = "8.0.0.0";
	this.attr.Style2 = "embed";
};
// 4. 헤더 엘리먼트
root.node.HEAD = function Node_HEAD(){
	this.name = "HEAD"; this.attr = {};
	this.attr.SecCnt = null;
};
// 4.1. 문서 요약 정보 엘리먼트
root.node.DOCSUMMARY = function Node_DOCSUMMARY(){
	this.name = "DOCSUMMARY"; this.attr = {};
};
root.node.TITLE = function Node_TITLE(){
	this.name = "TITLE"; this.attr = {};
};
root.node.SUBJECT = function Node_SUBJECT(){
	this.name = "SUBJECT"; this.attr = {};
};
root.node.AUTHOR = function Node_AUTHOR(){
	this.name = "AUTHOR"; this.attr = {};
};
root.node.DATE = function Node_DATE(){
	this.name = "DATE"; this.attr = {};
};
root.node.KEYWORDS = function Node_KEYWORDS(){
	this.name = "KEYWORDS"; this.attr = {};
};
root.node.COMMENTS = function Node_COMMENTS(){
	this.name = "COMMENTS"; this.attr = {};
};
root.node.FORBIDDENSTRING = function Node_FORBIDDENSTRING(){
	this.name = "FORBIDDENSTRING"; this.attr = {};
};
root.node.FORBIDDEN = function Node_FORBIDDEN(){
	this.name = "FORBIDDEN"; this.attr = {};
	this.attr.id = null;
};
// 4.2. 문서 설정 정보 엘리먼트
root.node.DOCSETTING = function Node_DOCSETTING(){
	this.name = "DOCSETTING"; this.attr = {};
};
root.node.BEGINNUMBER = function Node_BEGINNUMBER(){
	this.name = "BEGINNUMBER"; this.attr = {};
	this.attr.Page = null;
	this.attr.Footnote = null;
	this.attr.Endnote = null;
	this.attr.Picture = null;
	this.attr.Table = null;
	this.attr.Equation = null;
	this.attr.TotalPage = null;
};
root.node.CARETPOS = function Node_CARETPOS(){
	this.name = "CARETPOS"; this.attr = {};
	this.attr.List = null;
	this.attr.Para = null;
	this.attr.Pos = null;
};
// 4.3. 문서 글꼴 / 스타일 정보
root.node.MAPPINGTABLE = function Node_MAPPINGTABLE(){
	this.name = "MAPPINGTABLE"; this.attr = {};
};
// 4.3.1. 문서 내 그림 / OLE 정보
root.node.BINDATALIST = function Node_BINDATALIST(){
	this.name = "BINDATALIST"; this.attr = {};
	this.attr.Count = "0";
};
root.node.BINITEM = function Node_BINITEM(){
	this.name = "BINITEM"; this.attr = {};
	this.attr.Type = null;
	this.attr.APath = null;
	this.attr.RPath = null;
	this.attr.BinData = null;
	this.attr.Format = null;
};
// 4.3.2. 글꼴 정보
root.node.FACENAMELIST = function Node_FACENAMELIST(){
	this.name = "FACENAMELIST"; this.attr = {};
};
root.node.FONTFACE = function Node_FONTFACE(){
	this.name = "FONTFACE"; this.attr = {};
	this.attr.Lang = null;
	this.attr.Count = null;
};
root.node.FONT = function Node_FONT(){
	this.name = "FONT"; this.attr = {};
	this.attr.Id = null;
	this.attr.Type = null;
	this.attr.Name = null;
};
root.node.SUBSTFONT = function Node_SUBSTFONT(){
	this.name = "SUBSTFONT"; this.attr = {};
	this.attr.Type = null;
	this.attr.Name = null;
};
root.node.TYPEINFO = function Node_TYPEINFO(){
	this.name = "TYPEINFO"; this.attr = {};
	this.attr.FamilyType = null;
	this.attr.SerifStyle = null;
	this.attr.Weight = null;
	this.attr.Proportion = null;
	this.attr.Contrast = null;
	this.attr.StrokeVariation = null;
	this.attr.ArmStyle = null;
	this.attr.Letterform = null;
	this.attr.Midline = null;
	this.attr.XHeight = null;
};
// 4.3.3. 테두리 / 배경 / 채우기 정보
root.node.BORDERFILLLIST = function Node_BORDERFILLLIST(){
	this.name = "BORDERFILLLIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.BORDERFILL = function Node_BORDERFILL(){
	this.name = "BORDERFILL"; this.attr = {};
	this.attr.Id = null;
	this.attr.ThreeD = "false";
	this.attr.Shadow = "false";
	this.attr.Slash = "0";
	this.attr.BackSlash = "0";
	this.attr.CrookedSlash = "0";
	this.attr.CounterSlash = "0";
	this.attr.CounterBackSlash = "0";
	this.attr.BreakCellSeparateLine = "0";
};
// HWP 레코드
root.tag.BEGIN = 16;
root.tag.DOCUMENT_PROPERTIES = 16;
root.tag.ID_MAPPINGS = 17;
root.tag.BIN_DATA = 18;
root.tag.FACE_NAME = 19;
root.tag.BORDER_FILL = 20;
root.tag.CHAR_SHAPE = 21;
root.tag.TAB_DEF = 22;
root.tag.NUMBERING = 23;
root.tag.BULLET = 24;
root.tag.PARA_SHAPE = 25;
root.tag.STYLE = 26;
root.tag.DOC_DATA = 27;
root.tag.DISTRIBUTE_DOC_DATA = 28;
// 13: Reserved
root.tag.COMPATIBLE_DOCUMENT = 30;
root.tag.LAYOUT_COMPATIBILITY = 31;
// 4.1.1. 문서 속성
root.record.DOCUMENT_PROPERTIES = function Record_DOCUMENT_PROPERTIES(data){
	var tmp; this.data = data;
	this.SecCnt = this.data.readUInt16LE(0);
	this.BeginNumber = {};
	this.BeginNumber.Page = this.data.readUInt16LE(2);
	this.BeginNumber.Footnote = this.data.readUInt16LE(4);
	this.BeginNumber.EndNote = this.data.readUInt16LE(6);
	this.BeginNumber.Picture = this.data.readUInt16LE(8);
	this.BeginNumber.Table = this.data.readUInt16LE(10);
	this.BeginNumber.Equation = this.data.readUInt16LE(12);
	this.CaretPos = {};
	this.CaretPos.List = this.data.readUInt32LE(14);
	this.CaretPos.Para = this.data.readUInt32LE(18);
	this.CaretPos.Pos = this.data.readUInt32LE(22);
	this.Property = this.data.readUInt32LE(26);
};
// 4.1.2. 아이피 매핑 헤더
root.record.ID_MAPPINGS = function Record_ID_MAPPINGS(data){
	var tmp; this.data = data;
	this.MappingTable = [];var offset={'value':0};
	for(tmp=0;tmp<16;tmp++){
		this.MappingTable[tmp] = {};
		this.MappingTable[tmp].Count = this.data.readInt32LE(offset); offset+=4;
	}
};
// 4.1.3. 바이너리 데이터 (TODO)
root.record.BIN_DATA = function Record_BIN_DATA(data){
	var tmp; this.data = data;
	this.Property = this.data.readUInt16LE(0);
};
// 4.1.4. 글꼴 (TODO: 직접 데이터 처리해야 됨)
root.record.FACE_NAME = function Record_FACE_NAME(data){
	var tmp; this.data = data;
	this.Property = this.data.readUInt8(0);
	tmp = this.data.readUInt16LE(1);var offset={'value':3}; for(this.Name='';tmp-->0;){this.Name+=String.fromCharCode(this.data.readUInt16LE(offset)); offset+=2;}
	 (function(){console.log("Hello, world!");}());
};
// 4.1.5 테두리 / 배경 (TODO: 정말 이렇게 대각선이 따로 저장되는 지 확인하기)
root.record.BORDER_FILL = function Record_BORDER_FILL(data){
	var tmp; this.data = data;
	this.Property = this.data.readUInt16LE(0);
	this.BorderTypes = [];var offset={'value':2};
	for(tmp=0;tmp<4;tmp++){
		this.BorderTypes[tmp] = {};
		this.BorderTypes[tmp].value = this.data.readUInt8(offset); offset+=1;
	}
	this.BorderWidths = [];
	for(tmp=0;tmp<4;tmp++){
		this.BorderWidths[tmp] = {};
		this.BorderWidths[tmp].value = this.data.readUInt8(offset); offset+=1;
	}
	this.BorderColors = [];
	for(tmp=0;tmp<4;tmp++){
		this.BorderColors[tmp] = {};
		this.BorderColors[tmp].value = this.data.readUInt32LE(offset); offset+=4;
	}
	this.Diagonal = {};
	this.Diagonal.Type = this.data.readUInt8(offset); offset+=1;
	this.Diagonal.Width = this.data.readUInt8(offset); offset+=1;
	this.Diagonal.Color = this.data.readUInt32LE(offset); offset+=4;
};
// 4.1.6. 글자 모양
root.record.CHAR_SHAPE = function Record_CHAR_SHAPE(data){
	var tmp; this.data = data;
	this.FontIDs = [];var offset={'value':0};
	for(tmp=0;tmp<7;tmp++){
		this.FontIDs[tmp] = {};
		this.FontIDs[tmp].value = this.data.readUInt16(offset); offset+=2;
	}
	this.FontRatios = [];
	for(tmp=0;tmp<7;tmp++){
		this.FontRatios[tmp] = {};
		this.FontRatios[tmp].value = this.data.readUInt8(offset); offset+=1;
	}
	this.FontCharSpacings = [];
	for(tmp=0;tmp<7;tmp++){
		this.FontCharSpacings[tmp] = {};
		this.FontCharSpacings[tmp].value = this.data.readInt8(offset); offset+=1;
	}
	this.FontRelSizes = [];
	for(tmp=0;tmp<7;tmp++){
		this.FontRelSizes[tmp] = {};
		this.FontRelSizes[tmp].value = this.data.readUInt8(offset); offset+=1;
	}
	this.FontCharOffsets = [];
	for(tmp=0;tmp<7;tmp++){
		this.FontCharOffsets[tmp] = {};
		this.FontCharOffsets[tmp].value = this.data.readInt8(offset); offset+=1;
	}
};
root.tag.table = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"DOCUMENT_PROPERTIES","ID_MAPPINGS","BIN_DATA","FACE_NAME","BORDER_FILL","CHAR_SHAPE","TAB_DEF","NUMBERING","BULLET","PARA_SHAPE","STYLE","DOC_DATA","DISTRIBUTE_DOC_DATA",null,"COMPATIBLE_DOCUMENT","LAYOUT_COMPATIBILITY"];

// Node
var HWPNode = function HWPNode(){
	this.children = [];
};

HWPNode.prototype.value = null;

HWPNode.prototype.add = function add(elem){
	this.children.push(elem);
	this.setCount();
};

HWPNode.prototype.setCount = function setCount(){
	if(this.attr.Count !== undefined) this.attr.Count = this.children.length;
};

// Make one if not exists
HWPNode.prototype.getChild = function getChild(name){
	name = name.toUpperCase();
	for(var i=0;i<this.children.length;i++){
		if(this.children[i].name === name) return this.children[i];
	}
	var o = new root.node[name]();
	this.add(o); return o;
};

// Only finds one
HWPNode.prototype.go = HWPNode.prototype.findChild = function findChild(name){
	name = name.toUpperCase();
	for(var i=0;i<this.children.length;i++){
		if(this.children[i].name === name) return this.children[i];
	}
	return null;
};

// Find all children
HWPNode.prototype.findChildren = function getChildren(name){
	name = name.toUpperCase();
	return this.children.filter(function(o){return o.name === name;});
};

for(var name in root.node){
	root.node[name].prototype = new HWPNode();
};

// Record
var HWPRecord = function HWPRecord(offset, buffer){
	var header = buffer.readUInt32LE(offset); offset += 4;
	this.tag = header&0x3FF;
	this.level = (header>>10)&0x3FF;
	this.size = header>>20;
	if(this.size == 4095){
		this.size = buffer.readUInt32LE(offset);
		offset += 4;
	}
	this.data = buffer.sice(offset, offset + this.size);
	this._offset = offset + this.size;
};

HWPRecord.prototype.resolve = function(){
	var tag = root.tag.table[this.tag];
	if(!tag) throw new Error("Unknown tag: "+this.tag);

	var obj = new root.record[tag](this.data);
	obj.children = [];
	return obj;
};

root.record.getTree = function getTree(offset, buffer){
	var record, records_flat = [];
	while(offset < buffer.length){
		record = new HWPRecord(offset, buffer);
		offset = record._offset;
		records_flat.push(record);
	}

	var prvr = records_flat[0], prv = prvr.resolve(), records = [prv];
	for(var i=1;i<records_flat.length;i++){
		record = records_flat[i];
		if(record.level == 0){
			prvr = record;
			prv = prvr.resolve();
			records.push(prv);
		}else{
			while(prvr.level >= record.level){
				prvr = prvr.parent;
				if(!prvr) throw new Error('Invalid record root!');
			}
			prv.children.push(record);
			record.parent = prv;
			prvr = record;
			prv = prvr.resolve();
		}
	}
	return records;
};

module.exports = root;
