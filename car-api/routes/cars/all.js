const data = require('../../data.json');

module.exports = (req,res) => {
    var cars = data.cars;
    res.status(200).json({cars});
};