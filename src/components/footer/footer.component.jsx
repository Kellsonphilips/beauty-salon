import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Beauty Salon</h3>
          <p>Your trusted destination for beauty and wellness services. We provide professional care and exceptional service to enhance your natural beauty.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonies">Testimonies</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Beauty Street, City, Country</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+1 234 567 890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@beautysalon.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beauty Salon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
