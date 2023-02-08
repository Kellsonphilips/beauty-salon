import { Link } from "react-router-dom";
import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <Link className="navbar"  to="/">Home</Link>
      <Link className="navbar"  to="/about">About</Link>
      <Link className="navbar"  to="/service">Services</Link>
      <Link className="navbar"  to="/testimony">Testimony</Link>
      <Link className="navbar"  to="/contact">Contact Us</Link>
    </div>
  );
};

export default NavBar;
