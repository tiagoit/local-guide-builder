const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const utilsService = require('../../services/utils.service');
const eventsService = require('../../services/events.service');
const orgsService = require('../../services/orgs.service');
const tagsService = require('../../services/tags.service');
const citiesService = require('../../services/cities.service');

// PAGE: EVENT
router.get('/:cityCode/:orgCode/:eventCode', async function(req, res, next) {
  console.log('PAGE: EVENT');
  try {
    const cities = await citiesService.get(true);
    const tags = await tagsService.get();
    const event = await eventsService.getByCode(req.params['eventCode']);
    const org = await orgsService.getByCode(req.params['cityCode']+'|'+req.params['orgCode']);

    if(event && org) {
      res.render('./pages/events/event-details', { event, org, cities, tags, moment });
    } else {
      next();
    }
  } catch (ex) {
    console.log('EXCEPTION: ', ex);
    return res.status(404).send(ex);
  }
});


// router.get('/:cityCode?/:orgCode?', async function(req, res, next) {
//   console.log('PAGE: LIST EVENTS FROM ORG');
//   try {
//     const cities = await City.find({status: true});
//     let { events, featured } = await eventsService.getFromOrg(req.params['cityCode'], req.params['orgCode']);

//     let activeCity = undefined;
//     req.params['cityCode'] && cities.forEach((city) => {
//       if(city.code === req.params['cityCode']) activeCity = city.name;
//     });

//     console.log('events 41: ', events);
//     if(events && featured) {
//       res.render('./pages/events/events-list', { events, featured, cities, activeCity, moment, utilsService });
//     } else {
//       console.log('next called on 44');
//       next();
//     }   
//   } catch (ex) {
//     console.log('EXCEPTION: ', ex);
//     return res.status(404).send(ex);
//   }
// });


// PAGE: LIST EVENTS WITH FILTERS /*
router.get('/*', async function(req, res) {
  console.log('PAGE: LIST EVENTS WITH FILTERS /*');
  
  try {
    const cities = await citiesService.get(true);
    const tags = await tagsService.get();

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

    console.log('tags: ',tags);

    res.render('./pages/events/events-list', { events, cities, tags, activeCity, moment, utilsService });
  } catch (ex) {
    console.log('EXCEPTION: ', ex);
    return res.status(404).send(ex);
  }
});

module.exports = router;