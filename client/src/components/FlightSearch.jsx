import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
import "./styles/FlightSearch.css";
import BookingSuccessModal from "./BookingSuccessModal";
import { useNavigate } from "react-router-dom";
import flight1Img from "../images/flight.jpg";

const flightImages = {
  flight_id: flight1Img, // Ensure this ID matches the actual flight ID
};

const FlightSearch = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [adults, setAdults] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [noFlightsFound, setNoFlightsFound] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/flights/search?departure=${encodeURIComponent(
          departure
        )}&arrival=${encodeURIComponent(
          arrival
        )}&departureDate=${encodeURIComponent(
          departureDate
        )}&adults=${encodeURIComponent(adults)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.data.length === 0) {
        setNoFlightsFound(true);
      } else {
        setFlights(data.data);
        setShowResults(true);
        setNoFlightsFound(false);
      }
    } catch (error) {
      console.error("Error fetching flights", error);
    }
  };

  const handleBookFlight = async (flightId) => {
    if (!user) {
      alert("Booking failed: User not authenticated");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in local storage");
      }

      const response = await fetch("http://localhost:5000/api/flights/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token, // Ensure this matches the backend's expected header
        },
        body: JSON.stringify({
          userId: user._id,
          flightId: flightId,
          numberOfTickets: adults, // Ensure `adults` is defined in the scope
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from response
        throw new Error(errorData.message || "Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("flight", JSON.stringify(data.flight || {}));
      localStorage.setItem("user", JSON.stringify(user));

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/bookingdetails");
      }, 3000);
    } catch (error) {
      console.error("Error booking flight:", error);
      alert(`Booking failed: ${error.message}`);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleBackToSearch = () => {
    setShowResults(false);
    setNoFlightsFound(false);
  };

  return (
    <div className="flight-search-container">
      {!showResults && !noFlightsFound ? (
        <div className="search-form">
          <h1>Search Your Flight Here</h1>
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
      ) : showResults ? (
        <div className="flight-results">
          <h2>Available Flights</h2>
          <ul>
            {flights.map((flight) => (
              <li key={flight._id}>
                <div className="flight-info">
                  <img
                    src={flightImages[flight._id] || flight1Img}
                    alt={`Flight from ${flight.departure} to ${flight.arrival}`}
                    style={{
                      width: "600px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
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
      ) : (
        noFlightsFound && (
          <div className="no-flights-found">
            <h2>Sorry! We don't have any flights for this route.</h2>
            <p>Please search again after some time.</p>
            <button
              onClick={handleBackToSearch}
              className="search-again-button"
            >
              Back to Search
            </button>
          </div>
        )
      )}
      {showSuccessModal && <BookingSuccessModal onClose={handleCloseModal} />}
    </div>
  );
};

export default FlightSearch;
