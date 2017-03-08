var fs = require('fs');

// fs.stat('input.txt',function(err,stats){
//     if(err){
//         console.error(err);
//     }

//     console.log(stats.size);
// });

var stat = fs.lstatSync('input.txt');

console.log(stat.size);