const express = require('express');
const router = express.Router();
const { Org } = require('../../models/org.model');
const utilsService = require('../../services/utils.service');

// ############   LIST
router.get('/', async (req, res, next) => {
    try {
        const orgs = await Org.find();
        res.send(orgs);
    } catch(ex) { next(ex) }
});

// ############   GET
router.get('/:id', async (req, res, next) => {
    try {
        const org = await Org.findById(req.params.id)
        if(!org) return res.status(400).send("Org with this ID not found");
        res.send(org);
    } catch(ex) { next(ex) }
});

// ############   STORE
router.post('/', async (req, res, next) => {
    try {
        const org = new Org({
            code: utilsService.encode(req.body.address.city) + '|' + utilsService.encode(req.body.name),
            name: req.body.name,
            site: req.body.site,
            mobile: req.body.mobile,
            land: req.body.land,
            email: req.body.email,
            notes: req.body.notes,
            status: req.body.status,
            address: {
                state: req.body.address.state,
                city: req.body.address.city,
                neighborhood: req.body.address.neighborhood,
                street: req.body.address.street,
                number: req.body.address.number,
                complement: req.body.address.complement,
                zipCode: req.body.address.zipCode
            },
            contacts: [{
                name: req.body.contacts[0].name,
                email: req.body.contacts[0].email,
                mobile: req.body.contacts[0].mobile,
                role: req.body.contacts[0].role,
                notes: req.body.contacts[0].notes,
            }]
        });

        const result = await org.save();
        return res.send(org);
    } catch(ex) { next(ex) }
});

// ############   UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const org = await Org.findById(req.params.id);
        // console.log('org: ', org);
        // console.log('req.body: ', req.body);
        console.log(req.body.address.state);
        org.set({
            code: utilsService.encode(req.body.address.city) + '|' + utilsService.encode(req.body.name),
            name: req.body.name,
            site: req.body.site,
            mobile: req.body.mobile,
            land: req.body.land,
            email: req.body.email,
            notes: req.body.notes,
            status: req.body.status
        });

        org.address.set({
            state: req.body.address.state,
            city: req.body.address.city,
            neighborhood: req.body.address.neighborhood,
            street: req.body.address.street,
            number: req.body.address.number,
            complement: req.body.address.complement,
            zipCode: req.body.address.zipCode
        });

        org.contacts[0].set({
            name: req.body.contacts[0].name,
            email: req.body.contacts[0].email,
            mobile: req.body.contacts[0].mobile,
            role: req.body.contacts[0].role,
            notes: req.body.contacts[0].notes,
        });

        // console.log('org after save: ', org);
        org.save();
        return res.send(org);
    } catch(ex) { next(ex) }
});

// ############   DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const org = await Org.findOneAndDelete({ _id: req.params.id });
        if(!org) return res.status(404).send('The org with the given ID was not found.');
        return res.send(org);
    } catch(ex) { next(ex) }
});

module.exports = router;
