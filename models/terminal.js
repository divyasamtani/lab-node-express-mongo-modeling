const mongoose = require('mongoose');
const flightSchema = require ('./flight').schema;

var terminalSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  flights: [flightSchema]
});

var Terminal = mongoose.model('Terminal', terminalSchema);

exports.schema = terminalSchema;
exports.model = Terminal;