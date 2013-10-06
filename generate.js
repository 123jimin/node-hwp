var fs = require('fs');
var format = require("./format/format.js");
var parse = function(file){return format.parser.parse(fs.readFileSync("./format/"+file+".format", 'utf-8'))};
var hwp_node_record_file = fs.readFileSync("./format/hwp-node-record.js", 'utf-8');

var code = parse('node') + '\n' + parse('record');
// console.log(code);
code = hwp_node_record_file.replace('// CODE //', code);
fs.writeFileSync("./lib/hwpdata.js", code, 'utf-8');
