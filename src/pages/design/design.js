/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import ReactDOM from "react-dom";
import { Zoom } from "react-slideshow-image";
import "./css/styleDesign.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../dance/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import DesignNavbar from "./Navbar/DesignNavbar";
import DesignFooter from "./Footer/DesignFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";

const Design = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="designpage">
      <div className="designnavbar1">
        <DesignNavbar />
      </div>
      <div className="designbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Design Club</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea{" "}
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
        <div className="designteam">
          <div className="designteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="designteamcontent">
            <div className="designformat1">
              <div className="designformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Atharva Agarwal"
                  position="Secretary"
                />
              </div>
              <div className="designformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="Sahil Kumar Raj"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Devansh"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="A.Choudhary"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Bhargava"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Mihir Okte"
                  position="Director"
                />
              </div>
              <div className="designformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Nishant Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Paras Garg"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanya Goyal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Manan Katiyar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Utkarsh Goyal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kunal Bairwa"
                  position="Representative"
                />
              </div>
              <div className="designformat1_4">
                <Infocard
                  image={DefaultPic}
                  name="Aditya Narayan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kushagra Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Saha"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="M.Panwar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Abhishek Pandey"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Pratyush Saini"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Bhardwaj"
                  position="Representative"
                />
              </div>
            </div>
            <div className="designformat2">
              <div className="designformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Atharva Agarwal"
                  position="Secretary"
                />
              </div>
              <div className="designformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Sahil Kumar Raj"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Devansh"
                  position="Director"
                />
              </div>
              <div className="designformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="A.Choudhary"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Bhargava"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Mihir Okte"
                  position="Director"
                />
              </div>
              <div className="designformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Nishant Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Paras Garg"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanya Goyal"
                  position="Representative"
                />
              </div>
              <div className="designformat2_5">
                <Infocard
                  image={DefaultPic}
                  name="Manan Katiyar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Utkarsh Goyal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kunal Bairwa"
                  position="Representative"
                />
              </div>
              <div className="designformat2_6">
                <Infocard
                  image={DefaultPic}
                  name="Aditya Narayan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kushagra Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Saha"
                  position="Representative"
                />
              </div>
              <div className="designformat2_7">
                <Infocard
                  image={DefaultPic}
                  name="M.Panwar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Abhishek Pandey"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Pratyush Saini"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Bhardwaj"
                  position="Representative"
                />
              </div>
            </div>
            <div className="designformat3">
              <div className="designformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Atharva Agarwal"
                  position="Secretary"
                />
              </div>
              <div className="designformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Sahil Kumar Raj"
                  position="Director"
                />
              </div>
              <div className="designformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Devansh"
                  position="Director"
                />
              </div>
              <div className="designformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="A.Choudhary"
                  position="Director"
                />
              </div>
              <div className="designformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="S.Bhargava"
                  position="Director"
                />
              </div>
              <div className="designformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Mihir Okte"
                  position="Director"
                />
              </div>
              <div className="designformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Nishant Kumar"
                  position="Representative"
                />
              </div>
              <div className="designformat3_8">
                <Infocard
                  image={DefaultPic}
                  name="Paras Garg"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanya Goyal"
                  position="Representative"
                />
              </div>
              <div className="designformat3_9">
                <Infocard
                  image={DefaultPic}
                  name="Manan Katiyar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Utkarsh Goyal"
                  position="Representative"
                />
              </div>
              <div className="designformat3_10">
                <Infocard
                  image={DefaultPic}
                  name="Kunal Bairwa"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aditya Narayan"
                  position="Representative"
                />
              </div>
              <div className="designformat3_11">
                <Infocard
                  image={DefaultPic}
                  name="Kushagra Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Saha"
                  position="Representative"
                />
              </div>
              <div className="designformat3_12">
                <Infocard
                  image={DefaultPic}
                  name="M.Panwar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Abhishek Pandey"
                  position="Representative"
                />
              </div>
              <div className="designformat3_13">
                <Infocard
                  image={DefaultPic}
                  name="Pratyush Saini"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Bhardwaj"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="designfooter1">
        <DesignFooter />
      </div>
    </div>
  );
};

export default Design;
