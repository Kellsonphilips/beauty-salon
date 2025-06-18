import { Link } from "react-router-dom";
import { useState } from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <header className="navigation_header">
        <Link to="/" className="navigation_home_container">
          beauty<span className="nav_sub_container">Salon</span>.
        </Link>
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={isOpen ? "open" : ""}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/testimonies" onClick={toggleMenu}>
            Testimonies
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
