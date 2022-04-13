import React from "react";
import "./PFCNavbar.css";
import { Link } from "react-router-dom";

function PFCNavbar() {
  return (
    <div className="pfcnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="pfcnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="pfcnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="pfcnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="pfcnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="pfcnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="pfcnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="pfcnavbardropdowncontent"
            id="pfcspecialcontainer"
          >
            <div className="pfcdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PFCNavbar;
