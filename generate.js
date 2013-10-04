var fs = require('fs');
var format = require("./format/format.js");
var hwp_format_file = fs.readFileSync("./format/hwp.format", 'utf-8');
var hwp_node_record_file = fs.readFileSync("./format/hwp-node-record.js", 'utf-8');

var code = format.parser.parse(hwp_format_file);
console.log(code);
code = hwp_node_record_file.replace('// CODE //', code);
fs.writeFileSync("./lib/hwpdata.js", code, 'utf-8');
