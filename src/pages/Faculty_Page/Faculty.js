import React from "react";
import "./Faculty.css";
import FacultyNavbar from "./Navbar/FacultyNavbar";
import FacultyFooter from "./Footer/FacultyFooter";
import Infocard from "./Infocard/Infocard";
import Sandeep from "./Sandeep Jha-150x150-min.jpg";
import Rajendra from "./Rajendra Dhaka-min.jpeg";

function Faculty() {
  return (
    <div className="faculty">
      <FacultyNavbar />
      <div className="faculty__body">
        <div className="faculty__body__title">
          <h1>Faculty Heads, BRCA</h1>
        </div>
        <div className="faculty__body__content">
          <Infocard
            image={Sandeep}
            name="Prof. Sandeep K. Jha"
            position="President, BRCA"
          />
          <Infocard
            image={Rajendra}
            name="Prof. Rajendra Dhaka"
            position="Vice-President, BRCA"
          />
        </div>
      </div>
      <FacultyFooter />
    </div>
  );
}

export default Faculty;
