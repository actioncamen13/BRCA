/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/stylesHome.css";
import "../css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import vector from "../images/Vector.png";
import vector2 from "../images/1.png";
import vector3 from "../images/2.png";
import vector4 from "../images/3.png";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import girl from "../images/girl.jpg";
import HomeNavbar from "./Navbar/HomeNavbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter,faFacebook,faInstagram } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const images = [{ vector }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="mainSecHome animate__animated animate__fadeIn">
      <HomeNavbar />
      <div className="">
        <div className="section2 ">
          <div className="texts">
            <h1 className="hhead">
              BRCA, <span className="iit"> IIT Delhi </span>
            </h1>
            <h3 className="shead">
              Board for Recreational and Creative Activities
            </h3>
            <p>
              BRCA stands for the Board For Recreational and Creative Activties.
              It consists of eleven clubs that conduct events - competitive and
              non- competitive throughout the year in IIT Delhi. BRCA also
              conducts Rendezvous each year, which is one of the largest college
              cultural festivals in India.
            </p>
            <a href="/clubs">
              <button className="btn btn-lg exp">Start Exploring</button>
            </a>
          </div>
          <div>
            {/* <img className="images" src={vector} /> */}
            <Zoom  className="images"
            {...zoomOutProperties}
            style={{}}>
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <img
                  className="imag"
                  style={{ objectFit: "cover" }}
                  src={vector}
                />
              </div>
            ))}
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <img
                  className="imag"
                  style={{ objectFit: "cover" }}
                  src={vector2}
                />
              </div>
            ))}
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <img
                  className="imag"
                  style={{ objectFit: "cover" }}
                  src={vector3}
                />
              </div>
            ))}
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <img
                  className="imag"
                  style={{ objectFit: "cover" }}
                  src={vector4}
                />
              </div>
            ))}
            </Zoom>
          </div>
        </div>

        <div className="s_icons text-right">
          {/* <a href="" target="blank" className="fa fa-twitter">
            {" "}
          </a> */}
          <a
            href="https://www.facebook.com/cultureIITD/?ref=page_internal"
            className=" fbhome fa fa-facebook "
            target="blank"
          >
            {" "}
          </a>
          <a
            href="https://www.instagram.com/brcaiitd/?hl=en"
            className=" instahome fa fa-instagram "
            target="blank"
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
