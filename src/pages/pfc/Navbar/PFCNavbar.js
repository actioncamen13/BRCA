import React from "react";
import "./PFCNavbar.css";
import { Link } from "react-router-dom";

function PFCNavbar() {
  return (
    <div className="pfcnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="pfcnavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="pfcnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="pfcnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="pfcnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="pfcnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="pfcnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="pfcnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="pfcnavbar__text" id="pfcnavbar__rightmost">
            <div className="pfcrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="pfcnavbarcontainer">
        <div className="pfcnavbarbutton">☰</div>
        <div className="pfcnavbardropdown">
          <a href="/" className="pfcnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="pfcnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="pfcnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="pfcnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="pfcnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="pfcnavbardropdowncontent"
            id="pfcspecialcontainer"
          >
            <div className="pfcdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PFCNavbar;
