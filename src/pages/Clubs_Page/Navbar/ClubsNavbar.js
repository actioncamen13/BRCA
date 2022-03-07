import React from "react";
import "./ClubsNavbar.css";
import { Link } from "react-router-dom";

function ClubsNavbar() {
  return (
    <div className="clubsnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="clubsnavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="clubsnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text" id="clubsnavbar__rightmost">
            <div className="clubsrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="clubsnavbarcontainer">
        <div className="clubsnavbarbutton">☰</div>
        <div className="clubsnavbardropdown">
          <a href="/" className="clubsnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="clubsnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="clubsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="clubsnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="clubsnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="clubsnavbardropdowncontent"
            id="clubsspecialcontainer"
          >
            <div className="clubsdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClubsNavbar;
