/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleFacc.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../facc/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import FaccNavbar from "./Navbar/FaccNavbar";
import FaccFooter from "./Footer/FaccFooter";
// import Infocard from "./Infocard/Infocard";
// import DefaultPic from "./Infocard/Rectangle 103.png";

const Facc = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="faccpage">
      <div className="faccnavbar1">
        <FaccNavbar />
      </div>
      <div className="faccbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Fine Arts Club</h3>
            <p>
            FACC is the perfect platform for you to showcase your artistic capabilities and also learn a various new art-forms. With events like Oil Painting, Charcoal Painting, Mask Painting and workshops on artistic activities like Origami, there is a lot to fulfill your creative appetite. The club also organizes various events such as Street Painting, Graffiti, Face Painting etc during Rendezvous. The FAC junta is renowned for its untiring efforts, and is one of closest knit communities on campus.{" "}
            </p>
            <div class="social_icons">
              <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
              <a
                href=""
                className="instapfc fa fa-instagram"
                target="blank"
              ></a>
              <a href="" className="fa fa-youtube"></a>
            </div>
          </div>
          <Zoom
            className="slideshow-container "
            {...zoomOutProperties}
            style={{}}
          >
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Event Name3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image1}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Event Name2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image2}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Event Name1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image3}
                />
              </div>
            ))}
          </Zoom>
        </div>
        <div className="faccteam">
          <div className="faccteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="faccteamcontent"></div>
        </div>
      </div>
      <div className="faccfooter1">
        <FaccFooter />
      </div>
    </div>
  );
};

export default Facc;
