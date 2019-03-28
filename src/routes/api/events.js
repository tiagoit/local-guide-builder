const express = require('express');
const moment = require('moment-timezone');
const router = express.Router();
const { Event } = require('../../models/event');
const storageService = require('../../services/storage.service');
const utilsService = require('../../services/utils.service');

// ############   LIST
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (ex) {
        console.log('EXCEPTION: ', ex);
        return res.status(400).send(ex);
    }
});

// ############   GET
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        if(!event) return res.status(400).send("Event with this ID not found");
        res.send(event);
    } catch (ex) {
        console.log('EXCEPTION: ', ex);
        return res.status(400).send(ex);
    }
});

// ############   STORE
router.post('/', async (req, res) => {
    const event = new Event({
        code: utilsService.encode(req.body.title) + '-' + moment(req.body.start).format('DD-MM-YYYY'),
        start: req.body.start,
        end: req.body.end,
        org: req.body.org,
        orgCode: utilsService.encode(req.body.city) + '|' + utilsService.encode(req.body.org),
        city: req.body.city,
        cityCode: utilsService.encode(req.body.city),
        title: req.body.title,
        images: req.body.images,
        featured: req.body.featured
    });

    try {
        const result = await event.save();
        return res.send(event);
    } catch (ex) {
        console.log('EXCEPTION: ', ex);
        return res.status(400).send(ex);
    }
});

// ############   UPDATE
router.put('/:id', async (req, res) => {
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
            title: req.body.title,
            images: req.body.images,
            featured: req.body.featured
        });
        event.save();
        return res.send(event);
    } catch (ex) {
        console.log('EXCEPTION: ', ex);
        return res.status(400).send(ex);
    }
});

// ############   DELETE
router.delete('/:id', async (req, res) => {
    try {
        let event = await Event.findById(req.params.id);
        if(!event) return res.status(404).send('The event with the given ID was not found.');

        event.images.forEach(fileUrl => {
            if(fileUrl) storageService.deleteFile(fileUrl);
        });

        event.delete();
        // event = await Event.findOneAndDelete({ _id: req.params.id });
        return res.send(event);
    } catch (ex) {
        console.log('EXCEPTION: ', ex);
        return res.status(400).send(ex);
    }
});

module.exports = router;
