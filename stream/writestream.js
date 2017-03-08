var fs = require('fs');

var stream = fs.createWriteStream('output.txt');

stream.write('Đây là file output','utf8');

stream.end();

stream.on('finish',function (){
    console.log('write finish');
});

stream.on('error', function(err){
    console.log(err.stack);
});

console.log('end program');