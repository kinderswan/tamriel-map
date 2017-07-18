var mongoose = require('mongoose');
var CityMarker = mongoose.model('CityMarker');
var citiesJson = require('../resource/MapPoints.json');

exports.getAll = function (req, res) {
	CityMarker.find({}, function (err, results) {
		return res.send(results);
	});
}

exports.import = function (req, res) {
	CityMarker.remove({});
	CityMarker.create(
		citiesJson,
		function (err) {
			if (err) return console.log(err);
			return res.send(202);
		});

}
