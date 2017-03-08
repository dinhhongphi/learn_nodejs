var buf1 = new Buffer("Hi Dinh Hong Phi ");
var buf2 = new Buffer('Ban co khoe khong');
var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());