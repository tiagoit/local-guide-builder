const express = require('express');
const router = express.Router();
const appService = require('../../services/app.service');
const { City } = require('../../models');

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
        if(!city) throw new Error(`City with this ID (${req.params.id}) not found`);
        res.send(city);
    } catch(ex) { next(ex) }
});

// ############   STORE
router.post('/', async (req, res, next) => {
    try {
        const city = new City({
            code: appService.encode(req.body.name),
            name: req.body.name,
            status: req.body.status
        });
        res.send(await city.save());
    } catch(ex) { next(ex) }
});

// ############   UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const city = await City.findById(req.params.id);
        city.set({
            code: appService.encode(req.body.name),
            name: req.body.name,
            status: req.body.status
        });
        res.send(await city.save());
    } catch(ex) { next(ex) }
});

// ############   DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const city = await City.findOneAndDelete({ _id: req.params.id });
        if(!city) throw new Error(`City with this ID (${req.params.id}) not found`);
        res.send(city);
    } catch(ex) { next(ex) }
});

module.exports = router;
