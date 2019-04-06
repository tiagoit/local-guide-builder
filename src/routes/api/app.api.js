const express = require('express');
const router = express.Router();
const { Tag } = require('../../models');

// #####################################   GET ALL TAGS
router.get('/tags', async (req, res) => {
    res.send(await Tag.find().sort('title'));
});


// #####################################   CHECK IF CODE IS AVAILABLE
// type: ['city'|'org'|'event']
router.get('/code/:type/:code', async (req, res) => {
   res.send(true);
});


module.exports = router;
