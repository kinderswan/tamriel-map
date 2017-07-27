var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DateMarkerSchema = mongoose.model('DateMarker').schema;
var InfoYearSchema = mongoose.model('InfoYear').schema;

var CityInfoSchema = new Schema({
	PointName: String,
	Info: [InfoYearSchema]
});

mongoose.model('CityInfo', CityInfoSchema);