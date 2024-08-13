const express = require("express");
const router = express.Router();
const { bookFlight, getBookings } = require("../controllers/bookingController");
const { authMiddleware } = require("../middleware/authMiddleware"); // Correct Import

router.post("/book", authMiddleware, bookFlight); // Use authMiddleware as a function
router.get("/bookings", authMiddleware, getBookings); // Use authMiddleware as a function

module.exports = router;
