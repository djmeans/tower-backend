const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var varietals = require('./routes/varietals');
var regions = require('./routes/regions');

app.get('/', (req, res) => res.send('Hello World!'))

app.use(cors())
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/varietals', varietals);
app.use('/regions', regions);


module.exports = app;
