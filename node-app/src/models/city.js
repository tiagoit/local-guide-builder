const mongoose = require('mongoose');

const City = mongoose.model('City', new mongoose.Schema({
    code: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    }
}));

exports.City = City;