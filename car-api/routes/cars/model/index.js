var routes = require('express').Router({mergeParams: true});
var all = require('./all');

routes.get('/',all);


module.exports = routes;