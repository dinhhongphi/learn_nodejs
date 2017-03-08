var express = require('express');
var fs = require('fs');
var app = express();

app.get('/file',function(req,res,next){
    var path = __dirname + req.url;
    console.log(path);
    //check path exists
    if(!fs.existsSync(path)){
        res.send('not found');
        res.end();
        return;
    }

    fs.stat(__dirname +  req.url,function(err,stats){
        if(err){
            res.send("not found");
            res.end();
            return;
        };
        //check isFolder
        if(stats.isDirectory()){
            fs.readdir(path,function(err,files){
                res.send(JSON.stringify(files));
                res.end();
            });
        }else{ //is file
            res.sendFile(path);
            res.end();
        }
    });
})

var server = app.listen(8081,"192.168.1.12",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('This server is started at http://%s:%s',host,port);
});