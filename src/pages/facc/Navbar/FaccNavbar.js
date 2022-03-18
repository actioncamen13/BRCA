import React from "react";
import "./FaccNavbar.css";
import { Link } from "react-router-dom";

function FaccNavbar() {
  return (
    <div className="faccnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="faccnavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="faccnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text" id="faccnavbar__rightmost">
            <div className="faccrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="faccnavbarcontainer">
        <div className="faccnavbarbutton">☰</div>
        <div className="faccnavbardropdown">
          <a href="/" className="faccnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="faccnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="faccnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="faccnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="faccnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="faccnavbardropdowncontent"
            id="faccspecialcontainer"
          >
            <div className="faccdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FaccNavbar;
