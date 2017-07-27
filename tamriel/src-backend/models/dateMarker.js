var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DateMarkerSchema = new Schema({
	Year: Number,
	Epoch: String
});

mongoose.model('DateMarker', DateMarkerSchema);