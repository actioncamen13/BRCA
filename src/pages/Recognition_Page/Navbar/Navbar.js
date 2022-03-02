import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="navbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="navbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="navbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="navbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="navbar__text" style={{ color: "#f76d6d" }}>
            BRCA RECOGNITIONS
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar__text" id="navbar__rightmost">
            <div className="rendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
