import React from "react";
import "./TeamsFooter.css";
import { Link } from "react-router-dom";

function TeamsFooter() {
  return (
    <div className="teamsfooter" style={{ position: "relative" }}>
      <div className="teamsfooter__logo"></div>
      <div className="teamsfooter__text1">
        <h3>Contact us on</h3>
        <h3>enter email</h3>
      </div>
      <div className="teamsfooter__text2">
      <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext">HOME</h3>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext" style={{ color: "#f76d6d" }}>
            TEAMS
          </h3>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext">CLUBS</h3>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext">BRCA RECOGNITIONS</h3>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext">SAC BOOKINGS</h3>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3
            className="footerinnertext"
            style={{ backgroundColor: "#f76d6d", color: "#ffffff" }}
          >
            RENDEZVOUS
          </h3>
        </Link>
      </div>
      <div className="teamsfooter__text3">
        <h3>Website created by</h3>
        <h3>LIST DEVELOPERS AND DESIGNERS</h3>
      </div>
    </div>
  );
}

export default TeamsFooter;