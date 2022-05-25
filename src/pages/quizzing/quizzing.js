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
import image1 from "./images/64blocks.jpg";
import image2 from "./images/occams.jpg";
import image3 from "./images/mastermind.jpg";
import image4 from "./images/images.jpg";
import QuizzingNavbar from "./Navbar/QuizzingNavbar";
import QuizzingFooter from "./Footer/QuizzingFooter";
import Infocard from "./Infocard/Infocard";
// import DefaultPic from "./Infocard/Rectangle 103.png";
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
              At first glance, it would seem that all we do is ask each other
              random stuff and reward those in honour who answer correctly.
              While that may be true in essence, we do this in a variety of
              genres AND in a variety of formats. From covering the generic
              fields of quizzing to even obscure fandoms, we cater to any
              information that can be presented in questions in a fun and
              interesting manner. Moreover, it’s not all
              “if-you-know-then-you-know”; most of the questions are curated by
              our quizmasters so that you can logically arrive at the answer
              too. So put on your thinking caps (or deerstalker hats) and join
              us on this never-ending pleasurable quest of acquiring random
              knowledge!{" "}
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
                  <h3>64 Blocks</h3>
                  <p>
                    The Mega-General quiz to uncover the secrets that arise from
                    the overlapping of the major genres
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
                  <h3>Occam’s Razor</h3>
                  <p>
                    The most challenging questions that measure your ability to
                    put simple fundas to use effectively
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
                  <h3>Mastermind</h3>
                  <p>
                    Race against time to clinch this crown amongst the champions
                    of their respective fields
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
                  <h3> League Quizzes</h3>
                  <p>
                    7 Intra-IITD League Teams battle it out for the League
                    trophy across 5 quizzes throughout the year
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image4}
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
                  phone="9910377165"
                  insta="https://www.instagram.com/attila_the_rehun/"
                  email="bhatia.rehan4@icloud.com"
                />
              </div>
              <div className="quizzingformat1_2">
                <Infocard
                  image={Akshit}
                  name="Akshit Bhardwaj"
                  position="Representative"
                  phone="9643108902"
                  insta="https://www.instagram.com/akshit_._bhardwaj4/"
                  email="akshitbhardwaj4@gmail.com"
                />

                <Infocard
                  image={Varun}
                  name="V.Vaidyanathan"
                  position="Representative"
                  phone="9490598801"
                  insta="https://www.instagram.com/varun__vaidyanathan/"
                  email="varunvaidyanathan02@gmail.com"
                />
                <Infocard
                  image={Srijan}
                  name="Srijan Gupta"
                  position="Representative"
                  phone="9953893090"
                  insta="https://www.instagram.com/srijan920/"
                  email="srijang10@gmail.com"
                />
                <Infocard
                  image={Utkarsh}
                  name="Utkarsh Dogra"
                  position="Representative"
                  phone="7018239758"
                  insta="https://www.instagram.com/utkarshdogra14/"
                  email="utkarshdogra14@gmail.com"
                />
                <Infocard
                  image={Afreen}
                  name="Afreen Haider"
                  position="Representative"
                  phone="9123326525"
                  insta="https://www.instagram.com/_apple_crab_/"
                  email="afreenhaider07@gmail.com"
                />
                <Infocard
                  image={Priyansita}
                  name="P.Agarwalla"
                  position="Representative"
                  phone="8851546215"
                  insta="https://www.instagram.com/pris_peralta/"
                  email="priyansita@gmail.com"
                />
              </div>
              <div className="quizzingformat1_3">
                <Infocard
                  image={Aaghaz}
                  name="Aaghaz Mahajan"
                  position="Representative"
                  phone="9311204717"
                  insta="https://www.instagram.com/cooldudeaaghaz/"
                  email="aaghazaman@gmail.com"
                />
                <Infocard
                  image={Aniruddha}
                  name="Aniruddha Deb"
                  position="Representative"
                  phone="8554816257"
                  insta="https://www.instagram.com/iitdqc"
                  email="aniruddha.deb.2002@gmail.com"
                />
                <Infocard
                  image={Soumil}
                  name="Soumil Aggarwal"
                  position="Representative"
                  phone="9910994282"
                  insta="https://www.instagram.com/soumilaggarwal_01/"
                  email="soumilaggarwal95@gmail.com"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Sinha"
                  position="Representative"
                  phone="8826334285"
                  insta="https://www.instagram.com/aryan.sinha01/"
                  email="sinhaaryan88@gmail.com"
                />
                <Infocard
                  image={Anish}
                  name="Anish Roy"
                  position="Representative"
                  phone="7903610615"
                  insta="https://www.instagram.com/anish.roy.42/"
                  email="aroy.tom23@gmail.com"
                />
                <Infocard
                  image={Prasun}
                  name="Prasun Nayak"
                  position="Representative"
                  phone="9326681227"
                  insta="https://www.instagram.com/prasun_nayak22/"
                  email="prasun.nayak4@gmail.com"
                />
                <Infocard
                  image={Gautam}
                  name="Gautam Jha"
                  position="Representative"
                  phone="8376008812"
                  insta="https://www.instagram.com/j.gautam09/"
                  email="j9gautam@gmail.com"
                />
              </div>
            </div>
            <div className="quizzingformat2">
              <div className="quizzingformat2_1">
                <Infocard
                  image={Rehan}
                  name="Rehan Bhatia"
                  position="Secretary"
                  phone="9910377165"
                  insta="https://www.instagram.com/attila_the_rehun/"
                  email="bhatia.rehan4@icloud.com"
                />
              </div>
              <div className="quizzingformat2_2">
                <Infocard
                  image={Akshit}
                  name="Akshit Bhardwaj"
                  position="Representative"
                  phone="9643108902"
                  insta="https://www.instagram.com/akshit_._bhardwaj4/"
                  email="akshitbhardwaj4@gmail.com"
                />

                <Infocard
                  image={Varun}
                  name="V.Vaidyanathan"
                  position="Representative"
                  phone="9490598801"
                  insta="https://www.instagram.com/varun__vaidyanathan/"
                  email="varunvaidyanathan02@gmail.com"
                />
                <Infocard
                  image={Srijan}
                  name="Srijan Gupta"
                  position="Representative"
                  phone="9953893090"
                  insta="https://www.instagram.com/srijan920/"
                  email="srijang10@gmail.com"
                />
                <Infocard
                  image={Utkarsh}
                  name="Utkarsh Dogra"
                  position="Representative"
                  phone="7018239758"
                  insta="https://www.instagram.com/utkarshdogra14/"
                  email="utkarshdogra14@gmail.com"
                />
              </div>
              <div className="quizzingformat2_3">
                <Infocard
                  image={Afreen}
                  name="Afreen Haider"
                  position="Representative"
                  phone="9123326525"
                  insta="https://www.instagram.com/_apple_crab_/"
                  email="afreenhaider07@gmail.com"
                />
                <Infocard
                  image={Priyansita}
                  name="P.Agarwalla"
                  position="Representative"
                  phone="8851546215"
                  insta="https://www.instagram.com/pris_peralta/"
                  email="priyansita@gmail.com"
                />
                <Infocard
                  image={Aaghaz}
                  name="Aaghaz Mahajan"
                  position="Representative"
                  phone="9311204717"
                  insta="https://www.instagram.com/cooldudeaaghaz/"
                  email="aaghazaman@gmail.com"
                />
                <Infocard
                  image={Aniruddha}
                  name="Aniruddha Deb"
                  position="Representative"
                  phone="8554816257"
                  insta="https://www.instagram.com/iitdqc"
                  email="aniruddha.deb.2002@gmail.com"
                />
              </div>
              <div className="quizzingformat2_4">
                <Infocard
                  image={Soumil}
                  name="Soumil Aggarwal"
                  position="Representative"
                  phone="9910994282"
                  insta="https://www.instagram.com/soumilaggarwal_01/"
                  email="soumilaggarwal95@gmail.com"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Sinha"
                  position="Representative"
                  phone="8826334285"
                  insta="https://www.instagram.com/aryan.sinha01/"
                  email="sinhaaryan88@gmail.com"
                />
                <Infocard
                  image={Anish}
                  name="Anish Roy"
                  position="Representative"
                  phone="7903610615"
                  insta="https://www.instagram.com/anish.roy.42/"
                  email="aroy.tom23@gmail.com"
                />
                <Infocard
                  image={Prasun}
                  name="Prasun Nayak"
                  position="Representative"
                  phone="9326681227"
                  insta="https://www.instagram.com/prasun_nayak22/"
                  email="prasun.nayak4@gmail.com"
                />
                <Infocard
                  image={Gautam}
                  name="Gautam Jha"
                  position="Representative"
                  phone="8376008812"
                  insta="https://www.instagram.com/j.gautam09/"
                  email="j9gautam@gmail.com"
                />
              </div>
            </div>
            <div className="quizzingformat3">
              <div className="quizzingformat3_1">
                <Infocard
                  image={Rehan}
                  name="Rehan Bhatia"
                  position="Secretary"
                  phone="9910377165"
                  insta="https://www.instagram.com/attila_the_rehun/"
                  email="bhatia.rehan4@icloud.com"
                />
              </div>
              <div className="quizzingformat3_2">
                <Infocard
                  image={Akshit}
                  name="Akshit Bhardwaj"
                  position="Representative"
                  phone="9643108902"
                  insta="https://www.instagram.com/akshit_._bhardwaj4/"
                  email="akshitbhardwaj4@gmail.com"
                />

                <Infocard
                  image={Varun}
                  name="V.Vaidyanathan"
                  position="Representative"
                  phone="9490598801"
                  insta="https://www.instagram.com/varun__vaidyanathan/"
                  email="varunvaidyanathan02@gmail.com"
                />
              </div>
              <div className="quizzingformat3_3">
                <Infocard
                  image={Srijan}
                  name="Srijan Gupta"
                  position="Representative"
                  phone="9953893090"
                  insta="https://www.instagram.com/srijan920/"
                  email="srijang10@gmail.com"
                />
                <Infocard
                  image={Utkarsh}
                  name="Utkarsh Dogra"
                  position="Representative"
                  phone="7018239758"
                  insta="https://www.instagram.com/utkarshdogra14/"
                  email="utkarshdogra14@gmail.com"
                />
              </div>
              <div className="quizzingformat3_4">
                <Infocard
                  image={Afreen}
                  name="Afreen Haider"
                  position="Representative"
                  phone="9123326525"
                  insta="https://www.instagram.com/_apple_crab_/"
                  email="afreenhaider07@gmail.com"
                />
                <Infocard
                  image={Priyansita}
                  name="P.Agarwalla"
                  position="Representative"
                  phone="8851546215"
                  insta="https://www.instagram.com/pris_peralta/"
                  email="priyansita@gmail.com"
                />
              </div>
              <div className="quizzingformat3_5">
                <Infocard
                  image={Aaghaz}
                  name="Aaghaz Mahajan"
                  position="Representative"
                  phone="9311204717"
                  insta="https://www.instagram.com/cooldudeaaghaz/"
                  email="aaghazaman@gmail.com"
                />
                <Infocard
                  image={Aniruddha}
                  name="Aniruddha Deb"
                  position="Representative"
                  phone="8554816257"
                  insta="https://www.instagram.com/iitdqc"
                  email="aniruddha.deb.2002@gmail.com"
                />
              </div>
              <div className="quizzingformat3_6">
                <Infocard
                  image={Soumil}
                  name="Soumil Aggarwal"
                  position="Representative"
                  phone="9910994282"
                  insta="https://www.instagram.com/soumilaggarwal_01/"
                  email="soumilaggarwal95@gmail.com"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Sinha"
                  position="Representative"
                  phone="8826334285"
                  insta="https://www.instagram.com/aryan.sinha01/"
                  email="sinhaaryan88@gmail.com"
                />
              </div>
              <div className="quizzingformat3_7">
                <Infocard
                  image={Anish}
                  name="Anish Roy"
                  position="Representative"
                  phone="7903610615"
                  insta="https://www.instagram.com/anish.roy.42/"
                  email="aroy.tom23@gmail.com"
                />
                <Infocard
                  image={Prasun}
                  name="Prasun Nayak"
                  position="Representative"
                  phone="9326681227"
                  insta="https://www.instagram.com/prasun_nayak22/"
                  email="prasun.nayak4@gmail.com"
                />
                <Infocard
                  image={Gautam}
                  name="Gautam Jha"
                  position="Representative"
                />
              </div>
            </div>
            <div className="quizzingformat4">
              <div className="quizzingformat4_1">
                <Infocard
                  image={Rehan}
                  name="Rehan Bhatia"
                  position="Secretary"
                  phone="9910377165"
                  insta="https://www.instagram.com/attila_the_rehun/"
                  email="bhatia.rehan4@icloud.com"
                />
              </div>
              <div className="quizzingformat4_2">
                <Infocard
                  image={Akshit}
                  name="Akshit Bhardwaj"
                  position="Representative"
                  phone="9643108902"
                  insta="https://www.instagram.com/akshit_._bhardwaj4/"
                  email="akshitbhardwaj4@gmail.com"
                />
              </div>
              <div className="quizzingformat4_3">
                <Infocard
                  image={Varun}
                  name="V.Vaidyanathan"
                  position="Representative"
                  phone="9490598801"
                  insta="https://www.instagram.com/varun__vaidyanathan/"
                  email="varunvaidyanathan02@gmail.com"
                />
                <Infocard
                  image={Srijan}
                  name="Srijan Gupta"
                  position="Representative"
                  phone="9953893090"
                  insta="https://www.instagram.com/srijan920/"
                  email="srijang10@gmail.com"
                />
              </div>
              <div className="quizzingformat4_4">
                <Infocard
                  image={Utkarsh}
                  name="Utkarsh Dogra"
                  position="Representative"
                  phone="7018239758"
                  insta="https://www.instagram.com/utkarshdogra14/"
                  email="utkarshdogra14@gmail.com"
                />
                <Infocard
                  image={Afreen}
                  name="Afreen Haider"
                  position="Representative"
                  phone="9123326525"
                  insta="https://www.instagram.com/_apple_crab_/"
                  email="afreenhaider07@gmail.com"
                />
              </div>
              <div className="quizzingformat4_5">
                <Infocard
                  image={Priyansita}
                  name="P.Agarwalla"
                  position="Representative"
                  phone="8851546215"
                  insta="https://www.instagram.com/pris_peralta/"
                  email="priyansita@gmail.com"
                />
                <Infocard
                  image={Aaghaz}
                  name="Aaghaz Mahajan"
                  position="Representative"
                  phone="9311204717"
                  insta="https://www.instagram.com/cooldudeaaghaz/"
                  email="aaghazaman@gmail.com"
                />
              </div>
              <div className="quizzingformat4_6">
                <Infocard
                  image={Aniruddha}
                  name="Aniruddha Deb"
                  position="Representative"
                  phone="8554816257"
                  insta="https://www.instagram.com/iitdqc"
                  email="aniruddha.deb.2002@gmail.com"
                />
                <Infocard
                  image={Soumil}
                  name="Soumil Aggarwal"
                  position="Representative"
                  phone="9910994282"
                  insta="https://www.instagram.com/soumilaggarwal_01/"
                  email="soumilaggarwal95@gmail.com"
                />
              </div>
              <div className="quizzingformat4_7">
                <Infocard
                  image={Aryan}
                  name="Aryan Sinha"
                  position="Representative"
                  phone="8826334285"
                  insta="https://www.instagram.com/aryan.sinha01/"
                  email="sinhaaryan88@gmail.com"
                />
                <Infocard
                  image={Anish}
                  name="Anish Roy"
                  position="Representative"
                  phone="7903610615"
                  insta="https://www.instagram.com/anish.roy.42/"
                  email="aroy.tom23@gmail.com"
                />
              </div>
              <div className="quizzingformat4_8">
                <Infocard
                  image={Prasun}
                  name="Prasun Nayak"
                  position="Representative"
                  phone="9326681227"
                  insta="https://www.instagram.com/prasun_nayak22/"
                  email="prasun.nayak4@gmail.com"
                />
                <Infocard
                  image={Gautam}
                  name="Gautam Jha"
                  position="Representative"
                  phone="8376008812"
                  insta="https://www.instagram.com/j.gautam09/"
                  email="j9gautam@gmail.com"
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
