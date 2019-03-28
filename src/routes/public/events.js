const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const utilsService = require('../../services/utils.service');
const eventsService = require('../../services/events.service');
const {City} = require('../../models/city');

router.get('/:cityCode?/:orgCode?/:eventCode?', async function(req, res) {
  try {
      const cities = await City.find();
      let { events, featured } = await eventsService.getEvents(req.params['cityCode'], req.params[' orgCode'], req.params['eventCode']);
      res.render('./pages/events/events', {events, featured, cities, moment, utilsService});
  } catch (ex) {
      console.log('EXCEPTION: ', ex);
      return res.status(404).send(ex);
  }
});

module.exports = router;