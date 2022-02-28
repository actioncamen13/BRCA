import React from "react";
import "./css/stylesRecognitions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar-Footer for Recognitions/Navbar/Navbar";
import Footer from "./Navbar-Footer for Recognitions/Footer/Footer";

function Recognitions() {
  return (
    <div className="mainSection">
      <Navbar />
      <h1 className=" heading text-center mb-2">BRCA RECOGNITIONS</h1>
      <div className="bgg text-center">
        <a href="/">
          <button className="btn btn-lg ybtn">2021-22</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2020-21</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2019-20</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2018-19</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2017-18</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2016-17</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2015-16</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2014-15</button>
        </a>
        <a href="/">
          <button className="btn btn-lg ybtn">2013-14</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Recognitions;
