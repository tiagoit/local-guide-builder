const mongoose = require('mongoose');
const appService = require('./services/app.service');

// ########################################## CITY ##########################################
const City = mongoose.model('City', new mongoose.Schema({
    code:   { type: String, default: appService.encode(this.name) },
    name:   { type: String, required: true, minlength: 3, maxlength: 120 },
    status: { type: Boolean, default: true },
    order:  { type: Number, default: 0 }
}));


// ########################################## ORG ##########################################
const AddressSchema = new mongoose.Schema({
    state:          { type: String, required: true, length: 2 },
    city:           { type: String, required: true, minlength: 3, maxlength: 120 },
    neighborhood:   String,
    street:         String,
    number:         String,
    complement:     String,
    zipCode:        String
});

const ContactSchema = new mongoose.Schema({
    name:   { type: String },
    email:  { type: String },
    mobile: { type: String },
    role:   { type: String },
    notes:  { type: String }
});

const Org = mongoose.model('Org', new mongoose.Schema({
    code:       { type: String, required: true},
    cityCode:   { type: String, required: true},
    name:       { type: String, required: true},
    site:       String,
    address:    AddressSchema,
    contacts:   [ContactSchema],
    mobile:     { type: String},
    land:       { type: String, maxlength: 2 },
    email:      { type: String},
    notes:      { type: String},
    status:     { type: Boolean, default: true }
}));


// ########################################## EVENT ##########################################
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


// ########################################## TAG ##########################################
const Tag = mongoose.model('Tag', new mongoose.Schema({
    code:   { type: String, default: appService.encode(this.title) },
    title:  { type: String, required: true },
    status: { type: Boolean, default: true }
}));


exports.City = City;
exports.Org = Org;
exports.Event = Event;
exports.Tag = Tag;