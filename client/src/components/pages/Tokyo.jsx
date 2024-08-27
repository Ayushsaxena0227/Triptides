import React from "react";
import { Link } from "react-router-dom";
import "../styles/City.css";

const Tokyo = () => {
  return (
    <div className="city-page">
      <section className="city-hero">
        <img src="/images/tokyo.jpg" alt="Tokyo" className="city-image" />
        <h1 className="city-title">Welcome to Tokyo</h1>
      </section>
      <section className="city-content">
        <p>
          Tokyo, the capital of Japan, is a bustling metropolis that seamlessly
          blends the ultramodern with the traditional. From neon-lit skyscrapers
          to historic temples, Tokyo is a city of contrasts.
        </p>
        <p>
          Explore the serene Meiji Shrine, the Imperial Palace, or the vibrant
          shopping districts of Shibuya and Shinjuku. Tokyo is also known for
          its food scene, offering everything from sushi and ramen to
          international cuisine.
        </p>
        <p>
          Whether you’re here to experience the rich culture, cutting-edge
          technology, or the unique blend of old and new, Tokyo is sure to leave
          you captivated.
        </p>
        <div className="button-group">
          <Link to="/" className="back-button">
            Go Back
          </Link>
          <Link to="/register" className="register-button">
            Register
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tokyo;
