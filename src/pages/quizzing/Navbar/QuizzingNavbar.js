import React from "react";
import "./QuizzingNavbar.css";
import { Link } from "react-router-dom";

function QuizzingNavbar() {
  return (
    <div className="quizzingnavbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <Link
        to="/"
        className="quizzingnavbar__logo"
        style={{ textDecoration: "none" }}
      >
        {" "}
      </Link>
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
          <Link to="/" className="quizzingnavbardropdowncontent">
            HOME
          </Link>
          <Link to="/teams" className="quizzingnavbardropdowncontent">
            TEAMS
          </Link>
          <Link
            to="/clubs"
            className="quizzingnavbardropdowncontent"
            style={{ color: "#f76d6d" }}
          >
            CLUBS
          </Link>
          <Link to="/recognitions" className="quizzingnavbardropdowncontent">
            BRCA RECOGNITIONS
          </Link>
          <Link to="/sacbooking" className="quizzingnavbardropdowncontent">
            SAC BOOKINGS
          </Link>
          <Link
            to="/"
            className="quizzingnavbardropdowncontent"
            id="quizzingspecialcontainer"
          >
            <div className="quizzingdropdownrendezvous">RENDEZVOUS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizzingNavbar;
