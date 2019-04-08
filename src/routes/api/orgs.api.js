const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Org } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Org.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Org.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    req.body.cityName = req.body.address.city;
    req.body.cityCode = appService.encode(req.body.address.city);
    res.send(await Org(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    req.body.cityCode = appService.encode(req.body.address.city);
    res.send(await Org.findOneAndUpdate({_id: req.body._id}, req.body));
});

router.delete('/:id', async (req, res) => {
    res.send(await Org.findOneAndDelete({ _id: req.params.id }));
});

router.get('/check-code/:code/:cityCode', async (req, res) => {
    res.send(await Org.findOne({code: req.params.code, cityCode: req.params.cityCode}));
});

module.exports = router;
