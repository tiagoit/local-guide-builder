const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { City, Org, Event } = require('../../models');

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
    let oldCode = appService.encode(req.body.oldName);
    let city = await City.findOneAndUpdate({_id: req.body._id}, req.body);

    // Propagate update on orgs
    let orgs = await Org.find({cityCode: oldCode});
    orgs.forEach(el => {
        el.cityCode = req.body.code;
        el.address.city = req.body.name;
        el.save();
    });

    // Propagate update on events
    let events = await Event.find({cityCode: oldCode});
    events.forEach(el => {
        el.cityCode = req.body.code;
        el.cityName = req.body.name;
        el.save();
    });

    res.send(city);
});

router.delete('/:id', async (req, res) => {
    // only if there is no organization on this city
    let city = await City.findById(req.params.id);
    let org = await Org.findOne({cityCode: city.code});
    
    if(!org) {
        res.send(await City.findOneAndDelete({ _id: req.params.id }));
    } else {
        res.status(400).send({message: 'Remoção de cidade não é permitida quando existem organizações cadastradas para ela.'});
    }
});

router.get('/check-code/:code', async (req, res) => {
    res.send(await City.findOne({code: req.params.code}));
});


module.exports = router;
