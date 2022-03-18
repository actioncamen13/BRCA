import React from "react";
import "./RecognitionsNavbar.css";
import { Link } from "react-router-dom";

function RecognitionsNavbar() {
  return (
    <div className="recognitionsnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="recognitionsnavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="recognitionsnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="recognitionsnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="recognitionsnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="recognitionsnavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div
            className="recognitionsnavbar__text"
            style={{ color: "#f76d6d" }}
          >
            BRCA RECOGNITIONS
          </div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="recognitionsnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="recognitionsnavbar__text"
            id="recognitionsnavbar__rightmost"
          >
            <div className="recognitionsrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="recognitionsnavbarcontainer">
        <div className="recognitionsnavbarbutton">☰</div>
        <div className="recognitionsnavbardropdown">
          <a href="/" className="recognitionsnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="recognitionsnavbardropdowncontent">
            TEAMS
          </a>
          <a href="/clubs" className="recognitionsnavbardropdowncontent">
            CLUBS
          </a>
          <a
            href="/recognitions"
            className="recognitionsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="recognitionsnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="recognitionsnavbardropdowncontent"
            id="recognitionsspecialcontainer"
          >
            <div className="recognitionsdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecognitionsNavbar;
