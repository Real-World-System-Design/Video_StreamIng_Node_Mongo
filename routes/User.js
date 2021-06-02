const carController = require('../controllers/User');

const routes = [
    {
        method: 'GET',
        url: '/api/users',
        handler: carController.getUsers
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: carController.addUsers
    },
    {
        method: 'GET',
        url: '/api/users/:id',
        handler: carController.getUserById
    },
    {
        method: 'PATCH',
        url: '/api/users/:id',
        handler: carController.updateUser
    },
    {
        method: 'DELETE',
        url: '/api/users/:id',
        handler: carController.removeUser
    }
]

module.exports = routes;