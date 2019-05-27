const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { Partner } = require('../../models');

router.get('/', async (req, res) => {
    res.send(await Partner.find());
});

router.get('/:id', async (req, res) => {
    res.send(await Partner.findById(req.params.id));
});

router.post('/', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    res.send(await Partner(req.body).save());
});

router.put('/:id', async (req, res) => {
    req.body.code = appService.encode(req.body.name);
    let oldCode = appService.encode(req.body.oldName);
    let partner = await Partner.findOneAndUpdate({_id: req.body._id}, req.body);

    // Propagate update on orgs
    // let orgs = await Org.find({partnerCode: oldCode});
    // orgs.forEach(el => {
    //     el.partnerCode = req.body.code;
    //     el.address.partner = req.body.name;
    //     el.save();
    // });

    // Propagate update on events
    // let events = await Event.find({partnerCode: oldCode});
    // events.forEach(el => {
    //     el.partnerCode = req.body.code;
    //     el.partnerName = req.body.name;
    //     el.save();
    // });

    res.send(partner);
});

router.delete('/:id', async (req, res) => {
    // only if there is no organization on this partner
    let partner = await Partner.findById(req.params.id);
    // let org = await Org.findOne({partnerCode: partner.code});
    
    // if(!org) {
        res.send(await Partner.findOneAndDelete({ _id: req.params.id }));
    // } else {
    //     res.status(400).send({message: 'Remoção de cidade não é permitida quando existem organizações cadastradas para ela.'});
    // }
});

router.get('/check-email/:email', async (req, res) => {
    res.send(await Partner.findOne({email: req.params.email}));
});


module.exports = router;
