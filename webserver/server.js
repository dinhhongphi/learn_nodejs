var http = require('http');
var fs = require('fs');
var url = require('url');

//create a server
http.createServer(function(request, response){
    //parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    //print the name of the file for which request is made.
    console.log('Request for ' + pathname + ' received.');

    fs.readFile(pathname.substring(1),function(err,data){
        if(err){
            console.log(err);
            //HTTP status : 404 : not found
            //Content Type : text/html
            response.writeHead(404,{'Content-Type': 'text/html'});
        }else{
            //Page found
            //HTTP Status: 200 OK
            //Content-Type: text/html
            response.writeHead(200,{'Content-Type':'text/html'});
            //write content of the file to response body
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log('server is running at http://127.0.0.1:8081');