/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { Zoom } from "react-slideshow-image";
import "./css/styleMusic.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../music/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import MusicNavbar from "./Navbar/MusicNavbar";
import MusicFooter from "./Footer/MusicFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Aaryan from "./1.png";
import Arjun from "./2.png";
import Vatsal from "./3.png";
import Vaibhav from "./4.png";
import Tanmay from "./5.png";
import Sibasish from "./6.png";
import Rishika from "./7.png";
import Samyak from "./8.png";
import Pawan from "./9.png";
import Parth from "./10.png";
import Megha from "./11.png";
import Eshan from "./12.png";
import Yashas from "./13.png";
import Jash from "./14.png";
import Divyansh from "./15.png";
import Anirudh from "./16.png";
import Vishal from "./17.png";

const Music = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="musicpage">
      <div className="musicnavbar1">
        <MusicNavbar />
      </div>
      <div className="musicbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Music Club</h3>
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
        <div className="musicteam">
          <div className="musicteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="musicteamcontent">
            <div className="musicformat1">
              <div className="musicformat1_1">
                <Infocard
                  image={Vaibhav}
                  name="Vaibhav Verma"
                  position="Secretary"
                />
              </div>
              <div className="musicformat1_2">
                <Infocard
                  image={Vishal}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                />
                <Infocard
                  image={Divyansh}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                />
                <Infocard
                  image={Anirudh}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                />
                <Infocard
                  image={Pawan}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                />
              </div>
              <div className="musicformat1_3">
                <Infocard
                  image={Parth}
                  name="Parth Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={Vatsal}
                  name="Vatsal Mathur"
                  position="Representative"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Goyal"
                  position="Representative"
                />
                <Infocard
                  image={Megha}
                  name="M.Dharawat"
                  position="Representative"
                />
                <Infocard
                  image={Yashas}
                  name="Yashas Kedia"
                  position="Representative"
                />
                <Infocard
                  image={Rishika}
                  name="Rishika Verma"
                  position="Representative"
                />
              </div>
              <div className="musicformat1_4">
                <Infocard
                  image={Samyak}
                  name="Samyak Gothi"
                  position="Representative"
                />
                <Infocard
                  image={Sibasish}
                  name="Sibasish Rout"
                  position="Representative"
                />
                <Infocard
                  image={Eshan}
                  name="Eshan Jain"
                  position="Representative"
                />
                <Infocard
                  image={Jash}
                  name="Jash Baua"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="D.Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Juneja"
                  position="Representative"
                />
                <Infocard
                  image={Arjun}
                  name="Arjun Aggarwal"
                  position="Representative"
                />
              </div>
            </div>
            <div className="musicformat2">
              <div className="musicformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Verma"
                  position="Secretary"
                />
              </div>
              <div className="musicformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                />
                <Infocard
                  image={DefaultPic}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                />
                <Infocard
                  image={DefaultPic}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                />
                <Infocard
                  image={DefaultPic}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                />
              </div>
              <div className="musicformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Parth Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vatsal Mathur"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Goyal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="M.Dharawat"
                  position="Representative"
                />
              </div>
              <div className="musicformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Yashas Kedia"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishika Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Samyak Gothi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sibasish Rout"
                  position="Representative"
                />
              </div>
              <div className="musicformat2_5">
                <Infocard
                  image={DefaultPic}
                  name="Eshan Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Jash Baua"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="D.Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanmay Juneja"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Arjun Aggarwal"
                  position="Representative"
                />
              </div>
            </div>
            <div className="musicformat3">
              <div className="musicformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Verma"
                  position="Secretary"
                />
              </div>
              <div className="musicformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                />
                <Infocard
                  image={DefaultPic}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                />
              </div>
              <div className="musicformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                />
                <Infocard
                  image={DefaultPic}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                />
              </div>
              <div className="musicformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Parth Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vatsal Mathur"
                  position="Representative"
                />
              </div>
              <div className="musicformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Goyal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="M.Dharawat"
                  position="Representative"
                />
              </div>
              <div className="musicformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Yashas Kedia"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishika Verma"
                  position="Representative"
                />
              </div>
              <div className="musicformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Samyak Gothi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sibasish Rout"
                  position="Representative"
                />
              </div>
              <div className="musicformat3_8">
                <Infocard
                  image={DefaultPic}
                  name="Eshan Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Jash Baua"
                  position="Representative"
                />
              </div>
              <div className="musicformat3_9">
                <Infocard
                  image={DefaultPic}
                  name="D.Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanmay Juneja"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Arjun Aggarwal"
                  position="Representative"
                />
              </div>
            </div>
            <div className="musicformat4">
              <div className="musicformat4_1">
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Verma"
                  position="Secretary"
                />
              </div>
              <div className="musicformat4_2">
                <Infocard
                  image={DefaultPic}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                />
              </div>
              <div className="musicformat4_3">
                <Infocard
                  image={DefaultPic}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                />
              </div>
              <div className="musicformat4_4">
                <Infocard
                  image={DefaultPic}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                />
              </div>
              <div className="musicformat4_5">
                <Infocard
                  image={DefaultPic}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                />
              </div>
              <div className="musicformat4_6">
                <Infocard
                  image={DefaultPic}
                  name="Parth Jaiswal"
                  position="Representative"
                />
              </div>
              <div className="musicformat4_7">
                <Infocard
                  image={DefaultPic}
                  name="Vatsal Mathur"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aaryan Goyal"
                  position="Representative"
                />
              </div>
              <div className="musicformat4_8">
                <Infocard
                  image={DefaultPic}
                  name="M.Dharawat"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Yashas Kedia"
                  position="Representative"
                />
              </div>
              <div className="musicformat4_9">
                <Infocard
                  image={DefaultPic}
                  name="Rishika Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Samyak Gothi"
                  position="Representative"
                />
              </div>
              <div className="musicformat4_10">
                <Infocard
                  image={DefaultPic}
                  name="Sibasish Rout"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Eshan Jain"
                  position="Representative"
                />
              </div>
              <div className="musicformat4_11">
                <Infocard
                  image={DefaultPic}
                  name="Jash Baua"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="D.Agarwal"
                  position="Representative"
                />
              </div>
              <div className="musicformat4_12">
                <Infocard
                  image={DefaultPic}
                  name="Tanmay Juneja"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Arjun Aggarwal"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="musicfooter1">
        <MusicFooter />
      </div>
    </div>
  );
};

export default Music;
