var mongoose = require('mongoose');
var CityInfo = mongoose.model('CityInfo');
var CityFullInfo = mongoose.model('CityFullInfo');
var infoJson = require('../resource/CitiesInfo.json');
var fullInfoJson = require('../resource/CitiesFullInfo.json');

exports.getInfoForCity = function (req, res) {
	var cityName = req.param("cityName");
	var epoch = req.param("epoch");
	var years = req.param("years").split(";");
	CityInfo.find({ "PointName": cityName }, function (err, results) {
		if (results.length === 0) {
			return res.send(results);
		}
		var newResults = filterResults(results, epoch, years);
		return res.send(newResults);
	});
};

exports.getFullInfoForCity = function (req, res) {
	var cityName = req.param("cityName");
	CityFullInfo.find({ "PointName": cityName }, function (err, results) {
		return res.send(results);
	});
};

exports.getFullInfos = function (req, res) {
	CityFullInfo.find({}, function (err, results) {
		return res.send(results);
	});
};

exports.saveFullInfos = function (req, res) {
	var body = req.body;
	CityFullInfo.remove({}, function(){
		CityFullInfo.create(body, function(){
			return res.send("ok");
		})
	});
};

exports.saveShortInfos = function (req, res) {
	var body = req.body;
	CityInfo.remove({}, function(){
		CityInfo.create(body, function(){
			return res.send("ok");
		})
	});

};

exports.getShortInfos = function (req, res) {
	CityInfo.find({}, function (err, results) {
		return res.send(results);
	});
};

exports.importShortInfo = function (req, res) {
	CityInfo.remove({},
		function (err) {
			console.log("cleared");
			if (err) {
				return;
			}
		});
	CityInfo.create(
		infoJson,
		function (err) {
			if (err) {
				return console.log(err);
			}
			return res.send(202);
		});
}

exports.importFullInfo = function (req, res) {
	CityFullInfo.remove({},
		function (err) {
			console.log("cleared");
			if (err) {
				return;
			}
		});
	CityFullInfo.create(
		fullInfoJson,
		function (err) {
			if (err) {
				return console.log(err);
			}
			return res.send(202);
		});
}

function filterResults(results, epoch, years) {
	var infos = [];
	results.forEach(res => {
		res.Info.forEach(info => {
			if (info.Mentioned.Epoch === epoch.toUpperCase() && years.indexOf(info.Mentioned.Year + "") > -1) {
				infos.push(info);
			}
		});
	});
	results[0].Info.length = 0;
	infos.forEach(info => {
		results[0].Info.push(info);
	});
	return results;
}
