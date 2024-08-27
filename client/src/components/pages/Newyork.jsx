import React from "react";
import { Link } from "react-router-dom";
import "../styles/City.css";

const NewYork = () => {
  return (
    <div className="city-page">
      <section className="city-hero">
        <img src="/images/newyork.jpg" alt="New York" className="city-image" />
        <h1 className="city-title">Welcome to New York</h1>
      </section>
      <section className="city-content">
        <p>
          New York City, often simply called New York, is the most populous city
          in the United States. Known for its significant impact on commerce,
          finance, media, art, fashion, research, technology, education, and
          entertainment, New York is also home to the United Nations
          headquarters.
        </p>
        <p>
          Explore iconic landmarks such as the Statue of Liberty, Times Square,
          Central Park, and the Empire State Building. The city offers a diverse
          range of experiences from Broadway shows to world-class museums and
          restaurants.
        </p>
        <p>
          Whether you’re exploring the vibrant neighborhoods of Manhattan,
          taking in a show on Broadway, or simply enjoying the fast-paced life
          of the city, New York is a destination like no other.
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

export default NewYork;
