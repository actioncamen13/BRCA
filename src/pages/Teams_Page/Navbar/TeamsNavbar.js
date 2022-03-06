import React from "react";
import "./TeamsNavbar.css";
import { Link } from "react-router-dom";

function TeamsNavbar() {
  return (
    <div className="teamsnavbar" style={{ position: "relative" }}>
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="teamsnavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="teamsnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text" id="teamsnavbar__rightmost">
            <div className="teamsrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="teamsnavbarcontainer">
        <div className="teamsnavbarbutton">☰</div>
        <div className="teamsnavbardropdown">
          <a href="/" className="teamsnavbardropdowncontent">
            HOME
          </a>
          <a
            href="/teams"
            className="teamsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            TEAMS
          </a>
          <a href="/clubs" className="teamsnavbardropdowncontent">
            CLUBS
          </a>
          <a href="/recognitions" className="teamsnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="teamsnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="teamsnavbardropdowncontent"
            id="teamsspecialcontainer"
          >
            <div className="teamsdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamsNavbar;
