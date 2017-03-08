var fs = require('fs');
var data = '';

var stream = fs.createReadStream('input.txt');

stream.setEncoding('utf8');

stream.on('data',function (chunk){
    data += chunk;
});

stream.on('end', function (){
    console.log(data);
});

stream.on('error',function(err){
    console.log(err.stack);
});

console.log('end program');
