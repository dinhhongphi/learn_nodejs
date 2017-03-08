var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    res.json({"message": "Hello world"});
});

router.get('/phi',function(req,res){
    var name = req.url.replace('/',' ');
    res.json({messae:"Xin chao " + name});
})

app.use("/api",router);

app.listen(8081,function(){
    console.log("Live at port 8081");
})