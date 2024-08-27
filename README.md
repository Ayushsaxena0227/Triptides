# Triptides
# Overview
The *Triptides* is a full-stack web application that allows users to search for flights, book tickets, and complete payments using PayPal. The app includes user authentication via JWT, flight search functionality, email notifications for successful bookings using Nodemailer, and a secure payment gateway integration with PayPal (sandbox mode).

## Features

- **User Authentication**: Secure JWT-based authentication for login and registration.
- **Flight Search**: Users can search for available flights based on their preferences.
- **Booking Functionality**: Allows users to book tickets and view booking details.
- **Email Notifications**: Sends an email confirmation to users upon successful booking.
- **Payment Integration**: PayPal payment gateway (sandbox) for secure transactions.
- **Modern UI**: A responsive and user-friendly interface built with modern design principles.
- **Success Modals**: Custom modals for transaction success, enhancing the user experience.

## Tech Stack

- **Frontend**:
  - React.js
  - Vite.js
  - CSS (with custom styling for components)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  
- **Authentication**:
  - JWT (JSON Web Token) for secure user authentication
  
- **Email Service**:
  - Nodemailer for sending emails
  
- **Payment Gateway**:
  - PayPal API (Sandbox mode) for handling payments

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB running locally or on a remote server

### Steps

1. **Clone the Repository**:
   git clone https://github.com/your-username/mern-ticket-booking-app.git
   cd mern-ticket-booking-app

 cd client
npm install
cd ../server
npm install

2.ceate env file in server directory MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password

3.Start the backend server:
cd server
npm start

4.Start the frontend development server:
cd client
npm run dev

Contact
For any inquiries or contributions, please contact ayush saxena at [saxenaayush381@gmail.com].

