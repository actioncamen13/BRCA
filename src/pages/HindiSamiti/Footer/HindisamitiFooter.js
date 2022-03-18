import React from "react";
import "./HindisamitiFooter.css";
import { Link } from "react-router-dom";

function HindisamitiFooter() {
  return (
    <div className="hindisamitifooter">
      <a
        className="hindisamitifooter__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      <div className="hindisamitifooter__text1">
        <h3>Contact us on</h3>
        <h3>enter email</h3>
      </div>
      <div className="hindisamitifooter__text2">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext">HOME</h3>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext">TEAMS</h3>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <h3 className="footerinnertext" style={{ color: "#f76d6d" }}>
            CLUBS
          </h3>
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
      <div className="hindisamitifooter__text3">
        <h3>Website created by</h3>
        <h3>LIST DEVELOPERS AND DESIGNERS</h3>
      </div>
    </div>
  );
}

export default HindisamitiFooter;
