var assert = require('assert');
var hwp = require('../');

const file = 'test_table_1';

var test = function(ok){
	hwp.open('./test/files/'+file+'.hwp', function(err, doc){
		assert.ifError(err);
		console.log(doc.toHML(true));
		ok();
	});
};

module.exports = {
	'description': "Open an HWP file",
	'run': test
};
