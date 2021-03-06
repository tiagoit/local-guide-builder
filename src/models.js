const mongoose = require('mongoose');

const Region = mongoose.model('Region', new mongoose.Schema({
    code:     { type: String, required: true, index: true },
    name:     { type: String, required: true},
    status:   { type: Boolean, default: true },
    created:  { type: Date, default: new Date() }
}));

const City = mongoose.model('City', new mongoose.Schema({
    code:      { type: String, required: true, index: true },
    order:     { type: Number, required: true, default: 0 },
    name:      { type: String, required: true},
    regionID:  { type: String, required: true },
    status:    { type: Boolean, default: true },
    created:  { type: Date, default: new Date() }
}));

const Partner = mongoose.model('Partner', new mongoose.Schema({
    name:      { type: String, required: true },
    email:     { type: String, required: true },
    pass:      { type: String, required: true },
    regionID:  { type: String },
    role:      { type: String, required: true },
    status:    { type: Boolean, default: true },
    created:  { type: Date, default: new Date() }
}));

const AddressSchema = new mongoose.Schema({
    state:          { type: String, required: true, length: 2 },
    city:           { type: String, required: true},
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
    images:     { type: [], required: true },
    status:     { type: Boolean, default: true },
    created:  { type: Date, default: new Date() }
}));

const Event = mongoose.model('Event', new mongoose.Schema({
    code:       { type: String, index: true },
    title:      { type: String, required: true, minlength: 3, maxlength: 35 },
    orgCode:    String,
    orgName:    String,
    orgImage:   String,
    cityCode:   { type: String, required: true, index: true },
    cityName:   String,
    start:      Date,
    end:        Date,
    size:       { type: Number, required: true },
    site:       String,
    description: String,
    images:     { type: [], required: true },
    tags:       { type: [], default: [] },
    featured: Boolean,
    created:  { type: Date, default: new Date() }
}));

const Tag = mongoose.model('Tag', new mongoose.Schema({
    code:         { type: String, required: true, index: true },
    order:        { type: Number, required: true, default: 0 },
    title:        { type: String, required: true },
    status:       { type: Boolean, default: true, index: true },
    featured:     { type: Boolean, default: false, index: true },
    childrenTags: { type: [], default: []},
    created:  { type: Date, default: new Date() }
}));

const CtaHit = new mongoose.Schema({
    date:           { type: Date },
    isMobile:       { type: String },
    contactName:    { type: String },
    contactPhone:   { type: String },
    created:  { type: Date, default: new Date() }
});

const Ad = mongoose.model('Ad', new mongoose.Schema({
    title:       { type: String, required: true },
    description: { type: String, required: false },
    type:        { type: String, required: true },
    empresa:     { type: String, required: false },
    ctaLink:     { type: String, required: true },
    ctaLabel:    { type: String, required: true },
    phone:       { type: String, required: false },
    whatsapp:    { type: String, required: false },
    instagram:   { type: String, required: false },
    facebook:    { type: String, required: false },
    image:       { type: String, required: true },
    status:      { type: Boolean, default: true },
    start:       { type: Date, required: true },
    end:         { type: Date, required: true },
    ctaHits:     [ CtaHit ],
    created:  { type: Date, default: new Date() }
}));


exports.Region = Region;
exports.City = City;
exports.Partner = Partner;
exports.Org = Org;
exports.Event = Event;
exports.Tag = Tag;
exports.Ad = Ad;
