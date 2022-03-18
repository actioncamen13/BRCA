/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleQuizzing.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../quizzing/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import QuizzingNavbar from "./Navbar/QuizzingNavbar";
import QuizzingFooter from "./Footer/QuizzingFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Afreen from "./1.png";
import Aaghaz from "./2.png";
import Akshit from "./3.png";
import Aniruddha from "./4.png";
import Anish from "./5.png";
import Aryan from "./6.png";
import Gautam from "./7.png";
import Prasun from "./8.png";
import Priyansita from "./9.png";
import Rehan from "./10.png";
import Soumil from "./11.png";
import Srijan from "./12.png";
import Utkarsh from "./13.png";
import Varun from "./14.png";

const Quizzing = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="quizzingpage">
      <div className="quizzingnavbar1">
        <QuizzingNavbar />
      </div>
      <div className="quizzingbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Quizzing Club</h3>
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
        <div className="quizzingteam">
          <div className="quizzingteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="quizzingteamcontent">
            <div className="quizzingformat1">
              <div className="quizzingformat1_1">
                <Infocard
                  image={Rehan}
                  name="Rehan Bhatia"
                  position="Secretary"
                />
              </div>
              <div className="quizzingformat1_2">
                <Infocard
                  image={Akshit}
                  name="Akshit Bhardwaj"
                  position="Representative"
                />

                <Infocard
                  image={Varun}
                  name="V.Vaidyanathan"
                  position="Representative"
                />
                <Infocard
                  image={Srijan}
                  name="Srijan Gupta"
                  position="Representative"
                />
                <Infocard
                  image={Utkarsh}
                  name="Utkarsh Dogra"
                  position="Representative"
                />
                <Infocard
                  image={Afreen}
                  name="Afreen Haider"
                  position="Representative"
                />
                <Infocard
                  image={Priyansita}
                  name="P.Agarwalla"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat1_3">
                <Infocard
                  image={Aaghaz}
                  name="Aaghaz Mahajan"
                  position="Representative"
                />
                <Infocard
                  image={Aniruddha}
                  name="Aniruddha Deb"
                  position="Representative"
                />
                <Infocard
                  image={Soumil}
                  name="Soumil Aggarwal"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Sinha"
                  position="Representative"
                />
                <Infocard
                  image={Anish}
                  name="Anish Roy"
                  position="Representative"
                />
                <Infocard
                  image={Prasun}
                  name="Prasun Nayak"
                  position="Representative"
                />
                <Infocard
                  image={Gautam}
                  name="Gautam Jha"
                  position="Representative"
                />
              </div>
            </div>
            <div className="quizzingformat2">
              <div className="quizzingformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Rehan Bhatia"
                  position="Secretary"
                />
              </div>
              <div className="quizzingformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Akshit Bhardwaj"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="V.Vaidyanathan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Srijan Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Utkarsh Dogra"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Afreen Haider"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="P.Agarwalla"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaghaz Mahajan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aniruddha Deb"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Soumil Aggarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Sinha"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anish Roy"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prasun Nayak"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Gautam Jha"
                  position="Representative"
                />
              </div>
            </div>
            <div className="quizzingformat3">
              <div className="quizzingformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Rehan Bhatia"
                  position="Secretary"
                />
              </div>
              <div className="quizzingformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Akshit Bhardwaj"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="V.Vaidyanathan"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Srijan Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Utkarsh Dogra"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Afreen Haider"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="P.Agarwalla"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Aaghaz Mahajan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aniruddha Deb"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Soumil Aggarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Sinha"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Anish Roy"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prasun Nayak"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Gautam Jha"
                  position="Representative"
                />
              </div>
            </div>
            <div className="quizzingformat4">
              <div className="quizzingformat4_1">
                <Infocard
                  image={DefaultPic}
                  name="Rehan Bhatia"
                  position="Secretary"
                />
              </div>
              <div className="quizzingformat4_2">
                <Infocard
                  image={DefaultPic}
                  name="Akshit Bhardwaj"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat4_3">
                <Infocard
                  image={DefaultPic}
                  name="V.Vaidyanathan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Srijan Gupta"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat4_4">
                <Infocard
                  image={DefaultPic}
                  name="Utkarsh Dogra"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Afreen Haider"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat4_5">
                <Infocard
                  image={DefaultPic}
                  name="P.Agarwalla"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaghaz Mahajan"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat4_6">
                <Infocard
                  image={DefaultPic}
                  name="Aniruddha Deb"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Soumil Aggarwal"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat4_7">
                <Infocard
                  image={DefaultPic}
                  name="Aryan Sinha"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anish Roy"
                  position="Representative"
                />
              </div>
              <div className="quizzingformat4_8">
                <Infocard
                  image={DefaultPic}
                  name="Prasun Nayak"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Gautam Jha"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quizzingfooter1">
        <QuizzingFooter />
      </div>
    </div>
  );
};

export default Quizzing;
