%{
	var node = {};
	
	node.Root = function Root(s){
		this.value = s;
	};
	node.Comment = function Comment(s){
		this.value = s.slice(2);
	};
	node.Tag = function Tag(s, v){
		this.name = s;
		this.value = +v;
	};
	node.TagOffset = function TagOffset(s, f, o){
		this.name = s;
		this.base = f;
		this.offset = +o;
	};
	node.Node = function Node(s, v){
		this.name = s;
		this.schema = v;
	};
	node.Record = function Record(s, v){
		this.name = s;
		this.schema = v;
	};
	node.Type = function Type(){
		this.name = null;
		this.type = null;
	};
	node.NodeType = function NodeType(t, s, o){
		this.name = s;
		this.type = t;
		this.options = {};
		o.forEach(function(a){
			this.options[a[0]] = a[1];
		}, this);
	};
	node.SimpleType = function SimpleType(t, s){
		this.name = s;
		this.type = t;
	};
	node.BitsType = function BitsType(sb, eb, t, s){
		this.name = s;
		this.type = t;
		this.start = sb;
		this.end = eb;
	};
	node.Group = function Group(s, a){
		this.name = s;
		this.values = a;
	};
	node.Array = function Array(t, l, s){
		this.name = s;
		this.length = l;
		this.type = t;
	};
	node.ByteStream = function ByteStream(l, s){
		this.name = s;
		this.length = l;
		this.type = 'ByteStream';
	};
	node.Bits = function Bits(l, n, a){
		this.name = n || '';
		this.length = l;
		this.values = a;
	};
	node.Script = function Script(s){
		this.script = s;
	};

	var simpleTypeCode = function(base, simple, offset){
		var code = "";
		switch(simple.type){
			case "Byte":
				code = base+"."+simple.name+" = this.data.readUInt8("+offset.value+");";
				code += offset.add(1);
				return code;
			case "Word":
				code = base+"."+simple.name+" = this.data.readUInt16LE("+offset.value+");";
				code += offset.add(2);
				return code;
			case "UInt8": case "Int8":
				code = base+"."+simple.name+" = this.data.read"+simple.type+"("+offset.value+");";
				code += offset.add(1);
				return code;
			case "UInt16": case "Int16":
				code = base+"."+simple.name+" = this.data.read"+simple.type+"LE("+offset.value+");";
				code += offset.add(2);
				return code;
			case "UInt32": case "Int32":
				code = base+"."+simple.name+" = this.data.read"+simple.type+"LE("+offset.value+");";
				code += offset.add(4);
				return code;
			case "WString":
				code = "tmp = this.data.readUInt16LE("+offset.value+");";
				code += offset.add(2) + offset.toObj();
				code += " for("+base+"."+simple.name+"='';tmp-->0;){"+base+"."+simple.name+"+=String.fromCharCode(this.data.readUInt16LE("+offset.value+"));"+offset.add(2)+"}";
				return code;
			case "ColorRef":
				code = base+"."+simple.name+" = this.data.readUInt32LE("+offset.value+");";
				code += offset.add(4);
				return code;
			default: return "// FIXME: unprocessed simple type: "+simple.type;
		}
	};

	var generateCode = function(format){
		var RT = "root", wc = "", tags = {}, tagInverse = [];
		format.forEach(function(o){
			if(o == null) return;
			if(o instanceof node.Root){
				rootObj = o.value;
			}
		});
		wc = RT+"={'record':{},'node':{},'tag':{},'enum':{}};\n"; RT += '.';
		wc += format.map(function(o){
			var code = "";
			if(o == null) return "// FIXME: null";
			if(o instanceof node.Comment){
				return "// " + o.value;
			}
			if(o instanceof node.Tag){
				tags[o.name] = o.value; tagInverse[o.value] = o.name;
				return RT+"tag."+o.name+" = "+o.value+";";
			}
			if(o instanceof node.TagOffset){
				tagInverse[tags[o.base] + o.offset] = o.name;
				return RT+"tag."+o.name+" = "+(tags[o.base] + o.offset)+";";
			}
			if(o instanceof node.Node){
				code += RT+"node."+o.name+" = function Node_"+o.name+"(){\n";
				code += "\tthis.name = \""+o.name+"\"; this.attr = {};\n";
				code += o.schema.map(function(nodeType){
					return "this.attr."+nodeType.name+" = "+(nodeType.options.default?"\""+nodeType.options.default+"\"":'null')+";";
				}).map(function(s){return '\t'+s+'\n';}).join('');
				code += "};";
				return code;
			}
			if(o instanceof node.Record){
				var offset = {'value': 0, 'add': function(v){
					if(typeof this.value == 'number'){
						this.value += v; return '';
					}
					var code = ' ';
					code += this.value+'+='+v+';';
					return code;
				}, 'plus': function(i){
					if(typeof this.value == 'number'){
						return this.value+(+i);
					}
					return '('+this.value+'+'+i+')';
				}, 'toObj': function(){
					var code = "";
					if(typeof this.value == 'number'){
						code = "var offset={'value':"+this.value+"};";
						this.value = 'offset.value';
					}
					return code;
				}};
				code += RT+"record."+o.name+" = function Record_"+o.name+"(data){\n";
				code += "\tvar tmp; this.attr = {}; this.data = data; this.name = \""+o.name+"\";\n";
				code += o.schema.map(function(element){
					var c;
					if(element instanceof node.SimpleType){
						return simpleTypeCode("this.attr", element, offset);
					}
					if(element instanceof node.Group){
						c = "this.attr."+element.name+" = {};\n\t";
						c += element.values.map(function(e){
							return simpleTypeCode("this.attr."+element.name, e, offset);
						}).join('\n\t');
						return c;
					}
					if(element instanceof node.Array){
						c = "this.attr."+element.name+" = [];"+offset.toObj()+"\n";
						c += "\tfor(tmp=0;tmp<"+element.length+";tmp++){\n";
						c += "\t\tthis.attr."+element.name+"[tmp] = {};\n";
						c += "\t\t"+element.type.map(function(e){
							return simpleTypeCode("this.attr."+element.name+"[tmp]", e, offset);
						}).join('\n\t\t')+"\n";
						c += "\t}";
						return c;
					}
					if(element instanceof node.Bits){
						var base = 'this.attr';
						c = "";
						if(element.name){
							c += "this.attr."+element.name+" = {}; ";
							base += '.'+element.name;
						}
						c += "tmp = this.data.slice("+offset.value+","+offset.plus(element.length)+");";
						c += offset.add(element.length);
						
						c += element.values.map(function(value){
							var vc = [], i, tc, o, mb, me, vo, vs;
							var sb = 0|value.start/8, eb = 0|value.end/8;
							for(i=sb*8; i<=eb*8; i+=8){
								tc = 'tmp['+(i/8)+']'; o = i-value.start;
								if(sb==eb){
									mb = value.start%8;
									me = value.end%8;
									vo = mb;
								}else if(i==sb*8){
									mb = value.start%8;
									me = 7;
									vo = mb;
								}else if(i==se*8){
									mb = 0;
									me = value.end%8;
									vo = (8-value.start%8)+(i-sb*8);
								}else{
									mb = 0; me = 7;
									vo = (8-value.start%8)+(i-sb*8);
								}
								if(mb!=0 || me!=7) tc = '('+tc+'&0x'+((2<<me)-(1<<mb)).toString(16)+')';
								if(vo > 0) tc = tc+'>>'+vo;
								else if(vo < 0) tc = tc+'<<'+vo;
								vc.push('('+tc+')');
							}
							vs = vc.join('+');
							if(value.type == 'Boolean'){
								if(vc.length == 1) vs = '!!'+vs;
								else vs = '!!('+vs+')';
							}
							return '\n\t'+base+'.'+value.name+'='+vs+';';
						}).join('');

						return c;
					}
					if(element instanceof node.Script){
						c = offset.toObj()+' (function(){'+element.script.trim()+'\n\t}());';
						return c;
					}
					if(element instanceof node.ByteStream){
						c = "this.attr."+element.name+" = this.data.slice("+offset.value+","+offset.plus(element.length)+");";
						c += offset.add(element.length);
						return c;
					}
					return "// FIXME: unprocessed type ("+element.constructor.name+")";
				}).map(function(s){return '\t'+s+'\n';}).join('');
				code += "};";
				return code;
			}
			return "// TODO: Process below object.\n/*\n"+o.toString()+"\n*/";
		}).join('\n')+'\n';
		wc += RT+"tag.table = "+JSON.stringify(tagInverse)+";";
		return wc;
	};

	parser.node = node;
%}

