/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleHindisamiti.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../spicmacay/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import HindisamitiNavbar from "./Navbar/HindisamitiNavbar";
import HindisamitiFooter from "./Footer/HindisamitiFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Yashwant from './1.png'
import Yash from './2.png'
import Tanmay from './3.png'
import Sanskar from './4.png'
import Pragyansh from './5.png'
import Richa from './6.png'
import Prakash from './7.png'
import Daksh from './8.png'
import Gyanendra from './9.png'
import Adarsh from './10.png'
import Ansh from './11.png'
import Abhinav from './12.png'
import Aayushi from './13.png'

const Spicmacay = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="hindisamitipage">
      <div className="hindisamitinavbar1">
        <HindisamitiNavbar />
      </div>
      <div className="hindisamitibody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>HindiSamiti Club</h3>
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
                  <h3> Hindi and Urdu Poetry </h3>
                  <p>
               Regular workshops, poetry sammilans, competitions, talks and discussions to enhance the culture of poetry in IIT Delhi.


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
                  <h3>Hindi Quizzing </h3>
                  <p>
                  A variety of year-round quizzes are conducted covering vast themes, such as Word Games, Indian cinema, mythology, culture and heritage, etc.

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
                  <h3> Hindi Debating </h3>
                  <p>
                 A large number of debates, JAM and standup workshops and tournaments.
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
        <div className="hindisamititeam">
          <div className="hindisamititeamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="hindisamititeamcontent">
            <div className="hindisamitiformat1">
              <div className="hindisamitiformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Pranit Rastogi"
                  position="Secretary"
                />
              </div>
              <div className="hindisamitiformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="J.K.Yadav"
                  position="Literary Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Priyanka Beniwal"
                  position="Design Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="A.Rishikesh"
                  position="Poetry Director"
                />
              </div>
              <div className="hindisamitiformat1_3">
                <Infocard
                  image={Aayushi}
                  name="Aayushi Agrawal"
                  position="Representative"
                />

                <Infocard
                  image={Abhinav}
                  name="A.Barnawal"
                  position="Representative"
                />
                <Infocard
                  image={Adarsh}
                  name="Adarsh Anand"
                  position="Representative"
                />
                <Infocard
                  image={Ansh}
                  name="Ansh Goel"
                  position="Representative"
                />
                <Infocard
                  image={Daksh}
                  name="D.Khandelwal"
                  position="Representative"
                />
                <Infocard
                  image={Gyanendra}
                  name="G.Kumar"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat1_4">
                <Infocard
                  image={Prakash}
                  name="Prakash Tiwari"
                  position="Representative"
                />
                <Infocard
                  image={Richa}
                  name="Richa Yadav"
                  position="Representative"
                />
                <Infocard
                  image={Sanskar}
                  name="Sanskar Soni"
                  position="Representative"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Goyal"
                  position="Representative"
                />
                <Infocard
                  image={Yash}
                  name="Yash Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Yashwant}
                  name="Y.S.Kaurav"
                  position="Representative"
                />
                <Infocard
                  image={Pragyansh}
                  name="P.Priyadarshi"
                  position="Representative"
                />
              </div>
            </div>
            <div className="hindisamitiformat2">
              <div className="hindisamitiformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Pranit Rastogi"
                  position="Secretary"
                />
              </div>
              <div className="hindisamitiformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="J.K.Yadav"
                  position="Literary Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Priyanka Beniwal"
                  position="Design Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="A.Rishikesh"
                  position="Poetry Director"
                />
              </div>
              <div className="hindisamitiformat2_3">
                <Infocard
                  image={Aayushi}
                  name="Aayushi Agrawal"
                  position="Representative"
                />

                <Infocard
                  image={Abhinav}
                  name="A.Barnawal"
                  position="Representative"
                />
                <Infocard
                  image={Adarsh}
                  name="Adarsh Anand"
                  position="Representative"
                />
                <Infocard
                  image={Ansh}
                  name="Ansh Goel"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat2_4">
                <Infocard
                  image={Daksh}
                  name="D.Khandelwal"
                  position="Representative"
                />
                <Infocard
                  image={Gyanendra}
                  name="G.Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Prakash}
                  name="Prakash Tiwari"
                  position="Representative"
                />
                <Infocard
                  image={Richa}
                  name="Richa Yadav"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat2_5">
                <Infocard
                  image={Sanskar}
                  name="Sanskar Soni"
                  position="Representative"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Goyal"
                  position="Representative"
                />
                <Infocard
                  image={Yash}
                  name="Yash Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Yashwant}
                  name="Y.S.Kaurav"
                  position="Representative"
                />
                <Infocard
                  image={Pragyansh}
                  name="P.Priyadarshi"
                  position="Representative"
                />
              </div>
            </div>
            <div className="hindisamitiformat3">
              <div className="hindisamitiformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Pranit Rastogi"
                  position="Secretary"
                />
              </div>
              <div className="hindisamitiformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="J.K.Yadav"
                  position="Literary Director"
                />
              </div>
              <div className="hindisamitiformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Priyanka Beniwal"
                  position="Design Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="A.Rishikesh"
                  position="Poetry Director"
                />
              </div>
              <div className="hindisamitiformat3_4">
                <Infocard
                  image={Aayushi}
                  name="Aayushi Agrawal"
                  position="Representative"
                />

                <Infocard
                  image={Abhinav}
                  name="A.Barnawal"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat3_5">
                <Infocard
                  image={Adarsh}
                  name="Adarsh Anand"
                  position="Representative"
                />
                <Infocard
                  image={Ansh}
                  name="Ansh Goel"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat3_6">
                <Infocard
                  image={Daksh}
                  name="D.Khandelwal"
                  position="Representative"
                />
                <Infocard
                  image={Gyanendra}
                  name="G.Kumar"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat3_7">
                <Infocard
                  image={Prakash}
                  name="Prakash Tiwari"
                  position="Representative"
                />
                <Infocard
                  image={Richa}
                  name="Richa Yadav"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat3_8">
                <Infocard
                  image={Sanskar}
                  name="Sanskar Soni"
                  position="Representative"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Goyal"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat3_9">
                <Infocard
                  image={Yash}
                  name="Yash Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Yashwant}
                  name="Y.S.Kaurav"
                  position="Representative"
                />
                <Infocard
                  image={Pragyansh}
                  name="P.Priyadarshi"
                  position="Representative"
                />
              </div>
            </div>
            <div className="hindisamitiformat4">
              <div className="hindisamitiformat4_1">
                <Infocard
                  image={DefaultPic}
                  name="Pranit Rastogi"
                  position="Secretary"
                />
              </div>
              <div className="hindisamitiformat4_2">
                <Infocard
                  image={DefaultPic}
                  name="J.K.Yadav"
                  position="Literary Director"
                />
              </div>
              <div className="hindisamitiformat4_3">
                <Infocard
                  image={DefaultPic}
                  name="Priyanka Beniwal"
                  position="Design Director"
                />
              </div>
              <div className="hindisamitiformat4_4">
                <Infocard
                  image={DefaultPic}
                  name="A.Rishikesh"
                  position="Poetry Director"
                />
              </div>
              <div className="hindisamitiformat4_5">
                <Infocard
                  image={Aayushi}
                  name="Aayushi Agrawal"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat4_6">
                <Infocard
                  image={Abhinav}
                  name="A.Barnawal"
                  position="Representative"
                />
                <Infocard
                  image={Adarsh}
                  name="Adarsh Anand"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat4_7">
                <Infocard
                  image={Ansh}
                  name="Ansh Goel"
                  position="Representative"
                />
                <Infocard
                  image={Daksh}
                  name="D.Khandelwal"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat4_8">
                <Infocard
                  image={Gyanendra}
                  name="G.Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Prakash}
                  name="Prakash Tiwari"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat4_9">
                <Infocard
                  image={Richa}
                  name="Richa Yadav"
                  position="Representative"
                />
                <Infocard
                  image={Sanskar}
                  name="Sanskar Soni"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat4_10">
                <Infocard
                  image={Tanmay}
                  name="Tanmay Goyal"
                  position="Representative"
                />
                <Infocard
                  image={Yash}
                  name="Yash Agrawal"
                  position="Representative"
                />
              </div>
              <div className="hindisamitiformat4_11">
                <Infocard
                  image={Yashwant}
                  name="Y.S.Kaurav"
                  position="Representative"
                />
                <Infocard
                  image={Pragyansh}
                  name="P.Priyadarshi"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hindisamitifooter1">
        <HindisamitiFooter />
      </div>
    </div>
  );
};

export default Spicmacay;
