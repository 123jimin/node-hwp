/**
*
*  This code is generated from /format/hwp-node-record.js and
*  /format/hwp.format via /generate.js with jison.
*
**/

var root;
root={'record':{},'node':{},'tag':{},'enum':{}};
// Explict enum
root.enum.LineType1 = ["None","Solid","Dash","Dot","DashDot","DashDotDot","LongDash","Circle","DoubleSlim","SlimThick","ThickSlim","SlimThickSlim"];
root.enum.LineType2 = ["Solid","Dash","Dot","DashDot","DashDotDot","LongDash","Circle","DoubleSlim","SlimThick","ThickSlim","SlimThickSlim"];
root.enum.LineType3 = [null,"Solid","Dot","Thick","Dash","DashDot","DashDotDot"];
root.enum.LineWidth = ["0.1mm","0.12mm","0.15mm","0.2mm","0.25mm","0.3mm","0.4mm","0.5mm","0.6mm","0.7mm","1.0mm","1.5mm","2.0mm","3.0mm","4.0mm","5.0mm"];
root.enum.NumberType1 = ["Digit","CircledDigit","RomanCapital","RomanSmall","LatinCapital","LatinSmall","CircledLatinCapital","CircledLatinSmall","HangulSyllable","CircledHangulSyllable","HangulJamo","CircledHangulJamo","HangulPhonetic","Ideograph","CircledIdeograph"];
root.enum.NumberType2 = ["Digit","CircledDigit","RomanCapital","RomanSmall","LatinCapital","LatinSmall","CircledLatinCapital","CircledLatinSmall","HangulSyllable","CircledHangulSyllable","HangulJamo","CircledHangulJamo","HangulPhonetic","Ideograph","CircledIdeograph","DecagonCircle","DecagonCircleHanja","Symbol","UserChar"];
root.enum.AlignType1 = ["Justify","Left","Right","Center","Distribute","DistributeSpace"];
root.enum.AlignType2 = ["Left","Center","Right"];
root.enum.LangType = ["Hangul","Latin","Hanja","Japanese","Other","Symbol","User"];
root.enum.HatchStyle = [null,"Horizontal","Vertical","BackSlash","Slash","Cross","CrossDiagonal"];
root.enum.InfillMode = ["Tile","TileHorzTop","TileHorzBottom","TileVertLeft","TileVertRight","Total","Center","CenterTop","CenterBottom","LeftCenter","LeftTop","LeftBottom","RightCenter","RightTop","RightBottom","Zoom"];
root.enum.LineWrapType = ["Break","Squeeze","Keep"];
root.enum.TextWrapType = ["Square","Tight","Through","TopAndBottom","BehindText","InFrontText"];
// Implict enum
root.enum.GradationType = [null,"Linear","Radial","Conical","Square"];
root.enum.ShadowType = [null,"Drop","Cont"];
root.enum.ImageEffectType = ["RealPic","GrayScale","BlackWhite"];
root.enum.UnderlineType = [null,"Bottom","Center","Top"];
root.enum.StrikeoutType = ["None","Continuous"];
root.enum.TabItemType = ["Left","Right","Center","Decimal"];
root.enum.TextOffsetType = ["percent","hwpunit"];
root.enum.VerAlignType = ["Baseline","Top","Center","Bottom"];
root.enum.HeadingType = ["None","Outline","Number","Bullet"];
root.enum.BreakLatinWordType = ["KeepWord","Hyphenation","BreakWord"];
root.enum.LineSpacingType = ["Precent","Fixed","BetweenLines","AtLeast"];
root.enum.StyleType = ["Para","Char"];
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
root.node.LEFTBORDER = function Node_LEFTBORDER(){
	this.name = "LEFTBORDER"; this.attr = {};
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.FILLBRUSH = function Node_FILLBRUSH(){
	this.name = "FILLBRUSH"; this.attr = {};
};
root.node.WINDOWBRUSH = function Node_WINDOWBRUSH(){
	this.name = "WINDOWBRUSH"; this.attr = {};
	this.attr.FaceColor = null;
	this.attr.HatchColor = null;
	this.attr.HatchStyle = null;
	this.attr.Alpha = null;
};
root.node.GRADATION = function Node_GRADATION(){
	this.name = "GRADATION"; this.attr = {};
	this.attr.Type = null;
	this.attr.Angle = "90";
	this.attr.CenterX = "0";
	this.attr.CenterY = "0";
	this.attr.Step = "50";
	this.attr.ColorNum = "2";
	this.attr.StepCenter = "50";
	this.attr.Alpha = null;
};
root.node.COLOR = function Node_COLOR(){
	this.name = "COLOR"; this.attr = {};
	this.attr.Value = null;
};
root.node.IMAGEBRUSH = function Node_IMAGEBRUSH(){
	this.name = "IMAGEBRUSH"; this.attr = {};
	this.attr.Mode = "Tile";
};
root.node.IMAGE = function Node_IMAGE(){
	this.name = "IMAGE"; this.attr = {};
	this.attr.Bright = "0";
	this.attr.Contrast = "0";
	this.attr.Effect = null;
	this.attr.BinItem = null;
	this.attr.Alpha = null;
};
// 4.3.4. 글자 모양 정보
root.node.CHARSHAPELIST = function Node_CHARSHAPELIST(){
	this.name = "CHARSHAPELIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.CHARSHAPE = function Node_CHARSHAPE(){
	this.name = "CHARSHAPE"; this.attr = {};
	this.attr.Id = null;
	this.attr.Height = "1000";
	this.attr.TextColor = "0";
	this.attr.ShadeColor = "4294967295";
	this.attr.UseFontSpace = "false";
	this.attr.UseKerning = "false";
	this.attr.SymMark = "0";
	this.attr.BorderFillId = null;
};
root.node.FONTID = function Node_FONTID(){
	this.name = "FONTID"; this.attr = {};
	this.attr.Hangul = null;
	this.attr.Latin = null;
	this.attr.Hanja = null;
	this.attr.Japanese = null;
	this.attr.Other = null;
	this.attr.Symbol = null;
	this.attr.User = null;
};
root.node.RATIO = function Node_RATIO(){
	this.name = "RATIO"; this.attr = {};
	this.attr.Hangul = "100";
	this.attr.Latin = "100";
	this.attr.Hanja = "100";
	this.attr.Japanese = "100";
	this.attr.Other = "100";
	this.attr.Symbol = "100";
	this.attr.User = "100";
};
root.node.CHARSPACING = function Node_CHARSPACING(){
	this.name = "CHARSPACING"; this.attr = {};
	this.attr.Hangul = "0";
	this.attr.Latin = "0";
	this.attr.Hanja = "0";
	this.attr.Japanese = "0";
	this.attr.Other = "0";
	this.attr.Symbol = "0";
	this.attr.User = "0";
};
root.node.RELSIZE = function Node_RELSIZE(){
	this.name = "RELSIZE"; this.attr = {};
	this.attr.Hangul = "100";
	this.attr.Latin = "100";
	this.attr.Hanja = "100";
	this.attr.Japanese = "100";
	this.attr.Other = "100";
	this.attr.Symbol = "100";
	this.attr.User = "100";
};
root.node.CHAROFFSET = function Node_CHAROFFSET(){
	this.name = "CHAROFFSET"; this.attr = {};
	this.attr.Hangul = "0";
	this.attr.Latin = "0";
	this.attr.Hanja = "0";
	this.attr.Japanese = "0";
	this.attr.Other = "0";
	this.attr.Symbol = "0";
	this.attr.User = "0";
};
root.node.ITALIC = function Node_ITALIC(){
	this.name = "ITALIC"; this.attr = {};
};
root.node.BOLD = function Node_BOLD(){
	this.name = "BOLD"; this.attr = {};
};
root.node.UNDERLINE = function Node_UNDERLINE(){
	this.name = "UNDERLINE"; this.attr = {};
	this.attr.Type = "Bottom";
	this.attr.Shape = "Solid";
	this.attr.Color = "0";
};
root.node.STRIKEOUT = function Node_STRIKEOUT(){
	this.name = "STRIKEOUT"; this.attr = {};
	this.attr.Type = "Continuous";
	this.attr.Shape = "Solid";
	this.attr.Color = "0";
};
root.node.OUTLINE = function Node_OUTLINE(){
	this.name = "OUTLINE"; this.attr = {};
	this.attr.Type = "Solid";
};
root.node.SHADOW = function Node_SHADOW(){
	this.name = "SHADOW"; this.attr = {};
	this.attr.Type = null;
	this.attr.Color = null;
	this.attr.OffsetX = "10";
	this.attr.OffestY = "10";
	this.attr.Alpha = null;
};
root.node.EMBOSS = function Node_EMBOSS(){
	this.name = "EMBOSS"; this.attr = {};
};
root.node.ENGRAVE = function Node_ENGRAVE(){
	this.name = "ENGRAVE"; this.attr = {};
};
root.node.SUPERSCRIPT = function Node_SUPERSCRIPT(){
	this.name = "SUPERSCRIPT"; this.attr = {};
};
root.node.SUBSCRIPT = function Node_SUBSCRIPT(){
	this.name = "SUBSCRIPT"; this.attr = {};
};
// 4.3.5. 탭 정보
root.node.TABDEFLIST = function Node_TABDEFLIST(){
	this.name = "TABDEFLIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.TABDEF = function Node_TABDEF(){
	this.name = "TABDEF"; this.attr = {};
	this.attr.Id = null;
	this.attr.AutoTabLeft = "false";
	this.attr.AutoTabRight = "false";
};
root.node.TABITEM = function Node_TABITEM(){
	this.name = "TABITEM"; this.attr = {};
	this.attr.Pos = null;
	this.attr.Type = "Left";
	this.attr.Leader = "Solid";
};
root.node.NUMBERINGLIST = function Node_NUMBERINGLIST(){
	this.name = "NUMBERINGLIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.Numbering = function Node_Numbering(){
	this.name = "Numbering"; this.attr = {};
	this.attr.Id = null;
	this.attr.Start = "1";
};
root.node.PARAHEAD = function Node_PARAHEAD(){
	this.name = "PARAHEAD"; this.attr = {};
	this.attr.Level = null;
	this.attr.Alignment = "Left";
	this.attr.UseInstWidth = "true";
	this.attr.AutoIndent = "true";
	this.attr.WidthAdjust = "0";
	this.attr.TextOffset = "50";
	this.attr.NumFormat = "Digit";
	this.attr.CharShape = null;
};
// 4.3.6. 글머리표 정보
root.node.BULLETLIST = function Node_BULLETLIST(){
	this.name = "BULLETLIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.BULLET = function Node_BULLET(){
	this.name = "BULLET"; this.attr = {};
	this.attr.Id = null;
	this.attr.Char = null;
	this.attr.Image = "false";
};
// 4.3.7. 문단 모양 정보
root.node.PARASHAPELIST = function Node_PARASHAPELIST(){
	this.name = "PARASHAPELIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.PARASHAPE = function Node_PARASHAPE(){
	this.name = "PARASHAPE"; this.attr = {};
	this.attr.Id = null;
	this.attr.Align = "Justify";
	this.attr.VerAlign = "Baseline";
	this.attr.HeadingType = "None";
	this.attr.Heading = null;
	this.attr.Level = "0";
	this.attr.TabDef = null;
	this.attr.BreakLatinWord = "KeepWord";
	this.attr.BreakNonLatinWord = "true";
	this.attr.Condense = "0";
	this.attr.WidowOrphan = "false";
	this.attr.KeepWithNext = "false";
	this.attr.KeepLines = "false";
	this.attr.PageBreakBefore = "false";
	this.attr.FontLineHeight = "false";
	this.attr.SnapToGrid = "true";
	this.attr.LineWrap = "break";
	this.attr.AutoSpaceEAsianEng = "true";
	this.attr.AutoSpaceEAsianNum = "true";
};
root.node.PARAMARGIN = function Node_PARAMARGIN(){
	this.name = "PARAMARGIN"; this.attr = {};
	// 숫자 또는 숫자 다음 ch
	this.attr.Indent = "0";
	this.attr.Left = "0";
	this.attr.Right = "0";
	this.attr.Prev = "0";
	this.attr.Next = "0";
	this.attr.LineSpacingType = "Percent";
	this.attr.LineSpacing = "160";
};
root.node.PARABORDER = function Node_PARABORDER(){
	this.name = "PARABORDER"; this.attr = {};
	this.attr.BorderFill = null;
	this.attr.OffsetLeft = null;
	this.attr.OffsetRight = null;
	this.attr.OffsetTop = null;
	this.attr.OffsetBottom = null;
	this.attr.Connect = "false";
	this.attr.IgnoreMargin = "false";
};
// 4.3.8. 스타일 정보
root.node.STYLELIST = function Node_STYLELIST(){
	this.name = "STYLELIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.STYLE = function Node_STYLE(){
	this.name = "STYLE"; this.attr = {};
	this.attr.Id = null;
	this.attr.Type = "Para";
	this.attr.Name = null;
	this.attr.EngName = null;
	this.attr.ParaShape = null;
	this.attr.CharShape = null;
	this.attr.NextStyle = null;
	// TODO: 아래 두 개 타입 찾기
	this.attr.LangId = null;
	this.attr.LockForm = null;
};
// 4.3.9. 메모 정보
root.node.MEMOSHAPELIST = function Node_MEMOSHAPELIST(){
	this.name = "MEMOSHAPELIST"; this.attr = {};
	this.attr.Count = null;
};
root.node.MEMO = function Node_MEMO(){
	this.name = "MEMO"; this.attr = {};
	this.attr.Id = null;
	this.attr.Width = "0";
	// TODO: enum 찾기
	this.attr.LineType = null;
	this.attr.LineColor = null;
	this.attr.FillColor = null;
	this.attr.ActiveColor = null;
	// TODO: 타입 찾기
	this.attr.MemoType = null;
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
root.tag.FORBIDDEN_CHAR = 94;
// 4.1.1. 문서 속성
root.record.DOCUMENT_PROPERTIES = function Record_DOCUMENT_PROPERTIES(data){
	var tmp; this.attr = {}; this.data = data; this.name = "DOCUMENT_PROPERTIES";
	this.attr.SecCnt=this.data.readUInt16LE(0);
	this.attr.BeginNumber = {};
	this.attr.BeginNumber.Page=this.data.readUInt16LE(2);
	this.attr.BeginNumber.Footnote=this.data.readUInt16LE(4);
	this.attr.BeginNumber.Endnote=this.data.readUInt16LE(6);
	this.attr.BeginNumber.Picture=this.data.readUInt16LE(8);
	this.attr.BeginNumber.Table=this.data.readUInt16LE(10);
	this.attr.BeginNumber.Equation=this.data.readUInt16LE(12);
	this.attr.CaretPos = {};
	this.attr.CaretPos.List=this.data.readUInt32LE(14);
	this.attr.CaretPos.Para=this.data.readUInt32LE(18);
	this.attr.CaretPos.Pos=this.data.readUInt32LE(22);
};
// 4.1.2. 아이피 매핑 헤더
root.record.ID_MAPPINGS = function Record_ID_MAPPINGS(data){
	var tmp; this.attr = {}; this.data = data; this.name = "ID_MAPPINGS";
	this.attr.MappingTable = [];var offset={'value':0};
	for(tmp=0;tmp<16;tmp++){
		this.attr.MappingTable[tmp] = {};
		this.attr.MappingTable[tmp].Count=this.data.readInt32LE(offset.value); offset.value+=4;
	}
};
// 4.1.3. 바이너리 데이터 (TODO: 문서 설명이 정확하지 않은 듯 함)
root.record.BIN_DATA = function Record_BIN_DATA(data){
	var tmp; this.attr = {}; this.data = data; this.name = "BIN_DATA";
	this.attr.Property=this.data.readUInt16LE(0);
};
// 4.1.4. 글꼴 (TODO: 직접 데이터 처리해야 됨)
root.record.FACE_NAME = function Record_FACE_NAME(data){
	var tmp; this.attr = {}; this.data = data; this.name = "FACE_NAME";
	tmp=this.data.slice(0,1);
	this.attr.HasDefault=!!((tmp[0]&0x20)>>5);
	this.attr.HasShape=!!((tmp[0]&0x40)>>6);
	this.attr.HasSubst=!!((tmp[0]&0x80)>>7);
	tmp = this.data.readUInt16LE(1);var offset={'value':3}; for(this.attr.Name='';tmp-->0;){this.attr.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	if(this.attr.HasSubst){
	this.attr.SubstFont = {};
	tmp=this.data.slice(offset.value,(offset.value+1)); offset.value+=1;
	this.attr.SubstFont.Type=(tmp[0]&0x3);
	tmp = this.data.readUInt16LE(offset.value); offset.value+=2; for(this.attr.SubstFont.Name='';tmp-->0;){this.attr.SubstFont.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	}
	if(this.attr.HasShape){
	this.attr.TypeInfo = {};
	this.attr.TypeInfo.FamilyType=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.SerifStyle=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.Weight=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.Proportion=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.Contrast=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.StrokeVariation=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.ArmStyle=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.Letterform=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.Midline=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.TypeInfo.XHeight=this.data.readUInt8(offset.value); offset.value+=1;
	}
	if(this.attr.HasDefault){
	// TODO_SOMETIME: 이 곳 채워넣기
	}
};
// 4.1.5 테두리 / 배경
root.record.BORDER_FILL = function Record_BORDER_FILL(data){
	var tmp; this.attr = {}; this.data = data; this.name = "BORDER_FILL";
	tmp=this.data.slice(0,2);
	this.attr.ThreeD=!!(tmp[0]&0x1);
	this.attr.Shadow=!!((tmp[0]&0x2)>>1);
	// TODO: Slash / BackSlash
	this.attr.BorderTypes = [];var offset={'value':2};
	for(tmp=0;tmp<4;tmp++){
		this.attr.BorderTypes[tmp] = {};
		this.attr.BorderTypes[tmp].value=this.data.readUInt8(offset.value);if(root.enum.LineType1[this.attr.BorderTypes[tmp].value]!==undefined)this.attr.BorderTypes[tmp].value=root.enum.LineType1[this.attr.BorderTypes[tmp].value]; offset.value+=1;
	}
	this.attr.BorderWidths = [];
	for(tmp=0;tmp<4;tmp++){
		this.attr.BorderWidths[tmp] = {};
		this.attr.BorderWidths[tmp].value=this.data.readUInt8(offset.value);if(root.enum.LineWidth[this.attr.BorderWidths[tmp].value]!==undefined)this.attr.BorderWidths[tmp].value=root.enum.LineWidth[this.attr.BorderWidths[tmp].value]; offset.value+=1;
	}
	this.attr.BorderColors = [];
	for(tmp=0;tmp<4;tmp++){
		this.attr.BorderColors[tmp] = {};
		this.attr.BorderColors[tmp].value=this.data.readUInt32LE(offset.value); offset.value+=4;
	}
	// 대각선은 따로 저장됨.
	this.attr.Diagonal = {};
	this.attr.Diagonal.Type=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.Diagonal.Width=this.data.readUInt8(offset.value);if(root.enum.LineWidth[this.attr.Diagonal.Width]!==undefined)this.attr.Diagonal.Width=root.enum.LineWidth[this.attr.Diagonal.Width]; offset.value+=1;
	this.attr.Diagonal.Color=this.data.readUInt32LE(offset.value); offset.value+=4;
	// TODO: 이것들이 의미하는 것 찾기.
	this.attr._type=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr._size=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.WindowBrush = {};
	this.attr.WindowBrush.FaceColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.WindowBrush.HatchColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.WindowBrush.HatchStyle=this.data.readInt32LE(offset.value);if(root.enum.HatchStyle[this.attr.WindowBrush.HatchStyle]!==undefined)this.attr.WindowBrush.HatchStyle=root.enum.HatchStyle[this.attr.WindowBrush.HatchStyle]; offset.value+=4;
	// TODO: Gradation
};
// 4.1.6. 글자 모양
root.record.CHAR_SHAPE = function Record_CHAR_SHAPE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "CHAR_SHAPE";
	this.attr.FontIDs = [];var offset={'value':0};
	for(tmp=0;tmp<7;tmp++){
		this.attr.FontIDs[tmp] = {};
		this.attr.FontIDs[tmp].value=this.data.readUInt16LE(offset.value); offset.value+=2;
	}
	this.attr.FontRatios = [];
	for(tmp=0;tmp<7;tmp++){
		this.attr.FontRatios[tmp] = {};
		this.attr.FontRatios[tmp].value=this.data.readUInt8(offset.value); offset.value+=1;
	}
	this.attr.FontCharSpacings = [];
	for(tmp=0;tmp<7;tmp++){
		this.attr.FontCharSpacings[tmp] = {};
		this.attr.FontCharSpacings[tmp].value=this.data.readInt8(offset.value); offset.value+=1;
	}
	this.attr.FontRelSizes = [];
	for(tmp=0;tmp<7;tmp++){
		this.attr.FontRelSizes[tmp] = {};
		this.attr.FontRelSizes[tmp].value=this.data.readUInt8(offset.value); offset.value+=1;
	}
	this.attr.FontCharOffsets = [];
	for(tmp=0;tmp<7;tmp++){
		this.attr.FontCharOffsets[tmp] = {};
		this.attr.FontCharOffsets[tmp].value=this.data.readInt8(offset.value); offset.value+=1;
	}
	this.attr.Height=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.Shadow = {};
	
	tmp=this.data.slice(offset.value,(offset.value+4)); offset.value+=4;
	this.attr.Italic=!!(tmp[0]&0x1);
	this.attr.Bold=!!((tmp[0]&0x2)>>1);
	// TODO: 밑줄 종류 및 모양
	this.attr.OutlineType=(tmp[1]&0x7);if(root.enum.LineType3[this.attr.OutlineType]!==undefined)this.attr.OutlineType=root.enum.LineType3[this.attr.OutlineType];
	this.attr.Shadow.Type=((tmp[1]&0x18)>>3);if(root.enum.ShadowType[this.attr.Shadow.Type]!==undefined)this.attr.Shadow.Type=root.enum.ShadowType[this.attr.Shadow.Type];
	this.attr.Emboss=!!((tmp[1]&0x20)>>5);
	this.attr.Engrave=!!((tmp[1]&0x40)>>6);
	this.attr.SuperScript=!!((tmp[1]&0x80)>>7);
	this.attr.SubScript=!!(tmp[2]&0x1);
	// TODO: 취소선 종류 및 모양
	// 숫자임.
	this.attr.SymMark=((tmp[2]&0xe0)>>5)+((tmp[3]&0x1)<<3);
	this.attr.UseFontSpace=!!((tmp[3]&0x2)>>1);
	this.attr.UseKerning=!!((tmp[3]&0x40)>>6);
	this.attr.Shadow.OffsetX=this.data.readInt8(offset.value); offset.value+=1;
	this.attr.Shadow.OffsetY=this.data.readInt8(offset.value); offset.value+=1;
	this.attr.TextColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.UnderlineColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.ShadeColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.Shadow.Color=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.BorderFillId=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.StrikeColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	// TODO: 밑줄
	// TODO: 취소선
};
// 4.1.7 탭 정의
root.record.TAB_DEF = function Record_TAB_DEF(data){
	var tmp; this.attr = {}; this.data = data; this.name = "TAB_DEF";
	// TODO
};
// 4.1.8 문단 번호
root.record.NUMBERING = function Record_NUMBERING(data){
	var tmp; this.attr = {}; this.data = data; this.name = "NUMBERING";
	// TODO
};
// 4.1.9 글머리표
root.record.BULLET = function Record_BULLET(data){
	var tmp; this.attr = {}; this.data = data; this.name = "BULLET";
	// TODO
};
// 4.1.10 문단 모양
root.record.PARA_SHAPE = function Record_PARA_SHAPE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_SHAPE";
	this.attr.ParaMargin = {};
	
	this.attr.ParaBorder = {};
	
	tmp=this.data.slice(0,4);
	// TODO: enum
	this.attr.ParaMargin.LineSpacingType=(tmp[0]&0x3);
	this.attr.Align=((tmp[0]&0x1c)>>2);if(root.enum.AlignType1[this.attr.Align]!==undefined)this.attr.Align=root.enum.AlignType1[this.attr.Align];
	this.attr.BreakLatinWord=((tmp[0]&0x60)>>5);if(root.enum.BreakLatinWordType[this.attr.BreakLatinWord]!==undefined)this.attr.BreakLatinWord=root.enum.BreakLatinWordType[this.attr.BreakLatinWord];
	// HML에서 true / false로 구분
	this.attr.BreakNonLatinWord=!!((tmp[0]&0x80)>>7);
	this.attr.SnapToGrid=!!(tmp[1]&0x1);
	this.attr.Condense=((tmp[1]&0xfe)>>1);
	this.attr.WidowOrphan=!!(tmp[2]&0x1);
	this.attr.KeepWithNext=!!((tmp[2]&0x2)>>1);
	this.attr.KeepLines=!!((tmp[2]&0x4)>>2);
	this.attr.PageBreakBefore=!!((tmp[2]&0x8)>>3);
	this.attr.VerAlign=((tmp[2]&0x30)>>4);if(root.enum.VerAlignType[this.attr.VerAlign]!==undefined)this.attr.VerAlign=root.enum.VerAlignType[this.attr.VerAlign];
	this.attr.FontLineHeight=!!((tmp[2]&0x40)>>6);
	this.attr.HeadingType=((tmp[2]&0x80)>>7)+((tmp[3]&0x1)<<1);if(root.enum.HeadingType[this.attr.HeadingType]!==undefined)this.attr.HeadingType=root.enum.HeadingType[this.attr.HeadingType];
	this.attr.Level=((tmp[3]&0xe)>>1);
	this.attr.ParaBorder.Connect=!!((tmp[3]&0x10)>>4);
	this.attr.ParaBorder.IgnoreMargin=!!((tmp[3]&0x20)>>5);
	// TODO: 문단 꼬리 모양
	this.attr.ParaMargin.Left=this.data.readInt32LE(4);
	this.attr.ParaMargin.Right=this.data.readInt32LE(8);
	this.attr.ParaMargin.Indent=this.data.readInt32LE(12);
	this.attr.ParaMargin.Prev=this.data.readInt32LE(16);
	this.attr.ParaMargin.Next=this.data.readInt32LE(20);
	this.attr.ParaMargin.LineSpacing=this.data.readInt32LE(24);
	this.attr.TabDef=this.data.readUInt16LE(28);
	this.attr.Heading=this.data.readUInt16LE(30);
	this.attr.ParaBorder.BorderFill=this.data.readUInt16LE(32);
	this.attr.ParaBorder.OffsetLeft=this.data.readInt16LE(34);
	this.attr.ParaBorder.OffsetRight=this.data.readInt16LE(36);
	this.attr.ParaBorder.OffsetTop=this.data.readInt16LE(38);
	this.attr.ParaBorder.OffsetBottom=this.data.readInt16LE(40);
	tmp=this.data.slice(42,46);
	// TODO: 표 40
	tmp=this.data.slice(46,50);
	// TODO: 표 41
};
// 4.1.11 스타일
root.record.STYLE = function Record_STYLE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "STYLE";
	tmp = this.data.readUInt16LE(0);var offset={'value':2}; for(this.attr.Name='';tmp-->0;){this.attr.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	tmp = this.data.readUInt16LE(offset.value); offset.value+=2; for(this.attr.EngName='';tmp-->0;){this.attr.EngName+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	tmp=this.data.slice(offset.value,(offset.value+1)); offset.value+=1;
	this.attr.Type=(tmp[0]&0x7);
	this.attr.NextStyle=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.LangId=this.data.readInt16LE(offset.value); offset.value+=2;
	this.attr.ParaShape=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.CharShape=this.data.readUInt16LE(offset.value); offset.value+=2;
};
// 4.1.12 문서 임의의 데이터
root.record.DOC_DATA = function Record_DOC_DATA(data){
	var tmp; this.attr = {}; this.data = data; this.name = "DOC_DATA";
};
// 4.1.13 배포용 문서 데이터 (TODO: 이 데이터의 의미 찾기)
root.record.DISTRIBUTE_DOC_DATA = function Record_DISTRIBUTE_DOC_DATA(data){
	var tmp; this.attr = {}; this.data = data; this.name = "DISTRIBUTE_DOC_DATA";
	this.attr.Data = this.data.slice(0,256);
};
// 4.1.14 호환 문서 (TODO: enum)
root.record.COMPATIBLE_DOCUMENT = function Record_COMPATIBLE_DOCUMENT(data){
	var tmp; this.attr = {}; this.data = data; this.name = "COMPATIBLE_DOCUMENT";
	this.attr.TargetProgram=this.data.readUInt32LE(0);
};
// 4.1.15 레이아웃 호환성 (TODO: 각각의 필드가 뜻하는 것 찾기)
root.record.LAYOUT_COMPATIBILITY = function Record_LAYOUT_COMPATIBILITY(data){
	var tmp; this.attr = {}; this.data = data; this.name = "LAYOUT_COMPATIBILITY";
	this.attr._Char=this.data.readUInt32LE(0);
	this.attr._Para=this.data.readUInt32LE(4);
	this.attr._Sec=this.data.readUInt32LE(8);
	this.attr._Obj=this.data.readUInt32LE(12);
	this.attr._Field=this.data.readUInt32LE(16);
};
// ??? 금칙 문자 (TODO: 어떻게 저장되는지 찾기)
root.record.FORBIDDEN_CHAR = function Record_FORBIDDEN_CHAR(data){
	var tmp; this.attr = {}; this.data = data; this.name = "FORBIDDEN_CHAR";
};
root.tag.table = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"DOCUMENT_PROPERTIES","ID_MAPPINGS","BIN_DATA","FACE_NAME","BORDER_FILL","CHAR_SHAPE","TAB_DEF","NUMBERING","BULLET","PARA_SHAPE","STYLE","DOC_DATA","DISTRIBUTE_DOC_DATA",null,"COMPATIBLE_DOCUMENT","LAYOUT_COMPATIBILITY",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"FORBIDDEN_CHAR"];

// Node
var HWPNode = function HWPNode(){
	this.children = [];
};

var escapeHTML = function(s){
	s += '';
	for(var ps=false,h='',c,i=0; i<s.length; i++){
		c = s.charCodeAt(i);
		if((c<32||c>127)&&(c<44032||c>55203)) h += '&#'+c+';';
		else if(s[i]==' '&&ps) h += '&#32;';
		else if(s[i]=='"') h += '&quot;';
		else if(s[i]=='&') h += '&amp;';
		else if(s[i]=='<') h += '&lt;';
		else if(s[i]=='>') h += '&gt;';
		else h += s[i];
		
		ps = s[i] == ' ';
	}
	return h;

};

HWPNode.prototype.value = null;

HWPNode.prototype.toHML = function(){
	var toHML = function toHML(obj, tab){
		var i, e, hml = "";
		if(obj.name == 'HWPML')
			hml += tab + "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\" ?>\n";
		hml += tab + '<' + obj.name;
		for(e in obj.attr){
			// undefined? undefined+null?
			if(obj.attr[e] != undefined) hml += ' '+e+'="'+escapeHTML(obj.attr[e])+'"';
		}
		if(obj.children && obj.children.length > 0){
			hml += '>\n';
			for(i=0;i<obj.children.length;i++){
				hml += toHML(obj.children[i], tab+'  ');
			}
			if(obj.value) hml += escapeHTML(obj.value);
			hml += tab+'</'+obj.name+'>\n';
		}else if(obj.value || obj.value === ''){
			hml += '>'+escapeHTML(obj.value)+'</'+obj.name+'>\n';
		}else{
			hml += '/>\n';
		}
		return hml;
	};
	return toHML(this, '');
};

HWPNode.prototype.add = function add(elem){
	this.children.push(elem);
	this.setCount();
};

HWPNode.prototype.setAttr = function setAttr(attrs){
	for(var name in attrs){
		if(this.attr[name] === undefined) console.warn("Warning: unexpected attr %s", name);
		this.attr[name] = attrs[name];
	}
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

// Make one if not exists
HWPNode.prototype.getChildWith = function getChildWith(name, attr_name, attr_val){
	name = name.toUpperCase();
	for(var i=0;i<this.child.length;i++){
		if(this.child[i].name === name && this.child[i].attr[attr_name] === attr_val)
			return this.child[i];
	}
	var o = new root.node[name]();
	o.attr[attr_name] = attr_val;
	this.add(o); return o;
};

HWPNode.prototype.findChildWith = function findChildWith(name, attr_name, attr_val){
	name = name.toUpperCase();
	for(var i=0;i<this.child.length;i++){
		if(this.child[i].name === name && this.child[i].attr[attr_name] === attr_val)
			return this.child[i];
	}
	return null;
};

for(var name in root.node){
	root.node[name].prototype = new HWPNode();
}

// Record
var HWPRecord = function HWPRecord(){};

HWPRecord.prototype.toString = function(){
	var toStr = function toStr(obj, t){
		var s = t + obj.name;
		if(obj.children) obj.children.forEach(function(o){
			s += '\n'+toStr(o, t+'\t');
		});
		return s;
	};
	return toStr(this, '');
};

for(name in root.record){
	root.record[name].prototype = new HWPRecord();
}

var HWPRawRecord = function HWPRawRecord(offset, buffer){
	var header = buffer.readUInt32LE(offset); offset += 4;
	this.tag = header&0x3FF;
	this.level = (header>>10)&0x3FF;
	this.size = header>>20;
	if(this.size == 4095){
		this.size = buffer.readUInt32LE(offset);
		offset += 4;
	}
	this.data = buffer.slice(offset, offset + this.size);
	this._offset = offset + this.size;
};

HWPRawRecord.prototype.resolve = function(){
	var tag = root.tag.table[this.tag];
	if(!tag){
		console.warn("Warning: unknown tag %d", this.tag);
		this.children = [];
		return this;
	}
	if(!root.record[tag]) throw new Error("Non-existing record type: "+tag);

	var obj = new root.record[tag](this.data);
	obj.children = [];
	return obj;
};

root.record.getTree = function getTree(offset, buffer){
	var record, records_flat = [];
	while(offset < buffer.length){
		record = new HWPRawRecord(offset, buffer);
		offset = record._offset;
		records_flat.push(record);
	}

	var prvr = records_flat[0], prv = prvr.resolve(), records = [prv], tmp;
	for(var i=1;i<records_flat.length;i++){
		record = records_flat[i];
		if(record.level == 0){
			prvr = record;
			prv = prvr.resolve();
			records.push(prv);
		}else{
			while(prvr.level >= record.level){
				prvr = prvr.parent;
				tmp = prv.parent;
				delete prv.parent;
				prv = tmp;
				if(!prvr) throw new Error('Invalid record root!');
			}
			tmp = record.resolve();
			prv.children.push(tmp);
			record.parent = prvr;
			tmp.parent = prv;
			
			prvr = record;
			prv = tmp;
		}
	}
	return records;
};

module.exports = root;
