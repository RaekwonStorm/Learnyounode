var fs = require("fs")

var str = fs.readFileSync(process.argv[2]).toString();
var numLines = str.split("\n").length-1;
console.log(numLines);