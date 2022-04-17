/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/stylesTeam.css";
import "../css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Frame1 from "../images/Frame1.png";
import Frame2 from "../images/Frame2.png";
import Frame3 from "../images/Frame3.png";
import Frame4 from "../images/prof.png";
import SecyNavbar from "./Navbar/SecyNavbar";
import SecyFooter from "./Footer/SecyFooter";
import { Link } from "react-router-dom";

function Teams() {
  return (
    <div class="mainSecTeam">
      <SecyNavbar />
      <div class="container animate__animated animate__zoomIn">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
            <Link to="/teamsecy" class="box b1">
              <img src={Frame1} className="text-center" />
              <p>
                Cultural <br /> Secretaries
              </p>
            </Link>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
            <Link to="/clubsecy" class="box b2">
              <img src={Frame2} alt="image" class="text-center" />
              <p>
                Club <br /> Secretaries
              </p>
            </Link>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
            <Link to="/faculty" class="box b4">
              <img src={Frame4} alt="image" class="text-center" />
              <p>
                Faculty Head <br />
              </p>
            </Link>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
            <Link to="/techanddesign" class="box b3">
              <img src={Frame3} alt="image" class="text-center" />
              <p>
                Creative & <br /> Technical Team
              </p>
            </Link>
          </div>
        </div>
      </div>
      <SecyFooter />
    </div>
  );
}

export default Teams;
