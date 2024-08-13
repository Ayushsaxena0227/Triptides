import "./styles/Services.css";
const Services = () => {
  return (
    <div>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/images/hotel.jpg" alt="Hotels" />
            <h3>Hotels</h3>
            <p>Find the best hotel deals.</p>
          </div>
          <div className="service-card">
            <img src="/images/flight.jpg" alt="Flights" />
            <h3>Flights</h3>
            <p>Book flights at the best prices.</p>
          </div>
          <div className="service-card">
            <img src="/images/vaccation1.jpg" alt="Vacation Packages" />
            <h3>Vacation Packages</h3>
            <p>Enjoy all-inclusive vacation packages.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
