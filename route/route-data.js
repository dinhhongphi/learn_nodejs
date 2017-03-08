var express = require('express');

var app = express();
var router = express.Router();

router.use('/user/:id',function(req,res,next){
    if(req.params.id == 0){
        res.json({"message":"You must pass ID other than 0"});
    }else
        next();
});

router.get("/user/:id",function(req,res){
    res.json({
        "message" : "Hello " + req.params.id
    })
});

app.use("/api",router);

app.use('*',function(req,res){
    res.status(400).send('404 Not Found');
});

var server = app.listen(8081,function(){
    console.log('live at port 8081');
})
