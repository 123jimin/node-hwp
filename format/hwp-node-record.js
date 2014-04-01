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
// CODE //

// Node
var HWPNode = function HWPNode(){
	this.children = [];
};

var escapeHTML = function(s){
	s += '';
	for(var ps=false,h='',c,i=0; i<s.length; i++){
		c = s.charCodeAt(i);
		if(
			(c<32||c>127) // ASCII
			&&(c<12593||c>12643) // ㄱ-ㅎㅏ-ㅣ
			&&(c<44032||c>55203) // 가-힣
		) h += '&#'+c+';';
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
HWPNode.prototype.offset = 0;

HWPNode.prototype.getEncodedValue = function(toHML){
	if(this.value == null) return null;
	switch(this.encoding){
		case 'base64':
			return escapeHTML((new Buffer(this.value, 'utf16le')).toString('base64'));
		default:
			if(this.children.length > 0){
				var li = 0, v = "";
				this.children.forEach(function(elem){
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
