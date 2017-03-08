var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer  = require('multer')

app.use(express.static('upload'));
app.use(bodyParser.urlencoded({extended: false}));
var temp = multer({
    fileFilter : function(req, file, cb){
        cb(null,true);
    },
    storage : multer.diskStorage({
        destination: function(req, file, cb){
            cb(null,'./upload/file');
        },
        filename: function (req,file,cb){
            var index = file.originalname.lastIndexOf('.');
            var string = String().concat(
                            file.originalname.substring(0,index),
                            Date.now().toString(),
                            file.originalname.substring(index)
                        );
            
            cb(null,string.replace(/\s/g,'-'));
        }
    })
});
app.use(temp.any());

app.post('/file_upload',function(req,res){
    // console.log(req.files[0].originalname);
    // console.log(req.files[0].path);
    // console.log(req.files[0].size);
    res.status(200);
    res.send("Upload success" + "<br>" + "Data: " + JSON.stringify(req.files[0]));
    res.end();
});

var server = app.listen(8081,function(){
    var port = server.address().port;

    console.log("This server started at http://127.0.0.1:%s",port);
});