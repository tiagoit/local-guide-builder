const express = require('express');
const moment = require('moment-timezone');
const router = express.Router();
const { Event } = require('../../models/event.model');
const storageService = require('../../services/storage.service');
const utilsService = require('../../services/utils.service');
const eventservice = require('../../services/events.service');

// ############   LIST
router.get('/', async (req, res, next) => {
    try {
        res.send(await eventservice.get());
    } catch(ex) { next(ex) }
});

// ############   GET
router.get('/:id', async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id)
        if(!event) return res.status(400).send("Event with this ID not found");
        res.send(event);
    } catch(ex) { next(ex) }
});

// ############   STORE
router.post('/', async (req, res, next) => {
    const event = new Event({
        code: utilsService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY'),
        start: req.body.start,
        end: req.body.end,
        org: req.body.org,
        orgCode: utilsService.encode(req.body.city) + '|' + utilsService.encode(req.body.org),
        city: req.body.city,
        cityCode: utilsService.encode(req.body.city),
        description: req.body.description,
        title: req.body.title,
        site: req.body.site,
        images: req.body.images,
        tags: req.body.tags,
        featured: req.body.featured
    });

    try {
        const result = await event.save();
        return res.send(event);
    } catch(ex) { next(ex) }
});

// ############   UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);    
        event.set({
            code: utilsService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY'),
            start: req.body.start,
            end: req.body.end,
            org: req.body.org,
            orgCode: utilsService.encode(req.body.city) + '|' + utilsService.encode(req.body.org),
            city: req.body.city,
            cityCode: utilsService.encode(req.body.city),
            description: req.body.description,
            title: req.body.title,
            site: req.body.site,
            images: req.body.images,
            tags: req.body.tags,
            featured: req.body.featured
        });
        event.save();
        return res.send(event);
    } catch(ex) { next(ex) }
});

// ############   DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        let event = await Event.findById(req.params.id);
        if(!event) return res.status(404).send('The event with the given ID was not found.');

        event.images.forEach(fileUrl => {
            if(fileUrl) storageService.deleteFile(fileUrl);
        });

        event.delete();
        // event = await Event.findOneAndDelete({ _id: req.params.id });
        return res.send(event);
    } catch(ex) { next(ex) }
});

module.exports = router;
