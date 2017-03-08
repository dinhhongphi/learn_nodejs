var http = require('http');
var url = require('url');
const querystring = require('querystring');
http.createServer(function(req,res){
    var path = url.parse(req.url).path;
    
    //parse request
    var query = querystring.parse(path);
    console.log(query);

    //caculator
    var method = query['method'];
    var a = parseInt(query['a']);
    var b = parseInt(query['b']);
    var result;
    switch(method){
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'mul':
            result = a * b;
            break;
        case 'devide':
            result = a / b;
            break;
    }

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(`result : ${result}`);
    res.end();
}).listen(8081);