const express = require("express");
const router = express.Router();
const {
  createPayPalOrder,
  capturePayPalOrder,
} = require("../Services/paypalservice");

// Route to create a PayPal payment
router.post("/pay", async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const orderId = await createPayPalOrder(amount, currency);
    res.json({ id: orderId });
  } catch (err) {
    console.error("Error in creating PayPal order:", err.message);
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
});

// Route for PayPal success (to capture the payment)
router.post("/success", async (req, res) => {
  const { orderId } = req.body;

  try {
    const captureData = await capturePayPalOrder(orderId);
    res.json(captureData);
  } catch (err) {
    console.error("Error in capturing PayPal order:", err.message);
    res.status(500).json({ error: "Failed to capture PayPal order" });
  }
});

// Route for PayPal cancel
router.get("/cancel", (req, res) => {
  res.send("Payment canceled.");
});

module.exports = router;
