const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Org, Event } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Org.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Org.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    req.body.cityCode = appService.encode(req.body.address.city);
    res.send(await Org(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    req.body.cityCode = appService.encode(req.body.address.city);

    let oldOrgCode = appService.encode(req.body.oldName);
    let oldCityCode = appService.encode(req.body.oldCityName);
    let org = await Org.findOneAndUpdate({_id: req.body._id}, req.body);

    // Propagate update on events
    let query = {orgCode: oldOrgCode, cityCode: oldCityCode};
    let events = await Event.find(query);
    events.forEach(el => {
        el.orgCode = req.body.code;
        el.orgName = req.body.name;
        el.cityCode = appService.encode(req.body.newCityName);
        el.cityName = req.body.newCityName;
        el.save();
    });

    res.send(org);
});

router.delete('/:id', async (req, res) => {
    // only if there is no event on this org
    let org = await Org.findById(req.params.id);
    let event = await Event.findOne({orgCode: org.code});
    
    if(!event) {
        res.send(await Org.findOneAndDelete({ _id: req.params.id }));
    } else {
        res.status(400).send({message: 'Remoção de organização não é permitida quando existem eventos cadastrados para ela.'});
    }
});

router.get('/check-code/:code/:cityCode', async (req, res) => {
    res.send(await Org.findOne({code: req.params.code, cityCode: req.params.cityCode}));
});

module.exports = router;
