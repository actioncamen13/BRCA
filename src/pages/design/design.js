/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import ReactDOM from 'react-dom';
import { Zoom } from 'react-slideshow-image';
import "./css/styleDesign.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../dance/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";

const Design = () => {
  const images = [
    {image1},

  ];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4
  }
  return (
    <div>
    <div className="designbody">
      <div className="containerpfc animate__animated animate__fadeIn">
        <div className="section1">
          <img src={imagee} alt="logo" />
          <h3>Design Club</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{" "}
          </p>
          <div class="social_icons">
            <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
            <a href="" className="instapfc fa fa-instagram" target="blank"></a>
            <a href="" className="fa fa-youtube"></a>
          </div>
        </div>
      <Zoom className="slideshow-container " {...zoomOutProperties} style={{}}>

        {images.map((each, index) => (
           
          <div key={index} className="carousel">
           <div className="eventname">
               <h3>Event Name3</h3>
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor.
               </p>
           </div>
            <img className="imgs" style={{ objectFit: "cover"}} src={image1} />
          </div>
        ))}
        
        {images.map((each, index) => (
           
           <div key={index}  className="carousel">
            <div className="eventname">
                <h3>Event Name2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
            </div>
             <img className="imgs" style={{ objectFit: "cover"}} src={image2} />
           </div>
         ))}
         
        {images.map((each, index) => (
           
           <div key={index}  className="carousel">
            <div className="eventname">
                <h3>Event Name1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
            </div>
             <img className="imgs" style={{ objectFit: "cover"}} src={image3} />
           </div>
         ))}
      </Zoom>
    </div>
    </div>
    </div>
  )
}

export default Design;
