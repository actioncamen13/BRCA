/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleDramatics.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../dramatics/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import DramaticsNavbar from "./Navbar/DramaticsNavbar";
import DramaticsFooter from "./Footer/DramaticsFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Akshat from './1.png'
import Aadil from './2.png'
import Garvit from './3.png'
import Kulveer from './4.png'
import Nikhil from './5.png'
import Navneet from './6.png'
import PriyanshuJain from './7.png'
import Sanskriti from './8.png'
import Smrati from './9.png'
import Sujal from './10.png'
import Upasak from './11.png'
import Yash from './12.png'

const Dramatics = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="dramaticspage">
      <div className="dramaticsnavbar1">
        <DramaticsNavbar />
      </div>
      <div className="dramaticsbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Dramatics Club</h3>
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
        <div className="dramaticsteam">
          <div className="dramaticsteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="dramaticsteamcontent">
            <div className="dramaticsformat1">
              <div className="dramaticsformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Naman Porwal"
                  position="Secretary"
                />
              </div>
              <div className="dramaticsformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="Sarvagya Kumar"
                  position="Director"
                />

                <Infocard
                  image={DefaultPic}
                  name="Tarun Khinchi"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Abhinav Verma"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Akshat Lohiya"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nameer Khan"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Kumar"
                  position="Representative"
                />
                <Infocard
                  image={PriyanshuJain}
                  name="Priyanshu Jain"
                  position="Representative"
                />
                <Infocard
                  image={Garvit}
                  name="Garvit Dhawan"
                  position="Representative"
                />
                <Infocard
                  image={Sujal}
                  name="Sujal Jain"
                  position="Representative"
                />
                <Infocard
                  image={Akshat}
                  name="Akshat Chauhan"
                  position="Representative"
                />
                <Infocard
                  image={Sanskriti}
                  name="Sanskriti Jain"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat1_4">
                <Infocard
                  image={Upasak}
                  name="Upasak Sharma"
                  position="Representative"
                />
                <Infocard
                  image={Smrati}
                  name="Smrati Tripathi"
                  position="Representative"
                />
                <Infocard
                  image={Navneet}
                  name="Navneet Singh"
                  position="Representative"
                />
                <Infocard
                  image={Aadil}
                  name="Aadil Akhtar"
                  position="Representative"
                />
                <Infocard
                  image={Kulveer}
                  name="Kulveer Singh"
                  position="Representative"
                />
                <Infocard
                  image={Nikhil}
                  name="Nikhil Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Yash}
                  name="Yash Gupta"
                  position="Representative"
                />
              </div>
            </div>
            <div className="dramaticsformat2">
              <div className="dramaticsformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Naman Porwal"
                  position="Secretary"
                />
              </div>
              <div className="dramaticsformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Sarvagya Kumar"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tarun Khinchi"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Abhinav Verma"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Akshat Lohiya"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nameer Khan"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Garvit Dhawan"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat2_5">
                <Infocard
                  image={DefaultPic}
                  name="Sujal Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Akshat Chauhan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sanskriti Jain"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat2_6">
                <Infocard
                  image={DefaultPic}
                  name="Upasak Sharma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Smrati Tripathi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Navneet Singh"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat2_7">
                <Infocard
                  image={DefaultPic}
                  name="Aadil Akhtar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kulveer Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nikhil Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Yash Gupta"
                  position="Representative"
                />
              </div>
            </div>
            <div className="dramaticsformat3">
              <div className="dramaticsformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Naman Porwal"
                  position="Secretary"
                />
              </div>
              <div className="dramaticsformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Sarvagya Kumar"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Tarun Khinchi"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Abhinav Verma"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Lohiya"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Nameer Khan"
                  position="Director"
                />
              </div>
              <div className="dramaticsformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Kumar"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat3_8">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Garvit Dhawan"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat3_9">
                <Infocard
                  image={DefaultPic}
                  name="Sujal Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Akshat Chauhan"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat3_10">
                <Infocard
                  image={DefaultPic}
                  name="Sanskriti Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Upasak Sharma"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat3_11">
                <Infocard
                  image={DefaultPic}
                  name="Smrati Tripathi"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Navneet Singh"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat3_12">
                <Infocard
                  image={DefaultPic}
                  name="Aadil Akhtar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kulveer Singh"
                  position="Representative"
                />
              </div>
              <div className="dramaticsformat3_13">
                <Infocard
                  image={DefaultPic}
                  name="Nikhil Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Yash Gupta"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dramaticsfooter1">
        <DramaticsFooter />
      </div>
    </div>
  );
};

export default Dramatics;
