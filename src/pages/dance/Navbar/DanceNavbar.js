import React from "react";
import "./DanceNavbar.css";
import { Link } from "react-router-dom";

function DanceNavbar() {
  return (
    <div className="dancenavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="dancenavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="dancenavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="dancenavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="dancenavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="dancenavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="dancenavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="dancenavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="dancenavbar__text" id="dancenavbar__rightmost">
            <div className="dancerendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="dancenavbarcontainer">
        <div className="dancenavbarbutton">☰</div>
        <div className="dancenavbardropdown">
          <a href="/" className="dancenavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="dancenavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="dancenavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="dancenavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="dancenavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="dancenavbardropdowncontent"
            id="dancespecialcontainer"
          >
            <div className="dancedropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DanceNavbar;
