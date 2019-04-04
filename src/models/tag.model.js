const mongoose = require('mongoose');

const Tag = mongoose.model('Tag', new mongoose.Schema({
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
    status: {
        type: Boolean,
        default: true
    }
}));

exports.Tag = Tag;