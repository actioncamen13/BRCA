import React from "react";
import "./ClubsNavbar.css";
import { Link } from "react-router-dom";

function ClubsNavbar() {
  return (
    <div className="clubsnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="clubsnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="clubsnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="clubsnavbar__text" id="clubsnavbar__rightmost">
            <div className="clubsrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="clubsnavbarcontainer">
        <div className="clubsnavbarbutton">☰</div>
        <div className="clubsnavbardropdown">
          <Link to="/" className="clubsnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="clubsnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="clubsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="clubsnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="clubsnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="clubsnavbardropdowncontent"
            id="clubsspecialcontainer"
          >
            <div className="clubsdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClubsNavbar;
