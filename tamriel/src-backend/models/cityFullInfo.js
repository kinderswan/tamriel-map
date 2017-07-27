var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CityFullInfoSchema = new Schema({
	PointName: String,
	Info: String
});

mongoose.model('CityFullInfo', CityFullInfoSchema);