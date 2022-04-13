import React from "react";
import "./SacNavbar.css";
import { Link } from "react-router-dom";

function SacNavbar() {
  return (
    <div className="sacnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="sacnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="sacnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="sacnavbardropdowncontent">
            TEAMS
          </Link>
          <Link to="/clubs" className="sacnavbardropdowncontent">
            CLUBS
          </Link>
          <Link to="/recognitions" className="sacnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link
            to="/sacbooking"
            className="sacnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="sacnavbardropdowncontent"
            id="sacspecialcontainer"
          >
            <div className="sacdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SacNavbar;
