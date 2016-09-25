const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = 'mongodb://localhost/flights';
mongoose.connect(db)


// A flight from CDG France to JFK New-York, USA on American Airlines with no passengers. Assign this object to variable "flight1"

var Flight = require('./models/flight').model;

var flight1 = Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines",
  passengers: [0]
});

flight1.save(function(err){
  if(err) {
    console.log(err)
    return;
  };
  console.log('Flight Created');
});


// A second flight from Heathrow UK to JFK New-York, USA on British Airways with no passengers. Assign this object to variable "flight2"
var flight2 = Flight({
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways",
  passengers: [0]
});

flight1.save(function(err){
  if(err) {
    console.log(err)
    return;
  };
  console.log('Second Flight Created');
});

// An airport called JFK in the USA opened on a random date in 1990. Assign this object to variable "airport1"

var Airport = require('./models/airport').model;

var airport1 = Airport({
  name: "JFK",
  country: "USA",
  opened: (new Date()).setYear(1990)
});

airport1.save(function(err){
  if(err) {
    console.log(err)
    return;
  };
  console.log('Airport created');
});


// A terminal called Terminal 1 that is pushed to airport1 with a capacity of 234324 and two flights: flight1 and flight2

var Terminal = require('./models/terminal').model;

var terminal1 = Terminal({
  name: "Terminal 1",
  capacity: 234324,
  flights: [flight1, flight2]
});

terminal1.save(function(err){
  if(err) {
    console.log(err)
    return;
  };
  console.log('Terminal created');
});
