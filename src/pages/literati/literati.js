/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleLiterati.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../literati/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import LiteratiNavbar from "./Navbar/LiteratiNavbar";
import LiteratiFooter from "./Footer/LiteratiFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Samyak from './1.png'
import Shrijit from './2.png'
import Divyansh from './3.png'
import Stuti from './4.png'
import Nischay from './5.png'
import Naman from './6.png'
import Parth from './7.png'
import Sanyam from './8.png'
import Ashish from './9.png'
import Abhinna from './Abhinna_Agarwal.jpg'
import Aditi from './Aditi.jpg'
import Awwab from './Awwab_Ansari.jpg'
import Sampan from './Sampan .jpg'
import Vamshi from './Vamshi.jpg'

const Literati = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="literatipage">
      <div className="literatinavbar1">
        <LiteratiNavbar />
      </div>
      <div className="literatibody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Literati Club</h3>
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
        <div className="literatiteam">
          <div className="literatiteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="literatiteamcontent">
            <div className="literatiformat1">
              <div className="literatiformat1_1">
                <Infocard
                  image={Naman}
                  name="N.Upadhyay"
                  position="Secretary"
                />
              </div>
              <div className="literatiformat1_2">
                <Infocard
                  image={Samyak}
                  name="Samyak Jain"
                  position="Representative"
                />

                <Infocard
                  image={Sanyam}
                  name="Sanyam"
                  position="Representative"
                />
                <Infocard
                  image={Abhinna}
                  name="A.Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Parth}
                  name="Parth Singhal"
                  position="Representative"
                />
                <Infocard
                  image={Nischay}
                  name="Nischay Diwan"
                  position="Representative"
                />
                <Infocard
                  image={Stuti}
                  name="Stuti Lohani"
                  position="Representative"
                />
              </div>
              <div className="literatiformat1_3">
                <Infocard
                  image={Divyansh}
                  name="Divyansh Mittal"
                  position="Representative"
                />
                <Infocard
                  image={Ashish}
                  name="Ashish Jagrawal"
                  position="Representative"
                />
                <Infocard
                  image={Shrijit}
                  name="Shrijit Shaswat"
                  position="Representative"
                />
                <Infocard
                  image={Aditi}
                  name="Aditi Gupta"
                  position="Representative"
                />
                <Infocard
                  image={Vamshi}
                  name="Vamshi Vangala"
                  position="Representative"
                />
                <Infocard
                  image={Awwab}
                  name="Ansari Awwab"
                  position="Representative"
                />
                <Infocard
                  image={Sampan}
                  name="Sampan Manna"
                  position="Representative"
                />
              </div>
            </div>
            <div className="literatiformat2">
              <div className="literatiformat2_1">
                <Infocard
                  image={Naman}
                  name="N.Upadhyay"
                  position="Secretary"
                />
              </div>
              <div className="literatiformat2_2">
                <Infocard
                  image={Samyak}
                  name="Samyak Jain"
                  position="Representative"
                />

                <Infocard
                  image={Sanyam}
                  name="Sanyam"
                  position="Representative"
                />
                <Infocard
                  image={Abhinna}
                  name="A.Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Parth}
                  name="Parth Singhal"
                  position="Representative"
                />
                <Infocard
                  image={Nischay}
                  name="Nischay Diwan"
                  position="Representative"
                />
                <Infocard
                  image={Stuti}
                  name="Stuti Lohani"
                  position="Representative"
                />
              </div>
              <div className="literatiformat1_3">
                <Infocard
                  image={Divyansh}
                  name="Divyansh Mittal"
                  position="Representative"
                />
                <Infocard
                  image={Ashish}
                  name="Ashish Jagrawal"
                  position="Representative"
                />
               
              </div>
              <div className="literatiformat2_4">
                 <Infocard
                  image={Shrijit}
                  name="Shrijit Shaswat"
                  position="Representative"
                />
                <Infocard
                  image={Aditi}
                  name="Aditi Gupta"
                  position="Representative"
                />
                <Infocard
                  image={Vamshi}
                  name="Vamshi Vangala"
                  position="Representative"
                />
                <Infocard
                  image={Awwab}
                  name="Ansari Awwab"
                  position="Representative"
                />
                <Infocard
                  image={Sampan}
                  name="Sampan Manna"
                  position="Representative"
                />
              </div>
            </div>
            <div className="literatiformat3">
              <div className="literatiformat3_1">
                <Infocard
                  image={Naman}
                  name="N.Upadhyay"
                  position="Secretary"
                />
              </div>
              <div className="literatiformat3_2">
                <Infocard
                  image={Samyak}
                  name="Samyak Jain"
                  position="Representative"
                />

                <Infocard
                  image={Sanyam}
                  name="Sanyam"
                  position="Representative"
                />
              </div>
              <div className="literatiformat3_3">
                <Infocard
                  image={Abhinna}
                  name="A.Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Parth}
                  name="Parth Singhal"
                  position="Representative"
                />
              </div>
              <div className="literatiformat3_4">
                <Infocard
                  image={Nischay}
                  name="Nischay Diwan"
                  position="Representative"
                />
                <Infocard
                  image={Stuti}
                  name="Stuti Lohani"
                  position="Representative"
                />
              </div>
              <div className="literatiformat3_5">
                <Infocard
                  image={Divyansh}
                  name="Divyansh Mittal"
                  position="Representative"
                />
                <Infocard
                  image={Ashish}
                  name="Ashish Jagrawal"
                  position="Representative"
                />
              </div>
              <div className="literatiformat3_6">
                <Infocard
                  image={Shrijit}
                  name="Shrijit Shaswat"
                  position="Representative"
                />
                <Infocard
                  image={Aditi}
                  name="Aditi Gupta"
                  position="Representative"
                />
              </div>
              <div className="literatiformat3_7">
                <Infocard
                  image={Vamshi}
                  name="Vamshi Vangala"
                  position="Representative"
                />
                <Infocard
                  image={Awwab}
                  name="Ansari Awwab"
                  position="Representative"
                />
                <Infocard
                  image={Sampan}
                  name="Sampan Manna"
                  position="Representative"
                />
              </div>
            </div>
            <div className="literatiformat4">
              <div className="literatiformat4_1">
                <Infocard
                  image={Naman}
                  name="N.Upadhyay"
                  position="Secretary"
                />
              </div>
              <div className="literatiformat4_2">
                <Infocard
                  image={Samyak}
                  name="Samyak Jain"
                  position="Representative"
                />
              </div>
              <div className="literatiformat4_3">
                <Infocard
                  image={Sanyam}
                  name="Sanyam"
                  position="Representative"
                />
                <Infocard
                  image={Abhinna}
                  name="A.Agarwal"
                  position="Representative"
                />
              </div>
              <div className="literatiformat4_4">
                <Infocard
                  image={Parth}
                  name="Parth Singhal"
                  position="Representative"
                />
                <Infocard
                  image={Nischay}
                  name="Nischay Diwan"
                  position="Representative"
                />
              </div>
              <div className="literatiformat4_5">
                <Infocard
                  image={Stuti}
                  name="Stuti Lohani"
                  position="Representative"
                />
                <Infocard
                  image={Divyansh}
                  name="Divyansh Mittal"
                  position="Representative"
                />
              </div>
              <div className="literatiformat4_6">
                <Infocard
                  image={Ashish}
                  name="Ashish Jagrawal"
                  position="Representative"
                />
                <Infocard
                  image={Shrijit}
                  name="Shrijit Shaswat"
                  position="Representative"
                />
              </div>
              <div className="literatiformat4_7">
                <Infocard
                  image={Aditi}
                  name="Aditi Gupta"
                  position="Representative"
                />
                <Infocard
                  image={Vamshi}
                  name="Vamshi Vangala"
                  position="Representative"
                />
              </div>
              <div className="literatiformat4_8">
                <Infocard
                  image={Awwab}
                  name="Ansari Awwab"
                  position="Representative"
                />
                <Infocard
                  image={Sampan}
                  name="Sampan Manna"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="literatifooter1">
        <LiteratiFooter />
      </div>
    </div>
  );
};

export default Literati;
