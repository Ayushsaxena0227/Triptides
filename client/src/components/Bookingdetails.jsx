import React, { useEffect, useState } from "react";
import "./styles/BookingDetails.css";
import PayPalCheckoutButton from "./PayPalCheckoutButton";
import { useNavigate } from "react-router-dom";

const BookingDetails = ({ ticketPrice }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [flightDetails, setFlightDetails] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user details and flight details from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const flight = JSON.parse(localStorage.getItem("flight"));

    console.log("User details:", user);
    console.log("Flight details:", flight);

    setUserDetails(user);
    setFlightDetails(flight);
  }, []);

  const handleLogoutAndRedirect = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("flight");
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!userDetails || !flightDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="booking-details-container">
      <h1>SUCCESSFULLY BOOKED</h1>
      <h1>WOAH! FLY HIGH WITH US</h1>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {userDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {userDetails.email}
      </p>

      <h2>Flight Information</h2>
      <p>
        <strong>Departure:</strong> {flightDetails.departure}
      </p>
      <p>
        <strong>Arrival:</strong> {flightDetails.arrival}
      </p>
      <p>
        <strong>Departure Date:</strong>{" "}
        {new Date(flightDetails.departureDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Available Tickets:</strong> {flightDetails.availableTickets}
      </p>
      <p>
        <strong>Price:</strong> ${flightDetails.price}
      </p>
      {/* Add flight animation */}
      <div className="flight-animation">
        <img src="/images/flight-takeoff.webp" alt="Flight Takeoff Animation" />
      </div>
      <button onClick={handleLogoutAndRedirect} className="home-button">
        Wait, Let Me Recheck
      </button>
      <h3>payment button</h3>
      <button>
        <PayPalCheckoutButton ticketPrice={ticketPrice} currency="USD" />
      </button>
    </div>
  );
};

export default BookingDetails;
