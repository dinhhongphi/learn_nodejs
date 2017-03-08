var data = require('../../../data.json');

module.exports = (req,res) => {
    var carId = req.params.carId * 1;
    var car = data.cars.find(x => x.id == carId);
    var model = data.models.find(x => x.id == car.modelId);
    res.status(200).json({model});
}