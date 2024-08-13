import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
// import axios from "axios";
import "./styles/FlightSearch.css";

const FlightSearch = () => {
  const { user } = useContext(AuthContext);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [adults, setAdults] = useState(1);
  const [showResults, setShowResults] = useState(false);
  // const handleSearch = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/flights/search?departure=${encodeURIComponent(
  //         departure
  //       )}&arrival=${encodeURIComponent(
  //         arrival
  //       )}&departureDate=${encodeURIComponent(
  //         departureDate
  //       )}&adults=${encodeURIComponent(adults)}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // Add any other headers you might need here
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     setFlights(data.data);
  //     setShowResults(true);
  //   } catch (error) {
  //     console.error("Error fetching flights", error);
  //   }
  // };

  const handleBookFlight = async (flightId) => {
    if (!user || !user.id) {
      alert("Booking failed: User not authenticated");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/flights/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: user.id,
          flightId: flightId,
          numberOfTickets: adults,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert(data.msg);
    } catch (error) {
      alert("Booking failed");
    }
  };

  return (
    <div className="flight-search-container">
      {!showResults ? (
        <div className="search-form">
          <h1>Flight Search</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="From"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="input-text"
            />
            <input
              type="text"
              placeholder="To"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="input-text"
            />
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="input-date"
            />
            <input
              type="number"
              placeholder="Adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="input-text"
            />
            <button type="submit" className="search-button">
              Search Flights
            </button>
          </form>
        </div>
      ) : (
        <div className="flight-results">
          <h2>Available Flights</h2>
          <ul>
            {flights.map((flight) => (
              <li key={flight._id}>
                <div className="flight-info">
                  <span>
                    {flight.departure} to {flight.arrival}
                  </span>
                  <span>{flight.departureDate}</span>
                  <span>Price: {flight.price}</span>
                  <span>Available Tickets: {flight.availableTickets}</span>
                </div>
                <button onClick={() => handleBookFlight(flight._id)}>
                  Book Now
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
