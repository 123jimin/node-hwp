/**
*
*  This code is generated from /format/hwp-node-record.js and
*  /format/hwp.format via /generate.js with jison.
*
**/

var root;
// CODE //

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
	this.data = buffer.slice(offset, offset + this.size);
	this._offset = offset + this.size;
};

HWPRecord.prototype.resolve = function(){
	var tag = root.tag.table[this.tag];
	if(!tag){
		console.error("Warning: unknown tag %d", this.tag);
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
