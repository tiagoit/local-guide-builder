const express = require('express');
const router = express.Router();

// ############   GET ALL TAGS
router.get('/tags', async (req, res, next) => {
    try {
        res.send(await Tag.find().sort('title'));
    } catch(ex) { next(ex) }
});

module.exports = router;
