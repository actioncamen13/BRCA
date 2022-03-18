import React from "react";
import "./DebatingNavbar.css";
import { Link } from "react-router-dom";

function DebatingNavbar() {
  return (
    <div className="debatingnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="debatingnavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      > </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="debatingnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text" id="debatingnavbar__rightmost">
            <div className="debatingrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="debatingnavbarcontainer">
        <div className="debatingnavbarbutton">☰</div>
        <div className="debatingnavbardropdown">
          <a href="/" className="debatingnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="debatingnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="debatingnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="debatingnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="debatingnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="debatingnavbardropdowncontent"
            id="debatingspecialcontainer"
          >
            <div className="debatingdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DebatingNavbar;
