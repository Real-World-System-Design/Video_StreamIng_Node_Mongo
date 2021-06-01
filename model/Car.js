const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String
});

module.exports = mongoose.model('Car', carSchema);