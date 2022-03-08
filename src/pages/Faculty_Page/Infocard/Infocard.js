import React from "react";
import "./Infocard.css";
// import Photo from "./Rectangle 103.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Infocard(props) {
  return (
    <div className="profinfocard">
      <div className="profphoto">
        <img src={props.image} alt="Team Member" />
      </div>
      <h2>{props.name}</h2>
      <h3>{props.position}</h3>
      <div className="profinfocard__bottom">
        <Link to="props.fb" style={{ color: "#6a6565", marginRight: "5%" }}>
          <FacebookIcon className="proffacebook__icon" />
        </Link>
        <Link to="props.insta" style={{ color: "#6a6565", marginRight: "5%" }}>
          <InstagramIcon className="profinsta__icon" />
        </Link>
        <Link to="props.linkedin" style={{ color: "#6a6565" }}>
          <LinkedInIcon className="proflinkedin__icon" />
        </Link>
      </div>
    </div>
  );
}

export default Infocard;
