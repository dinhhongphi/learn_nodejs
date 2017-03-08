const routes = require('express').Router();
const all = require('./all');
const single = require('./single');
const model = require('./model');

routes.get('/',all);
routes.get('/:carId',single);
routes.use('/:carId/model',model);
module.exports = routes;