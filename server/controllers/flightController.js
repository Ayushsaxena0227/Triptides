const Flight = require("../models/Flight");
const Booking = require("../models/Booking");

exports.searchFlights = async (req, res) => {
  const { departure, arrival, departureDate, adults } = req.query;

  try {
    const flights = await Flight.find({
      departure,
      arrival,
      departureDate,
      availableTickets: { $gte: adults },
    });

    res.json({ data: flights });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

exports.bookFlight = async (req, res) => {
  const { userId, flightId, numberOfTickets } = req.body;

  try {
    const flight = await Flight.findById(flightId);

    if (flight.availableTickets < numberOfTickets) {
      return res.status(400).json({ msg: "Not enough tickets available" });
    }

    flight.availableTickets -= numberOfTickets;
    await flight.save();

    const booking = new Booking({
      user: userId,
      flight: flightId,
      numberOfTickets,
    });

    await booking.save();

    res.json({ msg: "Booking successful", booking });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
