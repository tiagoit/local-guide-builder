const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose'); 
const expressJwt = require('express-jwt');
const config = require('config');
const session = require('express-session')
const i18n = require('i18n-express');

const moment = require('moment-timezone');
moment.tz.setDefault('America/Sao_Paulo');

const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = DEBUG ? '8080' : process.env.PORT;

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.use(session({
    secret: 'theWildRunnerDropedSomeMushroomCake0nTheRoad',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(i18n({
    translationsPath: path.join(__dirname, 'i18n'),
    siteLangs: ['en', 'es', 'pt'],
    defaultLocale: 'pt',
    textsVarName: 'translation'
}));

// set locale based on session.ulang
app.use(function (req, res, next) {
    moment.locale(req.session.ulang);
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

mongodbConnect();

// API Routes
app.use(expressJwt({secret: config.get('jwtSecretToken')}).unless({path: ['', '/', '/api/auth', /\/eventos/, '/eita', '/api/app/contact']}));
app.use('/api/app', require('./routes/api/app.api'));
app.use('/api/auth', require('./routes/api/auth.api'));
app.use('/api/events', require('./routes/api/events.api'));
app.use('/api/upload', require('./routes/api/upload.api'));
app.use('/api/regions', require('./routes/api/regions.api'));
app.use('/api/cities', require('./routes/api/cities.api'));
app.use('/api/partners', require('./routes/api/partners.api'));
app.use('/api/orgs', require('./routes/api/orgs.api'));
app.use('/api/tags', require('./routes/api/tags.api'));
app.use('/api/migrations', require('./routes/api/migrations.api'));

// Public website routes
app.use('/', require('./routes/public/index.pub'));
app.use('/eventos', require('./routes/public/events.pub'));


app.get('/eita', (req, res) => {
    res.render('./pages/eita', {env: config.get('env'), moment: moment});
});

app.get('*', (req, res) => {
    res.redirect('/eita');
});

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).redirect('/eita');
    }
});

// // TODO: Error logging on StackDriver / create alerts for production errors on GCP
// app.use(function(err, req, res, next) {
//     console.log('############################### ERROR: ', err);
//     if(err.name === 'UnauthorizedError') {
//       // res.status(err.status).render('./pages/eita', {env: config.get('env'), moment: moment});
//     //   res.render('./pages/events/events-list', { events, cities, tags, appliedFilters, moment, appService, env });
//     //   send({message:err.message});
//       console.log(err);
//       // return;
//     }
//  next();
// });

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT, ' ENV: ', config.get('env'));
});

// TODO: Improve following Medium post
function mongodbConnect() {
    mongoose.connect(config.get('mongodb.host'), config.get('mongodb.options'))
        .then(() => console.log('Connected to MongoDB...'))
        .catch((err) => console.log('Cannot connect to MongoDB: ', err, 'Options: ', config.get('mongodb.options')));
}
