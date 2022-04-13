import React from "react";
import "./FaccNavbar.css";
import { Link } from "react-router-dom";

function FaccNavbar() {
  return (
    <div className="faccnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="faccnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="faccnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="faccnavbar__text" id="faccnavbar__rightmost">
            <div className="faccrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="faccnavbarcontainer">
        <div className="faccnavbarbutton">☰</div>
        <div className="faccnavbardropdown">
          <Link to="/" className="faccnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="faccnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="faccnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="faccnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="faccnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="faccnavbardropdowncontent"
            id="faccspecialcontainer"
          >
            <div className="faccdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FaccNavbar;
