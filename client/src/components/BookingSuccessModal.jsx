import React from "react";
import "./styles/BookingSuccess.css";

const BookingSuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Booking Successful!</h2>
        <p>Your flight has been successfully booked.</p>
        <p>We have sent the details to your email.</p>
        <button onClick={onClose} className="modal-close-button">
          Okay
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessModal;
