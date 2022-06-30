import React from "react";
import "./MainContent.css";
// import icon from "../../assets/icon.png";

const MainContent = () => {
  return (
    // * must have a single parent element wrapping the jsx
    <div className="main-container">
      <h1 className="main-heading">Fun Facts about React</h1>
      <ul className="main-list">
        {/* <img src={icon} alt="" className="icon" /> */}
        <li>Was first released in 2013</li>
        <li>Was originally created Jordan Walke</li>
        <li>Has well over 100K starts on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};

export default MainContent;
