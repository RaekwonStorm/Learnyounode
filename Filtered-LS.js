var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, files) {
	files.forEach(function (elem) {
		if (path.extname(elem) === "." + process.argv[3]) {
			console.log(elem);
		}
	})
})