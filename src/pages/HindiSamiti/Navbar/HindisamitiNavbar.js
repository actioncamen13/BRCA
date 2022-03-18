import React from "react";
import "./HindisamitiNavbar.css";
import { Link } from "react-router-dom";

function HindisamitiNavbar() {
  return (
    <div className="hindisamitinavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="hindisamitinavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="hindisamitinavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="hindisamitinavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="hindisamitinavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="hindisamitinavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="hindisamitinavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="hindisamitinavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="hindisamitinavbar__text"
            id="hindisamitinavbar__rightmost"
          >
            <div className="hindisamitirendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="hindisamitinavbarcontainer">
        <div className="hindisamitinavbarbutton">☰</div>
        <div className="hindisamitinavbardropdown">
          <a href="/" className="hindisamitinavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="hindisamitinavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="hindisamitinavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="hindisamitinavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="hindisamitinavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="hindisamitinavbardropdowncontent"
            id="hindisamitispecialcontainer"
          >
            <div className="hindisamitidropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HindisamitiNavbar;
