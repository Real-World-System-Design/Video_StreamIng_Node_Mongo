const { findOneAndUpdate } = require('../model/Car');
const Car = require('../model/Car');

exports.getCars = async (req, rep) => {
    try {
       const cars = await Car.find();
       return cars;         
    } catch (e) {
        throw e
    }
}

exports.getCarById = async (req, rep) => {
    try {
        const id = req.params.id;
        const cars = await Car.findById(id);
        return cars        
    } catch (e) {
        throw e
    }
}

exports.updateCar = async (req, rep) => {
    try {
        const id = req.params.id;
        const car = req.body;
        const {...updateData} = car
        const updatedCar = await Car.findOneAndUpdate(id, updateData, {new : true});
        return updatedCar;
    } catch (e) {
        throw e;
    }
}

exports.addCars = async (req, res) => {
    try {
        const car = new Car(req.body);
        return car.save();        
    } catch (e) {
        throw e
    }
}

exports.removeCar = async (req, rep) => {
    try {
        const id = req.params.id;
        const car = await Car.findOneAndRemove(id);
        return car;        
    } catch (e) {
        throw e
    }
}