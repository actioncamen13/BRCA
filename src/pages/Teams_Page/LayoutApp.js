import "./LayoutApp.css";
// import BRCA_Logo from "./Front Design-01 6.png";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import Altfooter from "./AlternateFooter/Altfooter";
import Infocard from "./Infocard/Infocard";
import Aashita from "./Aashita Gupta_Himadri.jpeg";
import Aditya from "./Aditya Vishal _ Nilgiri.jpg";
import Anisha from "./Anisha__Kailash.jpg";
import Diwakar from "./Diwakar_Karakoram.jpeg";
import Keshav from "./Keshav_Shivalik.jpg";
import Nishant from "./Nishant Bansal_Jwalamukhi.jpg";
import Prem from "./Prem Khandelwal_Kumaon.jpg";
import Priyanshu from "./Priyanshu_Girnar.jpg";
import Rishi from "./Rishi_Aravali.jpg";
import Ritik from "./Ritik Yadav_Satpura.JPG";
import Sagar from "./Sagar_Vindhyachal.jpg";
import Somya from "./Somya Maheshwari_Udaigiri.PNG";
import Tarun from "./TarunGaur_Zanskar.jpg";
import DefaultPic from "./Infocard/Rectangle 103.png";

function LayoutApp() {
  return (
    <div className="layoutapp">
      <Navbar />
      <div className="layoutappbody">
        <div className="layoutappbody__title">
          <h1>CULTURAL SECRETARIES</h1>
        </div>
        <div className="layoutappfirst__row">
          <Infocard image={Aashita} name="Aashita Gupta" position="Position" />
        </div>
        <div className="layoutappsecond__row">
          <Infocard image={Rishi} name="Rishi Shah" position="Position" />
          <Infocard image={Keshav} name="Keshav Gupta" position="Position" />
          <Infocard
            image={Priyanshu}
            name="Priyanshu Jangid"
            position="Position"
          />
          <Infocard image={Somya} name="Somya Maheshwari" position="Position" />
          <Infocard image={Diwakar} name="Diwakar Singh" position="Position" />
        </div>
        <div className="layoutappthird__row">
          <Infocard image={Nishant} name="Nishant Bansal" position="Position" />
          <Infocard image={Sagar} name="Sagar" position="Position" />
          <Infocard image={Aditya} name="Aditya Vishal" position="Position" />
          <Infocard image={Tarun} name="Tarun Gaur" position="Position" />
          <Infocard image={Anisha} name="Anisha Banthia" position="Position" />
          <Infocard image={Ritik} name="Ritik Yadav" position="Position" />
          <Infocard image={Prem} name="Prem Khandelwal" position="Position" />
          <Infocard
            image={DefaultPic}
            name="Aman Kumar Lohia"
            position="Position"
          />
        </div>
      </div>
      <Footer />
      {/* <Altfooter /> */}
    </div>
  );
}

export default LayoutApp;
