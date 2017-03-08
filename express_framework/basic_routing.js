var express = require('express');

var app = express();

//this response with hello world
app.get('/',function (req, res){
   console.log('get request for homepage');
   res.send('Hello world. This is homepage');
});

app.post("/",function (req,res){
    console.log("Got http post method for request homepage");
    res.send('hello post');
});

app.delete('/del_user',function(req,res){
    console.log('got a DELETE method for /del_user');
    res.send('hello delete');
});

app.get('/list_user',function(req,res){
    console.log("Got a Get method for /list_user");
    res.send('Page listing');
});

app.get('/ab*cd',function(req,res){
    console.log('Got a Get method for /ab*cd');
    res.send('Page pattent match');
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("This server is starting at http://%s:%s",host,port);
});


