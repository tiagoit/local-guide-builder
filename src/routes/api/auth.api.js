const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { Partner } = require('../../models');

router.post('/', async function(req, res) {
    const partner = await Partner.findOne({email: req.body.username});
    if(!partner || req.body.password != partner.pass) {
        return res.sendStatus(401);
    }

    var token = jwt.sign({partnerID: partner._id}, config.get('jwtSecretToken'), {expiresIn: '12h'});
    res.send({token, partner});
});

module.exports = router;
