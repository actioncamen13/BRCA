/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./css/stylesTeam.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Frame1 from "./images/Frame1.png";
import Frame2 from "./images/Frame2.png";
import Frame3 from "./images/Frame3.png";

function Teams() {
  return (
    <div>
        <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                <a href="/" class="box b1">
                    <img src={Frame1} className ="text-center" />
                    <p >Cultural <br /> Secretaries</p>
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                <a href="/" class="box b2">
                    <img src={Frame2} alt="image" class="text-center"/>
                    <p>Club <br /> Secretaries</p>
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                <a href="/" class="box b3">
                    <img src={Frame3} alt="image" class="text-center"/>
                    <p>Creative & <br /> Technical Team</p>
                </a>
            </div>
            
            
        </div>
        
      </div>
    </div>

  );
}

export default Teams;
