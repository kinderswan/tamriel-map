var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});
require('./routes')(app);

app.listen(451);
console.log('Listening on port 3001...');

