var async = require('async'), fs = require('fs');

var tests = fs.readdirSync('./test/').filter(function(s){return s.slice(-3) == '.js';});

async.map(tests, function(name, callback){
	var test = require('./test/'+name);
	console.log("Test: %s", name);
	if(test.description) console.log(test.description);
	test.run(function(err){
		console.log(); callback(err);
	});
}, function(err){
	if(err) console.error(err);
	else console.log("Success!");
});
