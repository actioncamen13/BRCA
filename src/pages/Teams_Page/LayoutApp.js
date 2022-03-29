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
// import DefaultPic from "./Infocard/Rectangle 103.png";

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
              position="General Secretary"
            />
          </div>
          <div className="layoutappsecond__row1">
            <Infocard
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
            />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
            />
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
            />
          </div>
          <div className="layoutappthird__row1">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi "
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
            />
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
            />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
            />
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
            <Infocard
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
            />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
            />
          </div>
          <div className="layoutappthird__row2">
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
            />
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
            />
          </div>
          <div className="layoutappfourth__row2">
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
            />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himdari"
            />
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
            <Infocard
              image={Rishi}
              name="Rishi Shah"
              position="Satpura"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
            />
          </div>
          <div className="layoutappthird__row3">
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
            />
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
            />
          </div>
          <div className="layoutappfourth__row3">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
            />
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
            />
          </div>
          <div className="layoutappfifth__row3">
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
            />
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
            <Infocard
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
            />
          </div>
          <div className="layoutappthird__row4">
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
            />
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
            />
          </div>
          <div className="layoutappfourth__row4">
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
            />
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi"
            />
          </div>
          <div className="layoutappfifth__row4">
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
            />
          </div>
          <div className="layoutappsixth__row4">
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
            />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
            />
          </div>
          <div className="layoutappseventh__row4">
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
            />
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
            <Infocard
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
            />
          </div>
          <div className="layoutappthird__row5">
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
            />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
            />
          </div>
          <div className="layoutappfourth__row5">
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
            />
          </div>
          <div className="layoutappfifth__row5">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
            />
          </div>
          <div className="layoutappsixth__row5">
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
            />
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
            />
          </div>
          <div className="layoutappseventh__row5">
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
            />
          </div>
          <div className="layoutappeighth__row5">
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
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
