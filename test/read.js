var assert = require('assert'),
	fs = require('fs'),
	util = require('util'),
	XMLDoc = require('xmldoc');
var hwp = require('../');

var files = [
	// Simple texts
	"text/text-1",
	"text/text-2",
	"text/text-3",
	// Tables
	"table/simple-1",
	// Drawing Objects
	"shape/text-1",
	"shape/simple-1",
	"shape/simple-2",
	"shape/simple-3",
	"shape/simple-4",
	"shape/arrow-1",
	"shape/textwrap-1",
	"shape/fill-1",
	"shape/fill-2",
	"shape/group-1",
	"shape/complex-1",
	// KAIST forms
	// "kaist/kaist-055",
	// Various Samples
	"sample/sample-1",
	"sample/sample-2",
];

/*
	XXX:
		BORDERFILL이 하나 더 있는 경우가 종종 있음.
		CARETPOS[List]가 다른 경우가 종종 있음. (커서 위치라 그리 중요하지는 않음.)
		한/글에서 생성한 HML에서 PAGEBORDERFILL의 BorderFill이 BorferFill로 오타가 나 있음.
		한/글이 CHAR를 잘 생성하지 못함. (특히 MARKPEN같은 Range들을 잘 처리 못 함.)
	TODO:
		기본 값 확인할 것 확인하기
		PARAHEAD[Start], CELL[Name], DRAWTEXT[Name. Editable]에 대한 정보 찾기.
		COMPATIBLEDOCUMENT 채워넣기.
		STARTNUMBER[Page] 다른 이유 확인하기.
		NOTELINE[Length] 저장되는 형식 확인하기.
		TAIL 처리하기.
*/

var ignores = {
	// 다음 속성들을 무시
	'attr': {
		// 무시할 것
		'PAGEBORDERFILL': "BorferFill",
		'CARETPOS': "List",
		'BORDERFILLLIST': "Count",
		// 기본 값 확인하기
		'STYLE': "LockForm",
		'SECDEF': "TextVerticalWidthHead",
		'PARALIST': "LinkListID LinkListIDNext",
		// 아직 구현 안 된 것
		'PARAHEAD': "Start", 'CELL': "Name", 'DRAWTEXT': "Name Editable",
		'STARTNUMBER': "Page", 'NOTELINE': "Length",
	},
	// 다음 노드의 자식들을 무시
	'children': [
	],
	// 다음 노드들을 무시
	'node': [
		// 무시할 것
		'CHAR',
		'COMPATIBLEDOCUMENT',
		// 아직 구현 안 된 것
		'TAIL'
	],
	// 다음 노드가 비어있으면 무시
	'empty': [
		'TEXT'
	]
};

(function(){
	var x;
	for(x in ignores.attr) ignores.attr[x] = ignores.attr[x].split(' ');
}());

// s가 n과 비슷한지 확인
var same_num_rep = function(n, s){
	if(n == +s) return true;
	if(s.indexOf('.') == -1) return false;
	n = n.toFixed(s.split('.')[1].length);
	return n == s || n == '-'+s;
};

var check_file = function(file, callback){
	var check_stack = [0];
	// Border Fill Difference
	var bfd = 0;
	var check_file_rec = function check(hml, ref, lev){
		try{
			check_stack[lev] = hml.name+"["+check_stack[lev]+"]";
			assert.equal(hml.name, ref.name, "Different tag");
			var hml_attr_keys = Object.keys(hml.attr).filter(function(x){return hml.attr[x] != null}),
				ref_attr_keys = Object.keys(ref.attr);
			ref_attr_keys.forEach(function(x){
				if(!(hml.name in ignores.attr) || ignores.attr[hml.name].indexOf(x) == -1){
					if(hml.attr[x] == null) assert.fail(hml.attr[x], ref.attr[x], "Attribute does not exist ('"+x+"')");
					var msg = "Different attribute ('"+x+"')", ha = hml.attr[x], ra = ref.attr[x];
					// Adjust BorderFillId
					if(hml.name == 'BORDERFILL' && x == 'Id'
						|| x == 'BorderFill' || x == 'BorderFillId') ha = (+ha)+bfd;
					if(typeof hml.attr[x] == 'number') assert.ok(same_num_rep(ha, ra), msg);
					else assert.equal(ha.toString(), ra, msg);
				}
			});
			var rv = ref.val;
			if(rv && 'encoding' in hml) switch(hml.encoding){
				case 'base64':
					rv = rv.replace(/\s/g, '');
					break;
			}
			assert.equal(hml.getEncodedValue() || "", rv.replace(/\r/g, "&#13;").replace(/\n/g, "&#10;"), "Different value");
			assert.ok(hml.children.length <= ref.children.length, "HML too long");
		}catch(e){
			console.error("File '"+file+"': At "+check_stack.join(" > "));
			console.error("HML:", util.inspect(hml, {'depth': 1}));
			console.error("REF:", util.inspect(ref, {'depth': 1}));
			throw e;
		}
		if(ignores.children.indexOf(hml.name) == -1){
			var i=0, j=0;
			if(hml.name == 'BORDERFILLLIST'){
				bfd = ref.children.length - hml.children.length;
				if(bfd != 0 && bfd != 1) assert.fail(hml.children.length, ref.children.length, "Difference too big in BORDERFILLLIST");
				i = bfd;
			}
			for(;i<ref.children.length;i++){
				var rc = ref.children[i];
				if(!rc.value && !rc.children.length && ignores.empty.indexOf(rc.name) != -1) continue;
				if(j >= hml.children.length && ignores.node.indexOf(rc.name) == -1){
					console.error("File '"+file+"': At "+check_stack.join(" > "));
					console.error("HML:", util.inspect(hml.children, {'depth': 1}));
					console.error("REF:", util.inspect(ref.children, {'depth': 1}));
					assert.fail(hml.children.length, ref.children.length, "Missing child: "+rc.name);
				}
				if(ignores.node.indexOf(rc.name) == -1){
					check_stack.push(i==j?i:(j+1)+":"+(i+1));
					try{
						check(hml.children[j], rc, lev+1);
					}catch(e){
						throw e;
					}
				}
				j++;
			}
		}
		check_stack.pop();
	};
	console.log("Opening "+file+".hwp");
	hwp.open("./test/files/"+file+".hwp", function(err, doc){
		assert.ifError(err);
		var ref = new XMLDoc.XmlDocument(fs.readFileSync("./test/files/"+file+".hml", 'utf8'));
		check_file_rec(doc._hml, ref, 0);
		callback();
	});
};

var test = function(ok){
	var inner_loop = function f(ind){
		if(ind == files.length) ok();
		else check_file(files[ind], f.bind(null, ind+1));
	};
	inner_loop(0);
};

module.exports = {
	'description': "Reads HWP documents and compare it to reference HML files.",
	'run': test
};
