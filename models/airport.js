const mongoose = require('mongoose');
const terminalSchema = require('./terminal').schema;

var airportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminals: [terminalSchema],
  opened: Date
});

var Airport = mongoose.model('Airport', airportSchema);

exports.schema = airportSchema;
exports.model = Airport;

