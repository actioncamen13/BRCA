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
              phone="9829758262"
              insta="https://www.instagram.com/aman._lohia/"
              email="lohiaaman1@gmail.com"
            />
          </div>
          <div className="layoutappsecond__row1">
            <Infocard
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
              phone="9636731715"
              insta="https://www.instagram.com/_rishi_1001/"
              email="rishi.shah10122001@gmail.com"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
              phone="9541583322"
              insta="https://instagram.com/kesshhaavvv?utm_medium=copy_link"
              email="keshavg732@gmail.com"
            />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
              phone="8930072725"
              insta="https://instagram.com/two_eyedraven?utm_medium=copy_link"
              email="priyanshu18j@gmail.com"
            />
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
              phone="7014165797"
              insta="https://www.instagram.com/_somya51_/"
              email="somya51@icloud.com"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
              phone="9997531004"
              insta="https://www.instagram.com/diwakar_singh712/"
              email="diwakarsingh712@gmail.com"
            />
          </div>
          <div className="layoutappthird__row1">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi "
              phone="7042345171"
              insta="https://www.instagram.com/cosmicnishu/"
              email="bansalnishant2110@gmail.com"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
              phone="7061590522"
              insta="https://www.instagram.com/sagar.jaiswal_._/"
              email="sagar.jaiswal.iitd@gmail.com"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
              phone="7339906320"
              email="adityavishal100401@gmail.com"
            />
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
              phone="6378181638"
              insta="https://instagram.com/tarungaur13?utm_medium=copy_link"
              email="tarungaur81@gmail.com"
            />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
              phone="9406607077"
              insta="https://www.instagram.com/anisha__banthia/?r=nametag"
              email="anishabanthia149@gmail.com"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
              phone="8882367230"
              insta="https://www.instagram.com/ritik_5701/"
              email="ritik05072001@gmail.com"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
              phone="6350300554"
              insta="https://instagram.com/prem.kh.02?utm_medium=copy_link"
              email="premkhandelwal530@gmail.com"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
              phone="9810465757"
              insta="https://www.instagram.com/_aashitagupta/"
              email="ce1190204@iitd.ac.in"
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
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
              phone="9636731715"
              insta="https://www.instagram.com/_rishi_1001/"
              email="rishi.shah10122001@gmail.com"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
              phone="9541583322"
              insta="https://instagram.com/kesshhaavvv?utm_medium=copy_link"
              email="keshavg732@gmail.com"
            />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
              phone="8930072725"
              insta="https://instagram.com/two_eyedraven?utm_medium=copy_link"
              email="priyanshu18j@gmail.com"
            />
          </div>
          <div className="layoutappthird__row2">
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
              phone="7014165797"
              insta="https://www.instagram.com/_somya51_/"
              email="somya51@icloud.com"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
              phone="9997531004"
              insta="https://www.instagram.com/diwakar_singh712/"
              email="diwakarsingh712@gmail.com"
            />
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi "
              phone="7042345171"
              insta="https://www.instagram.com/cosmicnishu/"
              email="bansalnishant2110@gmail.com"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
              phone="7061590522"
              insta="https://www.instagram.com/sagar.jaiswal_._/"
              email="sagar.jaiswal.iitd@gmail.com"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
              phone="7339906320"
              email="adityavishal100401@gmail.com"
            />
          </div>
          <div className="layoutappfourth__row2">
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
              phone="6378181638"
              insta="https://instagram.com/tarungaur13?utm_medium=copy_link"
              email="tarungaur81@gmail.com"
            />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
              phone="9406607077"
              insta="https://www.instagram.com/anisha__banthia/?r=nametag"
              email="anishabanthia149@gmail.com"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
              phone="8882367230"
              insta="https://www.instagram.com/ritik_5701/"
              email="ritik05072001@gmail.com"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
              phone="6350300554"
              insta="https://instagram.com/prem.kh.02?utm_medium=copy_link"
              email="premkhandelwal530@gmail.com"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
              phone="9810465757"
              insta="https://www.instagram.com/_aashitagupta/"
              email="ce1190204@iitd.ac.in"
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
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
              phone="9636731715"
              insta="https://www.instagram.com/_rishi_1001/"
              email="rishi.shah10122001@gmail.com"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
              phone="9541583322"
              insta="https://instagram.com/kesshhaavvv?utm_medium=copy_link"
              email="keshavg732@gmail.com"
            />
          </div>
          <div className="layoutappthird__row3">
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
              phone="8930072725"
              insta="https://instagram.com/two_eyedraven?utm_medium=copy_link"
              email="priyanshu18j@gmail.com"
            />
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
              phone="7014165797"
              insta="https://www.instagram.com/_somya51_/"
              email="somya51@icloud.com"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
              phone="9997531004"
              insta="https://www.instagram.com/diwakar_singh712/"
              email="diwakarsingh712@gmail.com"
            />
          </div>
          <div className="layoutappfourth__row3">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi "
              phone="7042345171"
              insta="https://www.instagram.com/cosmicnishu/"
              email="bansalnishant2110@gmail.com"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
              phone="7061590522"
              insta="https://www.instagram.com/sagar.jaiswal_._/"
              email="sagar.jaiswal.iitd@gmail.com"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
              phone="7339906320"
              email="adityavishal100401@gmail.com"
            />
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
              phone="6378181638"
              insta="https://instagram.com/tarungaur13?utm_medium=copy_link"
              email="tarungaur81@gmail.com"
            />
          </div>
          <div className="layoutappfifth__row3">
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
              phone="9406607077"
              insta="https://www.instagram.com/anisha__banthia/?r=nametag"
              email="anishabanthia149@gmail.com"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
              phone="8882367230"
              insta="https://www.instagram.com/ritik_5701/"
              email="ritik05072001@gmail.com"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
              phone="6350300554"
              insta="https://instagram.com/prem.kh.02?utm_medium=copy_link"
              email="premkhandelwal530@gmail.com"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
              phone="9810465757"
              insta="https://www.instagram.com/_aashitagupta/"
              email="ce1190204@iitd.ac.in"
            />
          </div>
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
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
              phone="9636731715"
              insta="https://www.instagram.com/_rishi_1001/"
              email="rishi.shah10122001@gmail.com"
            />
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
              phone="9541583322"
              insta="https://instagram.com/kesshhaavvv?utm_medium=copy_link"
              email="keshavg732@gmail.com"
            />
          </div>
          <div className="layoutappthird__row4">
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
              phone="8930072725"
              insta="https://instagram.com/two_eyedraven?utm_medium=copy_link"
              email="priyanshu18j@gmail.com"
            />
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
              phone="7014165797"
              insta="https://www.instagram.com/_somya51_/"
              email="somya51@icloud.com"
            />
          </div>
          <div className="layoutappfourth__row4">
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
              phone="9997531004"
              insta="https://www.instagram.com/diwakar_singh712/"
              email="diwakarsingh712@gmail.com"
            />
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi "
              phone="7042345171"
              insta="https://www.instagram.com/cosmicnishu/"
              email="bansalnishant2110@gmail.com"
            />
          </div>
          <div className="layoutappfifth__row4">
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
              phone="7061590522"
              insta="https://www.instagram.com/sagar.jaiswal_._/"
              email="sagar.jaiswal.iitd@gmail.com"
            />
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
              phone="7339906320"
              email="adityavishal100401@gmail.com"
            />
          </div>
          <div className="layoutappsixth__row4">
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
              phone="6378181638"
              insta="https://instagram.com/tarungaur13?utm_medium=copy_link"
              email="tarungaur81@gmail.com"
            />
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
              phone="9406607077"
              insta="https://www.instagram.com/anisha__banthia/?r=nametag"
              email="anishabanthia149@gmail.com"
            />
          </div>
          <div className="layoutappseventh__row4">
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
              phone="8882367230"
              insta="https://www.instagram.com/ritik_5701/"
              email="ritik05072001@gmail.com"
            />
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
              phone="6350300554"
              insta="https://instagram.com/prem.kh.02?utm_medium=copy_link"
              email="premkhandelwal530@gmail.com"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
              phone="9810465757"
              insta="https://www.instagram.com/_aashitagupta/"
              email="ce1190204@iitd.ac.in"
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
              image={Rishi}
              name="Rishi Shah"
              position="Aravali"
              phone="9636731715"
              insta="https://www.instagram.com/_rishi_1001/"
              email="rishi.shah10122001@gmail.com"
            />
          </div>
          <div className="layoutappthird__row5">
            <Infocard
              image={Keshav}
              name="Keshav Gupta"
              position="Shivalik"
              phone="9541583322"
              insta="https://instagram.com/kesshhaavvv?utm_medium=copy_link"
              email="keshavg732@gmail.com"
            />
            <Infocard
              image={Priyanshu}
              name="Priyanshu Jangid"
              position="Girnar"
              phone="8930072725"
              insta="https://instagram.com/two_eyedraven?utm_medium=copy_link"
              email="priyanshu18j@gmail.com"
            />
          </div>
          <div className="layoutappfourth__row5">
            <Infocard
              image={Somya}
              name="S.Maheshwari"
              position="Udaigiri"
              phone="7014165797"
              insta="https://www.instagram.com/_somya51_/"
              email="somya51@icloud.com"
            />
            <Infocard
              image={Diwakar}
              name="Diwakar Singh"
              position="Karakoram"
              phone="9997531004"
              insta="https://www.instagram.com/diwakar_singh712/"
              email="diwakarsingh712@gmail.com"
            />
          </div>
          <div className="layoutappfifth__row5">
            <Infocard
              image={Nishant}
              name="Nishant Bansal"
              position="Jwalamukhi "
              phone="7042345171"
              insta="https://www.instagram.com/cosmicnishu/"
              email="bansalnishant2110@gmail.com"
            />
            <Infocard
              image={Sagar}
              name="Sagar"
              position="Vindhyachal"
              phone="7061590522"
              insta="https://www.instagram.com/sagar.jaiswal_._/"
              email="sagar.jaiswal.iitd@gmail.com"
            />
          </div>
          <div className="layoutappsixth__row5">
            <Infocard
              image={Aditya}
              name="Aditya Vishal"
              position="Nilgiri"
              phone="7339906320"
              email="adityavishal100401@gmail.com"
            />
            <Infocard
              image={Tarun}
              name="Tarun Gaur"
              position="Zanskar"
              phone="6378181638"
              insta="https://instagram.com/tarungaur13?utm_medium=copy_link"
              email="tarungaur81@gmail.com"
            />
          </div>
          <div className="layoutappseventh__row5">
            <Infocard
              image={Anisha}
              name="Anisha Banthia"
              position="Kailash"
              phone="9406607077"
              insta="https://www.instagram.com/anisha__banthia/?r=nametag"
              email="anishabanthia149@gmail.com"
            />
            <Infocard
              image={Ritik}
              name="Ritik Yadav"
              position="Satpura"
              phone="8882367230"
              insta="https://www.instagram.com/ritik_5701/"
              email="ritik05072001@gmail.com"
            />
          </div>
          <div className="layoutappeighth__row5">
            <Infocard
              image={Prem}
              name="Prem Khandelwal"
              position="Kumaon"
              phone="6350300554"
              insta="https://instagram.com/prem.kh.02?utm_medium=copy_link"
              email="premkhandelwal530@gmail.com"
            />
            <Infocard
              image={Aashita}
              name="Aashita Gupta"
              position="Himadri"
              phone="9810465757"
              insta="https://www.instagram.com/_aashitagupta/"
              email="ce1190204@iitd.ac.in"
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
