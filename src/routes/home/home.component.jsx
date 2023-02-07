import Button from "../../components/button/button.component";
import Home_Saloon from "../../assets/images/home-saloon.jpg"
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home_component">
      <div>
        <img className="home_image_component" src={Home_Saloon} alt="home" />
      </div>
      <div className="home_details_component">
        <h2 className="detail_header">Natural health for your hair.</h2>
        <p className="details">
          An exclusive salon to serve your need, specialized in natural treatments.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Home;
