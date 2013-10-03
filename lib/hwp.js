var async = require('async'),
	fs = require('fs'),
	hwpdata = require('./hwpdata.js'),
	ole_doc = require('ole-doc'),
	zlib = require('zlib');

var HNode = hwpdata.node,
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
			});
		});
	});
	this._doc.read();
};
HWP.prototype._setHead = function(callback){
	if(!this._hml || this._hml.findChild('HEAD')){
		err(callback, "Invalid _setHead invocation!"); return;
	}
	var meta = this._hwp_meta,
		head = new HNode.HEAD(),
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
		// TODO: Fill additional fields
		var setting = head.getChild('DOCSETTING');
		getRawBuffer(meta, _this._doc.stream('DocInfo'), function(e, buffer){
			if(e){callback(e); return;}
			var docInfoTree = HRecord.getTree(0, buffer);
			console.log(docInfoTree.map(function(x){return x.toString()}).join('\n'));
			todo(callback);
		});
	});
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
		async.waterfall([
			function(callback){
				switch(type){
					case 'hwp':
						doc.loadFromHWP(file, callback);
						break;
					case 'hml':
						doc.loadFromHML(file, callback);
						break;
					default:
						err(callback, "Unknown HWP file type is given: "+type);
						return;
				}
			}
		], function(e){
			if(e) callback(e);
			else callback(null, doc);
		});
	}
};
