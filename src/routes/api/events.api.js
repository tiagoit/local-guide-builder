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
    req.body.orgCode = appService.encode(req.body.org)
    req.body.cityCode = appService.encode(req.body.city);

    res.send(await Event(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY');
    req.body.orgCode = appService.encode(req.body.org)
    req.body.cityCode = appService.encode(req.body.city);

    res.send(await Event.findOneAndUpdate({_id: req.body._id}, req.body));
});

// ############   DELETE
router.delete('/:id', async (req, res) => {
    let event = await Event.findById(req.params.id);
    if(!event) throw new Error(`Event with this ID (${req.params.id}) not found`);

    event.images.forEach(fileUrl => {
        if(fileUrl) storageService.deleteFile(fileUrl);
    });

    res.send(await event.delete());
});

module.exports = router;
