import "./LayoutApp.css";
// import BRCA_Logo from "./Front Design-01 6.png";
import TeamsNavbar from "./Navbar/TeamsNavbar";
import TeamsFooter from "./Footer/TeamsFooter";
import React from "react";
// import Altfooter from "./AlternateFooter/Altfooter";
import Infocard from "./Infocard/Infocard";
import Aashita from "./Aashita Gupta_Himadri-min.jpeg";
import Aman from "./Aman.jpeg";
import Aditya from "./Aditya Vishal _ Nilgiri-min.jpg";
import Anisha from "./Anisha__Kailash-min.jpg";
import Diwakar from "./Diwakar_Karakoram-min.jpeg";
import Keshav from "./Keshav_Shivalik-min.jpg";
import Nishant from "./Nishant Bansal_Jwalamukhi-min.jpg";
import Prem from "./Prem Khandelwal_Kumaon-min.jpg";
import Priyanshu from "./Priyanshu_Girnar-min.jpg";
import Rishi from "./Rishi_Aravali-min.jpg";
import Ritik from "./Ritik Yadav_Satpura-min.JPG";
import Sagar from "./Sagar_Vindhyachal-min.jpg";
import Somya from "./Somya Maheshwari_Udaigiri-min.PNG";
import Tarun from "./TarunGaur_Zanskar-min.jpg";
import DefaultPic from "./Infocard/Rectangle 103.png";

function LayoutApp() {
  return (
    <div className="layoutapp">
      <TeamsNavbar />
      <div className="layoutappbody">
        <div className="layoutappbody__title">
          <h1>CULTURAL SECRETARIES</h1>
        </div>
        <div className="format1">
          <div className="layoutappfirst__row1">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="G.Secy"
            />
          </div>
          <div className="layoutappsecond__row1">
            <Infocard image={Rishi} name="Rishi Shah" position="Position" />
            <Infocard image={Keshav} name="Keshav Gupta" position="Position" />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Position"
            />
            <Infocard image={Somya} name="S.Maheshwari" position="Position" />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Position"
            />
          </div>
          <div className="layoutappthird__row1">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Position"
            />
            <Infocard image={Sagar} name="Sagar" position="Position" />
            <Infocard image={Aditya} name="Aditya Vishal" position="Position" />
            <Infocard image={Tarun} name="Tarun Gaur" position="Position" />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Position"
            />
            <Infocard image={Ritik} name="Ritik Yadav" position="Position" />
            <Infocard image={Prem} name="Prem Khandelwal" position="Position" />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Position"
            />
          </div>
        </div>
        <div className="format2">
          <div className="layoutappfirst__row2">
            <Infocard
              image={Aman}
              name="Aman Lohia"
              position="G.Secy"
            />
          </div>
          <div className="layoutappsecond__row2">
            <Infocard image={Rishi} name="Rishi Shah" position="Position" />
            <Infocard image={Keshav} name="Keshav Gupta" position="Position" />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Position"
            />
          </div>
          <div className="layoutappthird__row2">
            <Infocard image={Somya} name="S.Maheshwari" position="Position" />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Position"
            />
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Position"
            />
            <Infocard image={Sagar} name="Sagar" position="Position" />
            <Infocard image={Aditya} name="Aditya Vishal" position="Position" />
          </div>
          <div className="layoutappfourth__row2">
            <Infocard image={Tarun} name="Tarun Gaur" position="Position" />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Position"
            />
            <Infocard image={Ritik} name="Ritik Yadav" position="Position" />
            <Infocard image={Prem} name="Prem Khandelwal" position="Position" />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Position"
            />
          </div>
        </div>
        <div className="format3">
          <div className="layoutappfirst__row3">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="G.Secy"
            />
          </div>
          <div className="layoutappsecond__row3">
            <Infocard image={Rishi} name="Rishi Shah" position="Position" />
            <Infocard image={Keshav} name="Keshav Gupta" position="Position" />
          </div>
          <div className="layoutappthird__row3">
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Position"
            />
            <Infocard image={Somya} name="S.Maheshwari" position="Position" />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Position"
            />
          </div>
          <div className="layoutappfourth__row3">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Position"
            />
            <Infocard image={Sagar} name="Sagar" position="Position" />
            <Infocard image={Aditya} name="Aditya Vishal" position="Position" />
            <Infocard image={Tarun} name="Tarun Gaur" position="Position" />
          </div>
          <div className="layoutappfifth__row3">
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Position"
            />
            <Infocard image={Ritik} name="Ritik Yadav" position="Position" />
            <Infocard image={Prem} name="Prem Khandelwal" position="Position" />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Position"
            />
          </div>
        </div>
        <div className="format4">
          <div className="layoutappfirst__row4">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="G.Secy"
            />
          </div>
          <div className="layoutappsecond__row4">
            <Infocard image={Rishi} name="Rishi Shah" position="Position" />
            <Infocard image={Keshav} name="Keshav Gupta" position="Position" />
          </div>
          <div className="layoutappthird__row4">
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Position"
            />
            <Infocard image={Somya} name="S.Maheshwari" position="Position" />
          </div>
          <div className="layoutappfourth__row4">
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Position"
            />
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Position"
            />
          </div>
          <div className="layoutappfifth__row4">
            <Infocard image={Sagar} name="Sagar" position="Position" />
            <Infocard image={Aditya} name="Aditya Vishal" position="Position" />
          </div>
          <div className="layoutappsixth__row4">
            <Infocard image={Tarun} name="Tarun Gaur" position="Position" />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Position"
            />
          </div>
          <div className="layoutappseventh__row4">
            <Infocard image={Ritik} name="Ritik Yadav" position="Position" />
            <Infocard image={Prem} name="Prem Khandelwal" position="Position" />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Position"
            />
          </div>
        </div>
        <div className="format5">
          <div className="layoutappfirst__row5">
          <Infocard
              image={Aman}
              name="Aman Lohia"
              position="G.Secy"
            />
          </div>
          <div className="layoutappsecond__row5">
            <Infocard image={Rishi} name="Rishi Shah" position="Position" />
          </div>
          <div className="layoutappthird__row5">
            <Infocard image={Keshav} name="Keshav Gupta" position="Position" />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Position"
            />
          </div>
          <div className="layoutappfourth__row5">
            <Infocard image={Somya} name="S.Maheshwari" position="Position" />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Position"
            />
          </div>
          <div className="layoutappfifth__row5">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Position"
            />
            <Infocard image={Sagar} name="Sagar" position="Position" />
          </div>
          <div className="layoutappsixth__row5">
            <Infocard image={Aditya} name="Aditya Vishal" position="Position" />
            <Infocard image={Tarun} name="Tarun Gaur" position="Position" />
          </div>
          <div className="layoutappseventh__row5">
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Position"
            />
            <Infocard image={Ritik} name="Ritik Yadav" position="Position" />
          </div>
          <div className="layoutappeighth__row5">
            <Infocard image={Prem} name="Prem Khandelwal" position="Position" />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Position"
            />
          </div>
        </div>
      </div>
      <TeamsFooter />
      {/* <Altfooter /> */}
    </div>
  );
}

export default LayoutApp;
