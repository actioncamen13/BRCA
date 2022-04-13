/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Infocard.css";
import Photo from "./Rectangle 103.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Infocard() {
  return (
    <div className="infocard">
      <div className="photo">
        <img src={Photo} alt="Team Member" />
      </div>
      <h2>Name</h2>
      <h3>Position</h3>
      <div className="infocard__bottom">
        <Link to=""><FacebookIcon /></a>
        <Link to=""> <InstagramIcon /> </a>
        <Link to=""><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Infocard;
