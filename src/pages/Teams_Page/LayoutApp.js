import "./LayoutApp.css";
// import BRCA_Logo from "./Front Design-01 6.png";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Altfooter from "./AlternateFooter/Altfooter";
import Infocard from "./Infocard/Infocard";

function LayoutApp() {
  return (
    <div className="layoutapp">
      <Navbar />
      <div className="layoutappbody">
        <div className="layoutappbody__title">
          <h1>CULTURAL SECRETARIES</h1>
        </div>
        <div className="layoutappfirst__row">
          <Infocard />
        </div>
        <div className="layoutappsecond__row">
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
        </div>
        <div className="layoutappthird__row">
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
        </div>
      </div>
      <Footer />
      {/* <Altfooter /> */}
    </div>
  );
}

export default LayoutApp;
