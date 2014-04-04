#!/usr/bin/env node

var hwp = require('../'),
	fs = require('fs');
var argv = {
	'_': [],
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

if(argv._.length == 0){
	console.log("Usage: ./node-hwp file.hwp");
	console.log("\t-c, --convert format\n\t\tConvert given hwp file to the format (ex: hml, text)");
	console.log("\t-o, --output file\n\t\tSave converted result to file");
	console.log("\t-d, --dump\n\t\tDump record trees of the given hwp file");
	console.log("\t--debug\n\t\tEnable debug messages");
}else if(flag){
	console.error("Error: missing argument to %s (%s)", flag_ori, flag);
}else hwp.open(argv._[0], {'type': 'hwp', 'saveTree': argv.debug || argv.dump}, function(err, doc){
	if(err){
		console.error(err);
		return;
	}
	var result = "";
	if(argv.dump){
		result = "===== DOCINFO =====\n";
		result += doc._hwp5_records.docInfo.toString()+"\n";
		result += "===== SECTION =====\n";
		result += doc._hwp5_records.sections.map(function(x){return x.toString()}).join('\n');
	}
	if(argv.convert){
		if(result) result += "\n===== OUTPUT =====\n";
		switch(argv.convert.toLowerCase()){
			case 'hwpml':
			case 'hml':
				result += doc.toHML(argv.debug);
				break;
			case 'text':
			case 'txt':
			case 'plain':
			case 'plaintext':
				result += doc.convertTo(hwp.converter.plainText);
				break;
			default:
				console.error("Error: convertTo format unknown: %s", argv.convert);
				return;
		}
	}
	if(argv.output){
		fs.writeFileSync(argv.output, result, 'utf-8');
	}else{
		console.log(result);
	}
});
