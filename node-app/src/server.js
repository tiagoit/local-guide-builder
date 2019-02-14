const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose'); 
const moment = require('moment');
moment.locale('pt-BR');

const config = require('config');

console.log('NODE_CONFIG_DIR: ' + config.util.getEnv('NODE_CONFIG_DIR'));
// TODO: move
const {Event} = require('./models/event');

const app = express();
const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = DEBUG ? '8080' : process.env.PORT;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Angular Admin Module
// app.get('/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, '/../public/admin/index.html'));
// });
app.use(express.static(__dirname + '/../public'));
// app.use('/events', express.static(__dirname + '/public'));

// API Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/cities', require('./routes/cities'));
app.use('/api/orgs', require('./routes/orgs'));

// Catch all other routes and return the index file
app.get('admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/admin'));
});

// Connect to mongoose
mongoose.connect('mongodb://localhost/sulbaguia', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Cannot connect to MongoDB: ', err));

// index
app.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort('start');
        console.log('Events: ', events);
        // res.send(genres);
        let categorizedEvents = {
            featured: [],
            today: [],
            tomorrow: [],
            sevenDays: [],
            fifteenDays: [],
            thirtyDays: []
        }

        events.forEach((ev) => {
            if(categorizedEvents.featured.length < 9 && ev.featured) {
                categorizedEvents.featured.push(ev);
            }
            
            let dateDiffInDays = moment(ev.start).diff(moment(), 'days');
            console.log(dateDiffInDays)

            // (0, 1, 2-8, 9-25, 26-60)
            // today
            if (dateDiffInDays === 0) {
                categorizedEvents.today.push(ev);
            } 

            // tomorrow
            else if (dateDiffInDays === 1) { 
                categorizedEvents.tomorrow.push(ev);
            }

            // next 7 days
            else if (dateDiffInDays >= 2 && dateDiffInDays <= 8) {
                categorizedEvents.sevenDays.push(ev);
            } 

            // next ~15 days
            else if (dateDiffInDays >= 9 && dateDiffInDays <= 25) {
                categorizedEvents.fifteenDays.push(ev);
            }

            // next ~30 days
            else if (dateDiffInDays >= 26 && dateDiffInDays <= 60) {
                categorizedEvents.thirtyDays.push(ev);
            }
        });


        res.render('./pages/index', {'events': categorizedEvents, 'moment': moment});
        // res.render('./pages/index');
    } catch (error) {
        return res.status(404).send(error);
    }
    // res.render('./pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('./pages/about');
});



//   app.use(express.static(__dirname + '/../public'));

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT);
});
