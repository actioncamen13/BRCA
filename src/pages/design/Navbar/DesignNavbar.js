import React from "react";
import "./DesignNavbar.css";
import { Link } from "react-router-dom";

function DesignNavbar() {
  return (
    <div className="designnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="designnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="designnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="designnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="designnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="designnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="designnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="designnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="designnavbar__text" id="designnavbar__rightmost">
            <div className="designrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="designnavbarcontainer">
        <div className="designnavbarbutton">☰</div>
        <div className="designnavbardropdown">
          <Link to="/" className="designnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="designnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="designnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="designnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="designnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="designnavbardropdowncontent"
            id="designspecialcontainer"
          >
            <div className="designdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesignNavbar;
