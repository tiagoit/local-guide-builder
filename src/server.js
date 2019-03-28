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

const app = express();
const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = DEBUG ? '8080' : process.env.PORT;

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
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/cities', require('./routes/api/cities'));
app.use('/api/orgs', require('./routes/api/orgs'));

// Public website routes
app.use('/', require('./routes/public/index'));
app.use('/eventos', require('./routes/public/events'));

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT);
});

function mongodbConnect() {
    mongoose
        .connect('mongodb://35.196.178.139/sbgdb', {
            useNewUrlParser: true,
            auth: { authdb: "sbgdb" },
            user: "sbggae",
            pass: "lffE41CjB8LuwxLWfg8CwZuWPATx6vfEFUVekVo1TvKVRK9N3AN30twV3kgiXDyzWe9hE69Fe2HmMLmY"})
        .then(() => console.log('Connected to MongoDB...'))
        .catch((err) => console.log('Cannot connect to MongoDB: ', err));
}