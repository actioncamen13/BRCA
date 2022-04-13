import React from "react";
import "./HindisamitiNavbar.css";
import { Link } from "react-router-dom";

function HindisamitiNavbar() {
  return (
    <div className="hindisamitinavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="hindisamitinavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="hindisamitinavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="hindisamitinavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="hindisamitinavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="hindisamitinavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="hindisamitinavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="hindisamitinavbardropdowncontent"
            id="hindisamitispecialcontainer"
          >
            <div className="hindisamitidropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HindisamitiNavbar;
