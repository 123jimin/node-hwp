/**
*
*  This code is generated from /format/hwp-node-record.js and
*  /format/*.format via /generate.js with jison.
*
**/

var bufferToString = function(buffer){
	for(var i=0,s='',t;i<buffer.length;i++){
		t = buffer[i].toString(16).toUpperCase();
		if(t.length<2) t='0'+t;
		s += (i?' '+t:t);
	}
	return s;
};

var root;
if(typeof root === 'undefined')root={'record':{},'node':{},'tag':{},'enum':{}};
// Explict enum
root.enum.LineType1 = ["None","Solid","Dash","Dot","DashDot","DashDotDot","LongDash","Circle","DoubleSlim","SlimThick","ThickSlim","SlimThickSlim"];
root.enum.LineType2 = ["Solid","Dash","Dot","DashDot","DashDotDot","LongDash","Circle","DoubleSlim","SlimThick","ThickSlim","SlimThickSlim"];
root.enum.LineType3 = [null,"Solid","Dot","Thick","Dash","DashDot","DashDotDot"];
root.enum.LineWidth = ["0.1mm","0.12mm","0.15mm","0.2mm","0.25mm","0.3mm","0.4mm","0.5mm","0.6mm","0.7mm","1.0mm","1.5mm","2.0mm","3.0mm","4.0mm","5.0mm"];
root.enum.NumberType1 = ["Digit","CircledDigit","RomanCapital","RomanSmall","LatinCapital","LatinSmall","CircledLatinCapital","CircledLatinSmall","HangulSyllable","CircledHangulSyllable","HangulJamo","CircledHangulJamo","HangulPhonetic","Ideograph","CircledIdeograph"];
root.enum.NumberType2 = ["Digit","CircledDigit","RomanCapital","RomanSmall","LatinCapital","LatinSmall","CircledLatinCapital","CircledLatinSmall","HangulSyllable","CircledHangulSyllable","HangulJamo","CircledHangulJamo","HangulPhonetic","Ideograph","CircledIdeograph","DecagonCircle","DecagonCircleHanja",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Symbol","UserChar"];
root.enum.AlignmentType1 = ["Justify","Left","Right","Center","Distribute","DistributeSpace"];
root.enum.AlignmentType2 = ["Left","Center","Right"];
root.enum.ArrowType = ["Normal","Arrow","Spear","ConcaveArrow","EmptyDiamond","EmptyCircle","EmptyBox","FilledDiamond","FilledCircle","FilledBox"];
root.enum.ArrowSize = ["SmallSmall","SmallMedium","SmallLarge","MediumSmall","MediumMedium","MediumLarge","LargeSmall","LargeMedium","LargeLarge"];
root.enum.LangType = ["Hangul","Latin","Hanja","Japanese","Other","Symbol","User"];
root.enum.HatchStyle = [null,"Horizontal","Vertical","BackSlash","Slash","Cross","CrossDiagonal"];
root.enum.InfillMode = ["Tile","TileHorzTop","TileHorzBottom","TileVertLeft","TileVertRight","Total","Center","CenterTop","CenterBottom","LeftCenter","LeftTop","LeftBottom","RightCenter","RightTop","RightBottom","Zoom"];
root.enum.LineWrapType = ["Break","Squeeze","Keep"];
// TODO: DOC: 문서와 실제가 다름. Tight와 Through 확인하기.
root.enum.TextWrapType = ["Square","TopAndButtom","BehindText","InFrontOfText","Tight","Through"];
root.enum.FieldType = ["Clickhere","Hyperlink","Bookmark","Formula","Summery","UserInfo","Date","DocDate","Path","Crossref","Mailmerge","Memo","RevisionChange","RevisionSign","RevisionDelete","RevisionAttach","RevisionClipping","RevisionSawtooth","RevisionThinking","RevisionPraise","RevisionLine","RevisionSimpleChange","RevisionHyperlink","RevisionLineAttach","RevisionLineLink","RevisionLineTransfer","RevisionRightmove","RevisionLeftmove","RevisionTransfer","RevisionSplit"];
// Implict enum
root.enum.FontType = ["rep","ttf","hft"];
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
root.enum.LineSpacingType = ["Percent","Fixed","BetweenLines","AtLeast"];
root.enum.StyleType = ["Para","Char"];
root.enum.ItemType = ["Bstr","Integer","Set","Array","BinData"];
root.enum.PageStartsOnType = ["Both","Even","Odd"];
root.enum.GutterType = ["LeftOnly","LeftRight","TopBottom"];
root.enum.NoteNumberingType = ["Continuous","OnSection","OnPage"];
root.enum.FootNoteShapePlaceType = ["EachColumn","MergedColumn","RightMostColumn"];
root.enum.EndNoteShapePlaceType = ["EndOfDocument","EndOfSection"];
// PageStartsOnType과 같으나 혹시 몰라 다시 적음
root.enum.PageBorderFillType = ["Both","Even","Odd"];
root.enum.FillAreaType = ["Paper","Page","Border"];
// 역시 다시 적음
root.enum.MasterPageType = ["Both","Even","Odd"];
// VerAlignType과 다름
root.enum.VertAlignType = ["Top","Center","Bottom"];
root.enum.ExtMasterPageType = ["LastPage","OptionalPage"];
root.enum.ColDefType = ["Newspaper","BalancedNewspaper","Parallel"];
root.enum.LayoutType = ["Left","Right","Mirror"];
root.enum.PageBreakType = ["Table","Cell","None"];
root.enum.NumberingType = ["None","Figure","Table","Equation"];
root.enum.TextFlowType = ["BothSides","LeftOnly","RightOnly","LargestOnly"];
root.enum.WidthRelToType = ["Paper","Page","Column","Para","Absolute"];
root.enum.HeightRelToType = ["Paper","Page","Absolute"];
root.enum.VertRelToType = ["Paper","Page","Para"];
root.enum.VertAlignType = ["Top","Center","Bottom","Inside","Outside"];
root.enum.HorzRelToType = ["Paper","Page","Column","Para"];
root.enum.HorzAlignType = ["Left","Center","Right","Inside","Outside"];
root.enum.SideType = ["Left","Right","Top","Bottom"];
root.enum.EndCapType = ["Round","Flat"];
root.enum.OutlineStyleType = ["Normal","Outer","Inner"];
root.enum.ArcType = ["Normal","Pie","Chord"];
root.enum.SegmentType = ["Line","Curve"];
root.enum.ObjetType = ["Unknown","Embedded","Link","Static","Equation"];
root.enum.DrawAspectType = ["Content","ThumbNail","Icon","DocPrint"];
root.enum.AlignType = ["Left","Right","Center","Full","Table"];
root.enum.PosType = ["None","TopLeft","TopCenter","TopRight","BottomLeft","BottomCenter","BottomRight","OutsideTop","OutsideBottom","InsideTop","InsideBottom"];
root.enum.TargetProgramType = ["None","Hwp70","Word"];
// HWPML nodes
// 3. 루트 엘리먼트
root.node.HWPML = function Node_HWPML(){
	this.name = "HWPML"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Version = "2.8";
	this.attr.SubVersion = "8.0.0.0";
	// Style2가 아니라 Style인 듯
	this.attr.Style = "embed";
};
// 4. 헤더 엘리먼트
root.node.HEAD = function Node_HEAD(){
	this.name = "HEAD"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.SecCnt = null;
};
// 4.1. 문서 요약 정보 엘리먼트
root.node.DOCSUMMARY = function Node_DOCSUMMARY(){
	this.name = "DOCSUMMARY"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.TITLE = function Node_TITLE(){
	this.name = "TITLE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SUBJECT = function Node_SUBJECT(){
	this.name = "SUBJECT"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.AUTHOR = function Node_AUTHOR(){
	this.name = "AUTHOR"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.DATE = function Node_DATE(){
	this.name = "DATE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.KEYWORDS = function Node_KEYWORDS(){
	this.name = "KEYWORDS"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.COMMENTS = function Node_COMMENTS(){
	this.name = "COMMENTS"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.FORBIDDENSTRING = function Node_FORBIDDENSTRING(){
	this.name = "FORBIDDENSTRING"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.FORBIDDEN = function Node_FORBIDDEN(){
	this.name = "FORBIDDEN"; this.attr = {}; this.children = []; this.text_children = [];
	this.encoding = "base64";
	this.attr.Id = null;
};
// 4.2. 문서 설정 정보 엘리먼트
root.node.DOCSETTING = function Node_DOCSETTING(){
	this.name = "DOCSETTING"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.BEGINNUMBER = function Node_BEGINNUMBER(){
	this.name = "BEGINNUMBER"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Page = null;
	this.attr.Footnote = null;
	this.attr.Endnote = null;
	this.attr.Picture = null;
	this.attr.Table = null;
	this.attr.Equation = null;
	this.attr.TotalPage = null;
};
root.node.CARETPOS = function Node_CARETPOS(){
	this.name = "CARETPOS"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.List = null;
	this.attr.Para = null;
	this.attr.Pos = null;
};
// 4.3. 문서 글꼴 / 스타일 정보
root.node.MAPPINGTABLE = function Node_MAPPINGTABLE(){
	this.name = "MAPPINGTABLE"; this.attr = {}; this.children = []; this.text_children = [];
};
// 4.3.1. 문서 내 그림 / OLE 정보
root.node.BINDATALIST = function Node_BINDATALIST(){
	this.name = "BINDATALIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = "0";
};
root.node.BINITEM = function Node_BINITEM(){
	this.name = "BINITEM"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = null;
	this.attr.APath = null;
	this.attr.RPath = null;
	this.attr.BinData = null;
	this.attr.Format = null;
};
// 4.3.2. 글꼴 정보
root.node.FACENAMELIST = function Node_FACENAMELIST(){
	this.name = "FACENAMELIST"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.FONTFACE = function Node_FONTFACE(){
	this.name = "FONTFACE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Lang = null;
	this.attr.Count = null;
};
root.node.FONT = function Node_FONT(){
	this.name = "FONT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
	this.attr.Type = null;
	this.attr.Name = null;
};
root.node.SUBSTFONT = function Node_SUBSTFONT(){
	this.name = "SUBSTFONT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = null;
	this.attr.Name = null;
};
root.node.TYPEINFO = function Node_TYPEINFO(){
	this.name = "TYPEINFO"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "BORDERFILLLIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.BORDERFILL = function Node_BORDERFILL(){
	this.name = "BORDERFILL"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
	this.attr.ThreeD = "false";
	this.attr.Shadow = "false";
	this.attr.Slash = "0";
	this.attr.BackSlash = "0";
	this.attr.CrookedSlash = "0";
	this.attr.CounterSlash = "0";
	this.attr.CounterBackSlash = "0";
	this.attr.BreakCellSeparateLine = "0";
	// 문서에 없음
	this.attr.CenterLine = "0";
};
root.node.LEFTBORDER = function Node_LEFTBORDER(){
	this.name = "LEFTBORDER"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.RIGHTBORDER = function Node_RIGHTBORDER(){
	this.name = "RIGHTBORDER"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.TOPBORDER = function Node_TOPBORDER(){
	this.name = "TOPBORDER"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.BOTTOMBORDER = function Node_BOTTOMBORDER(){
	this.name = "BOTTOMBORDER"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.DIAGONAL = function Node_DIAGONAL(){
	this.name = "DIAGONAL"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.FILLBRUSH = function Node_FILLBRUSH(){
	this.name = "FILLBRUSH"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.WINDOWBRUSH = function Node_WINDOWBRUSH(){
	this.name = "WINDOWBRUSH"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.FaceColor = null;
	this.attr.HatchColor = null;
	this.attr.HatchStyle = null;
	this.attr.Alpha = null;
};
root.node.GRADATION = function Node_GRADATION(){
	this.name = "GRADATION"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "COLOR"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Value = null;
};
root.node.IMAGEBRUSH = function Node_IMAGEBRUSH(){
	this.name = "IMAGEBRUSH"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Mode = "Tile";
};
root.node.IMAGE = function Node_IMAGE(){
	this.name = "IMAGE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Bright = "0";
	this.attr.Contrast = "0";
	this.attr.Effect = null;
	this.attr.BinItem = null;
	this.attr.Alpha = null;
};
// 4.3.4. 글자 모양 정보
root.node.CHARSHAPELIST = function Node_CHARSHAPELIST(){
	this.name = "CHARSHAPELIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.CHARSHAPE = function Node_CHARSHAPE(){
	this.name = "CHARSHAPE"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "FONTID"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Hangul = null;
	this.attr.Latin = null;
	this.attr.Hanja = null;
	this.attr.Japanese = null;
	this.attr.Other = null;
	this.attr.Symbol = null;
	this.attr.User = null;
};
root.node.RATIO = function Node_RATIO(){
	this.name = "RATIO"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Hangul = "100";
	this.attr.Latin = "100";
	this.attr.Hanja = "100";
	this.attr.Japanese = "100";
	this.attr.Other = "100";
	this.attr.Symbol = "100";
	this.attr.User = "100";
};
root.node.CHARSPACING = function Node_CHARSPACING(){
	this.name = "CHARSPACING"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Hangul = "0";
	this.attr.Latin = "0";
	this.attr.Hanja = "0";
	this.attr.Japanese = "0";
	this.attr.Other = "0";
	this.attr.Symbol = "0";
	this.attr.User = "0";
};
root.node.RELSIZE = function Node_RELSIZE(){
	this.name = "RELSIZE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Hangul = "100";
	this.attr.Latin = "100";
	this.attr.Hanja = "100";
	this.attr.Japanese = "100";
	this.attr.Other = "100";
	this.attr.Symbol = "100";
	this.attr.User = "100";
};
root.node.CHAROFFSET = function Node_CHAROFFSET(){
	this.name = "CHAROFFSET"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Hangul = "0";
	this.attr.Latin = "0";
	this.attr.Hanja = "0";
	this.attr.Japanese = "0";
	this.attr.Other = "0";
	this.attr.Symbol = "0";
	this.attr.User = "0";
};
root.node.ITALIC = function Node_ITALIC(){
	this.name = "ITALIC"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.BOLD = function Node_BOLD(){
	this.name = "BOLD"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.UNDERLINE = function Node_UNDERLINE(){
	this.name = "UNDERLINE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Bottom";
	this.attr.Shape = "Solid";
	this.attr.Color = "0";
};
root.node.STRIKEOUT = function Node_STRIKEOUT(){
	this.name = "STRIKEOUT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Continuous";
	this.attr.Shape = "Solid";
	this.attr.Color = "0";
};
root.node.OUTLINE = function Node_OUTLINE(){
	this.name = "OUTLINE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
};
root.node.SHADOW = function Node_SHADOW(){
	this.name = "SHADOW"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = null;
	this.attr.Color = null;
	this.attr.OffsetX = "10";
	this.attr.OffsetY = "10";
	this.attr.Alpha = null;
};
root.node.EMBOSS = function Node_EMBOSS(){
	this.name = "EMBOSS"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.ENGRAVE = function Node_ENGRAVE(){
	this.name = "ENGRAVE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SUPERSCRIPT = function Node_SUPERSCRIPT(){
	this.name = "SUPERSCRIPT"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SUBSCRIPT = function Node_SUBSCRIPT(){
	this.name = "SUBSCRIPT"; this.attr = {}; this.children = []; this.text_children = [];
};
// 4.3.5. 탭 정보
root.node.TABDEFLIST = function Node_TABDEFLIST(){
	this.name = "TABDEFLIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.TABDEF = function Node_TABDEF(){
	this.name = "TABDEF"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
	this.attr.AutoTabLeft = "false";
	this.attr.AutoTabRight = "false";
};
root.node.TABITEM = function Node_TABITEM(){
	this.name = "TABITEM"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Pos = null;
	this.attr.Type = "Left";
	this.attr.Leader = "Solid";
};
root.node.NUMBERINGLIST = function Node_NUMBERINGLIST(){
	this.name = "NUMBERINGLIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.NUMBERING = function Node_NUMBERING(){
	this.name = "NUMBERING"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
	this.attr.Start = "1";
};
root.node.PARAHEAD = function Node_PARAHEAD(){
	this.name = "PARAHEAD"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Level = null;
	this.attr.Alignment = "Left";
	this.attr.UseInstWidth = "true";
	this.attr.AutoIndent = "true";
	this.attr.WidthAdjust = "0";
	this.attr.TextOffsetType = "percent";
	this.attr.TextOffset = "50";
	this.attr.NumFormat = "Digit";
	this.attr.CharShape = null;
};
// 4.3.6. 글머리표 정보
root.node.BULLETLIST = function Node_BULLETLIST(){
	this.name = "BULLETLIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.BULLET = function Node_BULLET(){
	this.name = "BULLET"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
	this.attr.Char = null;
	this.attr.Image = "false";
};
// 4.3.7. 문단 모양 정보
root.node.PARASHAPELIST = function Node_PARASHAPELIST(){
	this.name = "PARASHAPELIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.PARASHAPE = function Node_PARASHAPE(){
	this.name = "PARASHAPE"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "PARAMARGIN"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "PARABORDER"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "STYLELIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.STYLE = function Node_STYLE(){
	this.name = "STYLE"; this.attr = {}; this.children = []; this.text_children = [];
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
	this.name = "MEMOSHAPELIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.MEMO = function Node_MEMO(){
	this.name = "MEMO"; this.attr = {}; this.children = []; this.text_children = [];
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
// 5. 본문 엘리먼트
root.node.BODY = function Node_BODY(){
	this.name = "BODY"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SECTION = function Node_SECTION(){
	this.name = "SECTION"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
};
root.node.P = function Node_P(){
	this.name = "P"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.ParaShape = null;
	this.attr.Style = null;
	this.attr.InstId = null;
	this.attr.PageBreak = "false";
	this.attr.ColumnBreak = "false";
};
root.node.TEXT = function Node_TEXT(){
	this.name = "TEXT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.CharShape = null;
};
// 5.1. 글자 엘리먼트
root.node.CHAR = function Node_CHAR(){
	this.name = "CHAR"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Style = null;
};
root.node.MARKPENBEGIN = function Node_MARKPENBEGIN(){
	this.name = "MARKPENBEGIN"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Color = null;
};
root.node.MARKPENEND = function Node_MARKPENEND(){
	this.name = "MARKPENEND"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.TITLEMARK = function Node_TITLEMARK(){
	this.name = "TITLEMARK"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Ignore = null;
};
root.node.TAB = function Node_TAB(){
	this.name = "TAB"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.LINEBREAK = function Node_LINEBREAK(){
	this.name = "LINEBREAK"; this.attr = {}; this.children = []; this.text_children = [];
};
// (SIC)
root.node.HYPEN = function Node_HYPEN(){
	this.name = "HYPEN"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.NBSPACE = function Node_NBSPACE(){
	this.name = "NBSPACE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.FWSPACE = function Node_FWSPACE(){
	this.name = "FWSPACE"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.2. 구역 정의 엘리먼트
root.node.SECDEF = function Node_SECDEF(){
	this.name = "SECDEF"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.TextDirection = "0";
	this.attr.SpaceColumns = null;
	// TODO: 글자 수일때에는?
	this.attr.TabStop = "8000";
	this.attr.OutlineShape = "1";
	this.attr.LineGrid = "0";
	this.attr.CharGrid = "0";
	this.attr.FirstBorder = "false";
	this.attr.FirstFill = "false";
	this.attr.ExtMasterpageCount = "0";
	this.attr.MemoShapeId = null;
	// 우선 존재하는 값은 0임.
	this.attr.TextVerticalWidthHead = null;
};
root.node.PARAMETERSET = function Node_PARAMETERSET(){
	this.name = "PARAMETERSET"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.SetId = null;
	this.attr.Count = null;
};
root.node.PARAMETERARRAY = function Node_PARAMETERARRAY(){
	this.name = "PARAMETERARRAY"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.ITEM = function Node_ITEM(){
	this.name = "ITEM"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.ItemId = null;
	this.attr.Type = null;
};
// 5.2.1. 시작 번호 정보
root.node.STARTNUMBER = function Node_STARTNUMBER(){
	this.name = "STARTNUMBER"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.PageStartsOn = "Both";
	this.attr.Page = "0";
	this.attr.Figure = "0";
	this.attr.Table = "0";
	this.attr.Equation = "0";
};
// 5.2.2. 감추기 정보
root.node.HIDE = function Node_HIDE(){
	this.name = "HIDE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Header = "false";
	this.attr.Footer = "false";
	this.attr.MasterPage = "false";
	this.attr.Border = "false";
	this.attr.Fill = "false";
	this.attr.PageNumPos = "false";
	this.attr.EmptyLine = "false";
};
// 5.2.3. 용지 설정 정보
root.node.PAGEDEF = function Node_PAGEDEF(){
	this.name = "PAGEDEF"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Landscape = "0";
	this.attr.Width = "59528";
	this.attr.Height = "84188";
	this.attr.GutterType = "LeftOnly";
};
root.node.PAGEMARGIN = function Node_PAGEMARGIN(){
	this.name = "PAGEMARGIN"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Left = "8504";
	this.attr.Right = "8504";
	this.attr.Top = "5668";
	this.attr.Bottom = "4252";
	this.attr.Header = "4252";
	this.attr.Footer = "4252";
	this.attr.Gutter = "0";
};
// 5.2.4. 각주/미주 모양 정보
root.node.FOOTNOTESHAPE = function Node_FOOTNOTESHAPE(){
	this.name = "FOOTNOTESHAPE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.ENDNOTESHAPE = function Node_ENDNOTESHAPE(){
	this.name = "ENDNOTESHAPE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.AUTONUMFORMAT = function Node_AUTONUMFORMAT(){
	this.name = "AUTONUMFORMAT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Digit";
	this.attr.UserChar = null;
	this.attr.PrefixChar = null;
	this.attr.SuffixChar = ")";
	this.attr.Superscript = null;
};
root.node.NOTELINE = function Node_NOTELINE(){
	this.name = "NOTELINE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Length = null;
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = null;
};
root.node.NOTESPACING = function Node_NOTESPACING(){
	this.name = "NOTESPACING"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.AboveLine = null;
	this.attr.BelowLine = null;
	this.attr.BetweenNotes = null;
};
root.node.NOTENUMBERING = function Node_NOTENUMBERING(){
	this.name = "NOTENUMBERING"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Continuous";
	// Type이 OnSection일 때에만 사용
	this.attr.NewNumber = "1";
};
root.node.NOTEPLACEMENT = function Node_NOTEPLACEMENT(){
	this.name = "NOTEPLACEMENT"; this.attr = {}; this.children = []; this.text_children = [];
	// 부모에 따라 enum이 달라짐
	this.attr.Place = null;
	this.attr.BeneathText = null;
};
// 5.2.5. 쪽 테두리/배경 정보
root.node.PAGEBORDERFILL = function Node_PAGEBORDERFILL(){
	this.name = "PAGEBORDERFILL"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Both";
	this.attr.BorderFill = null;
	this.attr.TextBorder = "false";
	this.attr.HeaderInside = "false";
	this.attr.FooterInside = "false";
	this.attr.FillArea = "Paper";
};
root.node.PAGEOFFSET = function Node_PAGEOFFSET(){
	this.name = "PAGEOFFSET"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Left = "1417";
	this.attr.Right = "1417";
	this.attr.Top = "1417";
	this.attr.Bottom = "1417";
};
// 5.2.6. 바탕쪽 정보
root.node.MASTERPAGE = function Node_MASTERPAGE(){
	this.name = "MASTERPAGE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Both";
	this.attr.TextWidth = null;
	this.attr.TextHeight = null;
	this.attr.HasTextRef = "false";
	this.attr.HasNumRef = "false";
};
root.node.PARALIST = function Node_PARALIST(){
	this.name = "PARALIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.TextDirection = "0";
	this.attr.LineWrap = "Break";
	this.attr.VertAlign = "Top";
	this.attr.LinkListID = null;
	this.attr.LinkListIDNext = null;
};
// 5.2.7. 확장 바탕쪽 정보
root.node.EXT_MASTERPAGE = function Node_EXT_MASTERPAGE(){
	this.name = "EXT_MASTERPAGE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = null;
	// Type이 OptionalPage일 때
	this.attr.PageNumber = null;
	this.attr.PageDuplicate = null;
	this.attr.PageFront = null;
};
// 5.3. 단 정의 정보
root.node.COLDEF = function Node_COLDEF(){
	this.name = "COLDEF"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Newspaper";
	this.attr.Count = "1";
	this.attr.Layout = "Left";
	this.attr.SameSize = "false";
	this.attr.SameGap = "0";
};
root.node.COLUMNLINE = function Node_COLUMNLINE(){
	this.name = "COLUMNLINE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = null;
};
root.node.COLUMNTABLE = function Node_COLUMNTABLE(){
	this.name = "COLUMNTABLE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.COLUMN = function Node_COLUMN(){
	this.name = "COLUMN"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Width = null;
	this.attr.Gap = null;
};
// 5.4. 표
root.node.TABLE = function Node_TABLE(){
	this.name = "TABLE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.PageBreak = "Cell";
	this.attr.RepeatHeader = "true";
	this.attr.RowCount = null;
	this.attr.ColCount = null;
	this.attr.CellSpacing = "0";
	this.attr.BorderFill = null;
};
root.node.SHAPEOBJECT = function Node_SHAPEOBJECT(){
	this.name = "SHAPEOBJECT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.InstId = null;
	this.attr.ZOrder = "0";
	this.attr.NumberingType = "None";
	this.attr.TextWrap = null;
	this.attr.TextFlow = "BothSides";
	this.attr.Lock = "false";
};
root.node.SIZE = function Node_SIZE(){
	this.name = "SIZE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Width = null;
	this.attr.Height = null;
	this.attr.WidthRelTo = "Absolute";
	this.attr.HeightRelTo = "Absolute";
	this.attr.Protect = "false";
};
root.node.POSITION = function Node_POSITION(){
	this.name = "POSITION"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.TreatAsChar = null;
	this.attr.AffectLSpacing = "false";
	this.attr.VertRelTo = null;
	this.attr.VertAlign = null;
	this.attr.HorzRelTo = null;
	this.attr.HorzAlign = null;
	this.attr.VertOffset = null;
	this.attr.HorzOffset = null;
	this.attr.FlowWithText = "false";
	this.attr.AllowOverlap = "false";
	// 5.7.5.2992부터 추가된 속성
	this.attr.HoldAnchorAndSO = "false";
};
root.node.OUTSIDEMARGIN = function Node_OUTSIDEMARGIN(){
	this.name = "OUTSIDEMARGIN"; this.attr = {}; this.children = []; this.text_children = [];
	// Table: 283, Equation: 56, Picture: 0, Drawing: 0, OLE: ?
	this.attr.Left = null;
	this.attr.Right = null;
	this.attr.Top = null;
	this.attr.Bottom = null;
};
root.node.CAPTION = function Node_CAPTION(){
	this.name = "CAPTION"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Side = "Left";
	this.attr.FullSize = "false";
	this.attr.Width = null;
	this.attr.Gap = null;
	this.attr.LastWidth = null;
};
root.node.SHAPECOMMENT = function Node_SHAPECOMMENT(){
	this.name = "SHAPECOMMENT"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.INSIDEMARGIN = function Node_INSIDEMARGIN(){
	this.name = "INSIDEMARGIN"; this.attr = {}; this.children = []; this.text_children = [];
	// Table: 141, Picture: 0
	this.attr.Left = null;
	this.attr.Right = null;
	this.attr.Top = null;
	this.attr.Bottom = null;
};
root.node.CELLZONELIST = function Node_CELLZONELIST(){
	this.name = "CELLZONELIST"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.CELLZONE = function Node_CELLZONE(){
	this.name = "CELLZONE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.StartRowAddr = null;
	this.attr.StartColAddr = null;
	this.attr.EndRowAddr = null;
	this.attr.EndColAddr = null;
	this.attr.BorderFill = null;
};
root.node.ROW = function Node_ROW(){
	this.name = "ROW"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.CELL = function Node_CELL(){
	this.name = "CELL"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Name = null;
	this.attr.ColAddr = null;
	this.attr.RowAddr = null;
	this.attr.ColSpan = "1";
	this.attr.RowSpan = "1";
	this.attr.Width = null;
	this.attr.Height = null;
	this.attr.Header = "false";
	this.attr.HasMargin = "false";
	this.attr.Protect = "false";
	this.attr.Editable = "false";
	this.attr.Dirty = "false";
	this.attr.BorderFill = null;
};
root.node.CELLMARGIN = function Node_CELLMARGIN(){
	this.name = "CELLMARGIN"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Left = "0";
	this.attr.Right = "0";
	this.attr.Top = "0";
	this.attr.Bottom = "0";
};
// 5.5. 그림
root.node.PICTURE = function Node_PICTURE(){
	this.name = "PICTURE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Reverse = "false";
};
root.node.SHAPECOMPONENT = function Node_SHAPECOMPONENT(){
	this.name = "SHAPECOMPONENT"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO: 타입 찾기
	this.attr.HRef = null;
	this.attr.XPos = "0";
	this.attr.YPos = "0";
	this.attr.GroupLevel = "0";
	this.attr.OriWidth = null;
	this.attr.OriHeight = null;
	this.attr.CurWidth = null;
	this.attr.CurHeight = null;
	this.attr.HorzFlip = "false";
	this.attr.VertFlip = "false";
	// TODO: 정말 Int인지 확인하기
	this.attr.InstID = null;
};
root.node.ROTATIONINFO = function Node_ROTATIONINFO(){
	this.name = "ROTATIONINFO"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Angle = "0";
	// 기본값: 개체 가운데점
	this.attr.CenterX = null;
	this.attr.CenterY = null;
};
root.node.RENDERINGINFO = function Node_RENDERINGINFO(){
	this.name = "RENDERINGINFO"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.TRANSMATRIX = function Node_TRANSMATRIX(){
	this.name = "TRANSMATRIX"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.E1 = null;
	this.attr.E2 = null;
	this.attr.E3 = null;
	this.attr.E4 = null;
	this.attr.E5 = null;
	this.attr.E6 = null;
};
root.node.SCAMATRIX = function Node_SCAMATRIX(){
	this.name = "SCAMATRIX"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.E1 = null;
	this.attr.E2 = null;
	this.attr.E3 = null;
	this.attr.E4 = null;
	this.attr.E5 = null;
	this.attr.E6 = null;
};
root.node.ROTMATRIX = function Node_ROTMATRIX(){
	this.name = "ROTMATRIX"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.E1 = null;
	this.attr.E2 = null;
	this.attr.E3 = null;
	this.attr.E4 = null;
	this.attr.E5 = null;
	this.attr.E6 = null;
};
root.node.LINESHAPE = function Node_LINESHAPE(){
	this.name = "LINESHAPE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Color = null;
	this.attr.Width = null;
	this.attr.Style = "Solid";
	this.attr.EndCap = "Flat";
	this.attr.HeadStyle = "Normal";
	this.attr.TailStyle = "Normal";
	this.attr.HeadSize = "SmallSmall";
	this.attr.TailSize = "SmallSmall";
	this.attr.OutlineStyle = "Normal";
	this.attr.Alpha = null;
};
root.node.IMAGERECT = function Node_IMAGERECT(){
	this.name = "IMAGERECT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.X0 = null;
	this.attr.Y0 = null;
	this.attr.X1 = null;
	this.attr.Y1 = null;
	this.attr.X2 = null;
	this.attr.Y2 = null;
};
root.node.IMAGECLIP = function Node_IMAGECLIP(){
	this.name = "IMAGECLIP"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Left = null;
	this.attr.Top = null;
	this.attr.Right = null;
	this.attr.Bottom = null;
};
root.node.EFFECTS = function Node_EFFECTS(){
	this.name = "EFFECTS"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SHADOWEFFECT = function Node_SHADOWEFFECT(){
	this.name = "SHADOWEFFECT"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.GLOW = function Node_GLOW(){
	this.name = "GLOW"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Alpha = null;
	this.attr.Radius = null;
};
root.node.SOFTEDGE = function Node_SOFTEDGE(){
	this.name = "SOFTEDGE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Radius = null;
};
root.node.REFLECTION = function Node_REFLECTION(){
	this.name = "REFLECTION"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.EFFECTSCOLOR = function Node_EFFECTSCOLOR(){
	this.name = "EFFECTSCOLOR"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.COLOREFFECT = function Node_COLOREFFECT(){
	this.name = "COLOREFFECT"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
// 5.6. 그리기 개체
root.node.DRAWINGOBJECT = function Node_DRAWINGOBJECT(){
	this.name = "DRAWINGOBJECT"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.DRAWTEXT = function Node_DRAWTEXT(){
	this.name = "DRAWTEXT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.LastWidth = null;
	this.attr.Name = null;
	this.attr.Editable = "false";
};
root.node.TEXTMARGIN = function Node_TEXTMARGIN(){
	this.name = "TEXTMARGIN"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Left = "238";
	this.attr.Right = "238";
	this.attr.Top = "238";
	this.attr.Bottom = "238";
};
// 5.6.1. 선
root.node.LINE = function Node_LINE(){
	this.name = "LINE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.StartX = null;
	this.attr.StartY = null;
	this.attr.EndX = null;
	this.attr.EndY = null;
	this.attr.IsReverseHV = "false";
};
// 5.6.2. 사각형
root.node.RECTANGLE = function Node_RECTANGLE(){
	this.name = "RECTANGLE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Ratio = null;
	this.attr.X0 = null;
	this.attr.Y0 = null;
	this.attr.X1 = null;
	this.attr.Y1 = null;
	this.attr.X2 = null;
	this.attr.Y2 = null;
	// DOC: X3, Y3도 있음
	this.attr.X3 = null;
	this.attr.Y3 = null;
};
// 5.6.3. 타원
root.node.ELLIPSE = function Node_ELLIPSE(){
	this.name = "ELLIPSE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.IntervalDirty = "false";
	this.attr.HasArcProperty = "false";
	this.attr.ArcType = "Normal";
	this.attr.CenterX = null;
	this.attr.CenterY = null;
	this.attr.Axis1X = null;
	this.attr.Axis1Y = null;
	this.attr.Axis2X = null;
	this.attr.Axis2Y = null;
	this.attr.Start1X = null;
	this.attr.Start1Y = null;
	this.attr.End1X = null;
	this.attr.End1Y = null;
	this.attr.Start2X = null;
	this.attr.Start2Y = null;
	this.attr.End2x = null;
	this.attr.End2Y = null;
};
// 5.6.4. 호
root.node.ARC = function Node_ARC(){
	this.name = "ARC"; this.attr = {}; this.children = []; this.text_children = [];
	// 위 타원과 같은 enum?
	this.attr.Type = "Normal";
	this.attr.CenterX = null;
	this.attr.CenterY = null;
	this.attr.Axis1X = null;
	this.attr.Axis1Y = null;
	this.attr.Axis2X = null;
	this.attr.Axis2Y = null;
};
// 5.6.5. 다각형
root.node.POLYGON = function Node_POLYGON(){
	this.name = "POLYGON"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.POINT = function Node_POINT(){
	this.name = "POINT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.X = null;
	this.attr.Y = null;
};
// 5.6.6. 곡선
root.node.CURVE = function Node_CURVE(){
	this.name = "CURVE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SEGMENT = function Node_SEGMENT(){
	this.name = "SEGMENT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "Curve";
	this.attr.X1 = null;
	this.attr.Y1 = null;
	this.attr.X2 = null;
	this.attr.Y2 = null;
};
// 5.6.7. 연결선
root.node.CONNECTLINE = function Node_CONNECTLINE(){
	this.name = "CONNECTLINE"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO_SOMETIME: 타입 찾기
	this.attr.Type = null;
	this.attr.StartX = null;
	this.attr.StartY = null;
	this.attr.EndX = null;
	this.attr.EndY = null;
	this.attr.StartSubjectID = null;
	this.attr.StartSubjectIndex = null;
	this.attr.EndSubjectID = null;
	this.attr.EndSubjectIndex = null;
};
// 5.7. Unknown Object
root.node.UNKNOWNOBJECT = function Node_UNKNOWNOBJECT(){
	this.name = "UNKNOWNOBJECT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Ctrlid = null;
	// TODO_SOMETIME: CtrlId인지 확인하기
	this.attr.X0 = null;
	this.attr.Y0 = null;
	this.attr.X1 = null;
	this.attr.Y1 = null;
	this.attr.X2 = null;
	this.attr.Y2 = null;
	this.attr.X3 = null;
	this.attr.Y3 = null;
};
// 5.8. 양식 객체
root.node.FORMOBJECT = function Node_FORMOBJECT(){
	this.name = "FORMOBJECT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Name = null;
	this.attr.ForeColor = null;
	this.attr.BackColor = null;
	this.attr.GroupName = null;
	this.attr.TabStop = "true";
	// TODO: 타입 찾기
	this.attr.TabOrder = null;
	this.attr.Enabled = "true";
	this.attr.BorderType = "0";
	this.attr.DrawFrame = "true";
	this.attr.Printable = "true";
};
root.node.FORMCHARSHAPE = function Node_FORMCHARSHAPE(){
	this.name = "FORMCHARSHAPE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.CharShape = "0";
	this.attr.FollowContext = "false";
	this.attr.AutoSize = "false";
	this.attr.WordWrap = "false";
};
root.node.BUTTONSET = function Node_BUTTONSET(){
	this.name = "BUTTONSET"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO: 타입 다 찾기
	this.attr.Caption = null;
	this.attr.Value = null;
	this.attr.RadioGroupName = null;
	this.attr.TriState = null;
	this.attr.BackStyle = null;
};
// 5.8.1. 라디오 버튼
root.node.RADIOBUTTON = function Node_RADIOBUTTON(){
	this.name = "RADIOBUTTON"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.8.2. 체크 버튼
root.node.CHECKBUTTON = function Node_CHECKBUTTON(){
	this.name = "CHECKBUTTON"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.8.3. 콤보 박스
root.node.COMBOBOX = function Node_COMBOBOX(){
	this.name = "COMBOBOX"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.ListBoxRows = null;
	this.attr.ListBoxWidth = null;
	this.attr.Text = null;
	// TODO: 정말 Boolean인지 확인하기
	this.attr.EditEnable = null;
};
// 5.8.4. 에디트
root.node.EDIT = function Node_EDIT(){
	this.name = "EDIT"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO: 타입 다 찾기
	this.attr.MultiLine = null;
	this.attr.PasswordChar = null;
	this.attr.MaxLength = null;
	this.attr.ScrollBars = null;
	this.attr.TabKeyBehavior = null;
	// 아래 두 개는 Boolean 확실함.
	this.attr.Number = null;
	this.attr.ReadOnly = null;
	this.attr.AlignText = null;
};
root.node.EDITTEXT = function Node_EDITTEXT(){
	this.name = "EDITTEXT"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.8.5. 리스트 박스
root.node.LISTBOX = function Node_LISTBOX(){
	this.name = "LISTBOX"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
// 5.8.6. 스크롤바
root.node.SCROLLBAR = function Node_SCROLLBAR(){
	this.name = "SCROLLBAR"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
// 5.9. 묶음 객체
root.node.CONTAINER = function Node_CONTAINER(){
	this.name = "CONTAINER"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.10. OLE 객체
root.node.OLE = function Node_OLE(){
	this.name = "OLE"; this.attr = {}; this.children = []; this.text_children = [];
	// 오타 아님!
	this.attr.ObjetType = null;
	this.attr.ExtentX = null;
	this.attr.ExtentY = null;
	this.attr.BinItem = null;
	this.attr.DrawAspect = null;
	this.attr.HasMoniker = "false";
	this.attr.EqBaseLine = null;
};
// 5.11. 한글 97 수식
root.node.EQUATION = function Node_EQUATION(){
	this.name = "EQUATION"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.LineMode = "false";
	this.attr.BaseUnit = "1000";
	this.attr.TextColor = "0";
	this.attr.BaseLine = null;
	this.attr.Version = null;
};
root.node.SCRIPT = function Node_SCRIPT(){
	this.name = "SCRIPT"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.12. 글맵시
root.node.TEXTART = function Node_TEXTART(){
	this.name = "TEXTART"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Text = null;
	this.attr.X0 = null;
	this.attr.Y0 = null;
	this.attr.X1 = null;
	this.attr.Y1 = null;
	this.attr.X2 = null;
	this.attr.Y2 = null;
	this.attr.X3 = null;
	this.attr.Y3 = null;
};
root.node.TEXTARTSHAPE = function Node_TEXTARTSHAPE(){
	this.name = "TEXTARTSHAPE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.FontName = null;
	// TODO_SOMETIME: enum 찾기
	this.attr.FontStyle = "Regular";
	// TODO: enum 정하기 (htf?)
	this.attr.FontType = "ttf";
	this.attr.TextShape = "0";
	this.attr.LineSpacing = "120";
	this.attr.CharSpacing = "100";
	this.attr.Align = "Left";
};
root.node.OUTLINEDATA = function Node_OUTLINEDATA(){
	this.name = "OUTLINEDATA"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
// 5.13. 필드 시작
root.node.FILEDBEGIN = function Node_FILEDBEGIN(){
	this.name = "FILEDBEGIN"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = null;
	this.attr.Name = null;
	this.attr.InstId = null;
	this.attr.Editable = "true";
	this.attr.Dirty = "false";
	// TODO_SOMETIME: 타입 찾기
	this.attr.Property = null;
	this.attr.Command = null;
};
// 5.14. 필드 끝
root.node.FIELDEND = function Node_FIELDEND(){
	this.name = "FIELDEND"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = null;
	this.attr.Editable = "true";
	// TODO_SOMETIME: 타입 찾기
	this.attr.Property = null;
};
// 5.15. 책갈피
root.node.BOOKMARK = function Node_BOOKMARK(){
	this.name = "BOOKMARK"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Name = null;
};
// 5.16. 머리말, 꼬리말
root.node.HEADER = function Node_HEADER(){
	this.name = "HEADER"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.FOOTER = function Node_FOOTER(){
	this.name = "FOOTER"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
// 5.17. 각주, 미주
root.node.FOOTNOTE = function Node_FOOTNOTE(){
	this.name = "FOOTNOTE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.ENDNOTE = function Node_ENDNOTE(){
	this.name = "ENDNOTE"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.18. 자동 번호, 새 번호
root.node.AUTONUM = function Node_AUTONUM(){
	this.name = "AUTONUM"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.NEWNUM = function Node_NEWNUM(){
	this.name = "NEWNUM"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
// 5.19. 홀/짝수 조정
root.node.PAGENUMCTRL = function Node_PAGENUMCTRL(){
	this.name = "PAGENUMCTRL"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.PageStartsOn = "Both";
};
// 5.20. 감추기
root.node.PAGEHIDING = function Node_PAGEHIDING(){
	this.name = "PAGEHIDING"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.HideHeader = "false";
	this.attr.HideFooter = "false";
	this.attr.HideMasterPage = "false";
	this.attr.HideBorder = "false";
	this.attr.HideFill = "false";
	this.attr.HidePageNum = "false";
};
// 5.21. 쪽번호 위치
root.node.PAGENUM = function Node_PAGENUM(){
	this.name = "PAGENUM"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Pos = "TopLeft";
	this.attr.FormatType = "Digit";
	// TODO: 타입 찾기
	this.attr.SideChar = null;
};
// 5.22. 찾아보기 표식
root.node.INDEXMARK = function Node_INDEXMARK(){
	this.name = "INDEXMARK"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.KEYFIRST = function Node_KEYFIRST(){
	this.name = "KEYFIRST"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.KEYSECOND = function Node_KEYSECOND(){
	this.name = "KEYSECOND"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.23. 글자 겹침
root.node.COMPOSE = function Node_COMPOSE(){
	this.name = "COMPOSE"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.COMPCHARSHAPE = function Node_COMPCHARSHAPE(){
	this.name = "COMPCHARSHAPE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.ShapeID = null;
};
// 5.24. 덧말
root.node.DUTMAL = function Node_DUTMAL(){
	this.name = "DUTMAL"; this.attr = {}; this.children = []; this.text_children = [];
	// TODO
};
root.node.MAINTEXT = function Node_MAINTEXT(){
	this.name = "MAINTEXT"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SUBTEXT = function Node_SUBTEXT(){
	this.name = "SUBTEXT"; this.attr = {}; this.children = []; this.text_children = [];
};
// 5.25. 숨은 설명
root.node.HIDDENCOMMENT = function Node_HIDDENCOMMENT(){
	this.name = "HIDDENCOMMENT"; this.attr = {}; this.children = []; this.text_children = [];
};
// 6. 부가 정보 엘리먼트
root.node.TAIL = function Node_TAIL(){
	this.name = "TAIL"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.BINDATASTORAGE = function Node_BINDATASTORAGE(){
	this.name = "BINDATASTORAGE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.BINDATA = function Node_BINDATA(){
	this.name = "BINDATA"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Id = null;
	this.attr.Size = null;
	this.attr.Encoding = "Base64";
	this.attr.Compress = "true";
};
root.node.SCRIPTCODE = function Node_SCRIPTCODE(){
	this.name = "SCRIPTCODE"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Type = "JScript";
	this.attr.Version = null;
};
root.node.SCRIPTHEADER = function Node_SCRIPTHEADER(){
	this.name = "SCRIPTHEADER"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SCRIPTSOURCE = function Node_SCRIPTSOURCE(){
	this.name = "SCRIPTSOURCE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.PRESCRIPT = function Node_PRESCRIPT(){
	this.name = "PRESCRIPT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.POSTSCRIPT = function Node_POSTSCRIPT(){
	this.name = "POSTSCRIPT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.Count = null;
};
root.node.SCRIPTFUNCTION = function Node_SCRIPTFUNCTION(){
	this.name = "SCRIPTFUNCTION"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.XMLTEMPLATE = function Node_XMLTEMPLATE(){
	this.name = "XMLTEMPLATE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.SCHEMA = function Node_SCHEMA(){
	this.name = "SCHEMA"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.INSTANCE = function Node_INSTANCE(){
	this.name = "INSTANCE"; this.attr = {}; this.children = []; this.text_children = [];
};
root.node.COMPATIBLEDOCUMENT = function Node_COMPATIBLEDOCUMENT(){
	this.name = "COMPATIBLEDOCUMENT"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.TargetProgram = "None";
};
root.node.LAYOUTCOMPATIBILITY = function Node_LAYOUTCOMPATIBILITY(){
	this.name = "LAYOUTCOMPATIBILITY"; this.attr = {}; this.children = []; this.text_children = [];
	this.attr.ApplyFontWeightToBold = "false";
	this.attr.UseInnerUnderline = "false";
	this.attr.FixedUnderlineWidth = "false";
	this.attr.DoNotApplyStrikeout = "false";
	this.attr.UseLowercaseStrikeout = "false";
	this.attr.ExtendLineheightToOffset = "false";
	this.attr.TreatQuotationAsLatin = "false";
	this.attr.DoNotAlignWhitespaceOnRight = "false";
	this.attr.DoNotAdjustWordInJustify = "false";
	this.attr.BaseCharUnitOnEAsian = "false";
	this.attr.BaseCharUnitOfIndentOnFirstChar = "false";
	this.attr.AdjustLineheightToFont = "false";
	this.attr.AdjustBaselineInFixedLinespacing = "false";
	this.attr.ExcludeOverlappingParaSpacing = "false";
	this.attr.ApplyNextspacingOfLastPara = "false";
	this.attr.ApplyAtLeastToPercent100Pct = "false";
	this.attr.DoNotApplyAutoSpaceEAsianEng = "false";
	this.attr.DoNotApplyAutoSpaceEAsianNum = "false";
	this.attr.AdjustParaBorderfillToSpacing = "false";
	this.attr.ConnectParaBorderfillOfEqualBorder = "false";
	this.attr.AdjustParaBorderOffsetWithBorder = "false";
	this.attr.ExtendLineheightToParaBorderOffset = "false";
	this.attr.ApplyParaBorderToOutside = "false";
	this.attr.BaseLinespacingOnLinegrid = "false";
	this.attr.ApplyCharSpacingToCharGrid = "false";
	this.attr.DoNotApplyGridInHeaderfooter = "false";
	this.attr.ExtendHeaderfooterToBody = "false";
	this.attr.AdjustEndnotePositionToFootnote = "false";
	this.attr.DoNotApplyImageEffect = "false";
	this.attr.DoNotApplyShapeComment = "false";
	this.attr.DoNotAdjustEmptyAnchorLine = "false";
	this.attr.OverlapBothAllowOverlap = "false";
	this.attr.DoNotApplyVertOffsetOfForward = "false";
	this.attr.ExtendVertLimitToPageMargins = "false";
	this.attr.DoNotHoldAnchorOfTable = "false";
	this.attr.DoNotFormattingAtBeneathAnchor = "false";
	this.attr.DoNotApplyExtensionCharCompose = "false";
};
root.tag.table = [];
if(typeof root === 'undefined')root={'record':{},'node':{},'tag':{},'enum':{}};
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
root.tag.PARA_HEADER = 66;
root.tag.PARA_TEXT = 67;
root.tag.PARA_CHAR_SHAPE = 68;
root.tag.PARA_LINE_SEG = 69;
root.tag.PARA_RANGE_TAG = 70;
root.tag.CTRL_HEADER = 71;
root.tag.LIST_HEADER = 72;
root.tag.PAGE_DEF = 73;
root.tag.FOOTNOTE_SHAPE = 74;
root.tag.PAGE_BORDER_FILL = 75;
root.tag.SHAPE_COMPONENT = 76;
root.tag.TABLE = 77;
root.tag.SHAPE_COMPONENT_LINE = 78;
root.tag.SHAPE_COMPONENT_RECTANGLE = 79;
root.tag.SHAPE_COMPONENT_ELLIPSE = 80;
root.tag.SHAPE_COMPONENT_ARC = 81;
root.tag.SHAPE_COMPONENT_POLYGON = 82;
root.tag.SHAPE_COMPONENT_CURVE = 83;
root.tag.SHAPE_COMPONENT_OLE = 84;
root.tag.SHAPE_COMPONENT_PICTURE = 85;
root.tag.SHAPE_COMPONENT_CONTAINER = 86;
root.tag.CTRL_DATA = 87;
root.tag.EQEDIT = 88;
// 73: Reserved
root.tag.SHAPE_COMPONENT_TEXTART = 90;
root.tag.FORM_OBJECT = 91;
root.tag.MEMO_SHAPE = 92;
root.tag.MEMO_LIST = 93;
root.tag.CHART_DATA = 95;
root.tag.SHAPE_COMPONENT_UNKNOWN = 115;
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
	this.attr.BinDataCount=this.data.readInt32LE(0);
	this.attr.FontCount=[];var offset={'value':4};
	for(var ii0=0;ii0<7;ii0++){
		this.attr.FontCount[ii0] = {};
		this.attr.FontCount[ii0].value=this.data.readInt32LE(offset.value); offset.value+=4;
	}
	this.attr.BorderFillCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.CharShapeCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.TabDefCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.NumberingCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.BulletCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.ParaShapeCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.StyleCount=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.MemoCount=this.data.readInt32LE(offset.value); offset.value+=4;
};
// 4.1.3. 바이너리 데이터 (TODO: 문서 설명이 정확하지 않은 듯 함)
root.record.BIN_DATA = function Record_BIN_DATA(data){
	var tmp; this.attr = {}; this.data = data; this.name = "BIN_DATA";
	this.attr.Property=this.data.readUInt16LE(0);
};
// 4.1.4. 글꼴
root.record.FACE_NAME = function Record_FACE_NAME(data){
	var tmp; this.attr = {}; this.data = data; this.name = "FACE_NAME";
	tmp=this.data.slice(0,1);
	// DOC: 문서에 없음
	this.attr.Type=(tmp[0]&0x3);if(root.enum.FontType[this.attr.Type]!==undefined)this.attr.Type=root.enum.FontType[this.attr.Type];
	this.attr.HasDefault=!!((tmp[0]&0x20)>>5);
	this.attr.HasShape=!!((tmp[0]&0x40)>>6);
	this.attr.HasSubst=!!((tmp[0]&0x80)>>7);
	tmp=this.data.readUInt16LE(1);var offset={'value':3};for(this.attr.Name='';tmp-->0;){this.attr.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	if(this.attr.HasSubst){
	this.attr.SubstFont = {};
	tmp=this.data.slice(offset.value,(offset.value+1)); offset.value+=1;
	this.attr.SubstFont.Type=(tmp[0]&0x3);if(root.enum.FontType[this.attr.SubstFont.Type]!==undefined)this.attr.SubstFont.Type=root.enum.FontType[this.attr.SubstFont.Type];
	tmp=this.data.readUInt16LE(offset.value); offset.value+=2;for(this.attr.SubstFont.Name='';tmp-->0;){this.attr.SubstFont.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
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
	this.attr.Slash=((tmp[0]&0x1c)>>2);
	this.attr.BackSlash=((tmp[0]&0xe0)>>5);
	// DOC: 문서와 다르게 이렇게 저장됨.
	this.attr.LeftBorder = {};
	this.attr.LeftBorder.Type=this.data.readUInt8(2);if(root.enum.LineType1[this.attr.LeftBorder.Type]!==undefined)this.attr.LeftBorder.Type=root.enum.LineType1[this.attr.LeftBorder.Type];
	this.attr.LeftBorder.Width=this.data.readUInt8(3);if(root.enum.LineWidth[this.attr.LeftBorder.Width]!==undefined)this.attr.LeftBorder.Width=root.enum.LineWidth[this.attr.LeftBorder.Width];
	this.attr.LeftBorder.Color=this.data.readUInt32LE(4);
	this.attr.RightBorder = {};
	this.attr.RightBorder.Type=this.data.readUInt8(8);if(root.enum.LineType1[this.attr.RightBorder.Type]!==undefined)this.attr.RightBorder.Type=root.enum.LineType1[this.attr.RightBorder.Type];
	this.attr.RightBorder.Width=this.data.readUInt8(9);if(root.enum.LineWidth[this.attr.RightBorder.Width]!==undefined)this.attr.RightBorder.Width=root.enum.LineWidth[this.attr.RightBorder.Width];
	this.attr.RightBorder.Color=this.data.readUInt32LE(10);
	this.attr.TopBorder = {};
	this.attr.TopBorder.Type=this.data.readUInt8(14);if(root.enum.LineType1[this.attr.TopBorder.Type]!==undefined)this.attr.TopBorder.Type=root.enum.LineType1[this.attr.TopBorder.Type];
	this.attr.TopBorder.Width=this.data.readUInt8(15);if(root.enum.LineWidth[this.attr.TopBorder.Width]!==undefined)this.attr.TopBorder.Width=root.enum.LineWidth[this.attr.TopBorder.Width];
	this.attr.TopBorder.Color=this.data.readUInt32LE(16);
	this.attr.BottomBorder = {};
	this.attr.BottomBorder.Type=this.data.readUInt8(20);if(root.enum.LineType1[this.attr.BottomBorder.Type]!==undefined)this.attr.BottomBorder.Type=root.enum.LineType1[this.attr.BottomBorder.Type];
	this.attr.BottomBorder.Width=this.data.readUInt8(21);if(root.enum.LineWidth[this.attr.BottomBorder.Width]!==undefined)this.attr.BottomBorder.Width=root.enum.LineWidth[this.attr.BottomBorder.Width];
	this.attr.BottomBorder.Color=this.data.readUInt32LE(22);
	this.attr.Diagonal = {};
	this.attr.Diagonal.Type=this.data.readUInt8(26);if(root.enum.LineType1[this.attr.Diagonal.Type]!==undefined)this.attr.Diagonal.Type=root.enum.LineType1[this.attr.Diagonal.Type];
	this.attr.Diagonal.Width=this.data.readUInt8(27);if(root.enum.LineWidth[this.attr.Diagonal.Width]!==undefined)this.attr.Diagonal.Width=root.enum.LineWidth[this.attr.Diagonal.Width];
	this.attr.Diagonal.Color=this.data.readUInt32LE(28);
	// TODO: DOC: 정말 문서와 다르게 이게 맞는지 알아내기
	// (우선 확실히 WindowBrush의 FaceColor는 +4B가 맞음)
	this.attr._type=this.data.readUInt16LE(32);
	this.attr._size=this.data.readUInt16LE(34);
	var offset={'value':36};if(this.attr._type){ /* WindowBrush가 없는 것도 있음. */
	this.attr.WindowBrush = {};
	this.attr.WindowBrush.FaceColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.WindowBrush.HatchColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.WindowBrush.HatchStyle=this.data.readInt32LE(offset.value);if(root.enum.HatchStyle[this.attr.WindowBrush.HatchStyle]!==undefined)this.attr.WindowBrush.HatchStyle=root.enum.HatchStyle[this.attr.WindowBrush.HatchStyle]; offset.value+=4;
	}
	// TODO: Gradation
};
// 4.1.6. 글자 모양
root.record.CHAR_SHAPE = function Record_CHAR_SHAPE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "CHAR_SHAPE";
	this.attr.FontIDs=[];var offset={'value':0};
	for(var ii0=0;ii0<7;ii0++){
		this.attr.FontIDs[ii0] = {};
		this.attr.FontIDs[ii0].value=this.data.readUInt16LE(offset.value); offset.value+=2;
	}
	this.attr.FontRatios=[];
	for(var ii0=0;ii0<7;ii0++){
		this.attr.FontRatios[ii0] = {};
		this.attr.FontRatios[ii0].value=this.data.readUInt8(offset.value); offset.value+=1;
	}
	this.attr.FontCharSpacings=[];
	for(var ii0=0;ii0<7;ii0++){
		this.attr.FontCharSpacings[ii0] = {};
		this.attr.FontCharSpacings[ii0].value=this.data.readInt8(offset.value); offset.value+=1;
	}
	this.attr.FontRelSizes=[];
	for(var ii0=0;ii0<7;ii0++){
		this.attr.FontRelSizes[ii0] = {};
		this.attr.FontRelSizes[ii0].value=this.data.readUInt8(offset.value); offset.value+=1;
	}
	this.attr.FontCharOffsets=[];
	for(var ii0=0;ii0<7;ii0++){
		this.attr.FontCharOffsets[ii0] = {};
		this.attr.FontCharOffsets[ii0].value=this.data.readInt8(offset.value); offset.value+=1;
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
	tmp=this.data.slice(0,4);
	this.attr.AutoTabLeft=!!(tmp[0]&0x1);
	this.attr.AutoTabRight=!!((tmp[0]&0x2)>>1);
	// TODO: count 자세히 확인
	this.attr._count=this.data.readInt16LE(4);
	var offset={'value':6};if(this.attr._count){
	this.attr.TabItem = {};
	this.attr.TabItem.Pos=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.TabItem.Type=this.data.readUInt8(offset.value);if(root.enum.TabItemType[this.attr.TabItem.Type]!==undefined)this.attr.TabItem.Type=root.enum.TabItemType[this.attr.TabItem.Type]; offset.value+=1;
	// TODO: LineType1? LineType2?
	this.attr.TabItem.Leader=this.data.readUInt8(offset.value);if(root.enum.LineType2[this.attr.TabItem.Leader]!==undefined)this.attr.TabItem.Leader=root.enum.LineType2[this.attr.TabItem.Leader]; offset.value+=1;
	}
};
// 4.1.8 문단 번호
root.record.NUMBERING = function Record_NUMBERING(data){
	var tmp; this.attr = {}; this.data = data; this.name = "NUMBERING";
	this.attr.ParaHeads=[];var offset={'value':0};
	for(var ii0=0;ii0<7;ii0++){
		this.attr.ParaHeads[ii0] = {};
		tmp=this.data.slice(offset.value,(offset.value+4)); offset.value+=4;
	this.attr.ParaHeads[ii0].Alignment=(tmp[0]&0x3);if(root.enum.AlignmentType2[this.attr.ParaHeads[ii0].Alignment]!==undefined)this.attr.ParaHeads[ii0].Alignment=root.enum.AlignmentType2[this.attr.ParaHeads[ii0].Alignment];
	this.attr.ParaHeads[ii0].UseInstWidth=!!((tmp[0]&0x4)>>2);
	this.attr.ParaHeads[ii0].AutoIndent=!!((tmp[0]&0x8)>>3);
	this.attr.ParaHeads[ii0].TextOffsetType=((tmp[0]&0x10)>>4);if(root.enum.TextOffsetType[this.attr.ParaHeads[ii0].TextOffsetType]!==undefined)this.attr.ParaHeads[ii0].TextOffsetType=root.enum.TextOffsetType[this.attr.ParaHeads[ii0].TextOffsetType];
	this.attr.ParaHeads[ii0].NumFormat=((tmp[0]&0xe0)>>5)+((tmp[1]&0x1)<<3);if(root.enum.NumberType1[this.attr.ParaHeads[ii0].NumFormat]!==undefined)this.attr.ParaHeads[ii0].NumFormat=root.enum.NumberType1[this.attr.ParaHeads[ii0].NumFormat];
		this.attr.ParaHeads[ii0].WidthAdjust=this.data.readUInt16LE(offset.value); offset.value+=2;
		this.attr.ParaHeads[ii0].TextOffset=this.data.readUInt16LE(offset.value); offset.value+=2;
		this.attr.ParaHeads[ii0].CharShape=this.data.readUInt32LE(offset.value); offset.value+=4;
		tmp=this.data.readUInt16LE(offset.value); offset.value+=2;for(this.attr.ParaHeads[ii0].value='';tmp-->0;){this.attr.ParaHeads[ii0].value+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	}
	this.attr.Start=this.data.readUInt16LE(offset.value); offset.value+=2;
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
	// LineSpacingType이 2개 있음. (2007 이하, 초과)
	this.attr.ParaMargin.LineSpacingType=(tmp[0]&0x3);if(root.enum.LineSpacingType[this.attr.ParaMargin.LineSpacingType]!==undefined)this.attr.ParaMargin.LineSpacingType=root.enum.LineSpacingType[this.attr.ParaMargin.LineSpacingType];
	this.attr.Align=((tmp[0]&0x1c)>>2);if(root.enum.AlignmentType1[this.attr.Align]!==undefined)this.attr.Align=root.enum.AlignmentType1[this.attr.Align];
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
	// TODO: 간격 종류는 어디에서?
	this.attr.ParaMargin.Indent=this.data.readInt32LE(12);
	this.attr.ParaMargin.Prev=this.data.readInt32LE(16);
	this.attr.ParaMargin.Next=this.data.readInt32LE(20);
	// 2007 이하
	this.attr.ParaMargin.LineSpacing=this.data.readInt32LE(24);
	this.attr.TabDef=this.data.readUInt16LE(28);
	this.attr.Heading=this.data.readUInt16LE(30);
	this.attr.ParaBorder.BorderFill=this.data.readUInt16LE(32);
	this.attr.ParaBorder.OffsetLeft=this.data.readInt16LE(34);
	this.attr.ParaBorder.OffsetRight=this.data.readInt16LE(36);
	this.attr.ParaBorder.OffsetTop=this.data.readInt16LE(38);
	this.attr.ParaBorder.OffsetBottom=this.data.readInt16LE(40);
	tmp=this.data.slice(42,46);
	this.attr.LineWrap=(tmp[0]&0x3);if(root.enum.LineWrapType[this.attr.LineWrap]!==undefined)this.attr.LineWrap=root.enum.LineWrapType[this.attr.LineWrap];
	// 2~3: Reserved
	this.attr.AutoSpaceEAsianEng=!!((tmp[0]&0x10)>>4);
	this.attr.AutoSpaceEAsianNum=!!((tmp[0]&0x20)>>5);
	// TODO_SOMETIME: 2007 이하에서 이게 없을까?
	tmp=this.data.slice(46,50);
	this.attr.ParaMargin.LineSpacingType=(tmp[0]&0x1f);if(root.enum.LineSpacingType[this.attr.ParaMargin.LineSpacingType]!==undefined)this.attr.ParaMargin.LineSpacingType=root.enum.LineSpacingType[this.attr.ParaMargin.LineSpacingType];
	this.attr.ParaMargin.LineSpacing=this.data.readUInt32LE(50);
};
// 4.1.11 스타일
root.record.STYLE = function Record_STYLE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "STYLE";
	tmp=this.data.readUInt16LE(0);var offset={'value':2};for(this.attr.Name='';tmp-->0;){this.attr.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	tmp=this.data.readUInt16LE(offset.value); offset.value+=2;for(this.attr.EngName='';tmp-->0;){this.attr.EngName+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	tmp=this.data.slice(offset.value,(offset.value+1)); offset.value+=1;
	this.attr.Type=(tmp[0]&0x7);if(root.enum.StyleType[this.attr.Type]!==undefined)this.attr.Type=root.enum.StyleType[this.attr.Type];
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
	this.attr.Data=this.data.slice(0,256);
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
// ??? 금칙 문자 (TODO: 항상 필드 4개인지 확인하기)
root.record.FORBIDDEN_CHAR = function Record_FORBIDDEN_CHAR(data){
	var tmp; this.attr = {}; this.data = data; this.name = "FORBIDDEN_CHAR";
	this.attr._f0_len=this.data.readUInt32LE(0);
	this.attr._f1_len=this.data.readUInt32LE(4);
	this.attr._f2_len=this.data.readUInt32LE(8);
	this.attr._f3_len=this.data.readUInt32LE(12);
	var offset={'value':16};var _attr = this.attr, _data = this.data;
		var read_str = function(len, label){
			if(len == 0) _attr[label] = "\x20";
			else{
				_attr[label] = "";
				while(len-->0){
					_attr[label] += String.fromCharCode(
						_data.readUInt16LE(offset.value)
					);
					offset.value += 2;
				}
			}
		};
		read_str(_attr._f0_len, "_f0");
		read_str(_attr._f1_len, "_f1");
		read_str(_attr._f2_len, "_f2");
		read_str(_attr._f3_len, "_f3");
};
// 4.2.1. 문단 헤더
root.record.PARA_HEADER = function Record_PARA_HEADER(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_HEADER";
	// TODO: text, control_mask가 뜻하는 것 찾기
	this.attr._text=this.data.readUInt32LE(0);
	this.attr._control_mask=this.data.readUInt32LE(4);
	this.attr.ParaShape=this.data.readUInt16LE(8);
	this.attr.Style=this.data.readUInt8(10);
	// TODO: 0, 1 -> ?
	tmp=this.data.slice(11,12);
	this.attr.PageBreak=!!((tmp[0]&0x4)>>2);
	this.attr.ColumnBreak=!!((tmp[0]&0x8)>>3);
	// TODO: 아래 필드들 이용하기
	this.attr.CharShapeCount=this.data.readUInt16LE(12);
	this.attr.RangeTagCount=this.data.readUInt16LE(14);
	this.attr.AlignInfoCount=this.data.readUInt16LE(16);
	this.attr.InstId=this.data.readUInt32LE(18);
};
// 4.2.2. 문단의 텍스트
root.record.PARA_TEXT = function Record_PARA_TEXT(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_TEXT";
	// 길이가 저장되지 않는 듯 함.
	var offset={'value':0};var i, c, buf = [], bi = 0;
		this.text = []; tmp = 0;
		
		var flushBuffer = (function(x){
			var y = tmp;
			if(buf.length == 0) return;
			if(tmp){
				this.text.push({
					'type': tmp,
					'start': bi/2,
					'data': buf
				});
				tmp = 0;
			}else{
				this.text.push({
					'type': 'text',
					'start': bi/2,
					'data': buf
				});
			}
			if(x){
				this.text.push({
					'type': x,
					'start': i/2
				});
				bi = i+2;
			}else if(y){
				bi = i+2;
			}else{
				bi = i;
			}
			buf = [];
		}).bind(this);

		for(i=0; i<this.data.length; i+=2){
			c = this.data.readUInt16LE(i);
			/* in extended? */
			if(tmp){
				/* Is closing? */
				if(c == tmp){
					flushBuffer();
				}else{
					buf.push(c);
				}
			}else{
				switch(c){
					case 0: case 25: case 26: case 27: case 28: case 29:
						/* Reserved */
						break;
					case 13:
						/* TODO */
						break;
					case 10: case 24: case 30: case 31:
						flushBuffer(c);
						break;
					default:
						if(c<32){
							flushBuffer(); tmp = c;
						}else{
							buf.push(c);
						}
				}
			}
		}

		flushBuffer();
	// Text 형식: type=text 또는 type=숫자, start는 시작 지점, data는 데이터
};
// 4.2.3. 문단의 글자 모양
root.record.PARA_CHAR_SHAPE = function Record_PARA_CHAR_SHAPE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_CHAR_SHAPE";
	var offset={'value':0};this.values = [];
		for(tmp=0; tmp<this.data.length; tmp+=8){
			this.values.push({
				'start': this.data.readUInt32LE(tmp),
				'charShape': this.data.readUInt32LE(tmp+4)
			});
		};
};
// 4.2.4. 문단의 레이아웃
root.record.PARA_LINE_SEG = function Record_PARA_LINE_SEG(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_LINE_SEG";
	// TODO: 적외선 굴절기 제조법 찾기
};
// 4.2.5. 문단의 영역 태그
root.record.PARA_RANGE_TAG = function Record_PARA_RANGE_TAG(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_RANGE_TAG";
	// TODO: 직접 처리
};
// 4.2.6. 컨트롤 헤더
root.record.CTRL_HEADER = function Record_CTRL_HEADER(data){
	var tmp; this.attr = {}; this.data = data; this.name = "CTRL_HEADER";
	// TODO: 적절한 이름 정하기
	tmp=this.data.readUInt32LE(0);this.attr._Type=String.fromCharCode(tmp>>24,tmp>>16&0xFF,tmp>>8&0xFF,tmp&0xFF);
	// 개체 공통 속성 읽기
	var offset={'value':4};switch(''+(this.attr._Type)){
	case "eqed": case "tbl ": case "gso ":
	this.attr.ShapeObject = {};
	this.attr.ShapeObject.Size = {};
	
	this.attr.ShapeObject.Position = {};
	
	this.attr.ShapeObject.OutsideMargin = {};
	
	this.attr.ShapeObject.ShapeComment = {};
	
	tmp=this.data.slice(offset.value,(offset.value+4)); offset.value+=4;
	this.attr.ShapeObject.Position.TreatAsChar=!!(tmp[0]&0x1);
	// 1: Reserved
	this.attr.ShapeObject.Position.AffectLSpacing=!!((tmp[0]&0x4)>>2);
	this.attr.ShapeObject.Position.VertRelTo=((tmp[0]&0x18)>>3);if(root.enum.VertRelToType[this.attr.ShapeObject.Position.VertRelTo]!==undefined)this.attr.ShapeObject.Position.VertRelTo=root.enum.VertRelToType[this.attr.ShapeObject.Position.VertRelTo];
	// TODO_SOMETIME: 문서 설명 참고
	this.attr.ShapeObject.Position.VertAlign=((tmp[0]&0xe0)>>5);if(root.enum.VertAlignType[this.attr.ShapeObject.Position.VertAlign]!==undefined)this.attr.ShapeObject.Position.VertAlign=root.enum.VertAlignType[this.attr.ShapeObject.Position.VertAlign];
	this.attr.ShapeObject.Position.HorzRelTo=(tmp[1]&0x3);if(root.enum.HorzRelToType[this.attr.ShapeObject.Position.HorzRelTo]!==undefined)this.attr.ShapeObject.Position.HorzRelTo=root.enum.HorzRelToType[this.attr.ShapeObject.Position.HorzRelTo];
	this.attr.ShapeObject.Position.HorzAlign=((tmp[1]&0x1c)>>2);if(root.enum.HorzAlignType[this.attr.ShapeObject.Position.HorzAlign]!==undefined)this.attr.ShapeObject.Position.HorzAlign=root.enum.HorzAlignType[this.attr.ShapeObject.Position.HorzAlign];
	this.attr.ShapeObject.Position.FlowWithText=!!((tmp[1]&0x20)>>5);
	this.attr.ShapeObject.Position.AllowOverlap=!!((tmp[1]&0x40)>>6);
	this.attr.ShapeObject.Size.WidthRelTo=((tmp[1]&0x80)>>7)+((tmp[2]&0x3)<<1);if(root.enum.WidthRelToType[this.attr.ShapeObject.Size.WidthRelTo]!==undefined)this.attr.ShapeObject.Size.WidthRelTo=root.enum.WidthRelToType[this.attr.ShapeObject.Size.WidthRelTo];
	this.attr.ShapeObject.Size.HeightRelTo=((tmp[2]&0xc)>>2);if(root.enum.HeightRelToType[this.attr.ShapeObject.Size.HeightRelTo]!==undefined)this.attr.ShapeObject.Size.HeightRelTo=root.enum.HeightRelToType[this.attr.ShapeObject.Size.HeightRelTo];
	this.attr.ShapeObject.Size.Protect=!!((tmp[2]&0x10)>>4);
	this.attr.ShapeObject.TextWrap=((tmp[2]&0xe0)>>5);if(root.enum.TextWrapType[this.attr.ShapeObject.TextWrap]!==undefined)this.attr.ShapeObject.TextWrap=root.enum.TextWrapType[this.attr.ShapeObject.TextWrap];
	this.attr.ShapeObject.TextFlow=(tmp[3]&0x3);if(root.enum.TextFlowType[this.attr.ShapeObject.TextFlow]!==undefined)this.attr.ShapeObject.TextFlow=root.enum.TextFlowType[this.attr.ShapeObject.TextFlow];
	this.attr.ShapeObject.NumberingType=((tmp[3]&0x1c)>>2);if(root.enum.NumberingType[this.attr.ShapeObject.NumberingType]!==undefined)this.attr.ShapeObject.NumberingType=root.enum.NumberingType[this.attr.ShapeObject.NumberingType];
	this.attr.ShapeObject.Position.VertOffset=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.ShapeObject.Position.HorzOffset=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.ShapeObject.Size.Width=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.ShapeObject.Size.Height=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.ShapeObject.ZOrder=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.ShapeObject.OutsideMargin.Left=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.ShapeObject.OutsideMargin.Right=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.ShapeObject.OutsideMargin.Top=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.ShapeObject.OutsideMargin.Bottom=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.ShapeObject.InstId=this.data.readUInt32LE(offset.value); offset.value+=4;
	// TODO_SOMETIME: 이 4 바이트의 정체는? (캡션 수?)
	this.attr.ShapeObject._unknown=this.data.readUInt32LE(offset.value); offset.value+=4;
	tmp=this.data.readUInt16LE(offset.value); offset.value+=2;for(this.attr.ShapeObject.ShapeComment.value='';tmp-->0;){this.attr.ShapeObject.ShapeComment.value+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	break;
	}
	switch(''+(this.attr._Type)){
	case "eqed": case "tbl ": case "gso ":
	// 아무 데이터도 없음.
	break;
	case "secd":
	// Section Definition
	this.attr.Hide = {};
	
	this.attr.StartNumber = {};
	
	tmp=this.data.slice(offset.value,(offset.value+4)); offset.value+=4;
	this.attr.Hide.Header=!!(tmp[0]&0x1);
	this.attr.Hide.Footer=!!((tmp[0]&0x2)>>1);
	this.attr.Hide.MasterPage=!!((tmp[0]&0x4)>>2);
	this.attr.Hide.Border=!!((tmp[0]&0x8)>>3);
	this.attr.Hide.Fill=!!((tmp[0]&0x10)>>4);
	this.attr.Hide.PageNumPos=!!((tmp[0]&0x20)>>5);
	this.attr.FirstBorder=!!(tmp[1]&0x1);
	this.attr.FirstFill=!!((tmp[1]&0x2)>>1);
	this.attr.TextDirection=(tmp[2]&0x7);
	this.attr.Hide.EmptyLine=!!((tmp[2]&0x8)>>3);
	this.attr.StartNumber.PageStartsOn=((tmp[2]&0x30)>>4);if(root.enum.PageStartsOnType[this.attr.StartNumber.PageStartsOn]!==undefined)this.attr.StartNumber.PageStartsOn=root.enum.PageStartsOnType[this.attr.StartNumber.PageStartsOn];
	// TODO: 22: 원고지 정서법 적용 여부
	this.attr.SpaceColumns=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.LineGrid=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.CharGrid=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.TabStop=this.data.readUInt32LE(offset.value); offset.value+=4;
	// TODO: Page 기본값은 0? 1?
	this.attr.StartNumber.Page=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.StartNumber.Figure=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.StartNumber.Table=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.StartNumber.Equation=this.data.readUInt16LE(offset.value); offset.value+=2;
	// TODO: 뭔가 빠진 듯 한데
	// TODO_SOMETIME: 뒤에 다른 설정 데이터가 같이 있나?
	break;
	case "cold":
	tmp=this.data.slice(offset.value,(offset.value+2)); offset.value+=2;
	this.attr.Type=(tmp[0]&0x3);if(root.enum.ColDefType[this.attr.Type]!==undefined)this.attr.Type=root.enum.ColDefType[this.attr.Type];
	this.attr.Count=((tmp[0]&0xfc)>>2)+((tmp[1]&0x3)<<6);
	this.attr.Layout=((tmp[1]&0xc)>>2);if(root.enum.LayoutType[this.attr.Layout]!==undefined)this.attr.Layout=root.enum.LayoutType[this.attr.Layout];
	this.attr.SameSize=!!((tmp[1]&0x10)>>4);
	// TODO: 데이터 더 읽기. (다양한 경우에 대해 조사)
	break;
	default:
	console.warn("Warning [CTRL_HEADER]: not processing Control Type '%s'", this.attr._Type);
	}
	this.type = this.attr._Type; delete this.attr._Type;
};
// 4.2.7. 문단 리스트 헤드
root.record.LIST_HEADER = function Record_LIST_HEADER(data){
	var tmp; this.attr = {}; this.data = data; this.name = "LIST_HEADER";
	// TODO: DOC: 이게 정말 32비트인지, 아니면 16비트의 다른 필드가 더 있는지 확인하기
	this.attr._ParaCount=this.data.readInt32LE(0);
	// DOC: 문서와 오프셋, 크기가 다른 듯.
	tmp=this.data.slice(4,6);
	this.attr.TextDirection=(tmp[0]&0x7);
	this.attr.LineWrap=((tmp[0]&0x18)>>3);if(root.enum.LineWrapType[this.attr.LineWrap]!==undefined)this.attr.LineWrap=root.enum.LineWrapType[this.attr.LineWrap];
	this.attr.VertAlign=((tmp[0]&0x60)>>5);if(root.enum.VertAlignType[this.attr.VertAlign]!==undefined)this.attr.VertAlign=root.enum.VertAlignType[this.attr.VertAlign];
	// 다른 객체(예: CELL)들이 이 레코드를 이용해서 여러 정보를 담는 듯
	var offset={'value':6};this.offset = offset.value;
};
// 4.2.8. 컨트롤 임의의 데이터
root.record.CTRL_DATA = function Record_CTRL_DATA(data){
	var tmp; this.attr = {}; this.data = data; this.name = "CTRL_DATA";
};
// 4.2.9. 개체 공통 속성을 포함하는 컨트롤
// 4.2.9.1. 표 개체
root.record.TABLE = function Record_TABLE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "TABLE";
	tmp=this.data.slice(0,4);
	// TODO_SOMETIME: PageBreak값이 틀린 듯?
	this.attr.PageBreak=(tmp[0]&0x3);if(root.enum.PageBreakType[this.attr.PageBreak]!==undefined)this.attr.PageBreak=root.enum.PageBreakType[this.attr.PageBreak];
	this.attr.RepeatHeader=!!((tmp[0]&0x4)>>2);
	// TODO_SOMETIME: 여기에 뭔가 있다.
	this.attr.RowCount=this.data.readUInt16LE(4);
	this.attr.ColCount=this.data.readUInt16LE(6);
	this.attr.CellSpacing=this.data.readUInt16LE(8);
	this.attr.InsideMargin = {};
	this.attr.InsideMargin.Left=this.data.readUInt16LE(10);
	this.attr.InsideMargin.Right=this.data.readUInt16LE(12);
	this.attr.InsideMargin.Top=this.data.readUInt16LE(14);
	this.attr.InsideMargin.Bottom=this.data.readUInt16LE(16);
	this.attr._RowSizes=[];var offset={'value':18};
	for(var ii0=0;ii0<this.attr.RowCount;ii0++){
		this.attr._RowSizes[ii0] = {};
		this.attr._RowSizes[ii0].value=this.data.readUInt16LE(offset.value); offset.value+=2;
	}
	this.attr.BorderFill=this.data.readUInt16LE(offset.value); offset.value+=2;
	// TODO_SOMETIME: Valid Zone Info
};
// LIST_HEADER가 앞에 있는 CELL
root.record.LIST_CELL = function Record_LIST_CELL(data){
	var tmp; this.attr = {}; this.data = data; this.name = "LIST_CELL";
	// DOC: 문서에 설명이 없음!
	tmp=this.data.slice(0,2);
	this.attr.HasMargin=!!(tmp[0]&0x1);
	this.attr.Protect=!!((tmp[0]&0x2)>>1);
	this.attr.Header=!!((tmp[0]&0x4)>>2);
	this.attr.Editable=!!((tmp[0]&0x8)>>3);
	// TODO_SOMETIME: DIRTY?
	this.attr.ColAddr=this.data.readUInt16LE(2);
	this.attr.RowAddr=this.data.readUInt16LE(4);
	this.attr.ColSpan=this.data.readUInt16LE(6);
	this.attr.RowSpan=this.data.readUInt16LE(8);
	this.attr.Width=this.data.readUInt32LE(10);
	this.attr.Height=this.data.readUInt32LE(14);
	this.attr.CellMargin = {};
	// TODO: 방향 확정짓기
	this.attr.CellMargin.Left=this.data.readUInt16LE(18);
	this.attr.CellMargin.Right=this.data.readUInt16LE(20);
	this.attr.CellMargin.Top=this.data.readUInt16LE(22);
	this.attr.CellMargin.Bottom=this.data.readUInt16LE(24);
	this.attr.BorderFill=this.data.readUInt16LE(26);
};
// 4.2.9.2. 그리기 개체
// 4.2.9.2.1. 개체 요소
root.record.SHAPE_COMPONENT = function Record_SHAPE_COMPONENT(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT";
	// TODO: DOC: 루트인 경우에만 이 값이 중복되는 것 같은데, 확인할 것!
	tmp=this.data.readUInt32LE(0);this.attr._Type=String.fromCharCode(tmp>>24,tmp>>16&0xFF,tmp>>8&0xFF,tmp&0xFF);
	tmp=this.data.readUInt32LE(4);this.attr._Type2=String.fromCharCode(tmp>>24,tmp>>16&0xFF,tmp>>8&0xFF,tmp&0xFF);
	var offset={'value':8};this.attr._IsDup = this.attr._Type == this.attr._Type2;
		if(!this.attr._IsDup) offset.value -= 4;
	this.attr.XPos=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.YPos=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.GroupLevel=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr._LocalFileVersion=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.OriWidth=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.OriHeight=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.CurWidth=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.CurHeight=this.data.readUInt32LE(offset.value); offset.value+=4;
	tmp=this.data.slice(offset.value,(offset.value+4)); offset.value+=4;
	this.attr.HorzFlip=!!(tmp[0]&0x1);
	this.attr.VertFlip=!!((tmp[0]&0x2)>>1);
	// TODO_SOMETIME: 16, 19번째 비트
	this.attr.RotationInfo = {};
	this.attr.RotationInfo.Angle=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.RotationInfo.CenterX=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.RotationInfo.CenterY=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.RenderingInfo = {};
	this.attr.RenderingInfo._Count=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr.RenderingInfo.TransMatrix = {};
	this.attr.RenderingInfo.TransMatrix.E1=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo.TransMatrix.E2=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo.TransMatrix.E3=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo.TransMatrix.E4=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo.TransMatrix.E5=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo.TransMatrix.E6=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices=[];
	for(var ii0=0;ii0<this.attr.RenderingInfo._Count;ii0++){
		this.attr.RenderingInfo._ScaRotMatrices[ii0] = {};
		this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix = {};
	this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix.E1=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix.E2=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix.E3=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix.E4=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix.E5=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].ScaMatrix.E6=this.data.readDoubleLE(offset.value); offset.value+=8;
		this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix = {};
	this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix.E1=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix.E2=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix.E3=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix.E4=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix.E5=this.data.readDoubleLE(offset.value); offset.value+=8;
	this.attr.RenderingInfo._ScaRotMatrices[ii0].RotMatrix.E6=this.data.readDoubleLE(offset.value); offset.value+=8;
	}
	switch(''+(this.attr._Type)){
	case "$con":
	this.attr._Count=this.data.readUInt16LE(offset.value); offset.value+=2;
	this.attr._CTypes=[];
	for(var ii0=0;ii0<this.attr._Count;ii0++){
		this.attr._CTypes[ii0] = {};
		tmp=this.data.readUInt32LE(offset.value);this.attr._CTypes[ii0].value=String.fromCharCode(tmp>>24,tmp>>16&0xFF,tmp>>8&0xFF,tmp&0xFF); offset.value+=4;
	}
	this.attr.InstID=this.data.readUInt32LE(offset.value); offset.value+=4;
	break;
	case "$rec": case "$lin": case "$ell": case "$col": case "$pol": case "$arc": case "$cur":
	this.attr.LineShape = {};
	this.attr.LineShape.Color=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.LineShape.Width=this.data.readInt32LE(offset.value); offset.value+=4;
	tmp=this.data.slice(offset.value,(offset.value+4)); offset.value+=4;
	this.attr.LineShape.Style=(tmp[0]&0x3f);if(root.enum.LineType1[this.attr.LineShape.Style]!==undefined)this.attr.LineShape.Style=root.enum.LineType1[this.attr.LineShape.Style];
	this.attr.LineShape.EndCap=((tmp[0]&0xc0)>>6)+((tmp[1]&0x3)<<2);if(root.enum.EndCapType[this.attr.LineShape.EndCap]!==undefined)this.attr.LineShape.EndCap=root.enum.EndCapType[this.attr.LineShape.EndCap];
	this.attr.LineShape.HeadStyle=((tmp[1]&0xfc)>>2);if(root.enum.ArrowType[this.attr.LineShape.HeadStyle]!==undefined)this.attr.LineShape.HeadStyle=root.enum.ArrowType[this.attr.LineShape.HeadStyle];
	this.attr.LineShape.TailStyle=(tmp[2]&0x3f);if(root.enum.ArrowType[this.attr.LineShape.TailStyle]!==undefined)this.attr.LineShape.TailStyle=root.enum.ArrowType[this.attr.LineShape.TailStyle];
	this.attr.LineShape.HeadSize=((tmp[2]&0xc0)>>6)+((tmp[3]&0x3)<<2);if(root.enum.ArrowSize[this.attr.LineShape.HeadSize]!==undefined)this.attr.LineShape.HeadSize=root.enum.ArrowSize[this.attr.LineShape.HeadSize];
	this.attr.LineShape.TailSize=((tmp[3]&0x3c)>>2);if(root.enum.ArrowSize[this.attr.LineShape.TailSize]!==undefined)this.attr.LineShape.TailSize=root.enum.ArrowSize[this.attr.LineShape.TailSize];
	// TODO_SOMETIME: 30, 31은?
	this.attr.LineShape.OutlineStyle=this.data.readUInt8(offset.value);if(root.enum.OutlineStyleType[this.attr.LineShape.OutlineStyle]!==undefined)this.attr.LineShape.OutlineStyle=root.enum.OutlineStyleType[this.attr.LineShape.OutlineStyle]; offset.value+=1;
	this.attr.FillBrush = {};
	this.attr.FillBrush._BrushType=this.data.readUInt32LE(offset.value); offset.value+=4;
	switch(''+(this.attr.FillBrush._BrushType)){
	case "0":
	// TODO
	this.attr.FillBrush._Unknown=this.data.readInt32LE(offset.value); offset.value+=4;
	break;
	case "1":
	this.attr.FillBrush.WindowBrush = {};
	this.attr.FillBrush.WindowBrush.FaceColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	// TODO: HatchColor, HatchStyle
	this.attr.FillBrush.WindowBrush._Unknown1=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.WindowBrush._Unknown2=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.WindowBrush._Unknown3=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.WindowBrush.Alpha=this.data.readUInt8(offset.value); offset.value+=1;
	break;
	case "4":
	this.attr.FillBrush.Gradation = {};
	this.attr.FillBrush.Gradation.Type=this.data.readUInt8(offset.value);if(root.enum.GradationType[this.attr.FillBrush.Gradation.Type]!==undefined)this.attr.FillBrush.Gradation.Type=root.enum.GradationType[this.attr.FillBrush.Gradation.Type]; offset.value+=1;
	this.attr.FillBrush.Gradation.Angle=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.Gradation.CenterX=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.Gradation.CenterY=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.Gradation.Step=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.Gradation.ColorNum=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.Gradation._Colors=[];
	for(var ii0=0;ii0<this.attr.FillBrush.Gradation.ColorNum;ii0++){
		this.attr.FillBrush.Gradation._Colors[ii0] = {};
		this.attr.FillBrush.Gradation._Colors[ii0].value=this.data.readUInt32LE(offset.value); offset.value+=4;
	}
	// TODO
	this.attr.FillBrush.Gradation._Unknown=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.FillBrush.Gradation.StepCenter=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.FillBrush.Gradation.Alpha=this.data.readUInt8(offset.value); offset.value+=1;
	break;
	default:
	console.warn("Warning [SHAPE_COMPONENT]: not processing FillBrush Type '%s'", this.attr._BrushType);
	}
	this.attr.Shadow = {};
	this.attr.Shadow.Type=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.Shadow.Color=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.Shadow.OffsetX=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.Shadow.OffsetY=this.data.readInt32LE(offset.value); offset.value+=4;
	this.attr.InstID=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.LineShape.Alpha=this.data.readUInt8(offset.value); offset.value+=1;
	this.attr.Shadow.Alpha=this.data.readUInt8(offset.value); offset.value+=1;
	break;
	default:
	console.warn("Warning [SHAPE_COMPONENT]: not processing ShapeComponent Type '%s'", this.attr._Type);
				console.warn("%s | %s", this.attr._Type, bufferToString(this.data.slice(offset.value)))
	}
};
// 4.2.9.2.2. 선 개체
root.record.SHAPE_COMPONENT_LINE = function Record_SHAPE_COMPONENT_LINE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_LINE";
	this.attr.StartX=this.data.readInt32LE(0);
	this.attr.StartY=this.data.readInt32LE(4);
	this.attr.EndX=this.data.readInt32LE(8);
	this.attr.EndY=this.data.readInt32LE(12);
	// TODO: DOC: 여기가 32비트인 것 같음; IsReverseHV 더하기
};
// 4.2.9.2.3. 사각형 개체
root.record.SHAPE_COMPONENT_RECTANGLE = function Record_SHAPE_COMPONENT_RECTANGLE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_RECTANGLE";
	this.attr.Ratio=this.data.readUInt8(0);
	// DOC: 문서와 다르게 이렇게 저장됨
	this.attr.X0=this.data.readInt32LE(1);
	this.attr.Y0=this.data.readInt32LE(5);
	this.attr.X1=this.data.readInt32LE(9);
	this.attr.Y1=this.data.readInt32LE(13);
	this.attr.X2=this.data.readInt32LE(17);
	this.attr.Y2=this.data.readInt32LE(21);
	this.attr.X3=this.data.readInt32LE(25);
	this.attr.Y3=this.data.readInt32LE(29);
};
// 4.2.9.2.4. 타원 개체
root.record.SHAPE_COMPONENT_ELLIPSE = function Record_SHAPE_COMPONENT_ELLIPSE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_ELLIPSE";
	// TODO
};
// 4.2.9.2.5. 다각형 개체
root.record.SHAPE_COMPONENT_POLYGON = function Record_SHAPE_COMPONENT_POLYGON(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_POLYGON";
	// DOC: 32비트임
	this.attr._Count=this.data.readInt32LE(0);
	// DOC: 이렇게 저장됨
	this.attr._Points=[];var offset={'value':4};
	for(var ii0=0;ii0<this.attr._Count;ii0++){
		this.attr._Points[ii0] = {};
		this.attr._Points[ii0].X=this.data.readInt32LE(offset.value); offset.value+=4;
		this.attr._Points[ii0].Y=this.data.readInt32LE(offset.value); offset.value+=4;
	}
	// TODO_SOMETIME: 뒤에 뭐가 더 있는 것 같음 (4바이트)
};
// 4.2.9.2.6. 호 개체
root.record.SHAPE_COMPONENT_ARC = function Record_SHAPE_COMPONENT_ARC(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_ARC";
	// TODO: DOC: 이 1바이트가 Type인 것 같은데, 확인하기
	this.attr._Type=this.data.readUInt8(0);
	this.attr.CenterX=this.data.readInt32LE(1);
	this.attr.CenterY=this.data.readInt32LE(5);
	this.attr.Axis1X=this.data.readInt32LE(9);
	this.attr.Axis1Y=this.data.readInt32LE(13);
	this.attr.Axis2X=this.data.readInt32LE(17);
	this.attr.Axis2Y=this.data.readInt32LE(21);
};
// 4.2.9.2.7. 곡선 개체
root.record.SHAPE_COMPONENT_CURVE = function Record_SHAPE_COMPONENT_CURVE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_CURVE";
	// DOC: 32비트임
	this.attr._Count=this.data.readInt32LE(0);
	// DOC: 이렇게 저장됨
	this.attr._Points=[];var offset={'value':4};
	for(var ii0=0;ii0<this.attr._Count;ii0++){
		this.attr._Points[ii0] = {};
		this.attr._Points[ii0]._X=this.data.readInt32LE(offset.value); offset.value+=4;
		this.attr._Points[ii0]._Y=this.data.readInt32LE(offset.value); offset.value+=4;
	}
	this.attr._Count--;
	this.attr._Types=[];
	for(var ii0=0;ii0<this.attr._Count;ii0++){
		this.attr._Types[ii0] = {};
		this.attr._Types[ii0].value=this.data.readUInt8(offset.value);if(root.enum.SegmentType[this.attr._Types[ii0].value]!==undefined)this.attr._Types[ii0].value=root.enum.SegmentType[this.attr._Types[ii0].value]; offset.value+=1;
	}
	this.attr._Count++;
	// TODO_SOMETIME: 다각형 개체처럼 뒤에 뭐가 더 있음.
};
// 4.2.9.3. 한글 스크립트 수식 (한글 97 방식 수식)
root.record.EQEDIT = function Record_EQEDIT(data){
	var tmp; this.attr = {}; this.data = data; this.name = "EQEDIT";
	tmp=this.data.slice(0,4);
	this.attr.LineMode=!!(tmp[0]&0x1);
	this.attr.Script = {};
	tmp=this.data.readUInt16LE(4);var offset={'value':6};for(this.attr.Script.value='';tmp-->0;){this.attr.Script.value+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	this.attr.BaseUnit=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.TextColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.BaseLine=this.data.readInt16LE(offset.value); offset.value+=2;
	// TODO_SOMETIME: 이것 뜻 찾기
	this.attr._unknown=this.data.readInt16LE(offset.value); offset.value+=2;
	// 문서에 없는 것
	tmp=this.data.readUInt16LE(offset.value); offset.value+=2;for(this.attr.Version='';tmp-->0;){this.attr.Version+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
};
// 4.2.9.4. 그림 개체
// TODO 이게 정말 맞는 건지 확인하기
root.record.SHAPE_COMPONENT_PICTURE = function Record_SHAPE_COMPONENT_PICTURE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_PICTURE";
	// TODO
};
// 4.2.9.5. OLE 개체
root.record.SHAPE_COMPONENT_OLE = function Record_SHAPE_COMPONENT_OLE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_OLE";
	// TODO
};
// ???? TODO: 이것들 분류 찾기
root.record.SHAPE_COMPONENT_TEXTART = function Record_SHAPE_COMPONENT_TEXTART(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_TEXTART";
	// TODO
};
// 4.2.10.1.1. 용지 설정
root.record.PAGE_DEF = function Record_PAGE_DEF(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PAGE_DEF";
	this.attr.Width=this.data.readUInt32LE(0);
	this.attr.Height=this.data.readUInt32LE(4);
	this.attr.PageMargin = {};
	this.attr.PageMargin.Left=this.data.readUInt32LE(8);
	this.attr.PageMargin.Right=this.data.readUInt32LE(12);
	this.attr.PageMargin.Top=this.data.readUInt32LE(16);
	this.attr.PageMargin.Bottom=this.data.readUInt32LE(20);
	this.attr.PageMargin.Header=this.data.readUInt32LE(24);
	this.attr.PageMargin.Footer=this.data.readUInt32LE(28);
	this.attr.PageMargin.Gutter=this.data.readUInt32LE(32);
	tmp=this.data.slice(36,40);
	this.attr.Landscape=(tmp[0]&0x1);
	this.attr.GutterType=((tmp[0]&0x6)>>1);if(root.enum.GutterType[this.attr.GutterType]!==undefined)this.attr.GutterType=root.enum.GutterType[this.attr.GutterType];
};
// 4.2.10.1.2. 각주/미주 모양
root.record.FOOTNOTE_SHAPE = function Record_FOOTNOTE_SHAPE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "FOOTNOTE_SHAPE";
	this.attr.AutoNumFormat = {};
	
	this.attr.NoteLine = {};
	
	this.attr.NoteSpacing = {};
	
	this.attr.NoteNumbering = {};
	
	this.attr.NotePlacement = {};
	
	tmp=this.data.slice(0,4);
	this.attr.AutoNumFormat.Type=tmp[0];if(root.enum.NumberType2[this.attr.AutoNumFormat.Type]!==undefined)this.attr.AutoNumFormat.Type=root.enum.NumberType2[this.attr.AutoNumFormat.Type];
	// 각주인지 미주인지에 따라 달라짐!
	this.attr.NotePlacement.Place=(tmp[1]&0x3);
	this.attr.NoteNumbering.Type=((tmp[1]&0xc)>>2);if(root.enum.NoteNumberingType[this.attr.NoteNumbering.Type]!==undefined)this.attr.NoteNumbering.Type=root.enum.NoteNumberingType[this.attr.NoteNumbering.Type];
	this.attr.AutoNumFormat.Superscript=!!((tmp[1]&0x10)>>4);
	this.attr.NotePlacement.BeneathText=!!((tmp[1]&0x20)>>5);
	this.attr.AutoNumFormat.UserChar=this.data.readUInt16LE(4);if(this.attr.AutoNumFormat.UserChar)this.attr.AutoNumFormat.UserChar=String.fromCharCode(this.attr.AutoNumFormat.UserChar);else this.attr.AutoNumFormat.UserChar=null;
	this.attr.AutoNumFormat.PrefixChar=this.data.readUInt16LE(6);if(this.attr.AutoNumFormat.PrefixChar)this.attr.AutoNumFormat.PrefixChar=String.fromCharCode(this.attr.AutoNumFormat.PrefixChar);else this.attr.AutoNumFormat.PrefixChar=null;
	this.attr.AutoNumFormat.SuffixChar=this.data.readUInt16LE(8);if(this.attr.AutoNumFormat.SuffixChar)this.attr.AutoNumFormat.SuffixChar=String.fromCharCode(this.attr.AutoNumFormat.SuffixChar);else this.attr.AutoNumFormat.SuffixChar=null;
	this.attr.NoteNumbering.NewNumber=this.data.readUInt16LE(10);
	// 문서가 틀림! (16비트가 아니라 32비트)
	// Length가 -1이 될 수도 있는 듯
	this.attr.NoteLine.Length=this.data.readInt32LE(12);
	this.attr.NoteSpacing.AboveLine=this.data.readUInt16LE(16);
	this.attr.NoteSpacing.BelowLine=this.data.readUInt16LE(18);
	this.attr.NoteSpacing.BetweenNotes=this.data.readUInt16LE(20);
	this.attr.NoteLine.Type=this.data.readUInt8(22);if(root.enum.LineType1[this.attr.NoteLine.Type]!==undefined)this.attr.NoteLine.Type=root.enum.LineType1[this.attr.NoteLine.Type];
	this.attr.NoteLine.Width=this.data.readUInt8(23);if(root.enum.LineWidth[this.attr.NoteLine.Width]!==undefined)this.attr.NoteLine.Width=root.enum.LineWidth[this.attr.NoteLine.Width];
	this.attr.NoteLine.Color=this.data.readUInt32LE(24);
};
// 4.2.10.1.3. 쪽/테두리 배경
root.record.PAGE_BORDER_FILL = function Record_PAGE_BORDER_FILL(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PAGE_BORDER_FILL";
	tmp=this.data.slice(0,4);
	this.attr.TextBorder=!!(tmp[0]&0x1);
	this.attr.HeaderInside=!!((tmp[0]&0x2)>>1);
	this.attr.FooterInside=!!((tmp[0]&0x4)>>2);
	this.attr.FillArea=((tmp[0]&0x18)>>3);if(root.enum.FillAreaType[this.attr.FillArea]!==undefined)this.attr.FillArea=root.enum.FillAreaType[this.attr.FillArea];
	this.attr.PageOffset = {};
	this.attr.PageOffset.Left=this.data.readUInt16LE(4);
	this.attr.PageOffset.Right=this.data.readUInt16LE(6);
	this.attr.PageOffset.Top=this.data.readUInt16LE(8);
	this.attr.PageOffset.Bottom=this.data.readUInt16LE(10);
	this.attr.BorderFill=this.data.readUInt16LE(12);
};
// ???? TODO: 이것들 분류 찾기
root.record.MEMO_LIST = function Record_MEMO_LIST(data){
	var tmp; this.attr = {}; this.data = data; this.name = "MEMO_LIST";
	// TODO
};
root.tag.table = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"DOCUMENT_PROPERTIES","ID_MAPPINGS","BIN_DATA","FACE_NAME","BORDER_FILL","CHAR_SHAPE","TAB_DEF","NUMBERING","BULLET","PARA_SHAPE","STYLE","DOC_DATA","DISTRIBUTE_DOC_DATA",null,"COMPATIBLE_DOCUMENT","LAYOUT_COMPATIBILITY",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"PARA_HEADER","PARA_TEXT","PARA_CHAR_SHAPE","PARA_LINE_SEG","PARA_RANGE_TAG","CTRL_HEADER","LIST_HEADER","PAGE_DEF","FOOTNOTE_SHAPE","PAGE_BORDER_FILL","SHAPE_COMPONENT","TABLE","SHAPE_COMPONENT_LINE","SHAPE_COMPONENT_RECTANGLE","SHAPE_COMPONENT_ELLIPSE","SHAPE_COMPONENT_ARC","SHAPE_COMPONENT_POLYGON","SHAPE_COMPONENT_CURVE","SHAPE_COMPONENT_OLE","SHAPE_COMPONENT_PICTURE","SHAPE_COMPONENT_CONTAINER","CTRL_DATA","EQEDIT",null,"SHAPE_COMPONENT_TEXTART","FORM_OBJECT","MEMO_SHAPE","MEMO_LIST","FORBIDDEN_CHAR","CHART_DATA",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"SHAPE_COMPONENT_UNKNOWN"];

// Node
var HWPNode = function HWPNode(){
	this.children = [];
	this.text_children = [];
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
HWPNode.prototype.offset = null;

HWPNode.prototype.getEncodedValue = function(toHML){
	if(this.value == null) return null;
	switch(this.encoding){
		case 'base64':
			return escapeHTML((new Buffer(this.value, 'utf16le')).toString('base64'));
		default:
			if(this.text_children && this.text_children.length > 0){
				var li = 0, v = "";
				this.text_children.forEach(function(elem){
					v += escapeHTML(this.value.slice(li, elem.offset));
					v += toHML(elem, '', '');
					li = elem.offset;
				}, this);
				return v + escapeHTML(this.value.slice(li));
			}
	}
	return escapeHTML(this.value);
};

HWPNode.prototype.toHML = function(verbose){
	var toHML = function toHML(obj, tab, nl){
		var i, e, hml = "";
		var ov = obj.getEncodedValue(toHML);
		if(obj.name == 'HWPML')
			hml += tab + "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\" ?>\n";
		hml += tab + '<' + obj.name;
		for(e in obj.attr){
			// undefined? undefined+null?
			if(obj.attr[e] != undefined) hml += ' '+e+'="'+escapeHTML(obj.attr[e])+'"';
		}
		if(obj.children && obj.children.length > 0){
			hml += '>'+nl;
			for(i=0;i<obj.children.length;i++){
				hml += toHML(obj.children[i], verbose? tab+'  ': '', nl);
			}
			if(ov) hml += ov;
			hml += tab+'</'+obj.name+'>'+nl;
		}else if(ov != null){
			hml += '>'+ov+'</'+obj.name+'>'+nl;
		}else{
			hml += '/>'+nl;
		}
		return hml;
	};
	return toHML(this, '', verbose? '\n': '');
};

HWPNode.prototype.add = function add(elem){
	this.children.push(elem);
	this.setCount();
};

HWPNode.prototype.addText = function addText(elem){
	this.text_children.push(elem);
};

var _setAttr = function(t, n, v){
	if(t.attr[n] === undefined) console.warn("Warning [%s]: unexpected attr %s", t.name, n);
	t.attr[n] = v;
};

HWPNode.prototype.setAttrWithFilter = function(attrs, filter){
	filter = filter.bind(attrs);
	for(var name in attrs){
		if(name[0] == '_' || typeof attrs[name] == 'object') continue;
		if(filter(name)) _setAttr(this, name, attrs[name]);
	}
};

HWPNode.prototype.setAttr = function setAttr(attrs, list){
	if(list) list.forEach(function(name){
		_setAttr(this, name, attrs[name]);
	}, this);
	else for(var name in attrs){
		if(name[0] == '_' || typeof attrs[name] == 'object') continue;
		_setAttr(this, name, attrs[name]);
	}
};

HWPNode.prototype.setCount = function setCount(){
	if('Count' in this.attr) this.attr.Count = this.children.length;
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
HWPNode.prototype.findChildren = function findChildren(name){
	name = name.toUpperCase();
	return this.children.filter(function(o){return o.name === name;});
};

// Make one if not exists
HWPNode.prototype.getChildWith = function getChildWith(name, attr_name, attr_val){
	name = name.toUpperCase();
	for(var i=0;i<this.children.length;i++){
		if(this.children[i].name === name && this.children[i].attr[attr_name] === attr_val)
			return this.children[i];
	}
	var o = new root.node[name]();
	o.attr[attr_name] = attr_val;
	this.add(o); return o;
};

HWPNode.prototype.findChildWith = function findChildWith(name, attr_name, attr_val){
	name = name.toUpperCase();
	for(var i=0;i<this.children.length;i++){
		if(this.children[i].name === name && this.children[i].attr[attr_name] === attr_val)
			return this.children[i];
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
		var s = t + obj.name + ' | ' + bufferToString(obj.data);
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

HWPRawRecord.prototype.resolve = function(parent){
	var tag = root.tag.table[this.tag];
	if(!tag){
		console.warn("Warning [%s]: unknown tag %d", parent && parent.name || "(ROOT)", this.tag);
		this.children = [];
		return this;
	}
	if(!root.record[tag]) throw new Error("Non-existing record type: "+tag);

	var obj;
	try{
		obj = new root.record[tag](this.data);
	}catch(e){
		console.error("Tag: %s", tag);
		console.error("Data: %s", bufferToString(this.data));
		throw e;
	}
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
			tmp = record.resolve(prv);
			prv.children.push(tmp);
			record.parent = prvr;
			tmp.parent = prv;
			
			prvr = record;
			prv = tmp;
		}
	}
	return records;
};

root.enum.get = function get(name, i){
	if(root.enum[name][i]) return root.enum[name][i];
	return i;
};

module.exports = root;
