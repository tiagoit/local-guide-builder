const express = require('express');
const router = express.Router();
const {City} = require('../models/city');

// ############   LIST
router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.send(cities);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   GET
router.get('/:id', async (req, res) => {
    try {
        const city = await City.findById(req.params.id)
        if(!city) return res.status(400).send("City with this ID not found");
        res.send(city);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   STORE
router.post('/', async (req, res) => {
    const city = new City({
        code: req.body.code,
        name: req.body.name
    });

    try {
        const result = await city.save();
        console.log('INSERTED: ', result);
        return res.send(city);
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
        const city = await City.findById(req.params.id);    
        city.set({
            code: req.body.code,
            name: req.body.name
        });
        city.save();
        return res.send(city);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// ############   DELETE
router.delete('/:id', async (req, res) => {
    try {
        const city = await City.findOneAndDelete({ _id: req.params.id });
        if(!city) return res.status(404).send('The city with the given ID was not found.');
        return res.send(city);
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;
