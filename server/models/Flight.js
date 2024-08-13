const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  departure: String,
  arrival: String,
  departureDate: Date,
  availableTickets: Number,
  price: Number,
  // Add more fields as needed
});

const Flight = mongoose.model("Flight", FlightSchema);

module.exports = Flight;
