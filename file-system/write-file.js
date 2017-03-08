var fs = require('fs');

var stream = fs.createWriteStream('output.txt',{'flags': 'a'});

for(var i = 0; i < 20; i++){
    stream.write(i.toString() + '\r\n');
    console.log(i);
}
console.log('write finish');