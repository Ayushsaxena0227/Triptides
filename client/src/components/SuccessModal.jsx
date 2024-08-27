import React from "react";
import "./styles/SuccessModal.css"; // For styling the modal

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Transaction Successful!</h2>
        <p>Your payment has been completed successfully.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
