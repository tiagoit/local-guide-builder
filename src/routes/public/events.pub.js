const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const config = require('config');
const appService = require('../../services/app.service');
const eventsService = require('../../services/events.service');
const { City, Tag, Event, Org, Region, Ad } = require('../../models');

// PAGE: EVENT
router.get('/:cityCode/:orgCode/:eventCode', async function(req, res, next) {
  console.log('PAGE: EVENT');

  env = config.get('env');
  
  const regions = await Region.find();
  const cities = await City.find({status: true}).sort('order');
  const tags = await Tag.find().sort('title').sort('order');
  const event = await Event.findOne({code: req.params['eventCode']});
  const org = await Org.findOne({code: req.params['orgCode']});

  if(event && org) {
    res.render('./pages/events/event-details', { event, org, regions, cities, tags, moment, env });
  } else {
    next(); // route => '/*'
  }
});

// PAGE: LIST EVENTS /*
router.get('/*', async function(req, res) {
  console.log('PAGE: LIST EVENTS /*');
  env = config.get('env');

  const regions = await Region.find().sort('name');
  const cities = await City.find({status: true}).sort('order');
  const tags = await Tag.find().sort('title').sort('order');

  let adsQuery = {};
  adsQuery['$and'] = [];
  adsQuery['$and'].push({start: {'$lte': moment()}});
  adsQuery['$and'].push({end: {'$gte': moment()}});
  adsQuery['$and'].push({status: {'$eq': true}});
  const ads = await Ad.find(adsQuery);

  // Randomize Ads response
  let randomizedAds = [];
  let arrayMax = ads.length >= 30 ? 30 : ads.length;
  for(let i=0; i<arrayMax; i++) {
    let randInt = Math.floor(Math.random() * ads.length);
    randomizedAds.push(ads[randInt]);
    ads.splice(randInt, 1);
  }

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
        if(el.childrenTags && el.childrenTags.length > 0) {
          el.childrenTags.forEach(el => {
            console.log(el);
            tagsFilter.push(el);
          })
        } else {
          tagsFilter.push(filter)
        }
        appliedFilters.tags.push(el.title);
        cleanPageUrl += el.code + '/';
      }
    });
  });

  let { events } = await eventsService.getWithFilters(citiesFilter, tagsFilter);
  let host = req.get('host');

  res.render('./pages/events/events-list', { events, regions, cities, tags, ads: randomizedAds, appliedFilters, moment, appService, env, cleanPageUrl, host });});

module.exports = router;