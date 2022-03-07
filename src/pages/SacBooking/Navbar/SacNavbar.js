import React from "react";
import "./SacNavbar.css";
import { Link } from "react-router-dom";

function SacNavbar() {
  return (
    <div className="sacnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="sacnavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="sacnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="sacnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="sacnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="sacnavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="sacnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="sacnavbar__text" style={{ color: "#f76d6d" }}>
            SAC BOOKINGS
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="sacnavbar__text" id="sacnavbar__rightmost">
            <div className="sacrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="sacnavbarcontainer">
        <div className="sacnavbarbutton">☰</div>
        <div className="sacnavbardropdown">
          <a href="/" className="sacnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="sacnavbardropdowncontent">
            TEAMS
          </a>
          <a href="/clubs" className="sacnavbardropdowncontent">
            CLUBS
          </a>
          <a href="/recognitions" className="sacnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a
            href="/sacbooking"
            className="sacnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="sacnavbardropdowncontent"
            id="sacspecialcontainer"
          >
            <div className="sacdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SacNavbar;
