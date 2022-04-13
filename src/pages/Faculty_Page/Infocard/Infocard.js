import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Infocard.css";
// import Photo from "./Rectangle 103.png";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import Popup from "./Popup";

function Infocard(props) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div className="infocard" style={{ width: "175px", height: "250px" }}>
      <div className="photo">
        <img src={props.image} alt="Team Member" />
      </div>
      <h2>{props.name}</h2>
      <h3>{props.position}</h3>
      <div className="infocard__bottom" style={{ marginTop: "5%" }}>
        <div
          className="phone_container"
          style={{ color: "#6a6565", marginRight: "5%" }}
        >
          <PhoneIcon className="phone__icon" onClick={togglePopup1} />
          {isOpen1 && (
            <Popup content={props.phone} handleClose={togglePopup1} />
          )}
        </div>
        <a href={props.insta} style={{ color: "#6a6565", marginRight: "5%" }}>
          <InstagramIcon className="insta__icon" />
        </a>
        <div className="email_container" style={{ color: "#6a6565" }}>
          <EmailIcon className="email__icon" onClick={togglePopup2} />
          {isOpen2 && (
            <Popup content={props.email} handleClose={togglePopup2} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Infocard;
