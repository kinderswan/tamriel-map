var mongoose = require('mongoose');
var TimePeriod = mongoose.model('TimePeriod');
var DateMarker = mongoose.model('DateMarker');

const epochEnds = [
	{ epoch: "1E", endDate: 2920 },
	{ epoch: "2E", endDate: 896 },
	{ epoch: "3E", endDate: 433 },
	{ epoch: "4E", endDate: 201 }
]

var generateTimePeriods = function () {
	
	var periods = [];
	epochEnds.forEach((x) => {	
		var ranges = [];	
		for(let i = 0;  i < 6; i++){
			var num = Math.floor(x.endDate / 6);
			ranges[i] = num * i;
		}		
		ranges.push(x.endDate);

		for(let i = 0;  i < 6; i++){
			var period = new TimePeriod();
			var startTime = new DateMarker();
			var endTime = new DateMarker();
			startTime.Epoch = endTime.Epoch = x.epoch;
			startTime.Year = ranges[i];
			endTime.Year = ranges[i+1];
			period.StartTime = startTime;
			period.EndTime = endTime;
			periods.push(period);
		}
		
	});
	return periods;
}

exports.getAll = function (req, res) {
	var periods = generateTimePeriods();
	return res.send(periods);
	/*CityMarker.find({}, (err, results) => {
		return res.send(results);
	});*/
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

};