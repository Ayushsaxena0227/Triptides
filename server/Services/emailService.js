const nodemailer = require("nodemailer");

const sendBookingConfirmationEmail = async (userEmail, bookingDetails) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Booking Confirmation",
      html: `<h1>Booking Confirmation</h1>
             <p>Your flight booking is confirmed!</p>
             <p>Check Your Details Here </p>
             <ul>
               <li>Flight: ${bookingDetails.flightName}</li>
               <li>Departure: ${bookingDetails.departure}</li>
               <li>Arrival: ${bookingDetails.arrival}</li>
               <li>Date: ${bookingDetails.date}</li>
               <li>Price: ${bookingDetails.price}</li>
             </ul>
             <p>We Wish You a Happy Journey,Thank you for booking with us!</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendBookingConfirmationEmail };
