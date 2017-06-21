var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CityMarkerSchema = new Schema({
	Name: String,
	PositionX: Number,
	PositionY: Number,
	TimePeriodId: String
});

mongoose.model('CityMarker', CityMarkerSchema);