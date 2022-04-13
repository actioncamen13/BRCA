import React from "react";
import "./LiteratiNavbar.css";
import { Link } from "react-router-dom";

function LiteratiNavbar() {
  return (
    <div className="literatinavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="literatinavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="literatinavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="literatinavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="literatinavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="literatinavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="literatinavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="literatinavbardropdowncontent"
            id="literatispecialcontainer"
          >
            <div className="literatidropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LiteratiNavbar;
