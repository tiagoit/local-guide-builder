const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var path = require('path');

const app = express();
const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = DEBUG ? '3000' : process.env.PORT;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// index
app.get('/', function(req, res) {
    res.render('./pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('./pages/about');
});

app.use(express.static(__dirname + '/../public'));

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT);
});
