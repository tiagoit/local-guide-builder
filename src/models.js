const mongoose = require('mongoose');

// ########################################## CITY ##########################################
const City = mongoose.model('City', new mongoose.Schema({
    code:   { type: String, required: true, index: true },
    order:  { type: Number, required: true, default: 0 },
    name:   { type: String, required: true, minlength: 3, maxlength: 120 },
    status: { type: Boolean, default: true }
}));


// ########################################## ORG ##########################################
const AddressSchema = new mongoose.Schema({
    state:          { type: String, required: true, length: 2 },
    city:           { type: String, required: true, minlength: 3, maxlength: 120 },
    neighborhood:   String,
    street:         String,
    number:         String,
    complement:     String,
    zipCode:        String,
    location:       Object
});

const ContactSchema = new mongoose.Schema({
    name:   { type: String },
    email:  { type: String },
    mobile: { type: String },
    role:   { type: String },
    notes:  { type: String }
});

const Org = mongoose.model('Org', new mongoose.Schema({
    code:       { type: String, required: true, index: true },
    name:       { type: String, required: true },
    cityCode:   { type: String, required: true, index: true },
    site:       String,
    address:    AddressSchema,
    contacts:   [ContactSchema],
    mobile:     { type: String },
    land:       { type: String },
    email:      { type: String },
    description:{ type: String },
    status:     { type: Boolean, default: true }
}));


// ########################################## EVENT ##########################################
const Event = mongoose.model('Event', new mongoose.Schema({
    code:       { type: String, index: true },
    title:      { type: String, required: true, minlength: 3, maxlength: 35 },
    orgCode:    String,
    orgName:    String,
    cityCode:   { type: String, required: true, index: true },
    cityName:   String,
    start:      Date,
    end:        Date,
    size:       { type: Number, required: true },
    site:       String,
    description: String,
    images:     { type: [], required: true },
    tags:       { type: [], default: [] },
    featured: Boolean
}));


// ########################################## TAG ##########################################
const Tag = mongoose.model('Tag', new mongoose.Schema({
    code:       { type: String, required: true, index: true },
    order:      { type: Number, required: true, default: 0 },
    title:      { type: String, required: true },
    status:     { type: Boolean, default: true, index: true },
    featured:   { type: Boolean, default: false, index: true }
}));


exports.City = City;
exports.Org = Org;
exports.Event = Event;
exports.Tag = Tag;
