const express = require('express');
const router = express.Router();
const tagSevice = require('../../services/tags.service');

// ############   GET ALL TAGS
router.get('/tags', async (req, res) => {
    try {
        const tags = await tagSevice.getTags();
        res.send(tags);
    } catch (ex) {
        console.log('EXCEPTION: ', ex);
        return res.status(400).send(ex);
    }
});

module.exports = router;
