#!/usr/bin/env node

var hwp = require('../');
var argv = {
	'_': [],
	'convert': 'hml',
	'debug': false,
	'dump': false,
};

var flag = null, flag_ori;
process.argv.slice(2).forEach(function(e){
	if(flag){
		argv[flag] = e;
		flag = null;
		return;
	}
	switch(e){
		case '-c':
		case '--convert':
			flag = 'convert';
			flag_ori = e;
			break;
		case '-o':
		case '--output':
			flag = 'output';
			flag_ori = e;
			break;
		case '-d':
		case '--dump':
			argv.dump = true;
			break;
		case '--debug':
			argv.debug = true;
			break;
		default:
			argv._.push(e);
	}
});

hwp.HWP.debug = argv.debug;

if(flag){
	console.error("Error: missing argument to %s (%s)", flag_ori, flag);
}else hwp.open(argv._[0], function(err, doc){
	if(err){
		console.error(err);
		return;
	}
	if(argv.convert){
		var result = null;
		switch(argv.convert.toLowerCase()){
			case 'hwpml':
			case 'hml':
				result = doc.toHML(argv.debug);
				break;
			case 'text':
			case 'txt':
			case 'plain':
			case 'plaintext':
				result = doc.convertTo(hwp.converter.plainText);
				break;
			default:
				console.error("Error: convertTo format unknown: %s", argv.convert);
				return;
		}
		if(argv.output){
			
		}else{
			console.log(result);
		}
	}
});
