const express = require('express');
const router = express.Router();
const utilsService = require('../../services/utils.service');
const { City } = require('../../models/city.model');

// ############   LIST
router.get('/', async (req, res, next) => {
    try {
        res.send(await City.find());
    } catch(ex) { next(ex) }
});

// ############   GET
router.get('/:id', async (req, res, next) => {
    try {
        const city = await City.findById(req.params.id)
        // if(!city) return res.status(400).send("City with this ID not found");
        if(!city) throw new Error(`City with this ID (${req.params.id}) not found`);
        res.send(city);
    } catch(ex) { next(ex) }
});

// ############   STORE
router.post('/', async (req, res, next) => {
    try {
        const city = new City({
            code: utilsService.encode(req.body.name),
            name: req.body.name,
            status: req.body.status
        });

        const result = await city.save();
        console.log('INSERTED: ', result);
        return res.send(city);
    } catch(ex) { next(ex) }
});

// ############   UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const city = await City.findById(req.params.id);
        city.set({
            code: utilsService.encode(req.body.name),
            name: req.body.name,
            status: req.body.status
        });
        city.save();
        return res.send(city);
    } catch(ex) { next(ex) }
});

// ############   DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const city = await City.findOneAndDelete({ _id: req.params.id });
        if(!city) return res.status(404).send('The city with the given ID was not found.');
        return res.send(city);
    } catch(ex) { next(ex) }
});

module.exports = router;
