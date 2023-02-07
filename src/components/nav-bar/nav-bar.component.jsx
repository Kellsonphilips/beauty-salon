import { Link } from "react-router-dom";
import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <Link className="navbar">Home</Link>
      <Link className="navbar">About</Link>
      <Link className="navbar">Services</Link>
      <Link className="navbar">Testimony</Link>
      <Link className="navbar">Contact Us</Link>
    </div>
  );
};

export default NavBar;
