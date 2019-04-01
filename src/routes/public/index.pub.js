const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const utilsService = require('../../services/utils.service');
const eventsService = require('../../services/events.service');
const {City} = require('../../models/city.model');

router.get('/', async (req, res) => {
    res.redirect('/eventos');
    
    // try {
    //     const cities = await City.find();
    //     let { events, featured } = await eventsService.getEvents();
    //     res.render('./pages/index', { events, featured, cities, moment, utilsService });
    // } catch (ex) {
    //     return res.status(400).send(ex.errors);
    // }
    // try {
    //     const cities = await City.find();
    //     const events = await Event.find({ 
    //         $or: [{
    //                 start: { 
    //                     $gte: moment().subtract(2, 'd'),
    //                     $lt: moment().add(60, 'd')
    //                 }
    //             }, { 
    //                 featured: { $eq: true }
    //             }]
    //     }).sort('start');

    //     let eventsByDate = []; // 0 = today | 1 = tomorrow (d+X)
    //     let featured = [];

    //     events.forEach((ev) => {
    //         if(featured.length < 9 && ev.featured) featured.push(ev);

    //         let day = moment(ev.start).startOf('day');
    //         let dateDiffInDays = (moment(day).diff(moment(), 'days')) + 1;
    //         if(eventsByDate[dateDiffInDays] === undefined) eventsByDate[dateDiffInDays] = [];
    //         eventsByDate[dateDiffInDays].push(ev);
    //     });

    //     res.render('./pages/index', {'events': eventsByDate, 'cities': cities, 'moment': moment, 'utilsService': utilsService});
    // } catch (error) {
    //     return res.status(404).send(error);
    // }
});

module.exports = router;