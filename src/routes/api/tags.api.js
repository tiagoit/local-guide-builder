const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Tag, Event } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Tag.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Tag.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.title);
    res.send(await Tag(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.title);
    res.send(await Tag.findOneAndUpdate({_id: req.body._id}, req.body));
});

router.delete('/:id', async (req, res) => {
    let tag = await Tag.findById(req.params.id);

    // if there are events with this tag, remove the tag from them
    let events = await Event.find({tags: tag.code});
    events.forEach(event => {
        event.tags = event.tags.filter(value => value !== tag.code);
        event.save();
    });

    res.send(await tag.delete());
});

router.get('/check-code/:code', async (req, res) => {
    res.send(await Tag.findOne({code: req.params.code}));
});

module.exports = router;
