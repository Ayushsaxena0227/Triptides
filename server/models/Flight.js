const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  departure: String,
  arrival: String,
  departureDate: Date,
  availableTickets: Number,
  price: Number,
  // image: {
  //   type: String,
  //   required: true,
  //   default: "", // Replace with your default image URL
  // },
});

const Flight = mongoose.model("Flight", FlightSchema);

module.exports = Flight;
