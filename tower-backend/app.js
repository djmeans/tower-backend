const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var varietals = require('./routes/varietals');
var regions = require('./routes/regions');


app.use(bodyParser.json());
app.use(cors())

app.get('/', function(req, res, next){
    res.sendStatus(200);
});


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', )
app.use('/varietals', varietals);
app.use('/regions', regions);


module.exports = app;
