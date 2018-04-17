var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');

var mongoUri = 'mongodb://localhost/tamriel';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});


var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Cache-Control', 'no-cache');
  next();
});


app.use(bodyParser.json());

require('./models/dateMarker');
require('./models/cityMarker');
require('./models/timePeriod');
require('./models/infoYear');
require('./models/cityInfo');
require('./models/cityFullInfo');
require('./routes')(app);

app.listen(451);

