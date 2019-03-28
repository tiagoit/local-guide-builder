const express = require('express');
const router = express.Router();
const { Org } = require('../../models/org');
const utilsService = require('../../services/utils.service');

// ############   LIST
router.get('/', async (req, res) => {
    try {
        const orgs = await Org.find();
        res.send(orgs);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   GET
router.get('/:id', async (req, res) => {
    try {
        const org = await Org.findById(req.params.id)
        if(!org) return res.status(400).send("Org with this ID not found");
        res.send(org);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   STORE
router.post('/', async (req, res) => {
    const org = new Org({
        code: utilsService.encode(req.body.address.city) + '|' + utilsService.encode(req.body.name),
        name: req.body.name,
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

    try {
        const result = await org.save();
        return res.send(org);
    } catch (ex) {
        for(field in ex.errors) {
            console.log(ex.errors[field]);
        }
        return res.status(400).send(ex.errors);
    }
});

// ############   UPDATE
router.put('/:id', async (req, res) => {
    try {
        const org = await Org.findById(req.params.id);    
        org.set({
            code: utilsService.encode(req.body.address.city) + '|' + utilsService.encode(req.body.name),
            name: req.body.name,
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
        org.save();
        return res.send(org);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   DELETE
router.delete('/:id', async (req, res) => {
    try {
        const org = await Org.findOneAndDelete({ _id: req.params.id });
        if(!org) return res.status(404).send('The org with the given ID was not found.');
        return res.send(org);
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;
