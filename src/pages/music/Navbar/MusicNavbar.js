import React from "react";
import "./MusicNavbar.css";
import { Link } from "react-router-dom";

function MusicNavbar() {
  return (
    <div className="musicnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="musicnavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="musicnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="musicnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="musicnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="musicnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="musicnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="musicnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="musicnavbar__text" id="musicnavbar__rightmost">
            <div className="musicrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="musicnavbarcontainer">
        <div className="musicnavbarbutton">☰</div>
        <div className="musicnavbardropdown">
          <a href="/" className="musicnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="musicnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="musicnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="musicnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="musicnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="musicnavbardropdowncontent"
            id="musicspecialcontainer"
          >
            <div className="musicdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MusicNavbar;
