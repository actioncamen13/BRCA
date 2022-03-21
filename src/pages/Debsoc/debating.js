/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleDebating.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "./images/logo.png";
import image1 from "./images/IITPD.jpg";
import image2 from "./images/INTRAIITPD.jpg";
import image3 from "./images/AMPROAM.jpg";
import image4 from "./images/DEBUTANT.jpg";
import image5 from "./images/workshops.jpg";
import DebatingNavbar from "./Navbar/DebatingNavbar";
import DebatingFooter from "./Footer/DebatingFooter";
import Infocard from "./Infocard/Infocard";
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
            <h3>DEBSOC Club</h3>
            <p>
              The ability to conceive, articulate and evaluate arguments through
              debating remains not only the lifetime of democracy and Society
              but essential to the development of an engaged and ethical
              individual living in a contemporary technological democratic
              society. Debating Society of IIT Delhi welcomes you on board to
              criticize, appreciate and advocate the various social-political
              and philosophical Ideas to debate and learn along the way. A
              family built on a common love of arguments is bound to be
              problematic and yet we find ourselves attached to this
              ever-bickering madhouse, a platform for learning, a platform for
              building confidence and questioning your beliefs. Through times
              good and bad this club continues to prosper because it's built on
              proving greatness to each other and to ourselves and that's what
              we do best.{" "}
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
                  <h3>IITPD</h3>
                  <p>
                    IIT Parliament Debate, the signature event of DebSoc. Taking
                    place early in the second semester, it attracts debaters
                    from all over India, vying to take home the huge cash prize
                    and the trophy. Additionally it provides the debating junta
                    of IIT the invaluable experience of conducting such a large
                    event, and a chance to interact with the crème-de-la-crème
                    of debaters.
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
                  <h3>Intra IITPD</h3>
                  <p>
                    Back to basics guys. Form teams of 3, battle it out in the
                    classic 3v3 format. A golden chance to prove your mettle and
                    get the tag of the best debater of IIT
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
                  <h3>Am-Pro-Am</h3>
                  <p>
                    As seniors team up with freshers to teach them (or get
                    taught :p) in a week of enthralling fun filled debates,
                    AmProAm becomes one of the best learning experiences for
                    freshers.
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
                  <h3>Debutant</h3>
                  <p>
                    Debutant is the DebSoc way of celebrating Rendezvous. With
                    over 30 teams, 100 adjes and prestigious Chief Adjudicators,
                    Debutant is now one of the largest fresher tournaments in
                    the Delhi circuit. Following standard 3v3 Asian
                    Parliamentary Debate format, freshers get a chance to
                    announce themselves in the debating circuit.
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
                  <h3> Debating Workshops </h3>
                  <p>
                    An all year round programme, wherein students from any year
                    can sit in and attend workshops from various seniors and
                    Aimed to fill the void all our debaters have in knowledge of
                    non-technical subjects such as economics, philosophy,
                    history etc, this move is perhaps the best way to make IIT
                    Delhi a force to reckon with in the Debating Circuits all
                    over India.
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
                  image={Sarvagya}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat2_2">
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
              </div>
              <div className="debatingformat2_3">
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
              </div>
              <div className="debatingformat2_4">
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
            <div className="debatingformat3">
              <div className="debatingformat3_1">
                <Infocard
                  image={Sarvagya}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat3_2">
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
              </div>
              <div className="debatingformat3_3">
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
              </div>
              <div className="debatingformat3_4">
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
              <div className="debatingformat3_5">
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
              </div>
              <div className="debatingformat3_6">
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
              </div>
              <div className="debatingformat3_7">
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
            <div className="debatingformat4">
              <div className="debatingformat4_1">
                <Infocard
                  image={Sarvagya}
                  name="S.Chhabra"
                  position="Secretary"
                />
              </div>
              <div className="debatingformat4_2">
                <Infocard
                  image={Rahul}
                  name="Rahul R. Shah"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_3">
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
              </div>
              <div className="debatingformat4_4">
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
              </div>
              <div className="debatingformat4_5">
                <Infocard
                  image={Sanat}
                  name="Sanat Vohra"
                  position="Representative"
                />
                <Infocard
                  image={Umayr}
                  name="Umayr Surti"
                  position="Representative"
                />
              </div>
              <div className="debatingformat4_6">
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
              </div>
              <div className="debatingformat4_7">
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
              </div>
              <div className="debatingformat4_8">
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
