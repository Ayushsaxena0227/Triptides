import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [flightDetails, setFlightDetails] = useState(null);

  useEffect(() => {
    // Fetch user details and flight details from localStorage or server
    const user = JSON.parse(localStorage.getItem("user"));
    const flight = JSON.parse(localStorage.getItem("flight"));

    setUserDetails(user);
    setFlightDetails(flight);
  }, []);

  if (!userDetails || !flightDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Here is your booking details</h1>
      <h2>User Information</h2>
      <p>Name: {userDetails.name}</p>
      <p>ID: {userDetails.id}</p>

      <h2>Flight Information</h2>
      <p>Departure: {flightDetails.departure}</p>
      <p>Arrival: {flightDetails.arrival}</p>
      <p>
        Departure Date:{" "}
        {new Date(flightDetails.departureDate).toLocaleDateString()}
      </p>
      <p>Available Tickets: {flightDetails.availableTickets}</p>
      <p>Price: ${flightDetails.price}</p>
      <img
        src={flightDetails.image}
        alt={`${flightDetails.departure} to ${flightDetails.arrival}`}
        style={{ width: "200px", height: "150px" }}
      />
    </div>
  );
};

export default BookingDetails;
