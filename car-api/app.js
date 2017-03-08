const app = require('express')();
const routes = require('./routes');

//connect all our routes to our application

app.use("/",routes);

//turn on server
app.listen(8081,()=> {
    console.log('App listening on port 8081');
})