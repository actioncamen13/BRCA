import React from "react";
import "./DramaticsNavbar.css";
import { Link } from "react-router-dom";

function DramaticsNavbar() {
  return (
    <div className="dramaticsnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="dramaticsnavbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="dramaticsnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="dramaticsnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="dramaticsnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="dramaticsnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="dramaticsnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="dramaticsnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="dramaticsnavbar__text"
            id="dramaticsnavbar__rightmost"
          >
            <div className="dramaticsrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="dramaticsnavbarcontainer">
        <div className="dramaticsnavbarbutton">☰</div>
        <div className="dramaticsnavbardropdown">
          <a href="/" className="dramaticsnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="dramaticsnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="dramaticsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="dramaticsnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="dramaticsnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="dramaticsnavbardropdowncontent"
            id="dramaticsspecialcontainer"
          >
            <div className="dramaticsdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DramaticsNavbar;
