import service from "../../service";
import Card from "../../components/card/card-component";
import "./services.styles.scss";

const Services = () => {
  return (
    <div className="service_container">
      <div className="service_header_section">
        <h2>Our Services</h2>
        <p>
          With more than 10 years on the market,
          <span className="highlight"> Beautysalon</span> has already conquered
          customers from countless countries with its exclusive and totally
          natural treatments.
        </p>
      </div>

      <div className="service_categories">
        <div className="category">
          <h3>Our Premium Services</h3>
          <div className="cards_grid">
            {service.map((service) => (
              <Card key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="service_cta">
        <h3>Experience Our Services</h3>
        <p>Book your appointment today and discover the difference of our natural treatments.</p>
        <button className="cta_button">Book Now</button>
      </div>
    </div>
  );
};

export default Services;