%lex
%%

"{{"([^\}]|"}"[^\}])+"}}"	return "SCRIPT";

"## "([^\n]+)	/* skip file comments */;
"# "([^\n]+)	return "COMMENT";

(" "|\r|\n|\t)+ /* skip whitespaces */

\"([^\"]+)\"	return "QUOTED_STRING";

"{"	return "P_OPEN";
"}"	return "P_CLOSE";
";"	return "LINE_END";

"String"	return "String";
"Int"	return "Int";
"Boolean"	return "Boolean";

"Array"	return "Array";
"Byte"	return "Byte";
"Word"	return "Word";
"DWord"	return "DWord";
"WChar"	return "WChar";
"WString"	return "WString";
"HWPUnit"	return "HWPUnit";
"SHWPUnit"	return "SHWPUnit";

"UInt8"	return "UInt8";
"UInt16"	return "UInt16";
"UInt32"	return "UInt32";
"Int8"	return "Int8";
"Int16"	return "Int16";
"Int32"	return "Int32";
"ColorRef"	return "ColorRef";

"ByteStream"	return "ByteStream";
"Bits"	return "Bits";
"Group"	return "Group";

"record"	return "RECORD";
"type"	return "TYPE";
"enum"	return "ENUM";
"node"	return "NODE";
"root"	return "ROOT";
"tago"	return "TAG_OFFSET";
"tag"	return "TAG";

"="	return "=";
":"	return ":";
"~"	return "~";

[0-9]+	return "INTEGER";
[A-Za-z0-9_\-]+	return "TOKEN";

