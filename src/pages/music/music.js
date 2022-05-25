/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { Zoom } from "react-slideshow-image";
import "./css/styleMusic.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../music/images/logo.png";
import image1 from "./images/img1.JPG";
import image2 from "./images/img2.JPG";
import image3 from "./images/img3.JPG";
import image4 from "./images/img4.JPG";
import image5 from "./images/img5.JPG";
import MusicNavbar from "./Navbar/MusicNavbar";
import MusicFooter from "./Footer/MusicFooter";
import Infocard from "./Infocard/Infocard";
// import DefaultPic from "./Infocard/Rectangle 103.png";
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
import dhwani from "./dhwani.jpeg";

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
              “Music is the literature of heart, it commences where speech ends”
              ~ Alphonse de Lamartine Abode to the music fraternity of IIT
              Delhi, the Music Club aims to promote music culture among the
              students as well as the faculty. If you want to showcase your
              vocal or instrumental talent, or you are just a beginner aiming to
              delve into the world of music, or you simply want to explore and
              discuss various musical genres, it is just the right place for
              you. Proud to be one of the most active clubs in performing arts,
              the music club has given birth to many talented singers and
              musicians over all these years. The two musical societies namely
              Cadence, the Western Acapella society and Mridang, the Indian
              Classical society are renowned for carrying a rich musical legacy
              and aim to evoke interest and passion for music produced by India
              and the world. Located in SAC, the state-of-the-art music room is
              equipped with a variety of instruments and a recording studio, and
              is used for organizing training and practice sessions for the club
              members. All throughout the year, the music club organizes a wide
              range of events and boasts enthusiastic participation from all the
              students.{" "}
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
                  <h3>By The Chai</h3>
                  <p>
                    An informal event held near Chaayos where people perform and
                    showcase their musical talents for fun
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
                  <h3>Overdrive</h3>
                  <p>
                    A competitive event where the entire music club is divided
                    into 4 groups and each group gives a polished performance
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
                  <h3>MEHFIL</h3>
                  <p>
                    The event with the theme of Indian genre where the club is
                    divided into 4 clubs or gharanas and give performances in
                    the Dogra Hall.
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
                  <h3>Consonance</h3>
                  <p>
                    The end of the year event with the most amazing after-party
                    where the senior batch is given a non-competitive farwell.
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
                  <h3>Mixtape</h3>
                  <p>
                    An inter-hostel competitive event which consists of solo
                    performances in different categories like instrumental,
                    Indian Vocals and Western Vocals.
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
                  phone="7710861643"
                  insta="https://www.instagram.com/vaibhav__verma_/"
                  email="ee1190543@iitd.ac.in"
                />
              </div>
              <div className="musicformat1_2">
                <Infocard
                  image={Vishal}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                  phone="9997157212"
                  insta="https://www.instagram.com/vishal_.a/"
                  email="ee1191083@iitd.ac.in"
                />
                <Infocard
                  image={dhwani}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                  phone="8447300970"
                  insta="https://www.instagram.com/dhwaniteckchandani/"
                  email="bb1190020@iitd.ac.in"
                />
                <Infocard
                  image={Anirudh}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                  phone="9818886653"
                  insta="https://www.instagram.com/anirudh4chauhan/"
                  email="ee1191072@iitd.ac.in"
                />
                <Infocard
                  image={Pawan}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                  phone="8755366026"
                  insta="https://www.instagram.com/itz_pawangoswami/"
                  email="ph1190645@iitd.ac.in"
                />
              </div>
              <div className="musicformat1_3">
                <Infocard
                  image={Parth}
                  name="Parth Jaiswal"
                  position="Representative"
                  phone="9065447636"
                  insta="https://www.instagram.com/parthojais39/"
                  email="me1200951@iitd.ac.in"
                />
                <Infocard
                  image={Vatsal}
                  name="Vatsal Mathur"
                  position="Representative"
                  phone="9602019242"
                  insta="https://www.instagram.com/vatsss_going_on/"
                  email="tt1201182@iitd.ac.in"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Goyal"
                  position="Representative"
                  phone="9610208000"
                  insta="https://www.instagram.com/aaryan_goyal231/"
                  email="ee1200454@iitd.ac.in"
                />
                <Infocard
                  image={Megha}
                  name="M.Dharawat"
                  position="Representative"
                  phone="9828144046"
                  insta="https://www.instagram.com/megghhahahah/"
                  email="bb1200030@iitd.ac.in"
                />
                <Infocard
                  image={Yashas}
                  name="Yashas Kedia"
                  position="Representative"
                  phone="9831302420"
                  insta="https://www.instagram.com/yashas.kedia/"
                  email="mt1200863@iitd.ac.in"
                />
                <Infocard
                  image={Rishika}
                  name="Rishika Verma"
                  position="Representative"
                  phone="9693087393"
                  insta="https://www.instagram.com/_aarvie__/"
                  email="tt1201155@iitd.ac.in"
                />
              </div>
              <div className="musicformat1_4">
                <Infocard
                  image={Samyak}
                  name="Samyak Gothi"
                  position="Representative"
                  phone="8989007678"
                  insta="https://www.instagram.com/samyak.gothi/"
                  email="ph1200725@iitd.ac.in"
                />
                <Infocard
                  image={Sibasish}
                  name="Sibasish Rout"
                  position="Representative"
                  phone="7205096336"
                  insta="https://www.instagram.com/routsibasish/"
                  email="cs1200386@iitd.ac.in"
                />
                <Infocard
                  image={Eshan}
                  name="Eshan Jain"
                  position="Representative"
                  phone="9971099818"
                  insta="​​​​https://www.instagram.com/eshanjain292/"
                  email="cs5200424@iitd.ac.in"
                />
                <Infocard
                  image={Jash}
                  name="Jash Baua"
                  position="Representative"
                  phone="79772650566"
                  insta="https://www.instagram.com/jashb27/"
                  email="tt1201103@iitd.ac.in"
                />
                <Infocard
                  image={Divyansh}
                  name="D.Agarwal"
                  position="Representative"
                  phone="9425015832"
                  insta="https://www.instagram.com/divyanshagarrwal/"
                  email="ee1200488@iitd.ac.in"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Juneja"
                  position="Representative"
                  phone="9717600000"
                  insta="https://www.instagram.com/tanmay.juneja8/"
                  email="me2201064@iitd.ac.in"
                />
                <Infocard
                  image={Arjun}
                  name="Arjun Aggarwal"
                  position="Representative"
                  phone="8368662972"
                  insta="https://www.instagram.com/arjun__1909/"
                  email="ee3200744@iitd.ac.in"
                />
              </div>
            </div>
            <div className="musicformat2">
              <div className="musicformat2_1">
                <Infocard
                  image={Vaibhav}
                  name="Vaibhav Verma"
                  position="Secretary"
                  phone="7710861643"
                  insta="https://www.instagram.com/vaibhav__verma_/"
                  email="ee1190543@iitd.ac.in"
                />
              </div>
              <div className="musicformat2_2">
                <Infocard
                  image={Vishal}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                  phone="9997157212"
                  insta="https://www.instagram.com/vishal_.a/"
                  email="ee1191083@iitd.ac.in"
                />
                <Infocard
                  image={dhwani}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                  phone="8447300970"
                  insta="https://www.instagram.com/dhwaniteckchandani/"
                  email="bb1190020@iitd.ac.in"
                />
                <Infocard
                  image={Anirudh}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                  phone="9818886653"
                  insta="https://www.instagram.com/anirudh4chauhan/"
                  email="ee1191072@iitd.ac.in"
                />
                <Infocard
                  image={Pawan}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                  phone="8755366026"
                  insta="https://www.instagram.com/itz_pawangoswami/"
                  email="ph1190645@iitd.ac.in"
                />
              </div>
              <div className="musicformat2_3">
                <Infocard
                  image={Parth}
                  name="Parth Jaiswal"
                  position="Representative"
                  phone="9065447636"
                  insta="https://www.instagram.com/parthojais39/"
                  email="me1200951@iitd.ac.in"
                />
                <Infocard
                  image={Vatsal}
                  name="Vatsal Mathur"
                  position="Representative"
                  phone="9602019242"
                  insta="https://www.instagram.com/vatsss_going_on/"
                  email="tt1201182@iitd.ac.in"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Goyal"
                  position="Representative"
                  phone="9610208000"
                  insta="https://www.instagram.com/aaryan_goyal231/"
                  email="ee1200454@iitd.ac.in"
                />
                <Infocard
                  image={Megha}
                  name="M.Dharawat"
                  position="Representative"
                  phone="9828144046"
                  insta="https://www.instagram.com/megghhahahah/"
                  email="bb1200030@iitd.ac.in"
                />
              </div>
              <div className="musicformat2_4">
                <Infocard
                  image={Yashas}
                  name="Yashas Kedia"
                  position="Representative"
                  phone="9831302420"
                  insta="https://www.instagram.com/yashas.kedia/"
                  email="mt1200863@iitd.ac.in"
                />
                <Infocard
                  image={Rishika}
                  name="Rishika Verma"
                  position="Representative"
                  phone="9693087393"
                  insta="https://www.instagram.com/_aarvie__/"
                  email="tt1201155@iitd.ac.in"
                />
                <Infocard
                  image={Samyak}
                  name="Samyak Gothi"
                  position="Representative"
                  phone="8989007678"
                  insta="https://www.instagram.com/samyak.gothi/"
                  email="ph1200725@iitd.ac.in"
                />
                <Infocard
                  image={Sibasish}
                  name="Sibasish Rout"
                  position="Representative"
                  phone="7205096336"
                  insta="https://www.instagram.com/routsibasish/"
                  email="cs1200386@iitd.ac.in"
                />
              </div>
              <div className="musicformat2_5">
                <Infocard
                  image={Eshan}
                  name="Eshan Jain"
                  position="Representative"
                  phone="9971099818"
                  insta="​​​​https://www.instagram.com/eshanjain292/"
                  email="cs5200424@iitd.ac.in"
                />
                <Infocard
                  image={Jash}
                  name="Jash Baua"
                  position="Representative"
                  phone="79772650566"
                  insta="https://www.instagram.com/jashb27/"
                  email="tt1201103@iitd.ac.in"
                />
                <Infocard
                  image={Divyansh}
                  name="D.Agarwal"
                  position="Representative"
                  phone="9425015832"
                  insta="https://www.instagram.com/divyanshagarrwal/"
                  email="ee1200488@iitd.ac.in"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Juneja"
                  position="Representative"
                  phone="9717600000"
                  insta="https://www.instagram.com/tanmay.juneja8/"
                  email="me2201064@iitd.ac.in"
                />
                <Infocard
                  image={Arjun}
                  name="Arjun Aggarwal"
                  position="Representative"
                  phone="8368662972"
                  insta="https://www.instagram.com/arjun__1909/"
                  email="ee3200744@iitd.ac.in"
                />
              </div>
            </div>
            <div className="musicformat3">
              <div className="musicformat3_1">
                <Infocard
                  image={Vaibhav}
                  name="Vaibhav Verma"
                  position="Secretary"
                  phone="7710861643"
                  insta="https://www.instagram.com/vaibhav__verma_/"
                  email="ee1190543@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_2">
                <Infocard
                  image={Vishal}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                  phone="9997157212"
                  insta="https://www.instagram.com/vishal_.a/"
                  email="ee1191083@iitd.ac.in"
                />
                <Infocard
                  image={dhwani}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                  phone="8447300970"
                  insta="https://www.instagram.com/dhwaniteckchandani/"
                  email="bb1190020@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_3">
                <Infocard
                  image={Anirudh}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                  phone="9818886653"
                  insta="https://www.instagram.com/anirudh4chauhan/"
                  email="ee1191072@iitd.ac.in"
                />
                <Infocard
                  image={Pawan}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                  phone="8755366026"
                  insta="https://www.instagram.com/itz_pawangoswami/"
                  email="ph1190645@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_4">
                <Infocard
                  image={Parth}
                  name="Parth Jaiswal"
                  position="Representative"
                  phone="9065447636"
                  insta="https://www.instagram.com/parthojais39/"
                  email="me1200951@iitd.ac.in"
                />
                <Infocard
                  image={Vatsal}
                  name="Vatsal Mathur"
                  position="Representative"
                  phone="9602019242"
                  insta="https://www.instagram.com/vatsss_going_on/"
                  email="tt1201182@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_5">
                <Infocard
                  image={Aaryan}
                  name="Aaryan Goyal"
                  position="Representative"
                  phone="9610208000"
                  insta="https://www.instagram.com/aaryan_goyal231/"
                  email="ee1200454@iitd.ac.in"
                />
                <Infocard
                  image={Megha}
                  name="M.Dharawat"
                  position="Representative"
                  phone="9828144046"
                  insta="https://www.instagram.com/megghhahahah/"
                  email="bb1200030@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_6">
                <Infocard
                  image={Yashas}
                  name="Yashas Kedia"
                  position="Representative"
                  phone="9831302420"
                  insta="https://www.instagram.com/yashas.kedia/"
                  email="mt1200863@iitd.ac.in"
                />
                <Infocard
                  image={Rishika}
                  name="Rishika Verma"
                  position="Representative"
                  phone="9693087393"
                  insta="https://www.instagram.com/_aarvie__/"
                  email="tt1201155@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_7">
                <Infocard
                  image={Samyak}
                  name="Samyak Gothi"
                  position="Representative"
                  phone="8989007678"
                  insta="https://www.instagram.com/samyak.gothi/"
                  email="ph1200725@iitd.ac.in"
                />
                <Infocard
                  image={Sibasish}
                  name="Sibasish Rout"
                  position="Representative"
                  phone="7205096336"
                  insta="https://www.instagram.com/routsibasish/"
                  email="cs1200386@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_8">
                <Infocard
                  image={Eshan}
                  name="Eshan Jain"
                  position="Representative"
                  phone="9971099818"
                  insta="​​​​https://www.instagram.com/eshanjain292/"
                  email="cs5200424@iitd.ac.in"
                />
                <Infocard
                  image={Jash}
                  name="Jash Baua"
                  position="Representative"
                  phone="79772650566"
                  insta="https://www.instagram.com/jashb27/"
                  email="tt1201103@iitd.ac.in"
                />
              </div>
              <div className="musicformat3_9">
                <Infocard
                  image={Divyansh}
                  name="D.Agarwal"
                  position="Representative"
                  phone="9425015832"
                  insta="https://www.instagram.com/divyanshagarrwal/"
                  email="ee1200488@iitd.ac.in"
                />
                <Infocard
                  image={Tanmay}
                  name="Tanmay Juneja"
                  position="Representative"
                  phone="9717600000"
                  insta="https://www.instagram.com/tanmay.juneja8/"
                  email="me2201064@iitd.ac.in"
                />
                <Infocard
                  image={Arjun}
                  name="Arjun Aggarwal"
                  position="Representative"
                  phone="8368662972"
                  insta="https://www.instagram.com/arjun__1909/"
                  email="ee3200744@iitd.ac.in"
                />
              </div>
            </div>
            <div className="musicformat4">
              <div className="musicformat4_1">
                <Infocard
                  image={Vaibhav}
                  name="Vaibhav Verma"
                  position="Secretary"
                  phone="7710861643"
                  insta="https://www.instagram.com/vaibhav__verma_/"
                  email="ee1190543@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_2">
                <Infocard
                  image={Vishal}
                  name="Vishal Asthana"
                  position="Diro-Cadence"
                  phone="9997157212"
                  insta="https://www.instagram.com/vishal_.a/"
                  email="ee1191083@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_3">
                <Infocard
                  image={dhwani}
                  name="D.Teckchandani"
                  position="Diro-Cadence"
                  phone="8447300970"
                  insta="https://www.instagram.com/dhwaniteckchandani/"
                  email="bb1190020@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_4">
                <Infocard
                  image={Anirudh}
                  name="A.Chauhan"
                  position="Diro-Mridang"
                  phone="9818886653"
                  insta="https://www.instagram.com/anirudh4chauhan/"
                  email="ee1191072@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_5">
                <Infocard
                  image={Pawan}
                  name="Pawan Goswami"
                  position="Diro-Mridang"
                  phone="8755366026"
                  insta="https://www.instagram.com/itz_pawangoswami/"
                  email="ph1190645@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_6">
                <Infocard
                  image={Parth}
                  name="Parth Jaiswal"
                  position="Representative"
                  phone="9065447636"
                  insta="https://www.instagram.com/parthojais39/"
                  email="me1200951@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_7">
                <Infocard
                  image={Vatsal}
                  name="Vatsal Mathur"
                  position="Representative"
                  phone="9602019242"
                  insta="https://www.instagram.com/vatsss_going_on/"
                  email="tt1201182@iitd.ac.in"
                />
                <Infocard
                  image={Aaryan}
                  name="Aaryan Goyal"
                  position="Representative"
                  phone="9610208000"
                  insta="https://www.instagram.com/aaryan_goyal231/"
                  email="ee1200454@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_8">
                <Infocard
                  image={Megha}
                  name="M.Dharawat"
                  position="Representative"
                  phone="9828144046"
                  insta="https://www.instagram.com/megghhahahah/"
                  email="bb1200030@iitd.ac.in"
                />
                <Infocard
                  image={Yashas}
                  name="Yashas Kedia"
                  position="Representative"
                  phone="9831302420"
                  insta="https://www.instagram.com/yashas.kedia/"
                  email="mt1200863@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_9">
                <Infocard
                  image={Rishika}
                  name="Rishika Verma"
                  position="Representative"
                  phone="9693087393"
                  insta="https://www.instagram.com/_aarvie__/"
                  email="tt1201155@iitd.ac.in"
                />
                <Infocard
                  image={Samyak}
                  name="Samyak Gothi"
                  position="Representative"
                  phone="8989007678"
                  insta="https://www.instagram.com/samyak.gothi/"
                  email="ph1200725@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_10">
                <Infocard
                  image={Sibasish}
                  name="Sibasish Rout"
                  position="Representative"
                  phone="7205096336"
                  insta="https://www.instagram.com/routsibasish/"
                  email="cs1200386@iitd.ac.in"
                />
                <Infocard
                  image={Eshan}
                  name="Eshan Jain"
                  position="Representative"
                  phone="9971099818"
                  insta="​​​​https://www.instagram.com/eshanjain292/"
                  email="cs5200424@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_11">
                <Infocard
                  image={Jash}
                  name="Jash Baua"
                  position="Representative"
                  phone="79772650566"
                  insta="https://www.instagram.com/jashb27/"
                  email="tt1201103@iitd.ac.in"
                />
                <Infocard
                  image={Divyansh}
                  name="D.Agarwal"
                  position="Representative"
                  phone="9425015832"
                  insta="https://www.instagram.com/divyanshagarrwal/"
                  email="ee1200488@iitd.ac.in"
                />
              </div>
              <div className="musicformat4_12">
                <Infocard
                  image={Tanmay}
                  name="Tanmay Juneja"
                  position="Representative"
                  phone="9717600000"
                  insta="https://www.instagram.com/tanmay.juneja8/"
                  email="me2201064@iitd.ac.in"
                />
                <Infocard
                  image={Arjun}
                  name="Arjun Aggarwal"
                  position="Representative"
                  phone="8368662972"
                  insta="https://www.instagram.com/arjun__1909/"
                  email="ee3200744@iitd.ac.in"
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
