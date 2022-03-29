import "./LayoutApp.css";
// import BRCA_Logo from "./Front Design-01 6.png";
import TeamsNavbar from "./Navbar/TeamsNavbar";
import TeamsFooter from "./Footer/TeamsFooter";
import React from "react";
// import Altfooter from "./AlternateFooter/Altfooter";
import Infocard from "./Infocard/Infocard";
// import Aashita from "./Aashita Gupta_Himadri-min.jpeg";

// import DefaultPic from "./Infocard/Rectangle 103.png";
import Dishant from "./Dishant.png";
import Manish from "./manish.jpeg";
import Gauransh from "./Gauransh.png";
import Atharva from "./Atharva.png";
import Naman from "./Naman.JPG";
import Rehan from "./Rehan.png";
import Pranit from "./Pranit.jpeg";
import Sarvagya from "./Sarvagya.png";
import Vaibhav from "./Viabhav.png";
import Akshat from "./Akshat.jpeg";
import NamanU from "./6.png";
import Aman from "./Aman.jpeg";

function LayoutApp() {
  return (
    <div className="layoutapp">
      <TeamsNavbar />
      <div className="layoutappbody">
        <div className="layoutappbody__title">
          <h1>CLUB SECRETARIES</h1>
        </div>
        <div className="format1">
          <div className="layoutappfirst__row1">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
            />
          </div>
          <div className="layoutappsecond__row1">
            <Infocard image={Dishant} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Sarvagya} name="Sarvagya Chhabra" position="Debate Secretary" />
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
            <Infocard image={Naman} name="Naman Porwal" position="Drama Secretary" />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
            />
          </div>
          <div className="layoutappthird__row1">
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
            <Infocard image={NamanU} name="Naman U." position="Literary Secretary" />
            <Infocard image={Vaibhav} name="Vaibhav Verma " position="Music Secretary" />
            <Infocard image={Gauransh} name="Gauransh Soni" position="PFC Secretary" />
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
            <Infocard image={Akshat} name="Akshat Gadhwal" position="Spic Macay Secretary" />

          </div>
        </div>
        <div className="format2">
          <div className="layoutappfirst__row2">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
            />
          </div>
          <div className="layoutappsecond__row2">
          <Infocard image={Dishant} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Sarvagya} name="Sarvagya Chhabra" position="Debate Secretary" />
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
          </div>
          <div className="layoutappthird__row2">
          <Infocard image={Naman} name="Naman Porwal" position="Drama Secretary" />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
            />
         <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
            <Infocard image={NamanU} name="Naman U." position="Literary Secretary" />
            <Infocard image={Vaibhav} name="Vaibhav Verma " position="Music Secretary" />
            <Infocard image={Gauransh} name="Gauransh Soni" position="PFC Secretary" />
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
            <Infocard image={Akshat} name="Akshat Gadhwal" position="Spic Macay Secretary" />
          </div>
        </div>
        <div className="format3">
          <div className="layoutappfirst__row3">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
            />
          </div>
          <div className="layoutappsecond__row3">
          <Infocard image={Dishant} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Sarvagya} name="Sarvagya Chhabra" position="Debate Secretary" />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
            />
            
          </div>
          <div className="layoutappthird__row3">
        
               <Infocard image={Naman} name="Naman Porwal" position="Drama Secretary" />
               <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
              <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
            <Infocard image={Akshat} name="Akshat Gadhwal" position="Spic Macay Secretary" />
          </div>
          <div className="layoutappfourth__row3">
         
            <Infocard image={Naman} name="Naman U." position="Literary Secretary" />
            <Infocard image={Vaibhav} name="Vaibhav Verma " position="Music Secretary" />
            <Infocard image={Gauransh} name="Gauransh Soni" position="PFC Secretary" />   <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
            
            
          </div>
          <div className="layoutappfifth__row3">
       
          </div>
        </div>
        <div className="format4">
          <div className="layoutappfirst__row4">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
            />
          </div>
          <div className="layoutappsecond__row4">
          <Infocard image={Dishant} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Sarvagya} name="Sarvagya Chhabra" position="Debate Secretary" />
          </div>
          <div className="layoutappthird__row4">
          <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
               <Infocard image={Naman} name="Naman Porwal" position="Drama Secretary" />
           
          </div>
          <div className="layoutappfourth__row4">
          <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
            />
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
        
            
          </div>
          <div className="layoutappfifth__row4">
          <Infocard image={NamanU} name="Naman U." position="Literary Secretary" />
            <Infocard image={Vaibhav} name="Vaibhav Verma " position="Music Secretary" />
         
          </div>
          <div className="layoutappsixth__row4">
          <Infocard image={Gauransh} name="Gauransh Soni" position="PFC Secretary" />
          <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
         
          </div>
          <div className="layoutappseventh__row4">
          <Infocard image={Akshat} name="Akshat Gadhwal" position="Spic Macay Secretary" />
          </div>
        </div>
        <div className="format5">
          <div className="layoutappfirst__row5">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
            />
          </div>
          <div className="layoutappsecond__row5">
          <Infocard image={Dishant} name="Dishant Dhiman" position="Dance Secretary" />
        
          </div>
          <div className="layoutappthird__row5">
          <Infocard image={Sarvagya} name="Sarvagya Chhabra" position="Debate Secretary" />
          <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
               
          </div>
          <div className="layoutappfourth__row5">
          <Infocard image={Naman} name="Naman Porwal" position="Drama Secretary" />
          <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
            />
          
          </div>
          <div className="layoutappfifth__row5">
          <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
           <Infocard image={NamanU} name="Naman U." position="Literary Secretary" />
            
          </div>
          <div className="layoutappsixth__row5">
          <Infocard image={Vaibhav} name="Vaibhav Verma " position="Music Secretary" />
          <Infocard image={Gauransh} name="Gauransh Soni" position="PFC Secretary" />
          
          </div>
          <div className="layoutappseventh__row5">
          <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
         <Infocard image={Akshat} name="Akshat Gadhwal" position="Spic Macay Secretary" />
          </div>
          <div className="layoutappeighth__row5">
         
           
          </div>
        </div>
      </div>
      <TeamsFooter />
      {/* <Altfooter /> */}
    </div>
  );
}

export default LayoutApp;
