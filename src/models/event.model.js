const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
    code:       String,
    orgCode:    String,
    cityCode:   String,
    start:      Date,
    end:        Date,
    title:      { type: String, required: true, minlength: 3, maxlength: 35 },
    site:       String,
    description: String,
    images:     { type: [], required: true },
    tags:       { type: [], default: [] },
    featured: Boolean
}));

exports.Event = Event;