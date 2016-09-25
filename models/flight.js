const mongoose = require('mongoose');
const passengerSchema = require('./passenger').schema;

var flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String,
  passengers: [passengerSchema]
});

var Flight = mongoose.model('Flight', flightSchema);

exports.schema = flightSchema;
exports.model  = Flight;