const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { City, Org, Event } = require('../../models');

const MIG_COUNT = 3;

// Get migrations count
router.get('/mig-count', async (req, res) => res.send({migCount: MIG_COUNT}));

/*
    - Collection.orgs
        - add site (empty string)
        - code -> remove city (arraial-d'ajuda|morocha-club) => (morocha-club)
        - add cityCode (encode(cityName))
*/
router.get('/mig-1', async (req, res) => {
    let orgs = await Org.find();

    orgs.forEach(el => {
        el.site = '';
        el.code = el.code.split('|')[1] || el.code;
        el.cityCode = appService.encode(el.address.city) || el.cityCode;
        el.save();
    });

    res.send({});
});


/*  - Collection.events
        - add tags (Empty array)
        - add site (Empty string)
        - orgCode -> remove city (arraial-d'ajuda|morocha-club) => (morocha-club)
        - add orgName
        - add cityName */
router.get('/mig-2', async (req, res) => {
    let events = await Event.find();


    events.forEach((el) => {
        el.site = '';
        el.tags = [];
        el.orgCode = el.orgCode.split('|')[1] || el.orgCode;
        el.orgName = el._doc.org;
        el.cityName = el._doc.city;
        el.save();
    });

    res.send({});
});

/*  - Collection.orgs
        - add description, use notes if its defined */
router.get('/mig-3', async (req, res) => {
    let orgs = await Org.find();
    orgs.forEach(el => {
        el.description = el.notes || '';
        el.save();
    });

    res.send({});
});


module.exports = router;
