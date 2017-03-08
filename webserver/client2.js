var http = require('http');

var options = {
    host:'localhost',
    port:'8081',
    path:'/hello'
};

var req = http.request(options, function(res){
    console.log(JSON.stringify(res.headers));
});

req.end();