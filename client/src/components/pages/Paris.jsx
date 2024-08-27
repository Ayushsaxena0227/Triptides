import React from "react";
import "../styles/City.css";
import { Link } from "react-router-dom";

const Paris = () => {
  return (
    <div className="city-page">
      <section className="city-hero">
        <img src="/images/ifiletower.jpg" alt="Paris" className="city-image" />
        <h1 className="city-title">Welcome to Paris</h1>
      </section>
      <section className="city-content">
        <p>
          Paris, the capital of France, is known for its art, fashion,
          gastronomy, and culture. The city's 19th-century cityscape is
          crisscrossed by wide boulevards and the River Seine. Beyond such
          landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame
          cathedral, the city is known for its cafe culture and designer
          boutiques along the Rue du Faubourg Saint-Honoré.
        </p>
        <p>
          Explore the art at the Louvre Museum, walk along the Champs-Élysées,
          or enjoy a scenic boat ride on the Seine. Paris is also famous for its
          culinary delights, from pastries and coffee to gourmet meals.
        </p>
        <p>
          Whether you’re here for the history, the culture, or simply to soak in
          the beauty of the city, Paris has something to offer everyone.
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

export default Paris;
