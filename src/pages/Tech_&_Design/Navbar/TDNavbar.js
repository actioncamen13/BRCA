import React from "react";
import "./TDNavbar.css";
import { Link } from "react-router-dom";

function TDNavbar() {
  return (
    <div className="tdnavbar" style={{ position: "relative" }}>
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="tdnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="tdnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="tdnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="tdnavbar__text" style={{ color: "#f76d6d" }}>
            TEAMS
          </div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="tdnavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="tdnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="tdnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="tdnavbar__text" id="tdnavbar__rightmost">
            <div className="tdrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="tdnavbarcontainer">
        <div className="tdnavbarbutton">☰</div>
        <div className="tdnavbardropdown">
          <Link to="/" className="tdnavbardropdowncontent">
            HOME
          </Link>
          <Link
            to="/teams"
            className="tdnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            TEAMS
          </Link>
          <Link to="/clubs" className="tdnavbardropdowncontent">
            CLUBS
          </Link>
          <Link to="/recognitions" className="tdnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="tdynavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="tdnavbardropdowncontent"
            id="tdspecialcontainer"
          >
            <div className="tddropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TDNavbar;
