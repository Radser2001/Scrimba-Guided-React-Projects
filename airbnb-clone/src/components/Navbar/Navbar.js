import React from "react";
import logo from "../../assets/airbnb.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="" className="nav-logo" />
      </nav>
    </div>
  );
};

export default Navbar;
