import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Your Next Adventure</h1>
          <p>Find the best deals on flights, hotels, and vacation packages.</p>
          {/* <form className="search-form">
            <input type="text" placeholder="Where to?" />
            <input type="date" placeholder="Check-in Date" />
            <input type="date" placeholder="Check-out Date" />
            <button type="submit">Search</button>
          </form> */}
        </div>
      </section>
      <section className="destinations">
        <h2>Featured Destinations</h2>
        <div className="destination-cards">
          <div className="destination-card">
            <img src="/images/paris.jpg" alt="Paris" />
            <h3>Paris</h3>
            <p>Explore the City of Lights.</p>
          </div>
          <div className="destination-card">
            <img src="/images/newyork.jpg" alt="New York" />
            <h3>New York</h3>
            <p>The city that never sleeps.</p>
          </div>
          <div className="destination-card">
            <img src="/images/tokyo.jpg" alt="Tokyo" />
            <h3>Tokyo</h3>
            <p>Experience the vibrant culture of Japan.</p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <Link to="/services">
              <img src="/images/hotel.jpg" alt="Hotels" />
              <h3>Hotels</h3>
              <p>Find the best hotel deals.</p>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/services">
              <img src="/images/flight.jpg" alt="Flights" />
              <h3>Flights</h3>
              <p>Book flights at the best prices.</p>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/services">
              <img src="/images/vaccation1.jpg" alt="Vacation Packages" />
              <h3>Vacation Packages</h3>
              <p>Enjoy all-inclusive vacation packages.</p>
            </Link>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing the best travel deals and services.
              Explore the world with us.
            </p>
          </div>
          <div className="footer-section contact">
            <h2>Contact</h2>
            <p>Email: support@travel.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <div className="footer-section newsletter">
            <h2>Newsletter</h2>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
