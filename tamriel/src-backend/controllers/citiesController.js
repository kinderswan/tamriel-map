var mongoose = require('mongoose');
var CityMarker = mongoose.model('CityMarker');

exports.getAll = function (req, res) {
	CityMarker.find({}, function (err, results) {
		return res.send(results);
	});
}

exports.import = function (req, res) {
	CityMarker.remove({});
	CityMarker.create(
		{ Name: "Gorod", PositionX: 127, PositionY: 345, TimePeriodId: "12345"},
		function (err) {
			if (err) return console.log(err);	
			return res.send(202);
		});

}