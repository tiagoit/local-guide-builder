const express = require('express');
const router = express.Router();
const {Event} = require('../models/event');
const storageService = require('../services/storage.service');


// ############   LIST
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   GET
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        if(!event) return res.status(400).send("Event with this ID not found");
        res.send(event);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   STORE
router.post('/', async (req, res) => {
    const event = new Event({
        start: req.body.start,
        end: req.body.end,
        org: req.body.org,
        city: req.body.city,
        title: req.body.title,
        images: req.body.images,
        featured: req.body.featured
    });

    try {
        const result = await event.save();
        console.log('INSERTED: ', result);

        // storageService.createBucket();
        // storageService.listBuckets();

        return res.send(event);
    } catch (ex) {
        for(field in ex.errors) {
            console.log(ex.errors[field]);
        }
        return res.status(400).send(ex.errors);
    }
});

// ############   UPDATE
router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);    
        event.set({
            start: req.body.start,
            end: req.body.end,
            org: req.body.org,
            city: req.body.city,
            title: req.body.title,
            images: req.body.images,
            featured: req.body.featured
        });
        event.save();

        console.log('UPDATED: ', event);

        return res.send(event);
    } catch (error) {
        return res.status(400).send(error);
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
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;
