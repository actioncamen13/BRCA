/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleSpicmacay.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../spicmacay/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import SpicmacayNavbar from "./Navbar/SpicmacayNavbar";
import SpicmacayFooter from "./Footer/SpicmacayFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";

const Spicmacay = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="spicmacaypage">
      <div className="spicmacaynavbar1">
        <SpicmacayNavbar />
      </div>
      <div className="spicmacaybody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Spicmacay Club</h3>
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
        <div className="spicmacayteam">
          <div className="spicmacayteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="spicmacayteamcontent">
            <div className="spicmacayformat1">
              <div className="spicmacayformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="Rishu Raj"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="Aditya Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anshum"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Rishav Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Suhani Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Harsh Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tushar Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
            <div className="spicmacayformat2">
              <div className="spicmacayformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Rishu Raj"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="Aditya Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anshum"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishav Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Suhani Agrawal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Harsh Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tushar Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
            <div className="spicmacayformat3">
              <div className="spicmacayformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Rishu Raj"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="Aditya Verma"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anshum"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Rishav Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Suhani Agrawal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Harsh Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tushar Agrawal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
            <div className="spicmacayformat4">
              <div className="spicmacayformat4_1">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat4_2">
                <Infocard
                  image={DefaultPic}
                  name="Rishu Raj"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_3">
                <Infocard
                  image={DefaultPic}
                  name="Aditya Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_4">
                <Infocard
                  image={DefaultPic}
                  name="Anshum"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_5">
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishav Kumar"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_6">
                <Infocard
                  image={DefaultPic}
                  name="Suhani Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Harsh Kumar"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_7">
                <Infocard
                  image={DefaultPic}
                  name="Tushar Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_8">
                <Infocard
                  image={DefaultPic}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spicmacayfooter1">
        <SpicmacayFooter />
      </div>
    </div>
  );
};

export default Spicmacay;
