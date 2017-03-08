var fs = require('fs');

var streamReader = fs.createReadStream('input.txt');
var streamWriter = fs.createWriteStream('output2.txt');

streamReader.pipe(streamWriter);

console.log('end program');