const mongoose = require('mongoose');
const utilsService = require('../services/utils.service');

const City = mongoose.model('City', new mongoose.Schema({
    code: { type: String, default: utilsService.encode(this.name) },
    name: { type: String, required: true, minlength: 3, maxlength: 120 },
    status: { type: Boolean, default: true },
    order: { type: Number, default: 0 }
}));

exports.City = City;