/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleFacc.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../facc/images/logo.png";
import image1 from "./images/1.png";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.png";
import FaccNavbar from "./Navbar/FaccNavbar";
import FaccFooter from "./Footer/FaccFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";

const Facc = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="faccpage">
      <div className="faccnavbar1">
        <FaccNavbar />
      </div>
      <div className="faccbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Fine Arts Club</h3>
            <p>
              FACC is the perfect platform for you to showcase your artistic
              capabilities and also learn a various new art-forms. With events
              like Oil Painting, Charcoal Painting, Mask Painting and workshops
              on artistic activities like Origami, there is a lot to fulfill
              your creative appetite. The club also organizes various events
              such as Street Painting, Graffiti, Face Painting etc during
              Rendezvous. The FAC junta is renowned for its untiring efforts,
              and is one of closest knit communities on campus.{" "}
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
                  <h3>Kirigami Competition</h3>
                  <p>
                    Kirigami is a variation of origami, the Japanese art of
                    folding paper. In kirigami, the paper is cut as well as
                    being folded, resulting in a three-dimensional design that
                    stands away from the page. Kirigami typically does not use
                    glue. It is a paper craft competition. It is similar to
                    origami but includes paper cutting and pasting too.
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
                  <h3>Still Life Sketching</h3>
                  <p>
                    A still life is a drawing or painting that focuses on still
                    objects. The subject matter is inanimate and never moves,
                    typically with a focus on household objects, flowers, or
                    fruits
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
                  <h3> Charcoal sketching competition</h3>
                  <p>
                    Charcoal Sketching, use of charred sticks of wood to make
                    finished drawings and preliminary studies. They are a great
                    medium to create hyper realistic images.
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
        <div className="faccteam">
          <div className="faccteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="faccteamcontent">
            <div className="faccformat1">
              <div className="faccformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Manish Yadav"
                  position="Secretary"
                  phone="9467977491"
                  email="manish005yadav008@gmail.com"
                />
              </div>
              <div className="faccformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="Saurabh"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Surya Sachan"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sarfaraz Ansari"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Neha Ghunawat"
                  position="Director"
                />
              </div>
              <div className="faccformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Manthan Dalmia"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Shivran"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kailash Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aniket"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Dhruv"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Ishan"
                  position="Representative"
                />
              </div>
              <div className="faccformat1_4">
                <Infocard
                  image={DefaultPic}
                  name="Nikhil Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prahas Ranjan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vidushi Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Naman Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nishant Sharma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rashee Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Piyush Soni"
                  position="Representative"
                />
              </div>
            </div>
            <div className="faccformat2">
              <div className="faccformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Manish Yadav"
                  position="Secretary"
                  phone="9467977491"
                  email="manish005yadav008@gmail.com"
                />
              </div>
              <div className="faccformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Saurabh"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Surya Sachan"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sarfaraz Ansari"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Neha Ghunawat"
                  position="Director"
                />
              </div>
              <div className="faccformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Manthan Dalmia"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Shivran"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kailash Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aniket"
                  position="Representative"
                />
              </div>
              <div className="faccformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Dhruv"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Ishan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nikhil Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prahas Ranjan"
                  position="Representative"
                />
              </div>
              <div className="faccformat2_5">
                <Infocard
                  image={DefaultPic}
                  name="Vidushi Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Naman Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nishant Sharma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rashee Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Piyush Soni"
                  position="Representative"
                />
              </div>
            </div>
            <div className="faccformat3">
              <div className="faccformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Manish Yadav"
                  position="Secretary"
                  phone="9467977491"
                  email="manish005yadav008@gmail.com"
                />
              </div>
              <div className="faccformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Saurabh"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Surya Sachan"
                  position="Director"
                />
              </div>
              <div className="faccformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Sarfaraz Ansari"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Neha Ghunawat"
                  position="Director"
                />
              </div>
              <div className="faccformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Manthan Dalmia"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Shivran"
                  position="Representative"
                />
              </div>
              <div className="faccformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Kailash Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aniket"
                  position="Representative"
                />
              </div>
              <div className="faccformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Dhruv"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Ishan"
                  position="Representative"
                />
              </div>
              <div className="faccformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Nikhil Verma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prahas Ranjan"
                  position="Representative"
                />
              </div>
              <div className="faccformat3_8">
                <Infocard
                  image={DefaultPic}
                  name="Vidushi Agrawal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Naman Jain"
                  position="Representative"
                />
              </div>
              <div className="faccformat3_9">
                <Infocard
                  image={DefaultPic}
                  name="Nishant Sharma"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rashee Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Piyush Soni"
                  position="Representative"
                />
              </div>
            </div>
            <div className="faccformat4">
              <div className="faccformat4_1">
                <Infocard
                  image={DefaultPic}
                  name="Manish Yadav"
                  position="Secretary"
                  phone="9467977491"
                  email="manish005yadav008@gmail.com"
                />
              </div>
              <div className="faccformat4_2">
                <Infocard
                  image={DefaultPic}
                  name="Sarfaraz Ansari"
                  position="Director"
                />
              </div>
              <div className="faccformat4_3">
                <Infocard
                  image={DefaultPic}
                  name="Neha Ghunawat"
                  position="Director"
                />
              </div>
              <div className="faccformat4_4">
                <Infocard
                  image={DefaultPic}
                  name="Sarfaraz Ansari"
                  position="Director"
                />
              </div>
              <div className="faccformat4_5">
                <Infocard
                  image={DefaultPic}
                  name="Neha Ghunawat"
                  position="Director"
                />
              </div>
              <div className="faccformat4_6">
                <Infocard
                  image={DefaultPic}
                  name="Manthan Dalmia"
                  position="Representative"
                />
              </div>
              <div className="faccformat4_7">
                <Infocard
                  image={DefaultPic}
                  name="Vaibhav Shivran"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Kailash Gupta"
                  position="Representative"
                />
              </div>
              <div className="faccformat4_8">
                <Infocard
                  image={DefaultPic}
                  name="Aniket"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Dhruv"
                  position="Representative"
                />
              </div>
              <div className="faccformat4_9">
                <Infocard
                  image={DefaultPic}
                  name="Ishan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nikhil Verma"
                  position="Representative"
                />
              </div>
              <div className="faccformat4_10">
                <Infocard
                  image={DefaultPic}
                  name="Prahas Ranjan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vidushi Agrawal"
                  position="Representative"
                />
              </div>
              <div className="faccformat4_11">
                <Infocard
                  image={DefaultPic}
                  name="Naman Jain"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nishant Sharma"
                  position="Representative"
                />
              </div>
              <div className="faccformat4_12">
                <Infocard
                  image={DefaultPic}
                  name="Rashee Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Piyush Soni"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faccfooter1">
        <FaccFooter />
      </div>
    </div>
  );
};

export default Facc;
