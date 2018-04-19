var mongoose = require('mongoose');
var CityMarker = mongoose.model('CityMarker');
var citiesJson = require('../resource/MapPoints.json');

exports.getAll = function (req, res) {
	CityMarker.find({}, function (err, results) {
		return res.send(results);
	});
};

exports.saveCities = function (req, res) {
	var body = req.body;
	CityMarker.remove({}, function(){
		CityMarker.create(body, function(){
			return res.send("ok");
		})
	});

};

exports.getTimePeriodCities = function (req, res) {
	var epoch = req.param("epoch");
	var start = req.param("start");
	var end = req.param("end");
	CityMarker.find({}, function (err, results) {
		results = filterResults(results, epoch, +start, +end);
		return res.send(results);
	});
};

exports.import = function (req, res) {
	CityMarker.remove({},
		function (err) {
			console.log("cleared");
			if (err) {
				return;
			}
		});
	CityMarker.create(
		citiesJson,
		function (err) {
			if (err) {
				return console.log(err);
			}
			return res.send(202);
		});

}


function filterResults(results, epoch, start, end) {
	return results.filter((res) => {
		return res.Mentioned.some((x) => {
			return x.Epoch === epoch.toUpperCase() && x.Year >= start && x.Year < end;
		});
	});
}
