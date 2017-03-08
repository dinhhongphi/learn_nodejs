var fs = require('fs');

fs.readFile('input.txt',function(err,data){
    if(err)
    {
        console.log("error : " + err.message);
        return;
    }
    console.log(data.toString());
});