import "./ClubsApp.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BRCA_CLUBS from "./BRCA CLUBS.png";

function ClubsApp() {
  return (
    <div className="clubsapp">
      <Navbar />
      <div className="clubsapp__body">
        <div className="clubsapp__body__row1">
          <div className="danceclub">
            <div className="club__content">
              <div
                className="circular__container"
                style={{ opacity: 0.71 }}
              ></div>
              <div className="club__content__text">DANCE</div>
            </div>
          </div>
          <div className="litclub">
            <div className="club__content">
              <div
                className="circular__container"
                style={{ opacity: 0.65 }}
              ></div>
              <div className="club__content__text">LIT</div>
            </div>
          </div>
          <div className="designclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DESIGN</div>
            </div>
          </div>
          <div className="debateclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DEBSOC</div>
            </div>
          </div>
          <div className="pfcclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">PFC</div>
            </div>
          </div>
          <div className="faccclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">FACC</div>
            </div>
          </div>
        </div>
        <div className="clubsapp__body__text">
          <img src={BRCA_CLUBS} alt="Text saying BRCA Clubs" />
        </div>
        <div className="clubsapp__body__row2">
          <div className="musicclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">MUSIC</div>
            </div>
          </div>
          <div className="dramaclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DRAMA</div>
            </div>
          </div>
          <div className="hindisamiticlub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div
                className="club__content__text"
                style={{ fontSize: "1.2em" }}
              >
                HINDI SAMITI
              </div>
            </div>
          </div>
          <div className="quizclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">QC</div>
            </div>
          </div>
          <div className="spicmacayclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div
                className="club__content__text"
                style={{ fontSize: "1.3em" }}
              >
                SPIC MACAY
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClubsApp;
