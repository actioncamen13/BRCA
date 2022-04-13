import React from "react";
import "./HomeNavbar.css";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="homenavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="homenavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link
            to="/"
            className="homenavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            HOME
          </Link>
          <Link to="/teams" className="homenavbardropdowncontent">
            TEAMS
          </Link>
          <Link to="/clubs" className="homenavbardropdowncontent">
            CLUBS
          </Link>
          <Link to="/recognitions" className="homenavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="homenavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="homenavbardropdowncontent"
            id="homespecialcontainer"
          >
            <div className="homedropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
