import React from "react";
import heroImg from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImg} alt="" className="hero-img" />
      <div className="hero-description">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
