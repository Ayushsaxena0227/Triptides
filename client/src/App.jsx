import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import FlightSearch from "./components/FlightSearch";
import Home from "./components/Home";
import Services from "./components/Services";
import BookingDetails from "./components/Bookingdetails";
import Paris from "./components/pages/Paris";
import NewYork from "./components/pages/Newyork";
import Tokyo from "./components/pages/Tokyo";
// import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/search" element={<FlightSearch />} />
        <Route path="/" element={<Home />} />
        <Route path="/paris" element={<Paris />} />
        <Route path="/newyork" element={<NewYork />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
};

export default App;
