const mongoose = require("mongoose");
const Flight = require("./models/Flight");
const mongoURI =
  "mongodb+srv://saxenaayush381:uW8F0yvIgmHUTAao@cluster0.oc6osw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedFlights = [
  {
    departure: "Delhi",
    arrival: "Mumbai",
    departureDate: new Date("2024-08-15"),
    availableTickets: 100,
    price: 5000,
  },
  {
    departure: "Delhi",
    arrival: "Bangalore",
    departureDate: new Date("2024-08-16"),
    availableTickets: 80,
    price: 4500,
  },
  {
    departure: "Mumbai",
    arrival: "Delhi",
    departureDate: new Date("2024-08-17"),
    availableTickets: 50,
    price: 6000,
  },
  {
    departure: "Delhi",
    arrival: "Kolkata",
    departureDate: "2024-08-17",
    availableTickets: 130,
    price: 4000,
  },
  {
    departure: "Delhi",
    arrival: "Chennai",
    departureDate: "2024-08-18",
    availableTickets: 110,
    price: 2000,
  },
  {
    departure: "Mumbai",
    arrival: "Delhi",
    departureDate: "2024-08-19",
    availableTickets: 140,
    price: 4500,
  },
  {
    departure: "Mumbai",
    arrival: "Bangalore",
    departureDate: "2024-08-20",
    availableTickets: 100,
    price: 3000,
  },
  {
    departure: "Mumbai",
    arrival: "Kolkata",
    departureDate: "2024-08-21",
    availableTickets: 90,
    price: 7000,
  },
  {
    departure: "Mumbai",
    arrival: "Chennai",
    departureDate: "2024-08-22",
    availableTickets: 80,
    price: 6000,
  },
  // International Flights
  {
    departure: "Delhi",
    arrival: "New York",
    departureDate: "2024-09-01",
    availableTickets: 200,
    price: 10000,
  },
  {
    departure: "Delhi",
    arrival: "London",
    departureDate: "2024-09-02",
    availableTickets: 180,
    price: 8000,
  },
  {
    departure: "Delhi",
    arrival: "Paris",
    departureDate: "2024-09-03",
    availableTickets: 170,
    price: 9000,
  },
  {
    departure: "Mumbai",
    arrival: "Dubai",
    departureDate: "2024-09-04",
    availableTickets: 160,
    price: 7000,
  },
  {
    departure: "Bangalore",
    arrival: "Singapore",
    departureDate: "2024-09-05",
    availableTickets: 150,
    price: 4000,
  },
  {
    departure: "Chennai",
    arrival: "Sydney",
    departureDate: "2024-09-06",
    availableTickets: 140,
    price: 6500,
  },
  {
    departure: "Kolkata",
    arrival: "Hong Kong",
    departureDate: "2024-09-07",
    availableTickets: 130,
    price: 10000,
  },
  {
    departure: "Mumbai",
    arrival: "Bangkok",
    departureDate: "2024-09-08",
    availableTickets: 120,
    price: 8000,
  },
  {
    departure: "Delhi",
    arrival: "Tokyo",
    departureDate: "2024-09-09",
    availableTickets: 110,
    price: 9000,
  },
  {
    departure: "Delhi",
    arrival: "Toronto",
    departureDate: "2024-09-10",
    availableTickets: 100,
    price: 8500,
  },
];

const seedDB = async () => {
  await Flight.deleteMany({});
  await Flight.insertMany(seedFlights);
  console.log("Database seeded with initial flight data");
  mongoose.connection.close();
};

seedDB().catch((error) => {
  console.error("Error seeding database:", error);
  mongoose.connection.close();
});
