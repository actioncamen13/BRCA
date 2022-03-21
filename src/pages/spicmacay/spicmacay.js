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
import image1 from "./images/img1.jpg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import SpicmacayNavbar from "./Navbar/SpicmacayNavbar";
import SpicmacayFooter from "./Footer/SpicmacayFooter";
import Infocard from "./Infocard/Infocard";
import Aaryan from "./1.png";
import Aditya from "./2.png";
import Anshum from "./3.png";
import Aryan from "./4.png";
import Bhavesh from "./5.png";
import Jatin from "./6.png";
import Harsh from "./7.png";
import Kunal from "./8.png";
import Prisha from "./9.png";
import Rishav from "./10.png";
import Tushar from "./11.png";
import Rishu from "./12.png";
import Suhani from "./13.png";
import Akshat from "./14.jpeg";

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
            Society for the Promotion of Indian Classic Music And Culture Amongst Youth <br></br>
            It is a non-political, nationwide voluntary movement founded in 1977 by Dr Kiran seth, professor-Emeritus at IIT Delhi. It’s intention is to enrich the quality of formal education by increasing awareness about different aspects of Indian heritage and inspiring the young mind to imbibe the values embedded in it. It seeks to inspire youth through experiencing the mysticism embodied in the rich and heterogeneous cultural tapestry of Indian and World Heritage, with a hope that the beauty, grace, values, and wisdom embodied in these arts will influence their way of life and thinking and inspire one to become a better human being.{" "}
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
                  <h3>	Heritage Trip</h3>
                  <p>
                Museums, Biodiversity parks, historical places are great places to explore culture and history. We organize these heritage trips to historical places ( like Humayun’s Tomb, Rashtrapati Bhavan ), museums (like the national art gallery ), and biodiversity parks ( like Aravalli Biodiversity park ). When you hop on the bus with your friends, these trips become similar to your best road trips on a sunny day.

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
                  <h3> Workshops</h3>
                  <p>
             Starting from the freshers’ orientation throughout the year Spic Macay Club invites many national award-winning artists to take Fine Arts, Music, and Dance workshops. Madhubani Painting, Khatak Dance, flute workshop are examples of the workshops organized last year. 
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
                  <h3>Concerts</h3>
                  <p>
                  We believe that the best way to show how the richness of our culture is by demonstration. Through the network of SPIC MACAY Society, we have unique access to the greatest artists of the time. Concerts from these masters give a life-changing experience. This was the same experience that motivated prof. Kiran Seth to led the foundation of the Spic Macay Society.
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
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat1_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                />

                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                />
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat1_3">
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
            <div className="spicmacayformat2">
              <div className="spicmacayformat2_1">
                <Infocard
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat2_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                />

                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                />
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat2_3">
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat2_4">
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
            <div className="spicmacayformat3">
              <div className="spicmacayformat3_1">
                <Infocard
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat3_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                />

                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_3">
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_4">
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_5">
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_6">
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat3_7">
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                />
              </div>
            </div>
            <div className="spicmacayformat4">
              <div className="spicmacayformat4_1">
                <Infocard
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                />
              </div>
              <div className="spicmacayformat4_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_3">
                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                />
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_4">
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_5">
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                />
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_6">
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_7">
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                />
              </div>
              <div className="spicmacayformat4_8">
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                />
                <Infocard
                  image={Kunal}
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
