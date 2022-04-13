import React from "react";
import "./SpicmacayNavbar.css";
import { Link } from "react-router-dom";

function SpicmacayNavbar() {
  return (
    <div className="spicmacaynavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="spicmacaynavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="spicmacaynavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="spicmacaynavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="spicmacaynavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="spicmacaynavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="spicmacaynavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="spicmacaynavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="spicmacaynavbar__text"
            id="spicmacaynavbar__rightmost"
          >
            <div className="spicmacayrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="spicmacaynavbarcontainer">
        <div className="spicmacaynavbarbutton">☰</div>
        <div className="spicmacaynavbardropdown">
          <Link to="/" className="spicmacaynavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="spicmacaynavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="spicmacaynavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="spicmacaynavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="spicmacaynavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="spicmacaynavbardropdowncontent"
            id="spicmacayspecialcontainer"
          >
            <div className="spicmacaydropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpicmacayNavbar;
