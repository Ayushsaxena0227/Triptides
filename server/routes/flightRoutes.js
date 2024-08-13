const express = require("express");
const router = express.Router();
const {
  searchFlights,
  bookFlight,
} = require("../controllers/flightController");
const { authMiddleware } = require("../middleware/authMiddleware"); // Correct Import

router.get("/search", searchFlights);
router.post("/book", authMiddleware, bookFlight); // Use authMiddleware as a function

module.exports = router;
