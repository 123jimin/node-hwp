%{
	var node = {};
	
	node.Root = function Root(s){
		this.value = s;
	};
	node.CheckEnd = function CheckEnd(){
		this.type = "CheckEnd";
	};
	node.Comment = function Comment(s){
		this.value = s.slice(2);
		this.type = "Comment";
	};
	node.Enum = function Enum(s, v, t){
		this.name = s;
		this.value = v;
		this.type = t || 'UInt8';
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
	node.Node = function Node(s, v, e){
		this.name = s;
		this.schema = v;
		this.encoding = e || null;
	};
	node.Record = function Record(s, v){
		this.name = s;
		this.schema = v;
	};
	node.MicroDef = function MicroDef(s, v){
		this.name = s;
		this.values = v;
	};
	node.Micro = function Micro(t, s){
		this.name = s;
		this.type = t;
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
	node.SimpleType = function SimpleType(t, e, s){
		this.name = s;
		this.enum = e || null;
		this.type = t;
	};
	node.BitsType = function BitsType(sb, eb, t, e, s){
		this.name = s;
		this.type = t;
		this.enum = e || null;
		this.start = sb;
		this.end = eb;
	};
	node.Group = function Group(s, a, d){
		this.name = s;
		this.values = a;
		this.defined = !!d;
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
		this.type = 'Bits';
	};
	node.Switch = function Switch(e, o){
		this.test = e;
		this.cases = o;
	};
	node.Case = function Case(v1, v2, b){
		this.value = v1;
		this.new_value = v2;
		this.body = b;
	};
	node.Cases = function Cases(vs, b){
		this.values = vs;
		this.body = b;
	};
	node.Else = function Else(b){
		this.body = b;
	};
	node.Script = function Script(s){
		this.script = s;
	};

	var simpleTypeCode = function(RT, base, simple, offset){
		var code = "", vname = base+"."+simple.name;
		var genEnum = function(vname, e){
			if(!e) return "";
			var x = RT+"enum."+e+"["+vname+"]";
			return "if("+x+"!==undefined)"+vname+"="+x+";";
		};
		switch(simple.type){
			case "Undo": return offset.add(-simple.name);
			case "Comment": return "// "+simple.value;
			case "CheckEnd":
				code = "if("+offset.value+">=this.data.length)return;"
				return code;
			case "Byte":
				code = vname+"=this.data.readUInt8("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(1);
				return code;
			case "Word":
				code = vname+"=this.data.readUInt16LE("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(2);
				return code;
			case "DWord":
				code = vname+"=this.data.readUInt32LE("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(4);
				return code;
			case "UInt8": case "Int8":
				code = vname+"=this.data.read"+simple.type+"("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(1);
				return code;
			case "UInt16": case "Int16":
				code = vname+"=this.data.read"+simple.type+"LE("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(2);
				return code;
			case "UInt32": case "Int32":
				code = vname+"=this.data.read"+simple.type+"LE("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(4);
				return code;
			case "Float64":
				code = vname+"=this.data.readDoubleLE("+offset.value+");";
				code += genEnum(vname, simple.enum);
				code += offset.add(8);
				return code;
			case "WChar":
				code = vname+"=this.data.readUInt16LE("+offset.value+");";
				code += "if("+vname+")"+vname+"=String.fromCharCode("+vname+");else "+vname+"=null;";
				code += offset.add(2);
				return code;
			case "WString":
				code = "tmp=this.data.readUInt16LE("+offset.value+");";
				code += offset.add(2) + offset.toObj();
				code += "for("+vname+"='';tmp-->0;){";
				code += vname+"+=String.fromCharCode(this.data.readUInt16LE("+offset.value+"));"+offset.add(2);
				code += "}";
				return code;
			case "ColorRef":
				code = vname+"=this.data.readUInt32LE("+offset.value+");";
				code += offset.add(4);
				return code;
			case "4ChID":
				code += "tmp=this.data.readUInt32LE("+offset.value+");";
				code += vname+"=String.fromCharCode(tmp>>24,tmp>>16&0xFF,tmp>>8&0xFF,tmp&0xFF);";
				code += offset.add(4);
				return code;
			case "Bits":
				if(simple.name){
					code += vname+"={};";
					base += '.'+simple.name;
				}
				code += "tmp=this.data.slice("+offset.value+","+offset.plus(simple.length)+");";
				code += offset.add(simple.length);
				
				code += simple.values.map(function(value){
					if(value.type == 'Comment') return "\n\t// "+value.value;
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
						}else if(i==eb*8){
							mb = 0;
							me = value.end%8;
							vo = -((8-value.start%8)+(i-sb*8-8));
						}else{
							mb = 0; me = 7;
							vo = -((8-value.start%8)+(i-sb*8-8));
						}
						if(mb!=0 || me!=7) tc = '('+tc+'&0x'+((2<<me)-(1<<mb)).toString(16)+')';
						if(vo > 0) tc = '('+tc+'>>'+vo+')';
						else if(vo < 0) tc = '('+tc+'<<'+(-vo)+')';
						vc.push(tc);
					}
					vs = vc.join('+');
					if(value.type == 'Boolean'){
						if(vc.length == 1) vs = '!!'+vs;
						else vs = '!!('+vs+')';
					}
					vs = '\n\t'+base+'.'+value.name+'='+vs+';';
					vs += genEnum(base+'.'+value.name, value.enum);
					return vs;
				}).join('');
				return code;
			default: return "// FIXME: unprocessed simple type: "+simple.type;
		}
	};

	var var_id = 0;

	var recordCode = function recordCode(RT, base, element, offset, micros){
		var c;
		if(element instanceof node.SimpleType
			|| element instanceof node.Bits
			|| element instanceof node.Comment
			|| element instanceof node.CheckEnd){
			return simpleTypeCode(RT, base, element, offset);
		}
		if(element instanceof node.Group){
			if(!element.defined) c = base+"."+element.name+"={};";
			element.values.forEach(function(e){
				c += "\n\t"+recordCode(RT, base+"."+element.name, e, offset, micros);
			});
			return c;
		}
		if(element instanceof node.Micro){
			c = base+"."+element.name+"={};";
			micros[element.type].forEach(function(e){
				c += recordCode(RT, base+"."+element.name, e, offset, micros);
			});
			return c;
		}
		if(element instanceof node.Array){
			var ind = 'ii'+(var_id++);
			var il = element.length;
			var cond;
			if(typeof il == 'string') il = base+'.'+il;
			c = base+"."+element.name+"=[];"+offset.toObj()+"\n";
			if(il === -1) cond = offset.value+"<this.data.length";
			else cond = ind+"<"+il;
			c += "\tfor(var "+ind+"=0;"+cond+";"+ind+"++){\n";
			c += "\t\t"+base+"."+element.name+"["+ind+"]={};\n";
			c += "\t\t"+element.type.map(function(e){
				return recordCode(RT, base+"."+element.name+"["+ind+"]", e, offset, micros);
			}).join('\n\t\t')+"\n";
			c += "\t}";
			return c; 
		}
		if(element instanceof node.Script){
			c = offset.toObj()+element.script.trim();
			return c;
		}
		if(element instanceof node.ByteStream){
			c = base+"."+element.name+"=this.data.slice("+offset.value+","+offset.plus(element.length)+");";
			c += offset.add(element.length);
			return c;
		}
		if(element instanceof node.Switch){
			c = offset.toObj()+"switch(''+("+base+"."+element.test+")){\n\t";
			c += element.cases.map(function(cs){
				var cc;
				if(cs instanceof node.Case){
					cc = "case \""+cs.value+"\":";
					if(cs.value != cs.new_value) cc += base+"."+element.test+"=\""+cs.new_value+"\";";
					cc += cs.body.map(function(e){
						return '\n\t'+recordCode(RT, base, e, offset, micros);
					}).join('');
					cc += "\n\tbreak;";
					return cc;
				}
				if(cs instanceof node.Cases){
					cc = cs.values.map(function(s){
						return "case \""+s+"\":"
					}).join(' ');
					cc += cs.body.map(function(e){
						return '\n\t'+recordCode(RT, base, e, offset, micros);
					}).join('');
					cc += "\n\tbreak;";
					return cc;
				}
				if(cs instanceof node.Else){
					cc = "default:";
					cc += cs.body.map(function(e){
						return '\n\t'+recordCode(RT, base, e, offset, micros);
					});
					return cc;
				}
				return "/* FIXME: unprocessed type ("+cs.constructor.name+") */";
			}).join('\n\t');
			c += "\n\t}";
			return c;
		}
		return "// FIXME: unprocessed type ("+element.constructor.name+")";
	};

	var generateCode = function(format){
		var RT = "root", wc = "", tags = {}, tagInverse = [];
		var micros = {};
		format.forEach(function(o){
			if(o == null) return;
			if(o instanceof node.Root){
				rootObj = o.value;
			}
		});
		wc = "if(typeof "+RT+" === 'undefined')"+RT+"={'record':{},'node':{},'tag':{},'enum':{}};\n"; RT += '.';
		wc += format.map(function(o){
			var code = "";
			if(o == null) return "// FIXME: null";
			if(o instanceof node.Comment){
				return "// " + o.value;
			}
			if(o instanceof node.Enum){
				return RT+"enum."+o.name+" = "+JSON.stringify(o.value)+";";
			}
			if(o instanceof node.Tag){
				tags[o.name] = o.value; tagInverse[o.value] = o.name;
				return RT+"tag."+o.name+" = "+o.value+";";
			}
			if(o instanceof node.TagOffset){
				tagInverse[tags[o.base] + o.offset] = o.name;
				return RT+"tag."+o.name+" = "+(tags[o.base] + o.offset)+";";
			}
			if(o instanceof node.MicroDef){
				micros[o.name] = o.values;
				return '';
			}
			if(o instanceof node.Node){
				code += RT+"node."+o.name+"=function Node_"+o.name+"(){\n";
				code += "\tthis.name=\""+o.name+"\";this.attr={};this.children=[];\n";
				if(o.encoding) code += "\tthis.encoding=\""+o.encoding.toLowerCase()+"\";\n";
				code += o.schema.map(function(nodeType){
					if(nodeType instanceof node.Comment)
						return "// "+nodeType.value;
					else
						return "this.attr."+nodeType.name+"="+(nodeType.options.default?"\""+nodeType.options.default+"\"":'null')+";";
				}).map(function(s){return '\t'+s+'\n';}).join('');
				code += "};";
				return code;
			}
			if(o instanceof node.Record){
				var offset = {'value': 0, 'add': function(v){
					if(typeof this.value == 'number'){
						this.value += +v; return '';
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
				code += "\tvar tmp,attr=this.attr={};this.data=data;this.name=\""+o.name+"\";\n";
				code += o.schema.map(function(element){
					return recordCode(RT, 'attr', element, offset, micros);
				}).map(function(s){return '\t'+s+'\n';}).join('');
				code += "};";
				return code;
			}
			return "// TODO: Process below object.\n/*\n"+o.toString()+"\n*/";
		}).filter(function(x){return x.length}).join('\n')+'\n';
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
"Float" return "Float";
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
"Float64" return "Float64";
"ColorRef"	return "ColorRef";
"4ChID"	return "FChID";

"ByteStream"	return "ByteStream";
"Bits"	return "Bits";
"Group"	return "Group";
"GroupAdd"	return "SimpleGroup";

"Switch"	return "SWITCH";
"Case"	return "CASE";
"Cases"	return "CASES";
"Else"	return "ELSE";

"record"	return "RECORD";
"micro"	return "MICRO";
"type"	return "TYPE";
"enum"	return "ENUM";
"node"	return "NODE";
"root"	return "ROOT";
"tago"	return "TAG_OFFSET";
"tag"	return "TAG";

"Undo"	return "UNDO";

"null"	return "NULL";

"="	return "=";
":"	return ":";
"~"	return "~";
"*" return "*";

[0-9]+	return "INTEGER";
[A-Za-z0-9_\-]+	return "TOKEN";

<<EOF>>	return "EOF";

/lex

%start entry_point
%%

_token
	: TOKEN {$$ = $1}
	| QUOTED_STRING {$$ = $1.slice(1,-1);}
	;

_label
	: _token ":" _label {$$ = $1+'.'+$3;}
	| _token {$$ = $1;}
	;

token_list
	: _token token_list {$$ = [$1].concat($2);}
	| _token {$$ = [$1];}
	;

type_enum
	: ENUM TOKEN {$$ = $2;}
	;

type_node
	: String
	| Int
	| Boolean
	| Float
	| type_enum {$$ = "String";}
	;

type_bits
	: Int
	| Boolean
	;

type_bits_enum
	: type_bits {$$ = {'value': $1};}
	| type_enum ":" type_bits {$$ = {'value': $3, 'enum': $1};}
	;

type_record
	: Byte | Word | DWord
	| WChar | WString
	| HWPUnit {$$ = "UInt32";}
	| SHWPUnit {$$ = "Int32";}
	| UInt8 | UInt16 | UInt32
	| Int8 | Int16 | Int32
	| Float64
	| ColorRef | FChID
	;

type_record_enum
	: type_record {$$ = {'value': $1};}
	| type_enum ":" type_record {$$ = {'value': $3, 'enum': $1};}
	;

type_record_array_type
	: Array ":" TOKEN {$$ = $3;}
	| Array ":" INTEGER {$$ = +$3;}
	| Array ":" "*" {$$ = -1;}
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
	| def_micro {$$ = $1;}
	| COMMENT {$$ = new node.Comment($1);}
	| ROOT TOKEN {$$ = new node.Root($2);}
	;

def_enum
	: ENUM TOKEN LINE_END {$$ = new node.Enum($2, []);}
	| ENUM TOKEN P_OPEN P_CLOSE {$$ = new node.Enum($2, []);}
	| ENUM TOKEN P_OPEN def_enum_inner P_CLOSE {$$ = new node.Enum($2, $4);}
	;

def_enum_inner
	: def_enum_single def_enum_inner {$$ = [$1].concat($2);}
	| def_enum_single {$$ = [$1];}
	;

def_enum_single
	: QUOTED_STRING LINE_END? {$$ = $1.slice(1,-1);}
	| TOKEN LINE_END? {$$ = $1;}
	| NULL LINE_END? {$$ = null;}
	;

def_node
	: NODE TOKEN def_node_schema {$$ = new node.Node($2, $3, null);}
	| NODE TOKEN TOKEN def_node_schema {$$ = new node.Node($2, $4, $3);}
	;

def_node_schema
	: LINE_END {$$ = [];}
	| P_OPEN P_CLOSE {$$ = [];}
	| P_OPEN def_node_inner P_CLOSE {$$ = $2;}
	;

def_node_inner
	: def_node_element def_node_inner {$$ = [$1].concat($2);}
	| def_node_element {$$ = [$1];}
	;

def_node_element
	: type_node TOKEN LINE_END {$$ = new node.NodeType($1, $2, []);}
	| type_node TOKEN def_node_element_options LINE_END {$$ = new node.NodeType($1, $2, $3);}
	| COMMENT {$$ = new node.Comment($1);}
	;

def_node_element_options
	: def_node_element_option def_node_element_options {$$ = [$1].concat($2);}
	| def_node_element_option {$$ = [$1];}
	;

def_node_element_option
	: _token "=" _token {$$ = [$1, $3];}
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
	| def_record_micro {$$ = $1;}
	| def_record_group {$$ = $1;}
	| def_record_array {$$ = $1;}
	| def_record_bytestream {$$ = $1;}
	| def_record_bits {$$ = $1;}
	| def_record_switch {$$ = $1;}
	| COMMENT {$$ = new node.Comment($1);}
	| "~" {$$ = new node.CheckEnd();}
	;

def_record_simpletype
	: type_record_enum _label LINE_END {$$ = new node.SimpleType($1.value, $1.enum, $2);}
	| UNDO INTEGER LINE_END {$$ = new node.SimpleType('Undo', null, $2);}
	| SCRIPT {$$ = new node.Script($1.slice(2,-2));}
	;

def_record_micro
	: MICRO TOKEN ":" TOKEN LINE_END {$$ = new node.Micro($2, $4);}
	;

def_record_group
	: Group _label LINE_END {$$ = new node.Group($2, []);}
	| Group _label P_OPEN P_CLOSE {$$ = new node.Group($2, []);}
	| Group _label P_OPEN def_record_inner P_CLOSE {$$ = new node.Group($2, $4);}
	| GroupAdd _label LINE_END {$$ = new node.Group($2, [], true);}
	| GroupAdd _label P_OPEN P_CLOSE {$$ = new node.Group($2, [], true);}
	| GroupAdd _label P_OPEN def_record_inner P_CLOSE {$$ = new node.Group($2, $4, true);}
	;

def_record_array
	: type_record_array_type _label def_record_simpletype {$$ = new node.Array([$3], $1, $2);}
	| type_record_array_type _label P_OPEN def_record_inner P_CLOSE {$$ = new node.Array($4, $1, $2);}
	;

def_record_bytestream
	: type_record_bytestream_type _label LINE_END {$$ = new node.ByteStream($1, $2);}
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
	: INTEGER type_bits_enum _label LINE_END {$$ = new node.BitsType($1, $1, $2.value, $2.enum, $3);}
	| INTEGER "~" INTEGER type_bits_enum _label LINE_END {$$ = new node.BitsType($1, $3, $4.value, $4.enum, $5);}
	| COMMENT {$$ = new node.Comment($1);}
	;

def_record_switch
	: SWITCH _label P_OPEN def_record_switch_inner P_CLOSE {$$ = new node.Switch($2, $4);}
	;

def_record_switch_inner
	: def_record_switch_element def_record_switch_inner {$$ = [$1].concat($2);}
	| def_record_switch_element {$$ = [$1];}
	;
def_record_switch_element
	: CASE _token "=" _token ":" def_record_inner {$$ = new node.Case($2, $4, $6);}
	| CASE _token ":" def_record_inner {$$ = new node.Case($2, $2, $4);}
	| CASES token_list ":" def_record_inner {$$ = new node.Cases($2, $4);}
	| ELSE ":" def_record_inner {$$ = new node.Else($3);}
	;

def_micro
	: MICRO TOKEN LINE_END {$$ = new node.MicroDef($2, []);}
	| MICRO TOKEN P_OPEN P_CLOSE {$$ = new node.MicroDef($2, []);}
	| MICRO TOKEN P_OPEN def_record_inner P_CLOSE {$$ = new node.MicroDef($2, $4);}
	;
