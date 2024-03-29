import React from "react";
import "./TeamsNavbar.css";
import { Link } from "react-router-dom";

function TeamsNavbar() {
  return (
    <div className="teamsnavbar" style={{ position: "relative" }}>
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="teamsnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="teamsnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="teamsnavbar__text" style={{ color: "#f76d6d" }}>
            TEAMS
          </div>
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
          <Link to="/" className="teamsnavbardropdowncontent">
            HOME
          </Link>
          <Link
            to="/teams"
            className="teamsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            TEAMS
          </Link>
          <Link to="/clubs" className="teamsnavbardropdowncontent">
            CLUBS
          </Link>
          <Link to="/recognitions" className="teamsnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="teamsnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="teamsnavbardropdowncontent"
            id="teamsspecialcontainer"
          >
            <div className="teamsdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamsNavbar;
