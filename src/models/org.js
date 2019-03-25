const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    state: { type: String, required: true, maxlength: 2 },
    city: { type: String, required: true, maxlength: 120 },
    neighborhood: { type: String, required: false, maxlength: 120 },
    street: { type: String, required: false, maxlength: 120 },
    number: { type: String, required: false, maxlength: 120 },
    complement: { type: String, required: false, maxlength: 120 },
    zipCode: { type: String, required: false, maxlength: 120 }
});

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: false, maxlength: 120 },
    email: { type: String, required: false, maxlength: 120 },
    mobile: { type: String, required: false, maxlength: 120 },
    role: { type: String, required: false, maxlength: 120 },
    notes: { type: String, required: false, maxlength: 255 }
});

const Org = mongoose.model('Org', new mongoose.Schema({
    code: { type: String, required: true, maxlength: 120 },
    name: { type: String, required: true, maxlength: 120 },
    address: AddressSchema,
    contacts: [ContactSchema],
    mobile: { type: String, required: false, maxlength: 120 },
    land: { type: String, required: false, maxlength: 2 },
    email: { type: String, required: false, maxlength: 120 },
    notes: { type: String, required: false, maxlength: 255 },
    status: { type: Boolean, required: true }
}));

exports.Org = Org;
