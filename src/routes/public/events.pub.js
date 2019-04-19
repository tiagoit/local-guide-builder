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
  let appliedFilters = {cities: [], tags: []};
  let cleanPageUrl = '/';

  req.params[0].split('/').forEach((filter, idx) => {
    cities.some(el => {
      if(el.code == filter) {
        citiesFilter.push(filter);
        appliedFilters.cities.push(el.name);
        cleanPageUrl += el.code + '/';
      }
    });
    tags.some(el => {
      if(el.code == filter) {
        tagsFilter.push(filter)
        appliedFilters.tags.push(el.title);
        cleanPageUrl += el.code + '/';
      }
    });
  });

  let { events } = await eventsService.getWithFilters(citiesFilter, tagsFilter);

  res.render('./pages/events/events-list', { events, cities, tags, appliedFilters, moment, appService, env, cleanPageUrl });
});

module.exports = router;