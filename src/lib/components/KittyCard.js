import React from "react";
import kittyPic from "./kitty.jpg";
import "./KittyCard.css";

const KittyCard = () => (
  <div className="KittyCard">
    <h1 className="KittyCard-title">Kitten</h1>
    <div className="KittyCard-image" />
    <p className="KittyCard-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
  </div>
);

export default KittyCard;
