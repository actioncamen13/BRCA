import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={BRCA_Logo} alt="BRCA Logo" /> */}
      <div className="navbar__logo"></div>
      {/* <img src={BRCA_Logo} className="logo__image" alt="BRCA Logo" /> */}
      <div className="navbar__right">
        <div className="navbar__text">HOME</div>
        <div className="navbar__text">TEAMS</div>
        <div className="navbar__text">CLUBS</div>
        <div className="navbar__text">BRCA RECOGNITIONS</div>
        <div className="navbar__text">SAC BOOKINGS</div>
        <div className="navbar__text" id="navbar__rightmost">
          <div className="rendezvous__inner">RENDEZVOUS</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
