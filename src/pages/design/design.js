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
import Atharva from "./atharva.png";
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
                  image={Atharva}
                  name="Atharva Agarwal"
                  position="Secretary"
                  phone="9891190100"
                  insta="https://www.instagram.com/aatharva16/"
                  email="aatharva16@gmail.com"
                />
              </div>
              <div className="designformat1_2">
                <Infocard
                  image={sahil}
                  name="Sahil Kumar Raj"
                  position="Director"
                  phone="8851905910"
                  insta="https://instagram.com/grave_it_on_lens?utm_medium=copy_link"
                  email="graveitonlens0209@gmail.com"
                />
                <Infocard
                  image={devansh}
                  name="Devansh"
                  position="Director"
                  phone="9548834345"
                  insta="https://www.instagram.com/devansh_28_panwar/"
                  email="devanshpanwar028@gmail.com"
                />
                <Infocard
                  image={aryan}
                  name="A.Choudhary"
                  position="Director"
                  phone="9664158847"
                  insta="https://www.instagram.com/onebyezero/"
                  email="aryanchoudhary66@gmail.com"
                />
                <Infocard
                  image={shobhit}
                  name="S.Bhargava"
                  position="Director"
                  phone="8959247116"
                  insta="https://instagram.com/big_ooooooof_shobhit?utm_medium=copy_link"
                  email="bhargavashobhit7776@gmail.com"
                />
                <Infocard
                  image={mihir}
                  name="Mihir Okte"
                  position="Director"
                  phone="9713020444"
                  insta="https://www.instagram.com/mihirokte/"
                  email="mihirokte77@gmail.com"
                />
              </div>
              <div className="designformat1_3">
                <Infocard
                  image={nishantk}
                  name="Nishant Kumar"
                  position="Representative"
                  phone="8441074937"
                  insta="https://www.instagram.com/lucifer._.0.0.7/"
                  email="nishant.kr.singh.2882@gmail.com"
                />
                <Infocard
                  image={paras}
                  name="Paras Garg"
                  position="Representative"
                  phone="7696784321"
                  insta="https://www.instagram.com/garg_paras029"
                  email="gargparas029@gmail.com"
                />
                <Infocard
                  image={tanya}
                  name="Tanya Goyal"
                  position="Representative"
                  phone="8800485769"
                  insta="https://www.instagram.com/tanyagoyal07/"
                  email="tanyagoyaliitd@gmail.com"
                />
                <Infocard
                  image={manan}
                  name="Manan Katiyar"
                  position="Representative"
                  phone="8860413981"
                  insta="https://www.instagram.com/manan_chintan"
                  email="manankatiyar2000@gmail.com"
                />
                <Infocard
                  image={utkarsh}
                  name="Utkarsh Goyal"
                  position="Representative"
                  phone="9958852082"
                  insta="https://www.instagram.com/goyalutkarsh_"
                  email="utkarshgoyal1002@gmail.com"
                />
                <Infocard
                  image={kunal}
                  name="Kunal Bairwa"
                  position="Representative"
                  phone="7452031422"
                  insta="https://www.instagram.com/kunalbairwa232"
                  email="kunalbairwa232@gmail.com"
                />
              </div>
              <div className="designformat1_4">
                <Infocard
                  image={adityanarayan}
                  name="Aditya Narayan"
                  position="Representative"
                  phone="9572074662"
                  insta="https://www.instagram.com/adi.xter/"
                  email="cooladitya1802@gmail.com"
                />
                <Infocard
                  image={kushagra}
                  name="Kushagra Gupta"
                  position="Representative"
                  phone="7389074160"
                  insta="https://www.instagram.com/kushagra5187/"
                  email="kushg2002@gmail.com"
                />
                <Infocard
                  image={vaibhav}
                  name="Vaibhav Saha"
                  position="Representative"
                  phone="9430050427"
                  insta="https://www.instagram.com/saha_vaibhav/"
                  email="vaibhavsaha.cs.iitd@gmail.com"
                />
                <Infocard
                  image={madhurya}
                  name="M.Panwar"
                  position="Representative"
                  phone="8112244944"
                  insta="https://www.instagram.com/madhurya_147/"
                  email="madhurya.panwar106@gmail.com"
                />
                <Infocard
                  image={abhishek}
                  name="Abhishek Pandey"
                  position="Representative"
                  phone="9899303075"
                  insta="https://www.instagram.com/tan_pi_by_2/"
                  email="abhishekryanite14@gmail.com"
                />
                <Infocard
                  image={pratyush}
                  name="Pratyush Saini"
                  position="Representative"
                  phone="7668235003"
                  insta="https://www.instagram.com/pratyushh__15/"
                  email="pratyush.saini02@gmail.com"
                />
                <Infocard
                  image={sakshamb}
                  name="S.Bhardwaj"
                  position="Representative"
                  phone="9205336434"
                  insta="https://www.instagram.com/sakshambh03/"
                  email="saksham.bh3@gmail.com"
                />
              </div>
            </div>
            <div className="designformat2">
              <div className="designformat2_1">
                <Infocard
                  image={Atharva}
                  name="Atharva Agarwal"
                  position="Secretary"
                  phone="9891190100"
                  insta="https://www.instagram.com/aatharva16/"
                  email="aatharva16@gmail.com"
                />
              </div>
              <div className="designformat2_2">
                <Infocard
                  image={sahil}
                  name="Sahil Kumar Raj"
                  position="Director"
                  phone="8851905910"
                  insta="https://instagram.com/grave_it_on_lens?utm_medium=copy_link"
                  email="graveitonlens0209@gmail.com"
                />
                <Infocard
                  image={devansh}
                  name="Devansh"
                  position="Director"
                  phone="9548834345"
                  insta="https://www.instagram.com/devansh_28_panwar/"
                  email="devanshpanwar028@gmail.com"
                />
              </div>
              <div className="designformat2_3">
                <Infocard
                  image={aryan}
                  name="A.Choudhary"
                  position="Director"
                  phone="9664158847"
                  insta="https://www.instagram.com/onebyezero/"
                  email="aryanchoudhary66@gmail.com"
                />
                <Infocard
                  image={shobhit}
                  name="S.Bhargava"
                  position="Director"
                  phone="8959247116"
                  insta="https://instagram.com/big_ooooooof_shobhit?utm_medium=copy_link"
                  email="bhargavashobhit7776@gmail.com"
                />
                <Infocard
                  image={mihir}
                  name="Mihir Okte"
                  position="Director"
                  phone="9713020444"
                  insta="https://www.instagram.com/mihirokte/"
                  email="mihirokte77@gmail.com"
                />
              </div>
              <div className="designformat2_4">
                <Infocard
                  image={nishantk}
                  name="Nishant Kumar"
                  position="Representative"
                  phone="8441074937"
                  insta="https://www.instagram.com/lucifer._.0.0.7/"
                  email="nishant.kr.singh.2882@gmail.com"
                />
                <Infocard
                  image={paras}
                  name="Paras Garg"
                  position="Representative"
                  phone="7696784321"
                  insta="https://www.instagram.com/garg_paras029"
                  email="gargparas029@gmail.com"
                />
                <Infocard
                  image={tanya}
                  name="Tanya Goyal"
                  position="Representative"
                  phone="8800485769"
                  insta="https://www.instagram.com/tanyagoyal07/"
                  email="tanyagoyaliitd@gmail.com"
                />
              </div>
              <div className="designformat2_5">
                <Infocard
                  image={manan}
                  name="Manan Katiyar"
                  position="Representative"
                  phone="8860413981"
                  insta="https://www.instagram.com/manan_chintan"
                  email="manankatiyar2000@gmail.com"
                />
                <Infocard
                  image={utkarsh}
                  name="Utkarsh Goyal"
                  position="Representative"
                  phone="9958852082"
                  insta="https://www.instagram.com/goyalutkarsh_"
                  email="utkarshgoyal1002@gmail.com"
                />
                <Infocard
                  image={kunal}
                  name="Kunal Bairwa"
                  position="Representative"
                  phone="7452031422"
                  insta="https://www.instagram.com/kunalbairwa232"
                  email="kunalbairwa232@gmail.com"
                />
              </div>
              <div className="designformat2_6">
                <Infocard
                  image={adityanarayan}
                  name="Aditya Narayan"
                  position="Representative"
                  phone="9572074662"
                  insta="https://www.instagram.com/adi.xter/"
                  email="cooladitya1802@gmail.com"
                />
                <Infocard
                  image={kushagra}
                  name="Kushagra Gupta"
                  position="Representative"
                  phone="7389074160"
                  insta="https://www.instagram.com/kushagra5187/"
                  email="kushg2002@gmail.com"
                />
                <Infocard
                  image={vaibhav}
                  name="Vaibhav Saha"
                  position="Representative"
                  phone="9430050427"
                  insta="https://www.instagram.com/saha_vaibhav/"
                  email="vaibhavsaha.cs.iitd@gmail.com"
                />
              </div>
              <div className="designformat2_7">
                <Infocard
                  image={madhurya}
                  name="M.Panwar"
                  position="Representative"
                  phone="8112244944"
                  insta="https://www.instagram.com/madhurya_147/"
                  email="madhurya.panwar106@gmail.com"
                />
                <Infocard
                  image={abhishek}
                  name="Abhishek Pandey"
                  position="Representative"
                  phone="9899303075"
                  insta="https://www.instagram.com/tan_pi_by_2/"
                  email="abhishekryanite14@gmail.com"
                />
                <Infocard
                  image={pratyush}
                  name="Pratyush Saini"
                  position="Representative"
                  phone="7668235003"
                  insta="https://www.instagram.com/pratyushh__15/"
                  email="pratyush.saini02@gmail.com"
                />
                <Infocard
                  image={sakshamb}
                  name="S.Bhardwaj"
                  position="Representative"
                  phone="9205336434"
                  insta="https://www.instagram.com/sakshambh03/"
                  email="saksham.bh3@gmail.com"
                />
              </div>
            </div>
            <div className="designformat3">
              <div className="designformat3_1">
                <Infocard
                  image={Atharva}
                  name="Atharva Agarwal"
                  position="Secretary"
                  phone="9891190100"
                  insta="https://www.instagram.com/aatharva16/"
                  email="aatharva16@gmail.com"
                />
              </div>
              <div className="designformat3_2">
                <Infocard
                  image={sahil}
                  name="Sahil Kumar Raj"
                  position="Director"
                  phone="8851905910"
                  insta="https://instagram.com/grave_it_on_lens?utm_medium=copy_link"
                  email="graveitonlens0209@gmail.com"
                />
              </div>
              <div className="designformat3_3">
                <Infocard
                  image={devansh}
                  name="Devansh"
                  position="Director"
                  phone="9548834345"
                  insta="https://www.instagram.com/devansh_28_panwar/"
                  email="devanshpanwar028@gmail.com"
                />
              </div>
              <div className="designformat3_4">
                <Infocard
                  image={aryan}
                  name="A.Choudhary"
                  position="Director"
                  phone="9664158847"
                  insta="https://www.instagram.com/onebyezero/"
                  email="aryanchoudhary66@gmail.com"
                />
              </div>
              <div className="designformat3_5">
                <Infocard
                  image={shobhit}
                  name="S.Bhargava"
                  position="Director"
                  phone="8959247116"
                  insta="https://instagram.com/big_ooooooof_shobhit?utm_medium=copy_link"
                  email="bhargavashobhit7776@gmail.com"
                />
              </div>
              <div className="designformat3_6">
                <Infocard
                  image={mihir}
                  name="Mihir Okte"
                  position="Director"
                  phone="9713020444"
                  insta="https://www.instagram.com/mihirokte/"
                  email="mihirokte77@gmail.com"
                />
              </div>
              <div className="designformat3_7">
                <Infocard
                  image={nishantk}
                  name="Nishant Kumar"
                  position="Representative"
                  phone="8441074937"
                  insta="https://www.instagram.com/lucifer._.0.0.7/"
                  email="nishant.kr.singh.2882@gmail.com"
                />
              </div>
              <div className="designformat3_8">
                <Infocard
                  image={paras}
                  name="Paras Garg"
                  position="Representative"
                  phone="7696784321"
                  insta="https://www.instagram.com/garg_paras029"
                  email="gargparas029@gmail.com"
                />
                <Infocard
                  image={tanya}
                  name="Tanya Goyal"
                  position="Representative"
                  phone="8800485769"
                  insta="https://www.instagram.com/tanyagoyal07/"
                  email="tanyagoyaliitd@gmail.com"
                />
              </div>
              <div className="designformat3_9">
                <Infocard
                  image={manan}
                  name="Manan Katiyar"
                  position="Representative"
                  phone="8860413981"
                  insta="https://www.instagram.com/manan_chintan"
                  email="manankatiyar2000@gmail.com"
                />
                <Infocard
                  image={utkarsh}
                  name="Utkarsh Goyal"
                  position="Representative"
                  phone="9958852082"
                  insta="https://www.instagram.com/goyalutkarsh_"
                  email="utkarshgoyal1002@gmail.com"
                />
              </div>
              <div className="designformat3_10">
                <Infocard
                  image={kunal}
                  name="Kunal Bairwa"
                  position="Representative"
                  phone="7452031422"
                  insta="https://www.instagram.com/kunalbairwa232"
                  email="kunalbairwa232@gmail.com"
                />
                <Infocard
                  image={adityanarayan}
                  name="Aditya Narayan"
                  position="Representative"
                  phone="9572074662"
                  insta="https://www.instagram.com/adi.xter/"
                  email="cooladitya1802@gmail.com"
                />
              </div>
              <div className="designformat3_11">
                <Infocard
                  image={kushagra}
                  name="Kushagra Gupta"
                  position="Representative"
                  phone="7389074160"
                  insta="https://www.instagram.com/kushagra5187/"
                  email="kushg2002@gmail.com"
                />
                <Infocard
                  image={vaibhav}
                  name="Vaibhav Saha"
                  position="Representative"
                  phone="9430050427"
                  insta="https://www.instagram.com/saha_vaibhav/"
                  email="vaibhavsaha.cs.iitd@gmail.com"
                />
              </div>
              <div className="designformat3_12">
                <Infocard
                  image={madhurya}
                  name="M.Panwar"
                  position="Representative"
                  phone="8112244944"
                  insta="https://www.instagram.com/madhurya_147/"
                  email="madhurya.panwar106@gmail.com"
                />
                <Infocard
                  image={abhishek}
                  name="Abhishek Pandey"
                  position="Representative"
                  phone="9899303075"
                  insta="https://www.instagram.com/tan_pi_by_2/"
                  email="abhishekryanite14@gmail.com"
                />
              </div>
              <div className="designformat3_13">
                <Infocard
                  image={pratyush}
                  name="Pratyush Saini"
                  position="Representative"
                  phone="7668235003"
                  insta="https://www.instagram.com/pratyushh__15/"
                  email="pratyush.saini02@gmail.com"
                />
                <Infocard
                  image={sakshamb}
                  name="S.Bhardwaj"
                  position="Representative"
                  phone="9205336434"
                  insta="https://www.instagram.com/sakshambh03/"
                  email="saksham.bh3@gmail.com"
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
