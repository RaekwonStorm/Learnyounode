var fs = require('fs');

fs.readFile(process.argv[2], function (err, contents) {
	if (err) throw err;
	var str = contents.toString();
	var results = str.split("\n").length-1;
	console.log(results);
})