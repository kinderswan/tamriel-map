module.exports = function(app){
    var citiesController = require('./controllers/citiesController');
    app.get('/api/cities', citiesController.getAll);
}
