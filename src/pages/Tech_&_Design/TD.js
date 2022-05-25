import React from "react";
import "./TD.css";
import TDNavbar from "./Navbar/TDNavbar";
import TDFooter from "./Footer/TDFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Atharva from "./Atharva.png";
import Ibrahim from "./Ibrahim Khan_Design Executive_.jpg";
import Sara from "./Sara Roshen_Creative and Design Executive.jpg";
import Khushbu from "./Khushbu.jpg";
import Satya from "./Satya.jpeg";
import Tamanna from "./Tamanna.jpeg";
import Munaz from "./Munaz.jpg";

function TD() {
  return (
    <div className="td">
      <div className="tdnavbar1">
        <TDNavbar />
      </div>
      <div className="td__body">
        <div className="td__body__title">
          <h1>Technical and Creative Team</h1>
        </div>
        <div className="td__body__content">
          <div className="tdformat1">
            <div className="tdformat1_1">
              <Infocard
                image={Tamanna}
                name="Tamanna Tanwar"
                position="Technical Coordinator"
              />
              <Infocard
                image={Atharva}
                name="Atharva Agarwal"
                position="Creative & Design Coordi"
                phone="9891190100"
                insta="https://www.instagram.com/aatharva16/"
                email="aatharva16@gmail.com"
              />
            </div>
            <div className="tdformat1_2">
              <Infocard
                image={Satya}
                name="Satyapragnya Kar"
                position="Technical Executive"
                phone="7848957757"
                insta="https://www.instagram.com/satyapragnya_kar/"
                email="satyakar2019@gmail.com"
              />
              <Infocard
                image={Munaz}
                name="Munazzil Anwar"
                position="Technical Executive"
              />
              <Infocard
                image={DefaultPic}
                name="-------"
                position="Technical Executive"
              />
            </div>
            <div className="tdformat1_3">
              <Infocard
                image={Ibrahim}
                name="Ibrahim Khan"
                position="Creative & Design Exe"
              />
              <Infocard
                image={Sara}
                name="Sara Roshan"
                position="Creative & Design Exe"
              />
              <Infocard
                image={Khushbu}
                name="Khushbu Yadav"
                position="Creative & Design Exe"
              />
            </div>
          </div>
          <div className="tdformat2">
            <div className="tdformat2_1">
              <Infocard
                image={Tamanna}
                name="Tamanna Tanwar"
                position="Technical Coordinator"
              />
            </div>
            <div className="tdformat2_2">
              <Infocard
                image={Atharva}
                name="Atharva Agarwal"
                position="Creative & Design Coordi"
                phone="9891190100"
                insta="https://www.instagram.com/aatharva16/"
                email="aatharva16@gmail.com"
              />
            </div>
            <div className="tdformat2_3">
              <Infocard
                image={Satya}
                name="Satyapragnya Kar"
                position="Technical Executive"
                phone="7848957757"
                insta="https://www.instagram.com/satyapragnya_kar/"
                email="satyakar2019@gmail.com"
              />
            </div>
            <div className="tdformat2_4">
              <Infocard
                image={Munaz}
                name="Munazzil Anwar"
                position="Technical Executive"
              />
            </div>
            <div className="tdformat2_5">
              <Infocard
                image={DefaultPic}
                name="-------"
                position="Technical Executive"
              />
            </div>
            <div className="tdformat2_6">
              <Infocard
                image={Ibrahim}
                name="Ibrahim Khan"
                position="Creative & Design Exe"
              />
            </div>
            <div className="tdformat2_7">
              <Infocard
                image={Sara}
                name="Sara Roshan"
                position="Creative & Design Exe"
              />
              <Infocard
                image={Khushbu}
                name="Khushbu Yadav"
                position="Creative & Design Exe"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tdfooter1">
        <TDFooter />
      </div>
    </div>
  );
}

export default TD;
