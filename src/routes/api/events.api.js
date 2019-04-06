const express = require('express');
const moment = require('moment-timezone');
const router = express.Router();
const { Event } = require('../../models');
const storageService = require('../../services/storage.service');
const appService = require('../../services/app.service');

// ############   LIST
router.get('/', async (req, res, next) => {
    try {
        res.send(await Event.find());
    } catch(ex) { next(ex) }
});

// ############   GET
router.get('/:id', async (req, res, next) => {
    try {
        res.send(await Event.findById(req.params.id));
    } catch(ex) { next(ex) }
});

// ############   STORE
router.post('/', async (req, res, next) => {
    try {
        const event = new Event({
            code: appService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY'),
            start: req.body.start,
            end: req.body.end,
            org: req.body.org,
            orgCode: appService.encode(req.body.city) + '|' + appService.encode(req.body.org),
            city: req.body.city,
            cityCode: appService.encode(req.body.city),
            description: req.body.description,
            title: req.body.title,
            site: req.body.site,
            images: req.body.images,
            tags: req.body.tags,
            featured: req.body.featured
        });
        res.send(await event.save());
    } catch(ex) { next(ex) }
});

// ############   UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);    
        event.set({
            code: appService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY'),
            start: req.body.start,
            end: req.body.end,
            org: req.body.org,
            orgCode: appService.encode(req.body.city) + '|' + appService.encode(req.body.org),
            city: req.body.city,
            cityCode: appService.encode(req.body.city),
            description: req.body.description,
            title: req.body.title,
            site: req.body.site,
            images: req.body.images,
            tags: req.body.tags,
            featured: req.body.featured
        });
        res.send(await event.save());
    } catch(ex) { next(ex) }
});

// ############   DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        let event = await Event.findById(req.params.id);
        if(!event) throw new Error(`Event with this ID (${req.params.id}) not found`);

        event.images.forEach(fileUrl => {
            if(fileUrl) storageService.deleteFile(fileUrl);
        });

        res.send(await event.delete());
    } catch(ex) { next(ex) }
});

module.exports = router;
