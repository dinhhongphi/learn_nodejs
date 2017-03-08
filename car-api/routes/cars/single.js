var data = require('../../data.json');

module.exports = (req,res) => {
    var carId = req.params.carId * 1;
    var cars = data.cars.find(x => x.id == carId);
    res.status(200).json({cars});
}