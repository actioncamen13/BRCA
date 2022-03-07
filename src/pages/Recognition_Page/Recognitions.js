import React from "react";
import "../css/stylesRecognitions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/animate.css";
import RecognitionsNavbar from "./Navbar/RecognitionsNavbar";
import RecognitionsFooter from "./Footer/RecognitionsFooter";

function Recognitions() {
  return (
    <div className="mainSection">
      <RecognitionsNavbar />

      <h1 className=" heading text-center mb-2">BRCA RECOGNITIONS</h1>
      <div className=" animate__animated animate__fadeIn bgg text-center">
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s animate__animated animate__fadeIn ">2021-22</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s animate__animated animate__fadeIn ">2020-21</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s  animate__animated animate__fadeIn ">2019-20</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s  animate__animated animate__fadeIn ">2018-19</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn  animate__delay-1s animate__animated animate__fadeIn ">2017-18</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s  animate__animated animate__fadeIn ">2016-17</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn  animate__delay-1s animate__animated animate__fadeIn ">2015-16</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s animate__animated animate__fadeIn ">2014-15</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn animate__delay-1s  animate__animated animate__fadeIn ">2013-14</button>
        </a>
      </div>
      <RecognitionsFooter />
    </div>
  );
}

export default Recognitions;
