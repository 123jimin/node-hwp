var assert = require('assert'),
	async = require('async'),
	fs = require('fs'),
	util = require('util'),
	XMLDoc = require('xmldoc');
var hwp = require('../');

var files = [
	"text_1",
	// "shape_fill_1"
];

/*
	XXX:
		There are sometimes additional BORDERFILLs in ref
	TODO:
		Find informations about PARAHEAD[Start]
		Confirm default values of STYLE[LockForm], SECDEF[TextVerticalWidthHead]
		Find informations about COMPATIBLEDOCUMENT
		Find out why STARTNUMBER[Page] are different
		Find out how NOTELINE[Length] is saved in record (5cm = -1?)
*/

var ignores = {
	'attr': {
		'BORDERFILLLIST': "Count",
		'CHARSHAPE': "BorderFillId",
		'PARAHEAD': "Start",
		'PARABORDER': "BorderFill",
		'STYLE': "LockForm",
		'PAGEBORDERFILL': "BorderFill BorferFill", // lol
		'SECDEF': "TextVerticalWidthHead",
		'TABLE': "BorderFill",
		'CELLZONE': "BorderFill",
		'CELL': "BorderFill",
		'STARTNUMBER': "Page",
		'NOTELINE': "Length",
	},
	'children': [
		'BORDERFILLLIST'
	],
	'node': [
		'COMPATIBLEDOCUMENT'
	],
	'empty': [
		'TEXT'
	]
};

(function(){
	var x;
	for(x in ignores.attr) ignores.attr[x] = ignores.attr[x].split(' ');
}());

var check_file = function(file, callback){
	var check_stack = [1];
	var check_file_rec = function check(hml, ref, lev){
		try{
			check_stack[lev] = hml.name+"["+check_stack[lev]+"]";
			assert.equal(hml.name, ref.name, "Different tag");
			var hml_attr_keys = Object.keys(hml.attr).filter(function(x){return hml.attr[x] != null}),
				ref_attr_keys = Object.keys(ref.attr);
			ref_attr_keys.forEach(function(x){
				if(!(hml.name in ignores.attr) || ignores.attr[hml.name].indexOf(x) == -1){
					if(hml.attr[x] == null) assert.fail(hml.attr[x], ref.attr[x], "Attribute does not exist ('"+x+"')");
					assert.equal(hml.attr[x].toString(), ref.attr[x], "Different attribute ('"+x+"')");
				}
			});
			assert.equal(hml.value || "", ref.val, "Different value");
			assert.ok(hml.children.length <= ref.children.length, "HML too long");
		}catch(e){
			console.error("File '"+file+"': At "+check_stack.join(" > "));
			console.error("HML:", util.inspect(hml, {'depth': 1}));
			console.error("REF:", util.inspect(ref, {'depth': 1}));
			throw e;
		}
		if(ignores.children.indexOf(hml.name) == -1) for(var i=0,j=0; i<ref.children.length; i++){
			if(!ref.children[i].value && !ref.children[i].children.length
				&& ignores.empty.indexOf(ref.children[i].name) != -1) continue;
			if(j >= hml.children.length && ignores.node.indexOf(ref.children[i].name) == -1){
				console.error("File '"+file+"': At "+check_stack.join(" > "));
				console.error("HML:", util.inspect(hml.children, {'depth': 1}));
				console.error("REF:", util.inspect(ref.children, {'depth': 1}));
				assert.fail(hml.children.length, ref.children.length, "HML too short");
			}
			if(ignores.node.indexOf(ref.children[i].name) == -1){
				check_stack.push(i==j?i:(j+1)+":"+(i+1));
				check(hml.children[j++], ref.children[i], lev+1);
			}
		}
		check_stack.pop();
	};
	hwp.open("./test/files/"+file+".hwp", function(err, doc){
		assert.ifError(err);
		var ref = new XMLDoc.XmlDocument(fs.readFileSync("./test/files/"+file+".hml", 'utf8'));
		check_file_rec(doc._hml, ref, 0);
	});
};

var test = function(ok){
	async.map(files, check_file, function(err){
		assert.ifError(err); ok();
	});
};

module.exports = {
	'description': "Reads HWP document and compare it to reference HML files.",
	'run': test
};