<<EOF>>	return "EOF";

/lex

%start entry_point
%%

type_node
	: String
	| Int
	| Boolean
	;

type_bits
	: Int
	| Boolean
	;

type_record
	: Byte | Word | DWord
	| WChar | WString
	| HWPUnit | SHWPUnit
	| UInt8 | UInt16 | UInt32
	| Int8 | Int16 | Int32
	| ColorRef
	;

type_record_array_type
	: Array ":" TOKEN {$$ = $3;}
	| Array ":" INTEGER {$$ = +$3;}
	;

type_record_bytestream_type
	: ByteStream ":" TOKEN {$$ = $3;}
	| ByteStream ":" INTEGER {$$ = +$3;}
	;

entry_point
	: format	{return generateCode($1);}
	;

format
	: element format	{$$ = [$1].concat($2);}
	| EOF	{$$ = [];}
	;

element
	: def_enum {$$ = $1;}
	| def_node {$$ = $1;}
	| def_tag {$$ = $1;}
	| def_tago {$$ = $1;}
	| def_record {$$ = $1;}
	| COMMENT {$$ = new node.Comment($1);}
	| ROOT TOKEN {$$ = new node.Root($2);}
	;

def_enum
	: ENUM TOKEN P_OPEN P_CLOSE {$$ = null;}
	;

def_node
	: NODE TOKEN LINE_END {$$ = new node.Node($2, []);}
	| NODE TOKEN P_OPEN P_CLOSE {$$ = new node.Node($2, []);}
	| NODE TOKEN P_OPEN def_node_inner P_CLOSE {$$ = new node.Node($2, $4);}
	;

def_node_inner
	: def_node_element def_node_inner {$$ = [$1].concat($2);}
	| def_node_element {$$ = [$1];}
	;

def_node_element
	: type_node TOKEN LINE_END {$$ = new node.NodeType($1, $2, []);}
	| type_node TOKEN def_node_element_options LINE_END {$$ = new node.NodeType($1, $2, $3);}
	;

def_node_element_options
	: def_node_element_option def_node_element_options {$$ = [$1].concat($2);}
	| def_node_element_option {$$ = [$1];}
	;

def_node_element_option
	: TOKEN "=" TOKEN {$$ = [$1, $3];}
	| TOKEN "=" QUOTED_STRING {$$ = [$1, $3.slice(1,-1)];}
	;

def_tag
	: TAG TOKEN INTEGER	LINE_END {$$ = new node.Tag($2, $3);}
	;

def_tago
	: TAG_OFFSET TOKEN INTEGER TOKEN LINE_END {$$ = new node.TagOffset($4, $2, $3);}
	;

def_record
	: RECORD TOKEN LINE_END {$$ = new node.Record($2, []);}
	| RECORD TOKEN P_OPEN P_CLOSE {$$ = new node.Record($2, []);}
	| RECORD TOKEN P_OPEN def_record_inner P_CLOSE	{$$ = new node.Record($2, $4);}
	;

def_record_inner
	: def_record_element def_record_inner {$$ = [$1].concat($2);}
	| def_record_element {$$ = [$1];}
	;

def_record_element
	: def_record_simpletype {$$ = $1;}
	| def_record_group {$$ = $1;}
	| def_record_array {$$ = $1;}
	| def_record_bytestream {$$ = $1;}
	| def_record_bits {$$ = $1;}
	;

def_record_simpletype
	: type_record TOKEN LINE_END {$$ = new node.SimpleType($1, $2);}
	| SCRIPT {$$ = new node.Script($1.slice(2,-2));}
	;

def_record_group
	: Group TOKEN P_OPEN def_record_inner P_CLOSE {$$ = new node.Group($2, $4);}
	;

def_record_array
	: type_record_array_type TOKEN def_record_simpletype {$$ = new node.Array([$3], $1, $2);}
	| type_record_array_type TOKEN P_OPEN def_record_inner P_CLOSE {$$ = new node.Array($4, $1, $2);}
	;

def_record_bytestream
	: type_record_bytestream_type TOKEN LINE_END {$$ = new node.ByteStream($1, $2);}
	;

def_record_bits
	: Bits ":" INTEGER LINE_END {$$ = new node.Bits($3, '', []);}
	| Bits ":" INTEGER P_OPEN P_CLOSE {$$ = new node.Bits($3, '', []);}
	| Bits ":" INTEGER P_OPEN def_record_bits_inner P_CLOSE {$$ = new node.Bits($3, '', $5);}
	| Bits ":" INTEGER TOKEN P_OPEN def_record_bits_inner P_CLOSE {$$ = new node.Bits($3, $4, $6);}
	;

def_record_bits_inner
	: def_record_bits_element def_record_bits_inner {$$ = [$1].concat($2);}
	| def_record_bits_element {$$ = [$1];}
	;

def_record_bits_element
	: INTEGER type_bits TOKEN LINE_END {$$ = new node.BitsType($1, $1, $2, $3);}
	| INTEGER "~" INTEGER type_bits TOKEN LINE_END {$$ = new node.BitsType($1, $3, $4, $5);}
	;
