import React from "react";
import "./Card.css";

// * props is an object
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card-image" />
      <div className="card-stats">
        <img src={props.star} alt="" className="card-start" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) .</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
