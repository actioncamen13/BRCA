import React from "react";
import "./SecyFooter.css";

function SecyFooter() {
  return (
    <div className="secyfooter" style={{ position: "relative", top: "18vh" }}>
      <div className="secyfooter__logo"></div>
      <div className="secyfooter__text1">
        <h3>Contact us on</h3>
        <h3>enter email</h3>
      </div>
      <div className="secyfooter__text2">
        <h3>HOME</h3>
        <h3>TEAMS</h3>
        <h3>CLUBS</h3>
        <h3>BRCA RECOGNITIONS</h3>
        <h3>SAC BOOKINGS</h3>
        <h3>RENDEZVOUS</h3>
      </div>
      <div className="secyfooter__text3">
        <h3>Website created by</h3>
        <h3>LIST DEVELOPERS AND DESIGNERS</h3>
      </div>
    </div>
  );
}

export default SecyFooter;
