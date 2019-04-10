const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const config = require('config');
const appService = require('../../services/app.service');
const eventsService = require('../../services/events.service');
const { City, Tag, Event, Org } = require('../../models');

// PAGE: EVENT
router.get('/:cityCode/:orgCode/:eventCode', async function(req, res, next) {
  console.log('PAGE: EVENT');

  env = config.get('env');
  
  const cities = await City.find({status: true}).sort('order');
  const tags = await Tag.find().sort('title').sort('order');
  const event = await Event.findOne({code: req.params['eventCode']});
  const org = await Org.findOne({code: req.params['orgCode']});

  if(event && org) {
    res.render('./pages/events/event-details', { event, org, cities, tags, moment, env });
  } else {
    next(); // route => '/*'
  }
});

// PAGE: LIST EVENTS WITH FILTERS /*
router.get('/*', async function(req, res) {
  console.log('PAGE: LIST EVENTS WITH FILTERS /*');

  env = config.get('env');
  
  const cities = await City.find({status: true}).sort('order');
  const tags = await Tag.find().sort('title').sort('order');

  let citiesFilter = [];
  let tagsFilter = [];

  req.params[0].split('/').forEach((filter, idx) => {
    if(cities.some(el => el.code == filter)) citiesFilter.push(filter);
    else if(tags.some(el => el.code == filter)) tagsFilter.push(filter);
    else {} // TODO: discard wrong param from URL
  });

  let { events } = await eventsService.getWithFilters(citiesFilter, tagsFilter);

  let activeCity = undefined;
  req.params['cityCode'] && cities.forEach((city) => {
    if(city.code === req.params['cityCode']) activeCity = city.name;
  });

  res.render('./pages/events/events-list', { events, cities, tags, activeCity, moment, appService, env });
});

module.exports = router;