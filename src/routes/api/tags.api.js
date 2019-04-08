const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Tag } = require('../../models');

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
    res.send(await Tag.findOneAndDelete({ _id: req.params.id }));
});

router.get('/check-code/:code', async (req, res) => {
    res.send(await Tag.findOne({code: req.params.code}));
});

module.exports = router;
