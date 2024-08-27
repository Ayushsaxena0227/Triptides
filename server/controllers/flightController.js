const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const { sendBookingConfirmationEmail } = require("../Services/emailService");
const User = require("../models/User");

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

    // Fetch user data
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Send booking confirmation email
    await sendBookingConfirmationEmail(user.email, {
      flightName: `${flight.departure} to ${flight.arrival}`,
      departure: flight.departure,
      arrival: flight.arrival,
      date: flight.departureDate,
      price: flight.price,
      tickets: numberOfTickets,
    });

    res.json({
      msg: "Booking successful!",
      flight: {
        id: flight._id,
        departure: flight.departure,
        arrival: flight.arrival,
        departureDate: flight.departureDate,
        availableTickets: flight.availableTickets,
        price: flight.price,
      },
      booking,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
