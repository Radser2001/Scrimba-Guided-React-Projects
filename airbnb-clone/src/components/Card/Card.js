import React from "react";
import "./Card.css";

// * props is an object
const Card = (props) => {
  let badgeText = "";
  if (props.info.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.info.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {/* conditional rendering */}
      {props.info.openSpots === 0 && (
        <div className="card-badge">{badgeText}</div>
      )}
      {props.info.location === "Online" && (
        <div className="card-badge">{badgeText}</div>
      )}
      <img src={props.info.coverImg} alt="" className="card-image" />
      <div className="card-stats">
        <img src={props.info.stats.img} alt="" className="card-start" />
        <span>{props.info.stats.rating}</span>
        <span className="gray">({props.info.stats.reviewCount}) </span>
        <span className="gray">{props.info.location}</span>
      </div>
      <p>{props.info.title}</p>
      <p>
        <span className="bold">From ${props.info.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
