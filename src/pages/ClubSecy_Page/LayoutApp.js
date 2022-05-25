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
              phone="9829758262"
              insta="https://www.instagram.com/aman._lohia/"
              email="lohiaaman1@gmail.com"
            />
          </div>
          <div className="layoutappsecond__row1">
            <Infocard
              image={Dishant}
              name="Dishant Dhiman"
              position="Dance Secretary"
              phone="7206435754"
              insta="https://www.instagram.com/dishant_.dhiman/"
              email="ddxdhiman@gmail.com"
            />
            <Infocard
              image={Sarvagya}
              name="Sarvagya Chhabra"
              position="Debate Secretary"
              phone="8383097658"
              insta="https://www.instagram.com/sarvagya28_/"
              email="sarvagya2809@gmail.com"
            />
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
              phone="9891190100"
              insta="https://www.instagram.com/aatharva16/"
              email="aatharva16@gmail.com"
            />
            <Infocard
              image={Naman}
              name="Naman Porwal"
              position="Drama Secretary"
              phone="8290198198"
              insta="https://www.instagram.com/porwal_naman_/"
              email="porwalnaman01@gmail.com"
            />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
              phone="9467977491"
              email="manish005yadav008@gmail.com"
            />
          </div>
          <div className="layoutappthird__row1">
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
              phone="8788299984"
              insta="https://www.instagram.com/pranitrastogi"
              email="pranitrastogi@gmail.com"
            />
            <Infocard
              image={NamanU}
              name="Naman U."
              position="Literary Secretary"
              phone="9425690400"
              insta="https://www.instagram.com/naman09___/"
              email="namanupadhyayiitd@gmail.com"
            />
            <Infocard
              image={Vaibhav}
              name="Vaibhav Verma "
              position="Music Secretary"
              phone="7710861643"
              insta="https://www.instagram.com/vaibhav__verma_/"
              email="ee1190543@iitd.ac.in"
            />
            <Infocard
              image={Gauransh}
              name="Gauransh Soni"
              position="PFC Secretary"
              phone="9462447291"
              insta="https://www.instagram.com/gauransh.soni/"
              email="gauranshiitd@gmail.com"
            />
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
              phone="9910377165"
              insta="https://www.instagram.com/attila_the_rehun/"
              email="bhatia.rehan4@icloud.com"
            />
            <Infocard
              image={Akshat}
              name="Akshat Gadhwal"
              position="Spic Macay Secretary"
              phone="8905607790"
              insta="https://www.instagram.com/ich_bin_akshat/"
              email="akshatgadhwal1@gmail.com"
            />
          </div>
        </div>
        <div className="format2">
          <div className="layoutappfirst__row2">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
              phone="9829758262"
              insta="https://www.instagram.com/aman._lohia/"
              email="lohiaaman1@gmail.com"
            />
          </div>
          <div className="layoutappsecond__row2">
            <Infocard
              image={Dishant}
              name="Dishant Dhiman"
              position="Dance Secretary"
              phone="7206435754"
              insta="https://www.instagram.com/dishant_.dhiman/"
              email="ddxdhiman@gmail.com"
            />
            <Infocard
              image={Sarvagya}
              name="Sarvagya Chhabra"
              position="Debate Secretary"
              phone="8383097658"
              insta="https://www.instagram.com/sarvagya28_/"
              email="sarvagya2809@gmail.com"
            />
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
              phone="9891190100"
              insta="https://www.instagram.com/aatharva16/"
              email="aatharva16@gmail.com"
            />
          </div>
          <div className="layoutappthird__row2">
            <Infocard
              image={Naman}
              name="Naman Porwal"
              position="Drama Secretary"
              phone="8290198198"
              insta="https://www.instagram.com/porwal_naman_/"
              email="porwalnaman01@gmail.com"
            />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
              phone="9467977491"
              email="manish005yadav008@gmail.com"
            />
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
              phone="8788299984"
              insta="https://www.instagram.com/pranitrastogi"
              email="pranitrastogi@gmail.com"
            />
            <Infocard
              image={NamanU}
              name="Naman U."
              position="Literary Secretary"
              phone="9425690400"
              insta="https://www.instagram.com/naman09___/"
              email="namanupadhyayiitd@gmail.com"
            />
            <Infocard
              image={Vaibhav}
              name="Vaibhav Verma "
              position="Music Secretary"
              phone="7710861643"
              insta="https://www.instagram.com/vaibhav__verma_/"
              email="ee1190543@iitd.ac.in"
            />
            <Infocard
              image={Gauransh}
              name="Gauransh Soni"
              position="PFC Secretary"
              phone="9462447291"
              insta="https://www.instagram.com/gauransh.soni/"
              email="gauranshiitd@gmail.com"
            />
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
              phone="9910377165"
              insta="https://www.instagram.com/attila_the_rehun/"
              email="bhatia.rehan4@icloud.com"
            />
            <Infocard
              image={Akshat}
              name="Akshat Gadhwal"
              position="Spic Macay Secretary"
              phone="8905607790"
              insta="https://www.instagram.com/ich_bin_akshat/"
              email="akshatgadhwal1@gmail.com"
            />
          </div>
        </div>
        <div className="format3">
          <div className="layoutappfirst__row3">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
              phone="9829758262"
              insta="https://www.instagram.com/aman._lohia/"
              email="lohiaaman1@gmail.com"
            />
          </div>
          <div className="layoutappsecond__row3">
            <Infocard
              image={Dishant}
              name="Dishant Dhiman"
              position="Dance Secretary"
              phone="7206435754"
              insta="https://www.instagram.com/dishant_.dhiman/"
              email="ddxdhiman@gmail.com"
            />
            <Infocard
              image={Sarvagya}
              name="Sarvagya Chhabra"
              position="Debate Secretary"
              phone="8383097658"
              insta="https://www.instagram.com/sarvagya28_/"
              email="sarvagya2809@gmail.com"
            />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
              phone="9467977491"
              email="manish005yadav008@gmail.com"
            />
          </div>
          <div className="layoutappthird__row3">
            <Infocard
              image={Naman}
              name="Naman Porwal"
              position="Drama Secretary"
              phone="8290198198"
              insta="https://www.instagram.com/porwal_naman_/"
              email="porwalnaman01@gmail.com"
            />
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
              phone="8788299984"
              insta="https://www.instagram.com/pranitrastogi"
              email="pranitrastogi@gmail.com"
            />
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
              phone="9891190100"
              insta="https://www.instagram.com/aatharva16/"
              email="aatharva16@gmail.com"
            />
            <Infocard
              image={Akshat}
              name="Akshat Gadhwal"
              position="Spic Macay Secretary"
              phone="8905607790"
              insta="https://www.instagram.com/ich_bin_akshat/"
              email="akshatgadhwal1@gmail.com"
            />
          </div>
          <div className="layoutappfourth__row3">
            <Infocard
              image={NamanU}
              name="Naman U."
              position="Literary Secretary"
              phone="9425690400"
              insta="https://www.instagram.com/naman09___/"
              email="namanupadhyayiitd@gmail.com"
            />
            <Infocard
              image={Vaibhav}
              name="Vaibhav Verma "
              position="Music Secretary"
              phone="7710861643"
              insta="https://www.instagram.com/vaibhav__verma_/"
              email="ee1190543@iitd.ac.in"
            />
            <Infocard
              image={Gauransh}
              name="Gauransh Soni"
              position="PFC Secretary"
              phone="9462447291"
              insta="https://www.instagram.com/gauransh.soni/"
              email="gauranshiitd@gmail.com"
            />
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
              phone="9910377165"
              insta="https://www.instagram.com/attila_the_rehun/"
              email="bhatia.rehan4@icloud.com"
            />
          </div>
          <div className="layoutappfifth__row3"></div>
        </div>
        <div className="format4">
          <div className="layoutappfirst__row4">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
              phone="9829758262"
              insta="https://www.instagram.com/aman._lohia/"
              email="lohiaaman1@gmail.com"
            />
          </div>
          <div className="layoutappsecond__row4">
            <Infocard
              image={Dishant}
              name="Dishant Dhiman"
              position="Dance Secretary"
              phone="7206435754"
              insta="https://www.instagram.com/dishant_.dhiman/"
              email="ddxdhiman@gmail.com"
            />
            <Infocard
              image={Sarvagya}
              name="Sarvagya Chhabra"
              position="Debate Secretary"
              phone="8383097658"
              insta="https://www.instagram.com/sarvagya28_/"
              email="sarvagya2809@gmail.com"
            />
          </div>
          <div className="layoutappthird__row4">
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
              phone="9891190100"
              insta="https://www.instagram.com/aatharva16/"
              email="aatharva16@gmail.com"
            />
            <Infocard
              image={Naman}
              name="Naman Porwal"
              position="Drama Secretary"
              phone="8290198198"
              insta="https://www.instagram.com/porwal_naman_/"
              email="porwalnaman01@gmail.com"
            />
          </div>
          <div className="layoutappfourth__row4">
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
              phone="9467977491"
              email="manish005yadav008@gmail.com"
            />
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
              phone="8788299984"
              insta="https://www.instagram.com/pranitrastogi"
              email="pranitrastogi@gmail.com"
            />
          </div>
          <div className="layoutappfifth__row4">
            <Infocard
              image={NamanU}
              name="Naman U."
              position="Literary Secretary"
              phone="9425690400"
              insta="https://www.instagram.com/naman09___/"
              email="namanupadhyayiitd@gmail.com"
            />
            <Infocard
              image={Vaibhav}
              name="Vaibhav Verma "
              position="Music Secretary"
              phone="7710861643"
              insta="https://www.instagram.com/vaibhav__verma_/"
              email="ee1190543@iitd.ac.in"
            />
          </div>
          <div className="layoutappsixth__row4">
            <Infocard
              image={Gauransh}
              name="Gauransh Soni"
              position="PFC Secretary"
              phone="9462447291"
              insta="https://www.instagram.com/gauransh.soni/"
              email="gauranshiitd@gmail.com"
            />
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
              phone="9910377165"
              insta="https://www.instagram.com/attila_the_rehun/"
              email="bhatia.rehan4@icloud.com"
            />
          </div>
          <div className="layoutappseventh__row4">
            <Infocard
              image={Akshat}
              name="Akshat Gadhwal"
              position="Spic Macay Secretary"
              phone="8905607790"
              insta="https://www.instagram.com/ich_bin_akshat/"
              email="akshatgadhwal1@gmail.com"
            />
          </div>
        </div>
        <div className="format5">
          <div className="layoutappfirst__row5">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="General Secretary"
              phone="9829758262"
              insta="https://www.instagram.com/aman._lohia/"
              email="lohiaaman1@gmail.com"
            />
          </div>
          <div className="layoutappsecond__row5">
            <Infocard
              image={Dishant}
              name="Dishant Dhiman"
              position="Dance Secretary"
              phone="7206435754"
              insta="https://www.instagram.com/dishant_.dhiman/"
              email="ddxdhiman@gmail.com"
            />
          </div>
          <div className="layoutappthird__row5">
            <Infocard
              image={Sarvagya}
              name="Sarvagya Chhabra"
              position="Debate Secretary"
              phone="8383097658"
              insta="https://www.instagram.com/sarvagya28_/"
              email="sarvagya2809@gmail.com"
            />
            <Infocard
              image={Atharva}
              name="Atharva Aggrawal"
              position="Design Secretary"
              phone="9891190100"
              insta="https://www.instagram.com/aatharva16/"
              email="aatharva16@gmail.com"
            />
          </div>
          <div className="layoutappfourth__row5">
            <Infocard
              image={Naman}
              name="Naman Porwal"
              position="Drama Secretary"
              phone="8290198198"
              insta="https://www.instagram.com/porwal_naman_/"
              email="porwalnaman01@gmail.com"
            />
            <Infocard
              image={Manish}
              name="Manish"
              position="Fine and Arts Secretary"
              phone="9467977491"
              email="manish005yadav008@gmail.com"
            />
          </div>
          <div className="layoutappfifth__row5">
            <Infocard
              image={Pranit}
              name="Pranit Rastogi "
              position="Hindi Samiti Secretary"
              phone="8788299984"
              insta="https://www.instagram.com/pranitrastogi"
              email="pranitrastogi@gmail.com"
            />
            <Infocard
              image={NamanU}
              name="Naman U."
              position="Literary Secretary"
              phone="9425690400"
              insta="https://www.instagram.com/naman09___/"
              email="namanupadhyayiitd@gmail.com"
            />
          </div>
          <div className="layoutappsixth__row5">
            <Infocard
              image={Vaibhav}
              name="Vaibhav Verma "
              position="Music Secretary"
              phone="7710861643"
              insta="https://www.instagram.com/vaibhav__verma_/"
              email="ee1190543@iitd.ac.in"
            />
            <Infocard
              image={Gauransh}
              name="Gauransh Soni"
              position="PFC Secretary"
              phone="9462447291"
              insta="https://www.instagram.com/gauransh.soni/"
              email="gauranshiitd@gmail.com"
            />
          </div>
          <div className="layoutappseventh__row5">
            <Infocard
              image={Rehan}
              name="Rehan Bhatia"
              position="Quizzing Secretary"
              phone="9910377165"
              insta="https://www.instagram.com/attila_the_rehun/"
              email="bhatia.rehan4@icloud.com"
            />
            <Infocard
              image={Akshat}
              name="Akshat Gadhwal"
              position="Spic Macay Secretary"
              phone="8905607790"
              insta="https://www.instagram.com/ich_bin_akshat/"
              email="akshatgadhwal1@gmail.com"
            />
          </div>
          <div className="layoutappeighth__row5"></div>
        </div>
      </div>
      <TeamsFooter />
      {/* <Altfooter /> */}
    </div>
  );
}

export default LayoutApp;
