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
      <div className="body">
        <div className="body__title">
          <h1>CULTURAL SECRETARIES</h1>
        </div>
        <div className="first__row">
          <Infocard />
        </div>
        <div className="second__row">
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
        </div>
        <div className="third__row">
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
