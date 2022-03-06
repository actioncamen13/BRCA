import React from "react";
import "./SecyNavbar.css";
import { Link } from "react-router-dom";

function SecyNavbar() {
  return (
    <div className="secynavbar" style={{ position: "relative" }}>
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="secynavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="secynavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="secynavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="secynavbar__text" style={{ color: "#f76d6d" }}>
            TEAMS
          </div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="secynavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="secynavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="secynavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="secynavbar__text" id="secynavbar__rightmost">
            <div className="secyrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="secynavbarcontainer">
        <div className="secynavbarbutton">☰</div>
        <div className="secynavbardropdown">
          <a href="/" className="secynavbardropdowncontent">
            HOME
          </a>
          <a
            href="/teams"
            className="secynavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            TEAMS
          </a>
          <a href="/clubs" className="secynavbardropdowncontent">
            CLUBS
          </a>
          <a href="/recognitions" className="secynavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sac" className="secynavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="secynavbardropdowncontent"
            id="secyspecialcontainer"
          >
            <div className="secydropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecyNavbar;
