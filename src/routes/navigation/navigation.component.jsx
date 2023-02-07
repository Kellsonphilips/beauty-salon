import { useState } from "react";
import { Outlet } from "react-router";
import { ReactComponent as OpenMenu } from "../../assets/shared-icon/icon-close.svg";
import { ReactComponent as CloseMenu } from "../../assets/shared-icon/icon-hamburger.svg";
import NavBar from "../../components/nav-bar/nav-bar.component";
import "./navigation.styles.scss";

const Navigation = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleNavbarChange = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <div className="navigation_container">
      <h2 className="navigation_home_container">
        beauty<span className="nav_sub_container">Salon</span>.
      </h2>
      <div className="navigation_switch_container" onClick={handleNavbarChange}>
        {isNavBarOpen ? (
          <div>
            <OpenMenu />
            <NavBar />
          </div>
        ) : (
          <CloseMenu />
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
