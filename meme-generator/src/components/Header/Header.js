import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-logo-name">
        <img src={logo} alt="" className="nav-logo" />
        <h1 className="nav-name">Meme Generator</h1>
      </div>
      <div className="nav-project-number">
        <h4>React Course - Project 3</h4>
      </div>
    </nav>
  );
};

export default Header;
