const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
    code: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 35
    },
    description: { type: String, maxlength: 255 },
    start: Date,
    end: Date,
    org: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    orgCode: String,
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    cityCode: String,
    images: {
        type: [],
        required: true
    },
    featured: Boolean
}));

exports.Event = Event;