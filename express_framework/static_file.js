var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    console.log('get method');
    res.send("hello");
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("This is server starting at http://%s%s",host,port);
});