const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose'); 
const expressJwt = require('express-jwt');
const config = require('config');

const moment = require('moment-timezone');
moment.locale('pt-BR');
moment.tz.setDefault('America/Sao_Paulo');

const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = DEBUG ? '8080' : process.env.PORT;

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

mongodbConnect();

// API Routes
app.use(expressJwt({secret: config.get('jwtSecretToken')}).unless({path: ['', '/', '/api/auth', /\/evento/i]}));
app.use('/api/app', require('./routes/api/app.api'));
app.use('/api/auth', require('./routes/api/auth.api'));
app.use('/api/events', require('./routes/api/events.api'));
app.use('/api/upload', require('./routes/api/upload.api'));
app.use('/api/cities', require('./routes/api/cities.api'));
app.use('/api/orgs', require('./routes/api/orgs.api'));
app.use('/api/tags', require('./routes/api/tags.api'));

// Public website routes
app.use('/', require('./routes/public/index.pub'));
app.use('/eventos', require('./routes/public/events.pub'));

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT);
});

// TODO: Improve following Medium post
function mongodbConnect() {
    mongoose.connect(config.get('mongodb.host'), config.get('mongodb.options'))
        .then(() => console.log('Connected to MongoDB...'))
        .catch((err) => console.log('Cannot connect to MongoDB: ', err, 'Options: ', options));
}