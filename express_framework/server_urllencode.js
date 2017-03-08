var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public2'));

app.get('/index.html',function (req,res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/process_post',urlencodedParser,function(req,res){
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("The server started at http://127.0.0.1:%s",port);
});