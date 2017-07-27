var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DateMarkerSchema = mongoose.model('DateMarker').schema;

var InfoYearSchema = new Schema({
	InfoText: String,
	Mentioned: DateMarkerSchema
});

mongoose.model('InfoYear', InfoYearSchema);