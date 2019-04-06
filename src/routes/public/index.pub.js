const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.redirect('/eventos');
    } catch(ex) { next(ex) }
});

module.exports = router;