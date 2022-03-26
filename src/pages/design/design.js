/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from "react-dom";
import { Zoom } from "react-slideshow-image";
import "./css/styleDesign.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../design/images/logo.png";
import image1 from "./images/DesignBootcamp.jpg";
import image2 from "./images/Rebranding.jpg";
import image3 from "./images/Vision.jpg";
import image4 from "./images/Create.jpg";
import image5 from "./images/des.jpg";
import DesignNavbar from "./Navbar/DesignNavbar";
import DesignFooter from "./Footer/DesignFooter";
import Infocard from "./Infocard/Infocard";
// import DefaultPic from "./Infocard/Rectangle 103.png";
import atharva from "./atharva.png";
import sahil from "./sahil.png";
import aryan from "./aryan.png";
import devansh from "./devansh.png";
// import saksham from "./saksham.png";
import sakshamb from "./sakshambhardhwaj.png";
import utkarsh from "./Utkarsh.png";
import kunal from "./Kunal_Bairwa_Satpura.jpg";
import kushagra from "./Kushagra_Girnar.jpg";
import shobhit from "./Shobhit.jpg";
import mihir from "./Mihir.webp";
import vaibhav from "./Vaibhav.png";
import tanya from "./tanyagoyal.png";
import pratyush from "./pratyush.png";
import paras from "./paras.png";
import madhurya from "./Madhurya.png";
import nishantk from "./nishantkumar.png";
// import navaneeth from "./navaneeth.png";
import manan from "./manan.png";
// import ayush from "./ayush.png";
// import animesh from "./animesh.png";
import adityanarayan from "./adityanarayan.png";
import abhishek from "./abhishek.png";
// import aayushs from "./aayushsomani.png";
// import aayesha from "./aayesha.png";

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
              The newest edition to the list of clubs in BRCA, Design Club IIT
              Delhi, connects Design's long thought art world to the
              closely-knit world of problem-solving. Creativity, innovation, and
              professionalism remain the central bubbles for the community.
              Comprising a group of student designers who work together to
              expand professional outlook and personal style through the free
              exchange of ideas and cultivating aesthetically pleasing designs
              for everyone to enjoy and experience, one can always hop in to
              learn and get a head start, and know what is happening around in
              the design world.{" "}
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
                  <h3>Design BootCamp </h3>
                  <p>
                    A whole lot of 120 Min workshops full of fun and learning
                    sessions in various domains from Design Thinking to Product
                    Ideation and skills like 3D Design, Logo Design, and Graphic
                    Design.
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
                  <h3>Rebranding</h3>
                  <p>
                    A very exciting solo competition organized for the first
                    time where designers were asked to design and present a
                    complete brand identity for a fresh new product for
                    collaborations given in prompt
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
                  <h3>Vision 1.0</h3>
                  <p>
                    A Product Design Challenge in which teams of 2-3 competed
                    using problem-solving skills to construct wireframes and
                    prototype innovative solutions based on the problem
                    statement.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image3}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Create 3.0</h3>
                  <p>
                    An exciting challenge full of twists and turns that forced
                    participants to be their best creative selves ever!A design
                    prompt was given, preceded by 2 talks, where teams of 3 must
                    work together to showcase something beautiful.{" "}
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image4}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Euphoria UX</h3>
                  <p>
                    An impressive UX case study competition in which teams of
                    2-3 participants were given different problem statements and
                    worked together to showcase their creativity, build
                    something amazing and factor in a user’s perspective.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image5}
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
                  image={atharva}
                  name="Atharva Agarwal"
                  position="Secretary"
                />
              </div>
              <div className="designformat1_2">
                <Infocard
                  image={sahil}
                  name="Sahil Kumar Raj"
                  position="Director"
                />
                <Infocard image={devansh} name="Devansh" position="Director" />
                <Infocard
                  image={aryan}
                  name="A.Choudhary"
                  position="Director"
                />
                <Infocard
                  image={shobhit}
                  name="S.Bhargava"
                  position="Director"
                />
                <Infocard
                  image={mihir}
                  name="Mihir Okte"
                  position="Director"
                />
              </div>
              <div className="designformat1_3">
                <Infocard
                  image={nishantk}
                  name="Nishant Kumar"
                  position="Representative"
                />
                <Infocard
                  image={paras}
                  name="Paras Garg"
                  position="Representative"
                />
                <Infocard
                  image={tanya}
                  name="Tanya Goyal"
                  position="Representative"
                />
                <Infocard
                  image={manan}
                  name="Manan Katiyar"
                  position="Representative"
                />
                <Infocard
                  image={utkarsh}
                  name="Utkarsh Goyal"
                  position="Representative"
                />
                <Infocard
                  image={kunal}
                  name="Kunal Bairwa"
                  position="Representative"
                />
              </div>
              <div className="designformat1_4">
                <Infocard
                  image={adityanarayan}
                  name="Aditya Narayan"
                  position="Representative"
                />
                <Infocard
                  image={kushagra}
                  name="Kushagra Gupta"
                  position="Representative"
                />
                <Infocard
                  image={vaibhav}
                  name="Vaibhav Saha"
                  position="Representative"
                />
                <Infocard
                  image={madhurya}
                  name="M.Panwar"
                  position="Representative"
                />
                <Infocard
                  image={abhishek}
                  name="Abhishek Pandey"
                  position="Representative"
                />
                <Infocard
                  image={pratyush}
                  name="Pratyush Saini"
                  position="Representative"
                />
                <Infocard
                  image={sakshamb}
                  name="S.Bhardwaj"
                  position="Representative"
                />
              </div>
            </div>
            <div className="designformat2">
              <div className="designformat2_1">
                <Infocard
                  image={atharva}
                  name="Atharva Agarwal"
                  position="Secretary"
                />
              </div>
              <div className="designformat2_2">
                <Infocard
                  image={sahil}
                  name="Sahil Kumar Raj"
                  position="Director"
                />
                <Infocard image={devansh} name="Devansh" position="Director" />
              </div>
              <div className="designformat2_3">
                <Infocard
                  image={aryan}
                  name="A.Choudhary"
                  position="Director"
                />
                <Infocard
                  image={shobhit}
                  name="S.Bhargava"
                  position="Director"
                />
                <Infocard
                  image={mihir}
                  name="Mihir Okte"
                  position="Director"
                />
              </div>
              <div className="designformat2_4">
                <Infocard
                  image={nishantk}
                  name="Nishant Kumar"
                  position="Representative"
                />
                <Infocard
                  image={paras}
                  name="Paras Garg"
                  position="Representative"
                />
                <Infocard
                  image={tanya}
                  name="Tanya Goyal"
                  position="Representative"
                />
              </div>
              <div className="designformat2_5">
                <Infocard
                  image={manan}
                  name="Manan Katiyar"
                  position="Representative"
                />
                <Infocard
                  image={utkarsh}
                  name="Utkarsh Goyal"
                  position="Representative"
                />
                <Infocard
                  image={kunal}
                  name="Kunal Bairwa"
                  position="Representative"
                />
              </div>
              <div className="designformat2_6">
                <Infocard
                  image={adityanarayan}
                  name="Aditya Narayan"
                  position="Representative"
                />
                <Infocard
                  image={kushagra}
                  name="Kushagra Gupta"
                  position="Representative"
                />
                <Infocard
                  image={vaibhav}
                  name="Vaibhav Saha"
                  position="Representative"
                />
              </div>
              <div className="designformat2_7">
                <Infocard
                  image={madhurya}
                  name="M.Panwar"
                  position="Representative"
                />
                <Infocard
                  image={abhishek}
                  name="Abhishek Pandey"
                  position="Representative"
                />
                <Infocard
                  image={pratyush}
                  name="Pratyush Saini"
                  position="Representative"
                />
                <Infocard
                  image={sakshamb}
                  name="S.Bhardwaj"
                  position="Representative"
                />
              </div>
            </div>
            <div className="designformat3">
              <div className="designformat3_1">
                <Infocard
                  image={atharva}
                  name="Atharva Agarwal"
                  position="Secretary"
                />
              </div>
              <div className="designformat3_2">
                <Infocard
                  image={sahil}
                  name="Sahil Kumar Raj"
                  position="Director"
                />
              </div>
              <div className="designformat3_3">
                <Infocard image={devansh} name="Devansh" position="Director" />
              </div>
              <div className="designformat3_4">
                <Infocard
                  image={aryan}
                  name="A.Choudhary"
                  position="Director"
                />
              </div>
              <div className="designformat3_5">
                <Infocard
                  image={shobhit}
                  name="S.Bhargava"
                  position="Director"
                />
              </div>
              <div className="designformat3_6">
                <Infocard
                  image={mihir}
                  name="Mihir Okte"
                  position="Director"
                />
              </div>
              <div className="designformat3_7">
                <Infocard
                  image={nishantk}
                  name="Nishant Kumar"
                  position="Representative"
                />
              </div>
              <div className="designformat3_8">
                <Infocard
                  image={paras}
                  name="Paras Garg"
                  position="Representative"
                />
                <Infocard
                  image={tanya}
                  name="Tanya Goyal"
                  position="Representative"
                />
              </div>
              <div className="designformat3_9">
                <Infocard
                  image={manan}
                  name="Manan Katiyar"
                  position="Representative"
                />
                <Infocard
                  image={utkarsh}
                  name="Utkarsh Goyal"
                  position="Representative"
                />
              </div>
              <div className="designformat3_10">
                <Infocard
                  image={kunal}
                  name="Kunal Bairwa"
                  position="Representative"
                />
                <Infocard
                  image={adityanarayan}
                  name="Aditya Narayan"
                  position="Representative"
                />
              </div>
              <div className="designformat3_11">
                <Infocard
                  image={kushagra}
                  name="Kushagra Gupta"
                  position="Representative"
                />
                <Infocard
                  image={vaibhav}
                  name="Vaibhav Saha"
                  position="Representative"
                />
              </div>
              <div className="designformat3_12">
                <Infocard
                  image={madhurya}
                  name="M.Panwar"
                  position="Representative"
                />
                <Infocard
                  image={abhishek}
                  name="Abhishek Pandey"
                  position="Representative"
                />
              </div>
              <div className="designformat3_13">
                <Infocard
                  image={pratyush}
                  name="Pratyush Saini"
                  position="Representative"
                />
                <Infocard
                  image={sakshamb}
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
