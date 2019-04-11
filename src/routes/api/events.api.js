const express = require('express');
const moment = require('moment-timezone');
const router = express.Router();
const appService = require('../../services/app.service');
const storageService = require('../../services/storage.service');
const { Event } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Event.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Event.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY');  
    res.send(await Event(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY');

    res.send(await Event.findOneAndUpdate({_id: req.body._id}, req.body));
});

router.delete('/:id', async (req, res) => {
    let event = await Event.findById(req.params.id);

    if(!event) res.status(500).send(`Event with this ID (${req.params.id}) not found.`);
    event.images.forEach(fileUrl => {
        if(fileUrl) storageService.deleteFile(fileUrl);
    });

    res.send(await event.delete());
});

router.get('/check-code/:code/:orgCode/:cityCode', async (req, res) => {
    let query = {code: req.params.code, orgCode: req.params.orgCode, orgCode: req.params.orgCode, cityCode: req.params.cityCode};
    res.send(await Event.findOne(query));
});

module.exports = router;
