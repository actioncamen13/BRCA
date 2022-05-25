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
              Society for the Promotion of Indian Classic Music And Culture
              Amongst Youth <br></br>
              It is a non-political, nationwide voluntary movement founded in
              1977 by Dr Kiran seth, professor-Emeritus at IIT Delhi. It’s
              intention is to enrich the quality of formal education by
              increasing awareness about different aspects of Indian heritage
              and inspiring the young mind to imbibe the values embedded in it.
              It seeks to inspire youth through experiencing the mysticism
              embodied in the rich and heterogeneous cultural tapestry of Indian
              and World Heritage, with a hope that the beauty, grace, values,
              and wisdom embodied in these arts will influence their way of life
              and thinking and inspire one to become a better human being.{" "}
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
                  <h3> Heritage Trip</h3>
                  <p>
                    Museums, Biodiversity parks, historical places are great
                    places to explore culture and history. We organize these
                    heritage trips to historical places ( like Humayun’s Tomb,
                    Rashtrapati Bhavan ), museums (like the national art gallery
                    ), and biodiversity parks ( like Aravalli Biodiversity park
                    ). When you hop on the bus with your friends, these trips
                    become similar to your best road trips on a sunny day.
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
                    Starting from the freshers’ orientation throughout the year
                    Spic Macay Club invites many national award-winning artists
                    to take Fine Arts, Music, and Dance workshops. Madhubani
                    Painting, Khatak Dance, flute workshop are examples of the
                    workshops organized last year.
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
                    We believe that the best way to show how the richness of our
                    culture is by demonstration. Through the network of SPIC
                    MACAY Society, we have unique access to the greatest artists
                    of the time. Concerts from these masters give a
                    life-changing experience. This was the same experience that
                    motivated prof. Kiran Seth to led the foundation of the Spic
                    Macay Society.
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
                  phone="8905607790"
                  insta="https://www.instagram.com/ich_bin_akshat/"
                  email="akshatgadhwal1@gmail.com"
                />
              </div>
              <div className="spicmacayformat1_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                  phone="9660760064"
                  insta="https://www.instagram.com/raj_rishu_04/"
                  email="rajrishu349@gmail.com"
                />

                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                  phone="7004230248"
                  insta="https://www.instagram.com/aditya_verma258"
                  email="aditya.verma2002@gmail.com"
                />
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                  phone="6398860754"
                  insta="https://www.instagram.com/jatin_jangpangi/"
                  email="jangpangijatin203@gmail.com"
                />
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                  phone="7986108065"
                  insta="https://instagram.com/anshumranga_?utm_medium=copy_link"
                  email="anshumpkl2007@gmail.com"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                  phone="9719194885"
                  insta="https://www.instagram.com/aryanjaiswal9838/"
                  email="jaiswalaryan303@gmail.com"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                  phone="9219055554"
                  insta="https://www.instagram.com/aaryan_ahuja777/"
                  email="aaryan.ahuja2001@gmail.com"
                />
              </div>
              <div className="spicmacayformat1_3">
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                  phone="9576293519"
                  insta="https://www.instagram.com/rishavkumar3049/"
                  email="rishavindaut@gmail.com"
                />
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                  phone="9997946399"
                  insta="https://www.instagram.com/_suhani_ag_"
                  email="suhaniagrawal35@gmail.com"
                />
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                  phone="6203003328"
                  insta="https://www.instagram.com/harshmuz28"
                  email="harshjalan28@gmail.com"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                  phone="7983375296"
                  insta="https://www.instagram.com/_tusharag_/"
                  email="tushmtr@gmail.com"
                />
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                  phone="7737786776"
                  insta="https://www.instagram.com/bababakchodi1.0?r=nametag"
                  email="bhaveshbhati01@gmail.com"
                />
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                  phone="9868489693"
                  insta="https://www.instagram.com/prishaa05/"
                  email="prishaa0510@gmail.com"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                  phone="9650050834"
                  insta="https://instagram.com/kunalmitra10?utm_medium=copy_link"
                  email="kunalmitra00@gmail.com"
                />
              </div>
            </div>
            <div className="spicmacayformat2">
              <div className="spicmacayformat2_1">
                <Infocard
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                  phone="8905607790"
                  insta="https://www.instagram.com/ich_bin_akshat/"
                  email="akshatgadhwal1@gmail.com"
                />
              </div>
              <div className="spicmacayformat2_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                  phone="9660760064"
                  insta="https://www.instagram.com/raj_rishu_04/"
                  email="rajrishu349@gmail.com"
                />

                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                  phone="7004230248"
                  insta="https://www.instagram.com/aditya_verma258"
                  email="aditya.verma2002@gmail.com"
                />
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                  phone="6398860754"
                  insta="https://www.instagram.com/jatin_jangpangi/"
                  email="jangpangijatin203@gmail.com"
                />
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                  phone="7986108065"
                  insta="https://instagram.com/anshumranga_?utm_medium=copy_link"
                  email="anshumpkl2007@gmail.com"
                />
              </div>
              <div className="spicmacayformat2_3">
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                  phone="9719194885"
                  insta="https://www.instagram.com/aryanjaiswal9838/"
                  email="jaiswalaryan303@gmail.com"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                  phone="9219055554"
                  insta="https://www.instagram.com/aaryan_ahuja777/"
                  email="aaryan.ahuja2001@gmail.com"
                />
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                  phone="9576293519"
                  insta="https://www.instagram.com/rishavkumar3049/"
                  email="rishavindaut@gmail.com"
                />
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                  phone="9997946399"
                  insta="https://www.instagram.com/_suhani_ag_"
                  email="suhaniagrawal35@gmail.com"
                />
              </div>
              <div className="spicmacayformat2_4">
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                  phone="6203003328"
                  insta="https://www.instagram.com/harshmuz28"
                  email="harshjalan28@gmail.com"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                  phone="7983375296"
                  insta="https://www.instagram.com/_tusharag_/"
                  email="tushmtr@gmail.com"
                />
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                  phone="7737786776"
                  insta="https://www.instagram.com/bababakchodi1.0?r=nametag"
                  email="bhaveshbhati01@gmail.com"
                />
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                  phone="9868489693"
                  insta="https://www.instagram.com/prishaa05/"
                  email="prishaa0510@gmail.com"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                  phone="9650050834"
                  insta="https://instagram.com/kunalmitra10?utm_medium=copy_link"
                  email="kunalmitra00@gmail.com"
                />
              </div>
            </div>
            <div className="spicmacayformat3">
              <div className="spicmacayformat3_1">
                <Infocard
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                  phone="8905607790"
                  insta="https://www.instagram.com/ich_bin_akshat/"
                  email="akshatgadhwal1@gmail.com"
                />
              </div>
              <div className="spicmacayformat3_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                  phone="9660760064"
                  insta="https://www.instagram.com/raj_rishu_04/"
                  email="rajrishu349@gmail.com"
                />

                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                  phone="7004230248"
                  insta="https://www.instagram.com/aditya_verma258"
                  email="aditya.verma2002@gmail.com"
                />
              </div>
              <div className="spicmacayformat3_3">
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                  phone="6398860754"
                  insta="https://www.instagram.com/jatin_jangpangi/"
                  email="jangpangijatin203@gmail.com"
                />
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                  phone="7986108065"
                  insta="https://instagram.com/anshumranga_?utm_medium=copy_link"
                  email="anshumpkl2007@gmail.com"
                />
              </div>
              <div className="spicmacayformat3_4">
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                  phone="9719194885"
                  insta="https://www.instagram.com/aryanjaiswal9838/"
                  email="jaiswalaryan303@gmail.com"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                  phone="9219055554"
                  insta="https://www.instagram.com/aaryan_ahuja777/"
                  email="aaryan.ahuja2001@gmail.com"
                />
              </div>
              <div className="spicmacayformat3_5">
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                  phone="9576293519"
                  insta="https://www.instagram.com/rishavkumar3049/"
                  email="rishavindaut@gmail.com"
                />
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                  phone="9997946399"
                  insta="https://www.instagram.com/_suhani_ag_"
                  email="suhaniagrawal35@gmail.com"
                />
              </div>
              <div className="spicmacayformat3_6">
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                  phone="6203003328"
                  insta="https://www.instagram.com/harshmuz28"
                  email="harshjalan28@gmail.com"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                  phone="7983375296"
                  insta="https://www.instagram.com/_tusharag_/"
                  email="tushmtr@gmail.com"
                />
              </div>
              <div className="spicmacayformat3_7">
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                  phone="7737786776"
                  insta="https://www.instagram.com/bababakchodi1.0?r=nametag"
                  email="bhaveshbhati01@gmail.com"
                />
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                  phone="9868489693"
                  insta="https://www.instagram.com/prishaa05/"
                  email="prishaa0510@gmail.com"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                  phone="9650050834"
                  insta="https://instagram.com/kunalmitra10?utm_medium=copy_link"
                  email="kunalmitra00@gmail.com"
                />
              </div>
            </div>
            <div className="spicmacayformat4">
              <div className="spicmacayformat4_1">
                <Infocard
                  image={Akshat}
                  name="Akshat Gadhwal"
                  position="Secretary"
                  phone="8905607790"
                  insta="https://www.instagram.com/ich_bin_akshat/"
                  email="akshatgadhwal1@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_2">
                <Infocard
                  image={Rishu}
                  name="Rishu Raj"
                  position="Representative"
                  phone="9660760064"
                  insta="https://www.instagram.com/raj_rishu_04/"
                  email="rajrishu349@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_3">
                <Infocard
                  image={Aditya}
                  name="Aditya Verma"
                  position="Representative"
                  phone="7004230248"
                  insta="https://www.instagram.com/aditya_verma258"
                  email="aditya.verma2002@gmail.com"
                />
                <Infocard
                  image={Jatin}
                  name="Jatin Jangpangi"
                  position="Representative"
                  phone="6398860754"
                  insta="https://www.instagram.com/jatin_jangpangi/"
                  email="jangpangijatin203@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_4">
                <Infocard
                  image={Anshum}
                  name="Anshum"
                  position="Representative"
                  phone="7986108065"
                  insta="https://instagram.com/anshumranga_?utm_medium=copy_link"
                  email="anshumpkl2007@gmail.com"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Jaiswal"
                  position="Representative"
                  phone="9719194885"
                  insta="https://www.instagram.com/aryanjaiswal9838/"
                  email="jaiswalaryan303@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_5">
                <Infocard
                  image={Aaryan}
                  name="Aaryan Ahuja"
                  position="Representative"
                  phone="9219055554"
                  insta="https://www.instagram.com/aaryan_ahuja777/"
                  email="aaryan.ahuja2001@gmail.com"
                />
                <Infocard
                  image={Rishav}
                  name="Rishav Kumar"
                  position="Representative"
                  phone="9576293519"
                  insta="https://www.instagram.com/rishavkumar3049/"
                  email="rishavindaut@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_6">
                <Infocard
                  image={Suhani}
                  name="Suhani Agrawal"
                  position="Representative"
                  phone="9997946399"
                  insta="https://www.instagram.com/_suhani_ag_"
                  email="suhaniagrawal35@gmail.com"
                />
                <Infocard
                  image={Harsh}
                  name="Harsh Kumar"
                  position="Representative"
                  phone="6203003328"
                  insta="https://www.instagram.com/harshmuz28"
                  email="harshjalan28@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_7">
                <Infocard
                  image={Tushar}
                  name="Tushar Agrawal"
                  position="Representative"
                  phone="7983375296"
                  insta="https://www.instagram.com/_tusharag_/"
                  email="tushmtr@gmail.com"
                />
                <Infocard
                  image={Bhavesh}
                  name="Bhavesh Bhati"
                  position="Representative"
                  phone="7737786776"
                  insta="https://www.instagram.com/bababakchodi1.0?r=nametag"
                  email="bhaveshbhati01@gmail.com"
                />
              </div>
              <div className="spicmacayformat4_8">
                <Infocard
                  image={Prisha}
                  name="Prisha Jain"
                  position="Representative"
                  phone="9868489693"
                  insta="https://www.instagram.com/prishaa05/"
                  email="prishaa0510@gmail.com"
                />
                <Infocard
                  image={Kunal}
                  name="Kunal Mitra"
                  position="Representative"
                  phone="9650050834"
                  insta="https://instagram.com/kunalmitra10?utm_medium=copy_link"
                  email="kunalmitra00@gmail.com"
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
