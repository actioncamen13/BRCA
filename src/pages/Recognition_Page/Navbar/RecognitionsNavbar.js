import React from "react";
import "./RecognitionsNavbar.css";
import { Link } from "react-router-dom";

function RecognitionsNavbar() {
  return (
    <div className="recognitionsnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="recognitionsnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="recognitionsnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="recognitionsnavbardropdowncontent">
            TEAMS
          </Link>
          <Link to="/clubs" className="recognitionsnavbardropdowncontent">
            CLUBS
          </Link>
          <Link
            to="/recognitions"
            className="recognitionsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="recognitionsnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="recognitionsnavbardropdowncontent"
            id="recognitionsspecialcontainer"
          >
            <div className="recognitionsdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecognitionsNavbar;
