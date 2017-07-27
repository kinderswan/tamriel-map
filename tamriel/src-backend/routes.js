module.exports = function(app){
    var citiesController = require('./controllers/citiesController');
    app.get('/api/cities', citiesController.getAll);
    app.get('/api/cities/:epoch/:start/:end', citiesController.getTimePeriodCities);
    app.get('/api/cities/seed', citiesController.import);


    var timePeriodController = require("./controllers/timePeriodController");
    app.get('/api/time', timePeriodController.getAll);
    app.get('/api/time/seed', timePeriodController.import);

    var cityInfoController = require("./controllers/cityInfoController");
    app.get('/api/info/:cityName/:epoch/:years', cityInfoController.getInfoForCity);
    app.get('/api/info/:cityName', cityInfoController.getFullInfoForCity);
    app.get('/api/info/seed', cityInfoController.import);
    app.get('/api/fullinfo/seed', cityInfoController.importFullInfo);
};
