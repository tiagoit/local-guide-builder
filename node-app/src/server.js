const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const moment = require('moment');
moment.locale('pt-BR');

const config = require('config');
const ENV = config.get('env');
console.log("ENV: ", ENV);

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
app.use(expressJwt({secret: '9df679d87fd79f7ds97f9ds7fsd9fmml2kmkj'}).unless({path: ['/api/auth', '', '/', '/about']}));

// Catch all other routes and return the index file
app.get('admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/admin'));
});

if(ENV === 'production') {
    mongoose.connect('mongodb://localhost/sulbaguia', { useNewUrlParser: true })
        .then(() => console.log('Connected to MongoDB (1)...'))
        .catch((err) => console.log('Cannot connect to MongoDB: ', err));
} else {
    mongoose.connect('mongodb://35.231.67.98/sulbaguia', { 
            auth: { authdb:"admin" },
            useNewUrlParser: false,
            user: 'webdev',
            pass: 'webdev#1212'
        }).then(() => console.log('Connected to MongoDB (2)...'))
    .catch((err) => console.log('Cannot connect to MongoDB: ', err));
}

// index
app.get('/', async (req, res) => {
    console.log('get /');
    try {
        // TODO: Exclude past events on query
        // TODO: Only next 15 days events or featured on query
        const events = await Event.find().sort('start');
        let eventsByDate = []; // 0 = today | 1 = tomorrow (d+X)
        let featured = [];

        events.forEach((ev) => {
            if(featured.length < 9 && ev.featured) featured.push(ev);

            let day = moment(ev.start).startOf('day');
            let dateDiffInDays = moment(day).diff(moment(), 'days');
            if(eventsByDate[dateDiffInDays] === undefined) eventsByDate[dateDiffInDays] = [];
            eventsByDate[dateDiffInDays].push(ev);
        });

        console.log('eventsByDate: ', eventsByDate);

        res.render('./pages/index', {'events': eventsByDate, 'moment': moment});
    } catch (error) {
        console.log('get / - error: ', error);
        return res.status(404).send(error);
    }
});

// página do evento | sulbaguia.com.br/evento/arraial-d-ajuda/morocha-club/mato-seco-e-guine
app.get('/evento/:city_code/:org_code/:event_code', function(req, res) {
    res.render('./pages/about', {city_code: req.params['city_code'], org_code: req.params['org_code'], event_code: ['event_code']});
});

var USERS = [
    { id: 1, name: 'tiago', pass: 'a4b3c2d1' },
    { id: 2, name: 'teste', pass: 'teste123' }
];

app.post('/api/auth', function(req, res) {
    const userFromDB = USERS.find(user => user.name == req.body.username);
    console.log(userFromDB);
    if(!userFromDB || req.body.password != userFromDB.pass) return res.sendStatus(401);

    var token = jwt.sign({userID: userFromDB.id}, '908&6$%:12@79d8$7fd79f7ds97f9ds7fsddsf98s', {expiresIn: '1h'});
    res.send({token});
});

//   app.use(express.static(__dirname + '/../public'));

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT);
});
