#!/usr/bin/env node
/*
** For debugging.
** Convert given HWP (in test/files) to HML string and print it.
*/

var hwp = require('./');
hwp.open("./test/files/"+(process.argv[2]||"")+".hwp", function(err, doc){
	if(err) console.error(err);
	else console.log(doc.toHML(true));
});
