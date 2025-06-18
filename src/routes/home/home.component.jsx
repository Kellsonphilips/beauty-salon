import Button from "../../components/button/button.component";
import Home_Saloon from "../../assets/icons/images/home-saloon.jpg";
import "./home.styles.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/contact");
  };

  return (
    <div className="home_component">
      <div className="hero_section">
        <img className="home_image_component" src={Home_Saloon} alt="Luxury beauty salon interior" />
        <div className="hero_content">
          <h1>Welcome to Beauty Salon</h1>
          <p>Where Beauty Meets Natural Excellence</p>
          <Button onClick={handleBookAppointment} />
        </div>
      </div>

      <div className="features_section">
        <div className="feature_card">
          <h3>Natural Treatments</h3>
          <p>Experience the power of nature with our organic and chemical-free treatments</p>
        </div>
        <div className="feature_card">
          <h3>Expert Stylists</h3>
          <p>Our certified professionals bring years of experience to every service</p>
        </div>
        <div className="feature_card">
          <h3>Premium Products</h3>
          <p>We use only the highest quality, eco-friendly products for your beauty needs</p>
        </div>
      </div>

      <div className="home_details_component">
        <div className="details_content">
          <h2>Natural Health for Your Hair</h2>
          <p>
            At Beauty Salon, we believe in the power of natural beauty. Our exclusive salon specializes in 
            organic treatments that nourish your hair and scalp while delivering stunning results. We combine 
            traditional techniques with modern innovations to create a unique experience that's both effective 
            and environmentally conscious.
          </p>
          <div className="benefits_list">
            <div className="benefit_item">
              <span className="benefit_icon">🌿</span>
              <span>100% Natural Ingredients</span>
            </div>
            <div className="benefit_item">
              <span className="benefit_icon">✨</span>
              <span>Customized Treatments</span>
            </div>
            <div className="benefit_item">
              <span className="benefit_icon">💆‍♀️</span>
              <span>Relaxing Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cta_section">
        <h2>Ready to Transform Your Look?</h2>
        <p>Book your appointment today and experience the difference of natural beauty care</p>
        <Button onClick={handleBookAppointment} />
      </div>
    </div>
  );
};

export default Home;
