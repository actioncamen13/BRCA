/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleDebating.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../spicmacay/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import DebatingNavbar from "./Navbar/DebatingNavbar";
import DebatingFooter from "./Footer/DebatingFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Anurag from "./1.png";
import Adhiraj from "./2.png";
import Arush from "./3.png";
import Aryan from "./4.png";
import Himanshu from "./5.png";
import Prakhar from "./6.png";
import Rahul from "./7.png";
import Rishabh from "./8.png";
import Rishita from "./9.png";
import Sanat from "./10.png";
import Sara from "./11.png";
import Sarvagya from "./12.png";
import Umayr from "./13.png";
import Vibhor from "./14.png";

const Spicmacay = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="debatingpage">
      <div className="debatingnavbar1">
        <DebatingNavbar />
      </div>
      <div className="debatingbody">
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
        <div className="debatingteam">
          <div className="debatingteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="debatingteamcontent">
            <div className="debatingformat1">
              <div className="debatingformat1_1">
                <Infocard
                  image={Sarvagya}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat1_2">
                <Infocard
                  image={Rahul}
                  name="Rahul R. Shah"
                  position="Representative"
                />

                <Infocard
                  image={Sara}
                  name="Sara Zareen"
                  position="Representative"
                />
                <Infocard
                  image={Rishabh}
                  name="Rishabh Singh"
                  position="Representative"
                />
                <Infocard
                  image={Arush}
                  name="Arush Utkarsh"
                  position="Representative"
                />
                <Infocard
                  image={Adhiraj}
                  name="Adhiraj Goel"
                  position="Representative"
                />
                <Infocard
                  image={Sanat}
                  name="Sanat Vohra"
                  position="Representative"
                />
              </div>
              <div className="debatingformat1_3">
                <Infocard
                  image={Umayr}
                  name="Umayr Surti"
                  position="Representative"
                />
                <Infocard
                  image={Himanshu}
                  name="H.Wadhwa"
                  position="Representative"
                />
                <Infocard
                  image={Rishita}
                  name="Rishita Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Saple"
                  position="Representative"
                />
                <Infocard
                  image={Vibhor}
                  name="Vibhor Jain"
                  position="Representative"
                />
                <Infocard
                  image={Prakhar}
                  name="Prakhar Singhal"
                  position="Representative"
                />
                <Infocard
                  image={Anurag}
                  name="Anurag Yadav"
                  position="Representative"
                />
              </div>
            </div>
            <div className="debatingformat2">
              <div className="debatingformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Rahul R. Shah"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="Sara Zareen"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishabh Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Arush Utkarsh"
                  position="Representative"
                />
              </div>
              <div className="debatingformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Adhiraj Goel"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sanat Vohra"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Umayr Surti"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="H.Wadhwa"
                  position="Representative"
                />
              </div>
              <div className="debatingformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Rishita Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Saple"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vibhor Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prakhar Singhal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anurag Yadav"
                  position="Representative"
                />
              </div>
            </div>
            <div className="debatingformat3">
              <div className="debatingformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Rahul R. Shah"
                  position="Representative"
                />

                <Infocard
                  image={DefaultPic}
                  name="Sara Zareen"
                  position="Representative"
                />
              </div>
              <div className="debatingformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Rishabh Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Arush Utkarsh"
                  position="Representative"
                />
              </div>
              <div className="debatingformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Adhiraj Goel"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sanat Vohra"
                  position="Representative"
                />
              </div>
              <div className="debatingformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Umayr Surti"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="H.Wadhwa"
                  position="Representative"
                />
              </div>
              <div className="debatingformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Rishita Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Saple"
                  position="Representative"
                />
              </div>
              <div className="debatingformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Vibhor Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prakhar Singhal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anurag Yadav"
                  position="Representative"
                />
              </div>
            </div>
            <div className="debatingformat4">
              <div className="debatingformat4_1">
                <Infocard
                  image={DefaultPic}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat4_2">
                <Infocard
                  image={DefaultPic}
                  name="Rahul R. Shah"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_3">
                <Infocard
                  image={DefaultPic}
                  name="Sara Zareen"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishabh Singh"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_4">
                <Infocard
                  image={DefaultPic}
                  name="Arush Utkarsh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Adhiraj Goel"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_5">
                <Infocard
                  image={DefaultPic}
                  name="Sanat Vohra"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Umayr Surti"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_6">
                <Infocard
                  image={DefaultPic}
                  name="H.Wadhwa"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rishita Agrawal"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_7">
                <Infocard
                  image={DefaultPic}
                  name="Aryan Saple"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vibhor Jain"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_8">
                <Infocard
                  image={DefaultPic}
                  name="Prakhar Singhal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anurag Yadav"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="debatingfooter1">
        <DebatingFooter />
      </div>
    </div>
  );
};

export default Spicmacay;
