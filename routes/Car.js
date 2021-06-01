const carController = require('../controllers/Car');

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getCarById
    },
    {
        method: 'PATCH',
        url: '/api/cars/:id',
        handler: carController.updateCar
    },
    {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.removeCar
    }
]

module.exports = routes;