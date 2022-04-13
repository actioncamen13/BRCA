import React from "react";
import "./FacultyNavbar.css";
import { Link } from "react-router-dom";

function FacultyNavbar() {
  return (
    <div className="facultynavbar" style={{ position: "relative" }}>
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="facultynavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="facultynavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="facultynavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="facultynavbar__text" style={{ color: "#f76d6d" }}>
            TEAMS
          </div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="facultynavbar__text">CLUBS</div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="facultynavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="facultynavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="facultynavbar__text" id="facultynavbar__rightmost">
            <div className="facultyrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="facultynavbarcontainer">
        <div className="facultynavbarbutton">☰</div>
        <div className="facultynavbardropdown">
          <Link to="/" className="facultynavbardropdowncontent">
            HOME
          </Link>
          <Link
            to="/teams"
            className="facultynavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            TEAMS
          </Link>
          <Link to="/clubs" className="facultynavbardropdowncontent">
            CLUBS
          </Link>
          <Link to="/recognitions" className="facultynavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="facultynavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="facultynavbardropdowncontent"
            id="facultyspecialcontainer"
          >
            <div className="facultydropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FacultyNavbar;
