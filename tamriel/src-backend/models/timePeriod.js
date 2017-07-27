var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DateMarkerSchema = mongoose.model('DateMarker').schema;

var TimePeriodSchema = new Schema({
	StartTime: DateMarkerSchema,
	EndTime: DateMarkerSchema
});

mongoose.model('TimePeriod', TimePeriodSchema);