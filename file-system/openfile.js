var fs = require('fs');

console.log('going to open file!');

// fs.open('input.txt','r+',function(err,fd){
//     if(err)
//     {
//         return console.error(err);
//     }
//     console.log('open file successfully');
// });

var file = fs.openSync('input.txt','r+');
console.log(file.toString());