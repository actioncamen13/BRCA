import React from "react";
import "./Infocard.css";
// import Photo from "./Rectangle 103.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Link } from "react-router-dom";

function Infocard(props) {
  return (
    <div className="profinfocard">
      <div className="profphoto">
        <img src={props.image} alt="Team Member" />
      </div>
      <h2>{props.name}</h2>
      <h3>{props.position}</h3>
      <div className="profinfocard__bottom">
      <a href={props.fb} style={{ color: "#6a6565", marginRight: "5%" }}>
          <FacebookIcon className="facebook__icon" />
        </a>
        <a href={props.insta} style={{ color: "#6a6565", marginRight: "5%" }}>
          <InstagramIcon className="insta__icon" />
        </a>
        <a href={props.linkedin} style={{ color: "#6a6565" }}>
          <LinkedInIcon className="linkedin__icon" />
        </a>
      </div>
    </div>
  );
}

export default Infocard;
