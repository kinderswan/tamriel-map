var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');

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
  next();
});

app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});
require('./models/cityMarker');
require('./routes')(app);

app.listen(451);

