const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors
const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

app.use(cors());

app.use(bodyParser.json());
require("./db/Mongoconnection");

app.use(express.json());

app.use("/api/users", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
