const mongoose = require('mongoose');

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

exports.Org = Org;
