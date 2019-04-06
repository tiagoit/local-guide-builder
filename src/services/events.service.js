const moment = require('moment');
const {Event} = require('../models/event.model');

function get() {
  return Event.find();
}


function getByCode(eventCode) {
  return Event.findOne({code: eventCode});
}


async function getFromOrg(cityCode, orgCode){
  // TODO: se madruga então mostar eventos rolando
  let query = { $or: [
                { start: { $gte: moment().subtract(2, 'd'), $lt: moment().add(60, 'd') } }, 
                { featured: { $eq: true } }
              ]};

  if(cityCode) query.cityCode = cityCode;
  if(orgCode) query.orgCode = orgCode; 
  const events = await Event.find(query).sort('start');

  // let featured = [];
  let eventsByDate = {};

  events.forEach((ev) => {
    let dayMonth = moment(ev.start).format('MMDD');
    if(eventsByDate[dayMonth] === undefined) eventsByDate[dayMonth] = [];
    eventsByDate[dayMonth].push(ev);

    // if(featured.length < 9 && ev.featured) featured.push(ev);
  });

  return { events: eventsByDate };
}


async function getWithFilters(citiesFilter, tagsFilter) {
  let query = {};
  let queryCities = {};
  let queryTags = {};

  if(citiesFilter.length) queryCities['$or'] = [];
  if(tagsFilter.length) queryTags['$or'] = [];

  citiesFilter.forEach((cityCode) => {
    queryCities['$or'].push({cityCode: cityCode});
  });
  tagsFilter.forEach((tagCode) => {
    queryTags['$or'].push({tags: tagCode});
  });

  if(citiesFilter.length || tagsFilter.length) query['$and'] = [];

  if(citiesFilter.length) query['$and'].push(queryCities);
  if(tagsFilter.length) query['$and'].push(queryTags);
  
  // query = { '$or': [ { cityCode: 'porto-seguro' }, { tags: 'samba' } ] };  // OLD WITH LOGIC ERROR
  // query = { // ACTUAL
  //   '$and': [
  //     {'$or': [ { cityCode: 'arraial-dajuda' } ] },
  //     {'$or': [ { tags: 'samba' } ] }
  //   ]
  // };


  console.log('query: ', query);
  const events = await Event.find(query).sort('start');

  let eventsByDate = {};
  events.forEach((ev) => {
    let dayMonth = moment(ev.start).format('MMDD');
    if(eventsByDate[dayMonth] === undefined) eventsByDate[dayMonth] = [];
    eventsByDate[dayMonth].push(ev);
  });

  return { events: eventsByDate  };
}

module.exports.get = get;
module.exports.getByCode = getByCode;
module.exports.getFromOrg = getFromOrg;
module.exports.getWithFilters = getWithFilters;