import React from "react";
import "./QuizzingNavbar.css";
import { Link } from "react-router-dom";

function QuizzingNavbar() {
  return (
    <div className="quizzingnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <a
        className="quizzingnavbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </a>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="quizzingnavbar__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="quizzingnavbar__text">HOME</div>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <div className="quizzingnavbar__text">TEAMS</div>
        </Link>
        <Link to="/clubs" style={{ textDecoration: "none" }}>
          <div className="quizzingnavbar__text" style={{ color: "#f76d6d" }}>
            CLUBS
          </div>
        </Link>
        <Link to="/recognitions" style={{ textDecoration: "none" }}>
          <div className="quizzingnavbar__text">BRCA RECOGNITIONS</div>
        </Link>
        <Link to="/sacbooking" style={{ textDecoration: "none" }}>
          <div className="quizzingnavbar__text">SAC BOOKINGS</div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="quizzingnavbar__text" id="quizzingnavbar__rightmost">
            <div className="quizzingrendezvous__inner">RENDEZVOUS</div>
          </div>
        </Link>
      </div>
      <div className="quizzingnavbarcontainer">
        <div className="quizzingnavbarbutton">☰</div>
        <div className="quizzingnavbardropdown">
          <a href="/" className="quizzingnavbardropdowncontent">
            HOME
          </a>
          <a href="/teams" className="quizzingnavbardropdowncontent">
            TEAMS
          </a>
          <a
            href="/clubs"
            className="quizzingnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </a>
          <a href="/recognitions" className="quizzingnavbardropdowncontent">
            BRCA RECOGNITIONS
          </a>
          <a href="/sacbooking" className="quizzingnavbardropdowncontent">
            SAC BOOKINGS
          </a>
          <a
            href="/"
            className="quizzingnavbardropdowncontent"
            id="quizzingspecialcontainer"
          >
            <div className="quizzingdropdownrendezvous">RENDEZVOUS</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuizzingNavbar;
