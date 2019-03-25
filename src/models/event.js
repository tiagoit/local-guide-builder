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
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    org: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    images: {
        type: [],
        required: true
    },
    featured: {
        type: Boolean,
        required: false
    }
}));

exports.Event = Event;