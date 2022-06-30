import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav-logo-content">
          <img src={logo} alt="" className="nav-logo" />
          <h3 className="nav-logo-name">ReactFacts</h3>
        </div>
        <p className="nav-text">React Course - Project 1</p>
      </nav>
    </header>
  );
};

export default Header;
