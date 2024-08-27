const createPayPalOrder = async () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const requestBody = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "10.00",
        },
      },
    ],
  };

  try {
    const response = await fetch(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`PayPal order creation failed: ${errorData.message}`);
    }

    const orderData = await response.json();
    return orderData.id;
  } catch (error) {
    throw new Error("Failed to create PayPal order. Please try again.");
  }
};

const capturePayPalOrder = async (orderId) => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`PayPal order capture failed: ${errorData.message}`);
    }

    const captureData = await response.json();
    return captureData;
  } catch (error) {
    throw new Error("Failed to capture PayPal order. Please try again.");
  }
};

module.exports = { createPayPalOrder, capturePayPalOrder };
