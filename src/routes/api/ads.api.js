const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Ad } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Ad.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Ad.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    res.send(await Ad(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    let ad = await Ad.findOneAndUpdate({_id: req.body._id}, req.body);
    res.send(ad);
});

router.delete('/:id', async (req, res) => {
    res.send(await Ad.findOneAndDelete({ _id: req.params.id }));
});

router.get('/check-code/:code', async (req, res) => {
    res.send(await Ad.findOne({code: req.params.code}));
});


module.exports = router;
