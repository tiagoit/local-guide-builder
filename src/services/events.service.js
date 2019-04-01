const moment = require('moment');
const {Event} = require('../models/event.model');


async function getEvent(eventCode) {
  return await Event.findOne({code: eventCode});
}

async function getEvents(cityCode, orgCode) {
  // TODO: se madruga então mostar eventos rolando
  let query = { $or: [{ start: { $gte: moment().subtract(2, 'd'), $lt: moment().add(60, 'd') } }, 
                      { featured: { $eq: true } }]};
  if(cityCode) query.cityCode = cityCode;
  if(orgCode) query.orgCode = orgCode; 
  const events = await Event.find(query).sort('start');

  let featured = [];
  let eventsByDate = {};

  events.forEach((ev) => {
    let dayMonth = moment(ev.start).format('MMDD');
    if(eventsByDate[dayMonth] === undefined) eventsByDate[dayMonth] = [];
    eventsByDate[dayMonth].push(ev);

    if(featured.length < 9 && ev.featured) featured.push(ev);
  });

  return { events: eventsByDate, featured };
}

module.exports.getEvents = getEvents;
module.exports.getEvent = getEvent;