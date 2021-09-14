/**
 * 
 */

var fs = require('fs');
fs.readFile('Test.txt', (err, data) => {
	if(err) throw err;
	console.log(data.toString());
});