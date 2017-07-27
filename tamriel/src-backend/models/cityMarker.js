var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DateMarkerSchema = mongoose.model('DateMarker').schema;

var CityMarkerSchema = new Schema({
	PointName: String,
	RelativeX: Number,
	RelativeY: Number,
	Province: String,
	Mentioned: [DateMarkerSchema]
});

mongoose.model('CityMarker', CityMarkerSchema);