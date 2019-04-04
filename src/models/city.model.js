const mongoose = require('mongoose');

const City = mongoose.model('City', new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    status: { type: Boolean, required: true }
}));

exports.City = City;