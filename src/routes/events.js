const express = require('express');
const router = express.Router();
const {Event} = require('../models/event');

// ############   LIST
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        return res.status(404).send(error);
    }
});

// ############   GET
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        if(!event) return res.status(404).send("Event with this ID not found");
        res.send(event);
    } catch (error) {
        return res.status(404).send(error);
    }
});

// ############   STORE
router.post('/', async (req, res) => {
    const event = new Event({
        start: req.body.start,
        end: req.body.end,
        org_name: req.body.org_name,
        org_city: req.body.org_city,
        title: req.body.title,
        img: req.body.img,
        featured: req.body.featured
    });

    try {
        const result = await event.save();
        console.log('INSERTED: ', result);
        return res.send(event);
    } catch (ex) {
        for(field in ex.errors) {
            console.log(ex.errors[field]);
        }
        return res.status(404).send(ex.errors);
    }
});

// ############   UPDATE
router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);    
        event.set({
            start: req.body.start,
            end: req.body.end,
            org_name: req.body.org_name,
            org_city: req.body.org_city,
            title: req.body.title,
            img: req.body.img,
            featured: req.body.featured
        });
        event.save();
        return res.send(event);
    } catch (error) {
        return res.status(404).send(error);
    }
});

// ############   DELETE
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findOneAndDelete({ _id: req.params.id });
        if(!event) return res.status(404).send('The event with the given ID was not found.');
        return res.send(event);
    } catch (error) {
        return res.status(404).send(error);
    }
});

module.exports = router;
