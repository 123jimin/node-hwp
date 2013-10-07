/**
*
*  This code is generated from /format/hwp-node-record.js and
*  /format/*.format via /generate.js with jison.
*
**/

var root;
if(typeof root === 'undefined')root={'record':{},'node':{},'tag':{},'enum':{}};
// Explict enum
root.enum.LineType1 = ["None","Solid","Dash","Dot","DashDot","DashDotDot","LongDash","Circle","DoubleSlim","SlimThick","ThickSlim","SlimThickSlim"];
root.enum.LineType2 = ["Solid","Dash","Dot","DashDot","DashDotDot","LongDash","Circle","DoubleSlim","SlimThick","ThickSlim","SlimThickSlim"];
root.enum.LineType3 = [null,"Solid","Dot","Thick","Dash","DashDot","DashDotDot"];
root.enum.LineWidth = ["0.1mm","0.12mm","0.15mm","0.2mm","0.25mm","0.3mm","0.4mm","0.5mm","0.6mm","0.7mm","1.0mm","1.5mm","2.0mm","3.0mm","4.0mm","5.0mm"];
root.enum.NumberType1 = ["Digit","CircledDigit","RomanCapital","RomanSmall","LatinCapital","LatinSmall","CircledLatinCapital","CircledLatinSmall","HangulSyllable","CircledHangulSyllable","HangulJamo","CircledHangulJamo","HangulPhonetic","Ideograph","CircledIdeograph"];
root.enum.NumberType2 = ["Digit","CircledDigit","RomanCapital","RomanSmall","LatinCapital","LatinSmall","CircledLatinCapital","CircledLatinSmall","HangulSyllable","CircledHangulSyllable","HangulJamo","CircledHangulJamo","HangulPhonetic","Ideograph","CircledIdeograph","DecagonCircle","DecagonCircleHanja",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Symbol","UserChar"];
root.enum.AlignType1 = ["Justify","Left","Right","Center","Distribute","DistributeSpace"];
root.enum.AlignType2 = ["Left","Center","Right"];
root.enum.LangType = ["Hangul","Latin","Hanja","Japanese","Other","Symbol","User"];
root.enum.HatchStyle = [null,"Horizontal","Vertical","BackSlash","Slash","Cross","CrossDiagonal"];
root.enum.InfillMode = ["Tile","TileHorzTop","TileHorzBottom","TileVertLeft","TileVertRight","Total","Center","CenterTop","CenterBottom","LeftCenter","LeftTop","LeftBottom","RightCenter","RightTop","RightBottom","Zoom"];
root.enum.LineWrapType = ["Break","Squeeze","Keep"];
root.enum.TextWrapType = ["Square","Tight","Through","TopAndBottom","BehindText","InFrontText"];
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
root.enum.LineSpacingType = ["Precent","Fixed","BetweenLines","AtLeast"];
root.enum.StyleType = ["Para","Char"];
root.enum.ItemType = ["Bstr","Integer","Set","Array","BinData"];
root.enum.PageStartsOnType = ["Both","Even","Odd"];
root.enum.GutterType = ["LeftOnly","LeftRight","TopBottom"];
root.enum.NoteNumberingType = ["Continuous","OnSection","OnPage"];
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
// HWPML nodes
// 3. 루트 엘리먼트
root.node.HWPML = function Node_HWPML(){
	this.name = "HWPML"; this.attr = {}; this.children = [];
	this.attr.Version = "2.8";
	this.attr.SubVersion = "8.0.0.0";
	this.attr.Style2 = "embed";
};
// 4. 헤더 엘리먼트
root.node.HEAD = function Node_HEAD(){
	this.name = "HEAD"; this.attr = {}; this.children = [];
	this.attr.SecCnt = null;
};
// 4.1. 문서 요약 정보 엘리먼트
root.node.DOCSUMMARY = function Node_DOCSUMMARY(){
	this.name = "DOCSUMMARY"; this.attr = {}; this.children = [];
};
root.node.TITLE = function Node_TITLE(){
	this.name = "TITLE"; this.attr = {}; this.children = [];
};
root.node.SUBJECT = function Node_SUBJECT(){
	this.name = "SUBJECT"; this.attr = {}; this.children = [];
};
root.node.AUTHOR = function Node_AUTHOR(){
	this.name = "AUTHOR"; this.attr = {}; this.children = [];
};
root.node.DATE = function Node_DATE(){
	this.name = "DATE"; this.attr = {}; this.children = [];
};
root.node.KEYWORDS = function Node_KEYWORDS(){
	this.name = "KEYWORDS"; this.attr = {}; this.children = [];
};
root.node.COMMENTS = function Node_COMMENTS(){
	this.name = "COMMENTS"; this.attr = {}; this.children = [];
};
root.node.FORBIDDENSTRING = function Node_FORBIDDENSTRING(){
	this.name = "FORBIDDENSTRING"; this.attr = {}; this.children = [];
};
root.node.FORBIDDEN = function Node_FORBIDDEN(){
	this.name = "FORBIDDEN"; this.attr = {}; this.children = [];
	this.attr.id = null;
};
// 4.2. 문서 설정 정보 엘리먼트
root.node.DOCSETTING = function Node_DOCSETTING(){
	this.name = "DOCSETTING"; this.attr = {}; this.children = [];
};
root.node.BEGINNUMBER = function Node_BEGINNUMBER(){
	this.name = "BEGINNUMBER"; this.attr = {}; this.children = [];
	this.attr.Page = null;
	this.attr.Footnote = null;
	this.attr.Endnote = null;
	this.attr.Picture = null;
	this.attr.Table = null;
	this.attr.Equation = null;
	this.attr.TotalPage = null;
};
root.node.CARETPOS = function Node_CARETPOS(){
	this.name = "CARETPOS"; this.attr = {}; this.children = [];
	this.attr.List = null;
	this.attr.Para = null;
	this.attr.Pos = null;
};
// 4.3. 문서 글꼴 / 스타일 정보
root.node.MAPPINGTABLE = function Node_MAPPINGTABLE(){
	this.name = "MAPPINGTABLE"; this.attr = {}; this.children = [];
};
// 4.3.1. 문서 내 그림 / OLE 정보
root.node.BINDATALIST = function Node_BINDATALIST(){
	this.name = "BINDATALIST"; this.attr = {}; this.children = [];
	this.attr.Count = "0";
};
root.node.BINITEM = function Node_BINITEM(){
	this.name = "BINITEM"; this.attr = {}; this.children = [];
	this.attr.Type = null;
	this.attr.APath = null;
	this.attr.RPath = null;
	this.attr.BinData = null;
	this.attr.Format = null;
};
// 4.3.2. 글꼴 정보
root.node.FACENAMELIST = function Node_FACENAMELIST(){
	this.name = "FACENAMELIST"; this.attr = {}; this.children = [];
};
root.node.FONTFACE = function Node_FONTFACE(){
	this.name = "FONTFACE"; this.attr = {}; this.children = [];
	this.attr.Lang = null;
	this.attr.Count = null;
};
root.node.FONT = function Node_FONT(){
	this.name = "FONT"; this.attr = {}; this.children = [];
	this.attr.Id = null;
	this.attr.Type = null;
	this.attr.Name = null;
};
root.node.SUBSTFONT = function Node_SUBSTFONT(){
	this.name = "SUBSTFONT"; this.attr = {}; this.children = [];
	this.attr.Type = null;
	this.attr.Name = null;
};
root.node.TYPEINFO = function Node_TYPEINFO(){
	this.name = "TYPEINFO"; this.attr = {}; this.children = [];
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
	this.name = "BORDERFILLLIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.BORDERFILL = function Node_BORDERFILL(){
	this.name = "BORDERFILL"; this.attr = {}; this.children = [];
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
	this.name = "LEFTBORDER"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.RIGHTBORDER = function Node_RIGHTBORDER(){
	this.name = "RIGHTBORDER"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.TOPBORDER = function Node_TOPBORDER(){
	this.name = "TOPBORDER"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.BOTTOMBORDER = function Node_BOTTOMBORDER(){
	this.name = "BOTTOMBORDER"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.DIAGONAL = function Node_DIAGONAL(){
	this.name = "DIAGONAL"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = "0";
};
root.node.FILLBRUSH = function Node_FILLBRUSH(){
	this.name = "FILLBRUSH"; this.attr = {}; this.children = [];
};
root.node.WINDOWBRUSH = function Node_WINDOWBRUSH(){
	this.name = "WINDOWBRUSH"; this.attr = {}; this.children = [];
	this.attr.FaceColor = null;
	this.attr.HatchColor = null;
	this.attr.HatchStyle = null;
	this.attr.Alpha = null;
};
root.node.GRADATION = function Node_GRADATION(){
	this.name = "GRADATION"; this.attr = {}; this.children = [];
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
	this.name = "COLOR"; this.attr = {}; this.children = [];
	this.attr.Value = null;
};
root.node.IMAGEBRUSH = function Node_IMAGEBRUSH(){
	this.name = "IMAGEBRUSH"; this.attr = {}; this.children = [];
	this.attr.Mode = "Tile";
};
root.node.IMAGE = function Node_IMAGE(){
	this.name = "IMAGE"; this.attr = {}; this.children = [];
	this.attr.Bright = "0";
	this.attr.Contrast = "0";
	this.attr.Effect = null;
	this.attr.BinItem = null;
	this.attr.Alpha = null;
};
// 4.3.4. 글자 모양 정보
root.node.CHARSHAPELIST = function Node_CHARSHAPELIST(){
	this.name = "CHARSHAPELIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.CHARSHAPE = function Node_CHARSHAPE(){
	this.name = "CHARSHAPE"; this.attr = {}; this.children = [];
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
	this.name = "FONTID"; this.attr = {}; this.children = [];
	this.attr.Hangul = null;
	this.attr.Latin = null;
	this.attr.Hanja = null;
	this.attr.Japanese = null;
	this.attr.Other = null;
	this.attr.Symbol = null;
	this.attr.User = null;
};
root.node.RATIO = function Node_RATIO(){
	this.name = "RATIO"; this.attr = {}; this.children = [];
	this.attr.Hangul = "100";
	this.attr.Latin = "100";
	this.attr.Hanja = "100";
	this.attr.Japanese = "100";
	this.attr.Other = "100";
	this.attr.Symbol = "100";
	this.attr.User = "100";
};
root.node.CHARSPACING = function Node_CHARSPACING(){
	this.name = "CHARSPACING"; this.attr = {}; this.children = [];
	this.attr.Hangul = "0";
	this.attr.Latin = "0";
	this.attr.Hanja = "0";
	this.attr.Japanese = "0";
	this.attr.Other = "0";
	this.attr.Symbol = "0";
	this.attr.User = "0";
};
root.node.RELSIZE = function Node_RELSIZE(){
	this.name = "RELSIZE"; this.attr = {}; this.children = [];
	this.attr.Hangul = "100";
	this.attr.Latin = "100";
	this.attr.Hanja = "100";
	this.attr.Japanese = "100";
	this.attr.Other = "100";
	this.attr.Symbol = "100";
	this.attr.User = "100";
};
root.node.CHAROFFSET = function Node_CHAROFFSET(){
	this.name = "CHAROFFSET"; this.attr = {}; this.children = [];
	this.attr.Hangul = "0";
	this.attr.Latin = "0";
	this.attr.Hanja = "0";
	this.attr.Japanese = "0";
	this.attr.Other = "0";
	this.attr.Symbol = "0";
	this.attr.User = "0";
};
root.node.ITALIC = function Node_ITALIC(){
	this.name = "ITALIC"; this.attr = {}; this.children = [];
};
root.node.BOLD = function Node_BOLD(){
	this.name = "BOLD"; this.attr = {}; this.children = [];
};
root.node.UNDERLINE = function Node_UNDERLINE(){
	this.name = "UNDERLINE"; this.attr = {}; this.children = [];
	this.attr.Type = "Bottom";
	this.attr.Shape = "Solid";
	this.attr.Color = "0";
};
root.node.STRIKEOUT = function Node_STRIKEOUT(){
	this.name = "STRIKEOUT"; this.attr = {}; this.children = [];
	this.attr.Type = "Continuous";
	this.attr.Shape = "Solid";
	this.attr.Color = "0";
};
root.node.OUTLINE = function Node_OUTLINE(){
	this.name = "OUTLINE"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
};
root.node.SHADOW = function Node_SHADOW(){
	this.name = "SHADOW"; this.attr = {}; this.children = [];
	this.attr.Type = null;
	this.attr.Color = null;
	this.attr.OffsetX = "10";
	this.attr.OffestY = "10";
	this.attr.Alpha = null;
};
root.node.EMBOSS = function Node_EMBOSS(){
	this.name = "EMBOSS"; this.attr = {}; this.children = [];
};
root.node.ENGRAVE = function Node_ENGRAVE(){
	this.name = "ENGRAVE"; this.attr = {}; this.children = [];
};
root.node.SUPERSCRIPT = function Node_SUPERSCRIPT(){
	this.name = "SUPERSCRIPT"; this.attr = {}; this.children = [];
};
root.node.SUBSCRIPT = function Node_SUBSCRIPT(){
	this.name = "SUBSCRIPT"; this.attr = {}; this.children = [];
};
// 4.3.5. 탭 정보
root.node.TABDEFLIST = function Node_TABDEFLIST(){
	this.name = "TABDEFLIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.TABDEF = function Node_TABDEF(){
	this.name = "TABDEF"; this.attr = {}; this.children = [];
	this.attr.Id = null;
	this.attr.AutoTabLeft = "false";
	this.attr.AutoTabRight = "false";
};
root.node.TABITEM = function Node_TABITEM(){
	this.name = "TABITEM"; this.attr = {}; this.children = [];
	this.attr.Pos = null;
	this.attr.Type = "Left";
	this.attr.Leader = "Solid";
};
root.node.NUMBERINGLIST = function Node_NUMBERINGLIST(){
	this.name = "NUMBERINGLIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.Numbering = function Node_Numbering(){
	this.name = "Numbering"; this.attr = {}; this.children = [];
	this.attr.Id = null;
	this.attr.Start = "1";
};
root.node.PARAHEAD = function Node_PARAHEAD(){
	this.name = "PARAHEAD"; this.attr = {}; this.children = [];
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
	this.name = "BULLETLIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.BULLET = function Node_BULLET(){
	this.name = "BULLET"; this.attr = {}; this.children = [];
	this.attr.Id = null;
	this.attr.Char = null;
	this.attr.Image = "false";
};
// 4.3.7. 문단 모양 정보
root.node.PARASHAPELIST = function Node_PARASHAPELIST(){
	this.name = "PARASHAPELIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.PARASHAPE = function Node_PARASHAPE(){
	this.name = "PARASHAPE"; this.attr = {}; this.children = [];
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
	this.name = "PARAMARGIN"; this.attr = {}; this.children = [];
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
	this.name = "PARABORDER"; this.attr = {}; this.children = [];
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
	this.name = "STYLELIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.STYLE = function Node_STYLE(){
	this.name = "STYLE"; this.attr = {}; this.children = [];
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
	this.name = "MEMOSHAPELIST"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.MEMO = function Node_MEMO(){
	this.name = "MEMO"; this.attr = {}; this.children = [];
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
	this.name = "BODY"; this.attr = {}; this.children = [];
};
root.node.SECTION = function Node_SECTION(){
	this.name = "SECTION"; this.attr = {}; this.children = [];
	this.attr.Id = null;
};
root.node.P = function Node_P(){
	this.name = "P"; this.attr = {}; this.children = [];
	this.attr.ParaShape = null;
	this.attr.Style = null;
	this.attr.InstId = null;
	this.attr.PageBreak = "false";
	this.attr.ColumnBreak = "false";
};
root.node.TEXT = function Node_TEXT(){
	this.name = "TEXT"; this.attr = {}; this.children = [];
	this.attr.CharShape = null;
};
// 5.1. 글자 엘리먼트
root.node.CHAR = function Node_CHAR(){
	this.name = "CHAR"; this.attr = {}; this.children = [];
	this.attr.Style = null;
};
root.node.MARKPENBEGIN = function Node_MARKPENBEGIN(){
	this.name = "MARKPENBEGIN"; this.attr = {}; this.children = [];
	this.attr.Color = null;
};
root.node.MARKPENEND = function Node_MARKPENEND(){
	this.name = "MARKPENEND"; this.attr = {}; this.children = [];
};
root.node.TITLEMARK = function Node_TITLEMARK(){
	this.name = "TITLEMARK"; this.attr = {}; this.children = [];
	this.attr.Ignore = null;
};
root.node.TAB = function Node_TAB(){
	this.name = "TAB"; this.attr = {}; this.children = [];
};
root.node.LINEBREAK = function Node_LINEBREAK(){
	this.name = "LINEBREAK"; this.attr = {}; this.children = [];
};
// (SIC)
root.node.HYPEN = function Node_HYPEN(){
	this.name = "HYPEN"; this.attr = {}; this.children = [];
};
root.node.NBSPACE = function Node_NBSPACE(){
	this.name = "NBSPACE"; this.attr = {}; this.children = [];
};
root.node.FWSPACE = function Node_FWSPACE(){
	this.name = "FWSPACE"; this.attr = {}; this.children = [];
};
// 5.2. 구역 정의 엘리먼트
root.node.SECDEF = function Node_SECDEF(){
	this.name = "SECDEF"; this.attr = {}; this.children = [];
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
	this.name = "PARAMETERSET"; this.attr = {}; this.children = [];
	this.attr.SetId = null;
	this.attr.Count = null;
};
root.node.PARAMETERARRAY = function Node_PARAMETERARRAY(){
	this.name = "PARAMETERARRAY"; this.attr = {}; this.children = [];
	this.attr.Count = null;
};
root.node.ITEM = function Node_ITEM(){
	this.name = "ITEM"; this.attr = {}; this.children = [];
	this.attr.ItemId = null;
	this.attr.Type = null;
};
// 5.2.1. 시작 번호 정보
root.node.STARTNUMBER = function Node_STARTNUMBER(){
	this.name = "STARTNUMBER"; this.attr = {}; this.children = [];
	this.attr.PageStartsOn = "Both";
	this.attr.Page = "0";
	this.attr.Figure = "0";
	this.attr.Table = "0";
	this.attr.Equation = "0";
};
// 5.2.2. 감추기 정보
root.node.HIDE = function Node_HIDE(){
	this.name = "HIDE"; this.attr = {}; this.children = [];
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
	this.name = "PAGEDEF"; this.attr = {}; this.children = [];
	this.attr.Landscape = "0";
	this.attr.Width = "59528";
	this.attr.Height = "84188";
	this.attr.GutterType = "LeftOnly";
};
root.node.PAGEMARGIN = function Node_PAGEMARGIN(){
	this.name = "PAGEMARGIN"; this.attr = {}; this.children = [];
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
	this.name = "FOOTNOTESHAPE"; this.attr = {}; this.children = [];
};
root.node.ENDNOTESHAPE = function Node_ENDNOTESHAPE(){
	this.name = "ENDNOTESHAPE"; this.attr = {}; this.children = [];
};
root.node.AUTONUMFORMAT = function Node_AUTONUMFORMAT(){
	this.name = "AUTONUMFORMAT"; this.attr = {}; this.children = [];
	this.attr.Type = "Digit";
	this.attr.UserChar = null;
	this.attr.PrefixChar = null;
	this.attr.SuffixChar = ")";
	this.attr.Superscript = null;
};
root.node.NOTELINE = function Node_NOTELINE(){
	this.name = "NOTELINE"; this.attr = {}; this.children = [];
	this.attr.Length = null;
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = null;
};
root.node.NOTESPACING = function Node_NOTESPACING(){
	this.name = "NOTESPACING"; this.attr = {}; this.children = [];
	this.attr.AboveLine = null;
	this.attr.BelowLine = null;
	this.attr.BetweenNotes = null;
};
root.node.NOTENUMBERING = function Node_NOTENUMBERING(){
	this.name = "NOTENUMBERING"; this.attr = {}; this.children = [];
	this.attr.Type = "Continuous";
	// Type이 OnSection일 때에만 사용
	this.attr.NewNumber = "1";
};
root.node.NOTEPLACEMENT = function Node_NOTEPLACEMENT(){
	this.name = "NOTEPLACEMENT"; this.attr = {}; this.children = [];
	// TODO: enum 어떻게 할지 결정하기
	this.attr.Place = null;
	this.attr.BeneathText = null;
};
// 5.2.5. 쪽 테두리/배경 정보
root.node.PAGEBORDERFILL = function Node_PAGEBORDERFILL(){
	this.name = "PAGEBORDERFILL"; this.attr = {}; this.children = [];
	this.attr.Type = "Both";
	this.attr.BorderFill = null;
	this.attr.TextBorder = "false";
	this.attr.HeaderInside = "false";
	this.attr.FooterInside = "false";
	this.attr.FillArea = "Paper";
};
root.node.PAGEOFFSET = function Node_PAGEOFFSET(){
	this.name = "PAGEOFFSET"; this.attr = {}; this.children = [];
	this.attr.Left = "1417";
	this.attr.Right = "1417";
	this.attr.Top = "1417";
	this.attr.Bottom = "1417";
};
// 5.2.6. 바탕쪽 정보
root.node.MASTERPAGE = function Node_MASTERPAGE(){
	this.name = "MASTERPAGE"; this.attr = {}; this.children = [];
	this.attr.Type = "Both";
	this.attr.TextWidth = null;
	this.attr.TextHeight = null;
	this.attr.HasTextRef = "false";
	this.attr.HasNumRef = "false";
};
root.node.PARALIST = function Node_PARALIST(){
	this.name = "PARALIST"; this.attr = {}; this.children = [];
	this.attr.TextDirection = "0";
	this.attr.LineWrap = "Break";
	this.attr.VertAlign = "Top";
	this.attr.LinkListID = null;
	this.attr.LinkListIDNext = null;
};
// 5.2.7. 확장 바탕쪽 정보
root.node.EXT_MASTERPAGE = function Node_EXT_MASTERPAGE(){
	this.name = "EXT_MASTERPAGE"; this.attr = {}; this.children = [];
	this.attr.Type = null;
	// Type이 OptionalPage일 때
	this.attr.PageNumber = null;
	this.attr.PageDuplicate = null;
	this.attr.PageFront = null;
};
// 5.3. 단 정의 정보
root.node.COLDEF = function Node_COLDEF(){
	this.name = "COLDEF"; this.attr = {}; this.children = [];
	this.attr.Type = "Newspaper";
	this.attr.Count = "1";
	this.attr.Layout = "Left";
	this.attr.SameSize = "false";
	this.attr.SameGap = "0";
};
root.node.COLUMNLINE = function Node_COLUMNLINE(){
	this.name = "COLUMNLINE"; this.attr = {}; this.children = [];
	this.attr.Type = "Solid";
	this.attr.Width = "0.12mm";
	this.attr.Color = null;
};
root.node.COLUMNTABLE = function Node_COLUMNTABLE(){
	this.name = "COLUMNTABLE"; this.attr = {}; this.children = [];
};
root.node.COLUMN = function Node_COLUMN(){
	this.name = "COLUMN"; this.attr = {}; this.children = [];
	this.attr.Width = null;
	this.attr.Gap = null;
};
// 5.4. 표
// 5.5. 그림
// 5.6. 그리기 개체
// 5.6.1. 선
// 5.6.2. 사각형
// 5.6.3. 타원
// 5.6.4. 호
// 5.6.5. 다각형
// 5.6.6. 곡선
// 5.6.7. 연결선
// 5.7. Unknown Object
// 5.8. 양식 객체
// 5.8.1. 라디오 버튼
// 5.8.2. 체크 버튼
// 5.8.3. 콤보 박스
// 5.8.4. 에디트
// 5.8.5. 리스트 박스
// 5.8.6. 스크롤바
// 5.9. 묶음 객체
// 5.10. OLE 객체
// 5.11. 한글 97 수식
// 5.12. 글맵시
// 5.13. 필드 시작
// 5.14. 필드 끝
// 5.15. 책갈피
// 5.16. 머리말, 꼬리말
// 5.17. 각주, 미주
// 5.18. 자동 번호, 새 번호
// 5.19. 홀/짝수 조정
// 5.20. 감추기
// 5.21. 쪽번호 위치
// 5.22. 찾아보기 표식
// 5.23. 글자 겹침
// 5.24. 덧말
// 5.25. 숨은 설명
// 6. 부가 정보 엘리먼트
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
	this.attr.FontCount = [];var offset={'value':4};
	for(tmp=0;tmp<7;tmp++){
		this.attr.FontCount[tmp] = {};
		this.attr.FontCount[tmp].value=this.data.readInt32LE(offset.value); offset.value+=4;
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
	// 문서에 없음
	this.attr.Type=(tmp[0]&0x3);if(root.enum.FontType[this.attr.Type]!==undefined)this.attr.Type=root.enum.FontType[this.attr.Type];
	this.attr.HasDefault=!!((tmp[0]&0x20)>>5);
	this.attr.HasShape=!!((tmp[0]&0x40)>>6);
	this.attr.HasSubst=!!((tmp[0]&0x80)>>7);
	tmp = this.data.readUInt16LE(1);var offset={'value':3}; for(this.attr.Name='';tmp-->0;){this.attr.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	if(this.attr.HasSubst){
	this.attr.SubstFont = {};
	tmp=this.data.slice(offset.value,(offset.value+1)); offset.value+=1;
	this.attr.SubstFont.Type=(tmp[0]&0x3);if(root.enum.FontType[this.attr.SubstFont.Type]!==undefined)this.attr.SubstFont.Type=root.enum.FontType[this.attr.SubstFont.Type];
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
	// 문서와 다르게 이렇게 저장됨.
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
	// TODO: 이것들이 의미하는 것 찾기.
	this.attr._type=this.data.readUInt32LE(32);
	this.attr._size=this.data.readUInt32LE(36);
	var offset={'value':40};if(this.attr._type){ /* WindowBrush가 없는 것도 있음. */
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
	// LineSpacingType이 2개 있음. (2007 이하, 초과)
	this.attr.ParaMargin.LineSpacingType=(tmp[0]&0x3);if(root.enum.LineSpacingType[this.attr.ParaMargin.LineSpacingType]!==undefined)this.attr.ParaMargin.LineSpacingType=root.enum.LineSpacingType[this.attr.ParaMargin.LineSpacingType];
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
	tmp = this.data.readUInt16LE(0);var offset={'value':2}; for(this.attr.Name='';tmp-->0;){this.attr.Name+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	tmp = this.data.readUInt16LE(offset.value); offset.value+=2; for(this.attr.EngName='';tmp-->0;){this.attr.EngName+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
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
};
// 4.2.3. 문단의 글자 모양
root.record.PARA_CHAR_SHAPE = function Record_PARA_CHAR_SHAPE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "PARA_CHAR_SHAPE";
	// TODO: 직접 처리
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
	this.attr.ControlId=this.data.readUInt32LE(0);
};
// 4.2.7. 문단 리스트 헤드
root.record.LIST_HEADER = function Record_LIST_HEADER(data){
	var tmp; this.attr = {}; this.data = data; this.name = "LIST_HEADER";
	// TODO: 적절한 이름 정하기
	this.attr.ParaCount=this.data.readInt16LE(0);
	tmp=this.data.slice(2,6);
	this.attr.TextDirection=(tmp[0]&0x7);
	// TODO: 아래 두 개 적절한 이름 정하기
	this.attr.ParaLineBreak=((tmp[0]&0x18)>>3);
	this.attr.VertAlign=((tmp[0]&0x60)>>5);
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
	// TODO: PageBreakType
	this.attr.RepeatHeader=!!((tmp[0]&0x4)>>2);
	// TODO_SOMETIME: 여기에 뭔가 있다.
	this.attr.RowCount=this.data.readUInt16LE(4);
	this.attr.ColCount=this.data.readUInt16LE(6);
	this.attr.CellSpacing=this.data.readUInt16LE(8);
	// TODO
};
// 4.2.9.2. 그리기 개체
// 4.2.9.2.1. 개체 요소
root.record.SHAPE_COMPONENT = function Record_SHAPE_COMPONENT(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT";
	// TODO
};
// TODO: 그리기 개체
// 4.2.9.3. 한글 스크립트 수식 (한글 97 방식 수식)
root.record.EQEDIT = function Record_EQEDIT(data){
	var tmp; this.attr = {}; this.data = data; this.name = "EQEDIT";
	tmp=this.data.slice(0,4);
	this.attr.LineMode=!!(tmp[0]&0x1);
	this.attr.Script = {};
	tmp = this.data.readUInt16LE(4);var offset={'value':6}; for(this.attr.Script.value='';tmp-->0;){this.attr.Script.value+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
	this.attr.BaseUnit=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.TextColor=this.data.readUInt32LE(offset.value); offset.value+=4;
	this.attr.BaseLine=this.data.readInt16LE(offset.value); offset.value+=2;
	// TODO_SOMETIME: 이것 뜻 찾기
	this.attr._unknown=this.data.readInt16LE(offset.value); offset.value+=2;
	// 문서에 없는 것
	tmp = this.data.readUInt16LE(offset.value); offset.value+=2; for(this.attr.Version='';tmp-->0;){this.attr.Version+=String.fromCharCode(this.data.readUInt16LE(offset.value)); offset.value+=2;}
};
// 4.2.9.4. 그림 개체
// TODO
// 4.2.9.5. OLE 개체
root.record.SHAPE_COMPONENT_OLE = function Record_SHAPE_COMPONENT_OLE(data){
	var tmp; this.attr = {}; this.data = data; this.name = "SHAPE_COMPONENT_OLE";
	// TODO
	var offset={'value':0};console.log(data);
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
	// TODO: enum 어떻게 할지 결정하기
	this.attr.NotePlacement.Place=(tmp[1]&0x3);
	this.attr.NoteNumbering.Type=((tmp[1]&0xc)>>2);if(root.enum.NoteNumberingType[this.attr.NoteNumbering.Type]!==undefined)this.attr.NoteNumbering.Type=root.enum.NoteNumberingType[this.attr.NoteNumbering.Type];
	this.attr.AutoNumFormat.Superscript=!!((tmp[1]&0x10)>>4);
	this.attr.NotePlacement.BeneathText=!!((tmp[1]&0x20)>>5);
	this.attr.AutoNumFormat.UserChar=String.fromCharCode(this.data.readUInt16LE(4));
	this.attr.AutoNumFormat.PrefixChar=String.fromCharCode(this.data.readUInt16LE(6));
	this.attr.AutoNumFormat.SuffixChar=String.fromCharCode(this.data.readUInt16LE(8));
	this.attr.NoteNumbering.NewNumber=this.data.readUInt16LE(10);
	this.attr.NoteLine.Length=this.data.readUInt16LE(12);
	this.attr.NoteSpacing.AboveLine=this.data.readUInt16LE(14);
	this.attr.NoteSpacing.BelowLine=this.data.readUInt16LE(16);
	this.attr.NoteSpacing.BetweenNotes=this.data.readUInt16LE(18);
	this.attr.NoteLine.Type=this.data.readUInt8(20);if(root.enum.LineType1[this.attr.NoteLine.Type]!==undefined)this.attr.NoteLine.Type=root.enum.LineType1[this.attr.NoteLine.Type];
	this.attr.NoteLine.Width=this.data.readUInt8(21);if(root.enum.LineWidth[this.attr.NoteLine.Width]!==undefined)this.attr.NoteLine.Width=root.enum.LineWidth[this.attr.NoteLine.Width];
	this.attr.NoteLine.Color=this.data.readUInt32LE(22);
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
root.tag.table = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"DOCUMENT_PROPERTIES","ID_MAPPINGS","BIN_DATA","FACE_NAME","BORDER_FILL","CHAR_SHAPE","TAB_DEF","NUMBERING","BULLET","PARA_SHAPE","STYLE","DOC_DATA","DISTRIBUTE_DOC_DATA",null,"COMPATIBLE_DOCUMENT","LAYOUT_COMPATIBILITY",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"PARA_HEADER","PARA_TEXT","PARA_CHAR_SHAPE","PARA_LINE_SEG","PARA_RANGE_TAG","CTRL_HEADER","LIST_HEADER","PAGE_DEF","FOOTNOTE_SHAPE","PAGE_BORDER_FILL","SHAPE_COMPONENT","TABLE","SHAPE_COMPONENT_LINE","SHAPE_COMPONENT_RECTANGLE","SHAPE_COMPONENT_ELLIPSE","SHAPE_COMPONENT_ARC","SHAPE_COMPONENT_POLYGON","SHAPE_COMPONENT_CURVE","SHAPE_COMPONENT_OLE","SHAPE_COMPONENT_PICTURE","SHAPE_COMPONENT_CONTAINER","CTRL_DATA","EQEDIT",null,"SHAPE_COMPONENT_TEXTART","FORM_OBJECT","MEMO_SHAPE","MEMO_LIST","FORBIDDEN_CHAR","CHART_DATA",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"SHAPE_COMPONENT_UNKNOWN"];

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

HWPNode.prototype.setAttrWithFilter = function(attrs, filter){
	for(var name in attrs) if(filter(name)){
		if(this.attr[name] === undefined) console.warn("Warning: unexpected attr %s", name);
		this.attr[name] = attrs[name];
	}
};

HWPNode.prototype.setAttr = function setAttr(attrs, list){
	if(list) list.forEach(function(name){
		if(attrs[name] === undefined) console.warn("Warning: undefined attr %s", name);
		if(this.attr[name] === undefined) console.warn("Warning: unexpected attr %s", name);
		this.attr[name] = attrs[name];
	}, this);
	else for(var name in attrs){
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
