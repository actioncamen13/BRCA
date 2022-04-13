import React from "react";
import "./DebatingNavbar.css";
import { Link } from "react-router-dom";

function DebatingNavbar() {
  return (
    <div className="debatingnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="debatingnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="debatingnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="debatingnavbar__text" id="debatingnavbar__rightmost">
            <div className="debatingrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="debatingnavbarcontainer">
        <div className="debatingnavbarbutton">☰</div>
        <div className="debatingnavbardropdown">
          <Link to="/" className="debatingnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="debatingnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="debatingnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="debatingnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="debatingnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="debatingnavbardropdowncontent"
            id="debatingspecialcontainer"
          >
            <div className="debatingdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DebatingNavbar;
