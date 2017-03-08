var buf = new Buffer(256);

var len = buf.write("hello everyone");

console.log('Octect written: ' + len);