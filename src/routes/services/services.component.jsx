import service from "../../service";
import Card from "../../components/card/card-component";
import "./services.styles.scss";

const Services = () => {
  return (
    <div className="service_container">
      <h2 className="service_header">Services</h2>
      <p className="detail_container">
        With more than 10 years on the market,{" "}
        <span className="detail_span">Beautysalon</span> has already conquered
        customers from countless countries with its exclusive and totally
        natural treatments.
      </p>
      <div className="card_detail_container">
        {service
          .filter((_, index) => index < 3)
          .map((services) => {
            return <Card service={services} />;
          })}
      </div>
    </div>
  );
};

export default Services;
