const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Region } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Region.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Region.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    res.send(await Region(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    let oldCode = appService.encode(req.body.oldName);
    let region = await Region.findOneAndUpdate({_id: req.body._id}, req.body);

    // // Propagate update on orgs
    // let orgs = await Org.find({regionCode: oldCode});
    // orgs.forEach(el => {
    //     el.regionCode = req.body.code;
    //     el.address.region = req.body.name;
    //     el.save();
    // });

    // // Propagate update on events
    // let events = await Event.find({regionCode: oldCode});
    // events.forEach(el => {
    //     el.regionCode = req.body.code;
    //     el.regionName = req.body.name;
    //     el.save();
    // });

    res.send(region);
});

router.delete('/:id', async (req, res) => {
    // only if there is no organization on this region
    let region = await Region.findById(req.params.id);
    // let org = await Org.findOne({regionCode: region.code});
    
    // if(!org) {
        res.send(await Region.findOneAndDelete({ _id: req.params.id }));
    // } else {
    //     res.status(400).send({message: 'Remoção de cidade não é permitida quando existem organizações cadastradas para ela.'});
    // }
});

router.get('/check-code/:code', async (req, res) => {
    res.send(await Region.findOne({code: req.params.code}));
});


module.exports = router;
