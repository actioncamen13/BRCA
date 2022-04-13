import React from "react";
import "./DramaticsNavbar.css";
import { Link } from "react-router-dom";

function DramaticsNavbar() {
  return (
    <div className="dramaticsnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="dramaticsnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="dramaticsnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="dramaticsnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="dramaticsnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="dramaticsnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="dramaticsnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="dramaticsnavbardropdowncontent"
            id="dramaticsspecialcontainer"
          >
            <div className="dramaticsdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DramaticsNavbar;
