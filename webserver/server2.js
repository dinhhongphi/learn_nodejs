var http = require('http');
var url = require('url');
var fs = require('fs');

/**
 * This program will log request from client containt host , date, path
 * 
 */

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var date = new Date();
    var host = req.headers.host;

    var stream = fs.createWriteStream('log.txt',{flags:'a'});
    stream.write(`host: ${host} | date : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} | pathname : ${pathname}` + '\r\n');
    stream.close();

    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write("Successfully");
    res.end();
}).listen(8081);

console.log('This server is running at http://127.0.0.1:8081');