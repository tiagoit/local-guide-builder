const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const utilsService = require('../../services/utils.service');
const eventsService = require('../../services/events.service');
const orgsService = require('../../services/orgs.service');
const {City} = require('../../models/city.model');


// EVENT PAGE
router.get('/:cityCode/:orgCode/:eventCode', async function(req, res) {
  console.log('event page');
  try {
    const cities = await City.find({status: true});
    const event = await eventsService.getEvent(req.params['eventCode']);
    const org = await orgsService.getOrg(req.params['cityCode']+'|'+req.params['orgCode']);

    res.render('./pages/events/event-details', { event, org, cities, moment });
  } catch (ex) {
    console.log('EXCEPTION: ', ex);
    return res.status(404).send(ex);
  }
});

// EVENT LISTING
router.get('/:cityCode?/:orgCode?', async function(req, res) {
  try {
    const cities = await City.find({status: true});
    let { events, featured } = await eventsService.getEvents(req.params['cityCode'], req.params['orgCode']);

    let activeCity = undefined;
    req.params['cityCode'] && cities.forEach((city) => {
      if(city.code === req.params['cityCode']) activeCity = city.name;
    });

    res.render('./pages/events/events-list', { events, featured, cities, activeCity, moment, utilsService });
  } catch (ex) {
    console.log('EXCEPTION: ', ex);
    return res.status(404).send(ex);
  }
});


module.exports = router;