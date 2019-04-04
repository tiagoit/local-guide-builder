const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const utilsService = require('../../services/utils.service');
const eventsService = require('../../services/events.service');
const {City} = require('../../models/city.model');

router.get('/', async (req, res) => {
    res.redirect('/eventos');
});

module.exports = router;