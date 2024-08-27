import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import SuccessModal from "./SuccessModal";

const PayPalCheckoutButton = ({ ticketPrice, currency = "USD" }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSuccess = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Ae4uimRv_Vuo_SnZHo6KktkUz9Z3Px3PQLB9_ksbHTR9SGsSKM4ps-z5mw0dbLYUqBPra7vMOJDj--IK",
        currency: currency, // Use the currency passed as a prop, defaulting to USD
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return fetch("http://localhost:5000/api/paypal/pay", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: ticketPrice, currency }),
          })
            .then((res) => res.json())
            .then((orderData) => {
              if (orderData && orderData.id) {
                return orderData.id;
              } else {
                throw new Error("Failed to create PayPal order.");
              }
            })
            .catch((err) => {
              console.error("PayPal error:", err);
              alert("Error creating PayPal order. Please try again.");
            });
        }}
        onApprove={(data, actions) => {
          return fetch("http://localhost:5000/api/paypal/success", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderId: data.orderID }),
          })
            .then((res) => res.json())
            .then((details) => {
              handleSuccess(); // Trigger modal on success
            })
            .catch((err) => {
              console.error("PayPal capture error:", err);
              alert("Error capturing PayPal order. Please try again.");
            });
        }}
      />
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckoutButton;
