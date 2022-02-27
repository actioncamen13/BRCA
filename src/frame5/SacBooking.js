import React from "react";
import "./css/style.css";
import bimg from "./images/pattern-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function SacBooking() {
  return (
    <div className="mainSac">
        <img src={bimg} alt="pattern" class="bgimg" />
    <h1 class="text-center">SAC BOOKING</h1>
    </div>
  );
}

export default SacBooking;
