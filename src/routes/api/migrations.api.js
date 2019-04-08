const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { City, Org, Event } = require('../../models');

/*
    - Collection.orgs
        - add site (empty string)
        - code -> remove city (arraial-d'ajuda|morocha-club) => (morocha-club)
        - add cityCode (enconde(cityName))
*/
router.get('/mig-001', async (req, res) => {
    let orgs = await Org.find();

    orgs.forEach(el => {
        el.site = "";
        el.code = el.code.split("|")[1] || el.code;
        el.cityCode = appService.encode(el.address.city) || el.cityCode;
        el.save();
    });

    res.send({});
});


/*
    - Collection.events
        - add tags (Empty array)
        - add site (Empty string)
        - orgCode -> remove city (arraial-d'ajuda|morocha-club) => (morocha-club)
        - add orgName
        - add cityName
*/
router.get('/mig-002', async (req, res) => {
    let events = await Event.find();


    events.forEach((el) => {
        el.site = "";
        el.tags = [];
        el.orgCode = el.orgCode.split("|")[1] || el.orgCode;
        el.orgName = el._doc.org;
        el.cityName = el._doc.city;
        el.save();
    });

    res.send({});
});

module.exports = router;
