const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { City } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await City.find());
});

router.get('/:id', async (req, res) => {
    res.send(await City.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    res.send(await City(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    res.send(await City.findOneAndUpdate({_id: req.body._id}, req.body));
});

router.delete('/:id', async (req, res) => {
    res.send(await City.findOneAndDelete({ _id: req.params.id }));
});

module.exports = router;
