import React from "react";
import "./LiteratiNavbar.css";
import { Link } from "react-router-dom";

function LiteratiNavbar() {
  return (
    <div className="literatinavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="literatinavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="literatinavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="literatinavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="literatinavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="literatinavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="literatinavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="literatinavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="literatinavbar__text" id="literatinavbar__rightmost">
            <div className="literatirendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="literatinavbarcontainer">
        <div className="literatinavbarbutton">☰</div>
        <div className="literatinavbardropdown">
          <a href="/" className="literatinavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="literatinavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="literatinavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="literatinavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="literatinavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="literatinavbardropdowncontent"
            id="literatispecialcontainer"
          >
            <div className="literatidropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LiteratiNavbar;
