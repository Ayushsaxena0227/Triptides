const Booking = require("../models/Booking");
const User = require("../models/User");
const Flight = require("../models/Flight");

exports.bookFlight = async (req, res) => {
  const { flightId } = req.body;

  try {
    const flight = await Flight.findById(flightId);

    if (!flight) {
      return res.status(404).json({ msg: "Flight not found" });
    }

    if (flight.availableSeats < 1) {
      return res.status(400).json({ msg: "No seats available" });
    }

    flight.availableSeats -= 1;
    await flight.save();

    const booking = new Booking({
      user: req.user.id,
      flight: flightId,
    });

    await booking.save();

    res.json({ msg: "Booking successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get User's Bookings
// Change `getUser` to `getBookings`
exports.getBookings = async (req, res) => {
  try {
    // Fetch bookings related to the user
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
