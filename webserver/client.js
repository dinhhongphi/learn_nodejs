var http = require('http');

var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
};

var callback = function (response){

    console.log(JSON.stringify(response.headers));

    var body = '';
    
    //continuously update stream with data
    response.on('data', function (data){
        body += data;
    });
    response.on('end',function(){
        //data received completed
        console.log(body);
    });
}

var req = http.request(options,callback);
req.end();