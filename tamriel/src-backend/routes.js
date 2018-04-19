module.exports = function(app){
    var citiesController = require('./controllers/citiesController');
	app.get('/api/cities', citiesController.getAll);
	app.post('/api/cities', citiesController.saveCities);
    app.get('/api/cities/:epoch/:start/:end', citiesController.getTimePeriodCities);
    app.get('/api/cities/seed', citiesController.import);


    var timePeriodController = require("./controllers/timePeriodController");
    app.get('/api/time', timePeriodController.getAll);
    app.get('/api/time/seed', timePeriodController.import);

    var cityInfoController = require("./controllers/cityInfoController");
    app.get('/api/info/:cityName/:epoch/:years', cityInfoController.getInfoForCity);
	app.get('/api/info/:cityName', cityInfoController.getFullInfoForCity);
	app.get('/api/fullinfo', cityInfoController.getFullInfos);
	app.post('/api/fullinfo', cityInfoController.saveFullInfos);
	app.post('/api/shortinfo', cityInfoController.saveShortInfos);
	app.get('/api/shortinfo', cityInfoController.getShortInfos);
    app.get('/api/shortinfo/seed', cityInfoController.importShortInfo);
    app.get('/api/fullinfo/seed', cityInfoController.importFullInfo);
};
