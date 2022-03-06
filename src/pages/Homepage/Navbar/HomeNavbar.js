import React from "react";
import "./HomeNavbar.css";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="homenavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="homenavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="homenavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="homenavbar__text" style={{ color: "#f76d6d" }}>
            HOME
          </div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="homenavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="homenavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="homenavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="homenavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="homenavbar__text" id="homenavbar__rightmost">
            <div className="homerendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="homenavbarcontainer">
        <div className="homenavbarbutton">☰</div>
        <div className="homenavbardropdown">
          <a
            href="/"
            className="homenavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            HOME
          </a>
          <a href="/teams" className="homenavbardropdowncontent">
            TEAMS
          </a>
          <a href="/clubs" className="homenavbardropdowncontent">
            CLUBS
          </a>
          <a href="/recognitions" className="homenavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="homenavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="homenavbardropdowncontent"
            id="homespecialcontainer"
          >
            <div className="homedropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
