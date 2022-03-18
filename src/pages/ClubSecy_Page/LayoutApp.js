import "./LayoutApp.css";
// import BRCA_Logo from "./Front Design-01 6.png";
import TeamsNavbar from "./Navbar/TeamsNavbar";
import TeamsFooter from "./Footer/TeamsFooter";
import React from "react";
// import Altfooter from "./AlternateFooter/Altfooter";
import Infocard from "./Infocard/Infocard";
// import Aashita from "./Aashita Gupta_Himadri-min.jpeg";
import Aman from "./Aman.jpeg";
import Aditya from "./Aditya Vishal _ Nilgiri-min.jpg";
import Anisha from "./Anisha__Kailash-min.jpg";
import Diwakar from "./Diwakar_Karakoram-min.jpeg";
import Keshav from "./Keshav_Shivalik-min.jpg";
import Nishant from "./Nishant Bansal_Jwalamukhi-min.jpg";
// import Prem from "./Prem Khandelwal_Kumaon-min.jpg";
import Priyanshu from "./Priyanshu_Girnar-min.jpg";
import Rishi from "./Rishi_Aravali-min.jpg";
import Ritik from "./Ritik Yadav_Satpura-min.JPG";
import Sagar from "./Sagar_Vindhyachal-min.jpg";
import Somya from "./Somya Maheshwari_Udaigiri-min.PNG";
import Tarun from "./TarunGaur_Zanskar-min.jpg";
// import DefaultPic from "./Infocard/Rectangle 103.png";

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
            <Infocard image={Rishi} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Keshav} name="Sarvagya Chhabra" position="Debate Secretary" />
            <Infocard
              image={Priyanshu}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
            <Infocard image={Somya} name="Naman Porwal" position="Drama Secretary" />
            <Infocard
              image={Diwakar}
              name=""
              position="Fine and Arts Secretary"
            />
          </div>
          <div className="layoutappthird__row1">
            <Infocard
              image={Nishant}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
            <Infocard image={Sagar} name="Ankita" position="Literary Secretary" />
            <Infocard image={Aditya} name="Vaibhav Verma " position="Music Secretary" />
            <Infocard image={Tarun} name="Gauransh Soni" position="PFC Secretary" />
            <Infocard
              image={Anisha}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
            <Infocard image={Ritik} name="Akshat Gadhwal" position="Spic Macay Secretary" />

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
          <Infocard image={Rishi} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Keshav} name="Sarvagya Chhabra" position="Debate Secretary" />
            <Infocard
              image={Priyanshu}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
          </div>
          <div className="layoutappthird__row2">
          <Infocard image={Somya} name="Naman Porwal" position="Drama Secretary" />
            <Infocard
              image={Diwakar}
              name=""
              position="Fine and Arts Secretary"
            />
         <Infocard
              image={Nishant}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
            <Infocard image={Sagar} name="Ankita" position="Literary Secretary" />
            <Infocard image={Aditya} name="Vaibhav Verma " position="Music Secretary" />
            <Infocard image={Tarun} name="Gauransh Soni" position="PFC Secretary" />
            <Infocard
              image={Anisha}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
            <Infocard image={Ritik} name="Akshat Gadhwal" position="Spic Macay Secretary" />
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
          <Infocard image={Rishi} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Keshav} name="Sarvagya Chhabra" position="Debate Secretary" />
            <Infocard
              image={Diwakar}
              name=""
              position="Fine and Arts Secretary"
            />
            
          </div>
          <div className="layoutappthird__row3">
        
               <Infocard image={Somya} name="Naman Porwal" position="Drama Secretary" />
               <Infocard
              image={Nishant}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
              <Infocard
              image={Priyanshu}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
            <Infocard image={Ritik} name="Akshat Gadhwal" position="Spic Macay Secretary" />
          </div>
          <div className="layoutappfourth__row3">
         
            <Infocard image={Sagar} name="Ankita" position="Literary Secretary" />
            <Infocard image={Aditya} name="Vaibhav Verma " position="Music Secretary" />
            <Infocard image={Tarun} name="Gauransh Soni" position="PFC Secretary" />   <Infocard
              image={Anisha}
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
          <Infocard image={Rishi} name="Dishant Dhiman" position="Dance Secretary" />
            <Infocard image={Keshav} name="Sarvagya Chhabra" position="Debate Secretary" />
          </div>
          <div className="layoutappthird__row4">
          <Infocard
              image={Priyanshu}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
               <Infocard image={Somya} name="Naman Porwal" position="Drama Secretary" />
           
          </div>
          <div className="layoutappfourth__row4">
          <Infocard
              image={Diwakar}
              name=""
              position="Fine and Arts Secretary"
            />
            <Infocard
              image={Nishant}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
        
            
          </div>
          <div className="layoutappfifth__row4">
          <Infocard image={Sagar} name="Ankita" position="Literary Secretary" />
            <Infocard image={Aditya} name="Vaibhav Verma " position="Music Secretary" />
         
          </div>
          <div className="layoutappsixth__row4">
          <Infocard image={Tarun} name="Gauransh Soni" position="PFC Secretary" />
          <Infocard
              image={Anisha}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
         
          </div>
          <div className="layoutappseventh__row4">
          <Infocard image={Ritik} name="Akshat Gadhwal" position="Spic Macay Secretary" />
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
          <Infocard image={Rishi} name="Dishant Dhiman" position="Dance Secretary" />
        
          </div>
          <div className="layoutappthird__row5">
          <Infocard image={Keshav} name="Sarvagya Chhabra" position="Debate Secretary" />
          <Infocard
              image={Priyanshu}
              name="Atharva Aggrawal"
              position="Design Secretary"
            />
               
          </div>
          <div className="layoutappfourth__row5">
          <Infocard image={Somya} name="Naman Porwal" position="Drama Secretary" />
          <Infocard
              image={Diwakar}
              name=""
              position="Fine and Arts Secretary"
            />
          
          </div>
          <div className="layoutappfifth__row5">
          <Infocard
              image={Nishant}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
            />
           <Infocard image={Sagar} name="Ankita" position="Literary Secretary" />
            
          </div>
          <div className="layoutappsixth__row5">
          <Infocard image={Aditya} name="Vaibhav Verma " position="Music Secretary" />
          <Infocard image={Tarun} name="Gauransh Soni" position="PFC Secretary" />
          
          </div>
          <div className="layoutappseventh__row5">
          <Infocard
              image={Anisha}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
            />
         <Infocard image={Ritik} name="Akshat Gadhwal" position="Spic Macay Secretary" />
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
