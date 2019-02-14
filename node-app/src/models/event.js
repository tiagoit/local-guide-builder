const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    org_code: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    org_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 120
    },
    org_city: {
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