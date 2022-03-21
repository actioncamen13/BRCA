import "./ClubsApp.css";
import React from "react";
import "../css/animate.css";
import ClubsNavbar from "./Navbar/ClubsNavbar";
import ClubsFooter from "./Footer/ClubsFooter";
import BRCA_CLUBS from "./BRCA CLUBS-min.png";

function ClubsApp() {
  return (
    <div className="clubsapp">
      <ClubsNavbar />
      <div className="clubsapp__body ">
        <div className="clubsapp__body__title">BRCA CLUBS</div>
        <div className=" animate__animated animate__slideInLeft clubsapp__body__row1">
          <a
            href="/dance"
            className="danceclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div
                className="circular__container"
                style={{ opacity: 0.71 }}
              ></div>
              <div className="club__content__text">DANCE</div>
            </div>
          </a>
          <a
            className="litclub"
            href="/literati"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div
                className="circular__container"
                style={{ opacity: 0.65 }}
              ></div>
              <div className="club__content__text">LIT</div>
            </div>
          </a>
          <a
            className="designclub"
            href="/design"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DESIGN</div>
            </div>
          </a>
          <a
            className="debateclub"
            href="/debating"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DEBSOC</div>
            </div>
          </a>
          <a className="pfcclub" href="/pfc" style={{ textDecoration: "none" }}>
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">PFC</div>
            </div>
          </a>
          <a
            className="faccclub"
            href="/facc"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">FACC</div>
            </div>
          </a>
        </div>
        <div className="clubsapp__body__text">
          <img src={BRCA_CLUBS} alt="Text saying BRCA Clubs" />
        </div>
        <div className=" animate__animated animate__slideInRight clubsapp__body__row2">
          <a
            className="musicclub"
            href="/music"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">MUSIC</div>
            </div>
          </a>
          <a
            className="dramaclub"
            href="/dramatics"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DRAMA</div>
            </div>
          </a>
          <a
            className="hindisamiticlub"
            href="/hindisamiti"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div
                className="club__content__text"
                style={{ fontSize: "1.2em" }}
              >
                HINDI SAMITI
              </div>
            </div>
          </a>
          <a
            className="quizclub"
            href="/quizzing"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">QC</div>
            </div>
          </a>
          <a
            className="spicmacayclub"
            href="/spicmacay"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div
                className="club__content__text"
                style={{ fontSize: "1.3em" }}
              >
                SPIC MACAY
              </div>
            </div>
          </a>
        </div>
        <div className="smallview">
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row3">
            <a
              href="/dance"
              className="danceclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div
                  className="circular__container"
                  style={{ opacity: 0.71 }}
                ></div>
                <div className="club__content__text">DANCE</div>
              </div>
            </a>
            <a
              className="litclub"
              href="/literati"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div
                  className="circular__container"
                  style={{ opacity: 0.65 }}
                ></div>
                <div className="club__content__text">LIT</div>
              </div>
            </a>
            <a
              className="designclub"
              href="/design"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DESIGN</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row4">
            <a
              className="debateclub"
              href="/debating"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DEBSOC</div>
              </div>
            </a>
            <a
              className="pfcclub"
              href="/pfc"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">PFC</div>
              </div>
            </a>
            <a
              className="faccclub"
              href="/facc"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">FACC</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row5">
            <a
              className="musicclub"
              href="/music"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">MUSIC</div>
              </div>
            </a>
            <a
              className="dramaclub"
              href="/dramatics"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DRAMA</div>
              </div>
            </a>
            <a
              className="hindisamiticlub"
              href="/hindisamiti"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div
                  className="club__content__text"
                  style={{ fontSize: "1.2em" }}
                >
                  HINDI SAMITI
                </div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row6">
            <a
              className="quizclub"
              href="/quizzing"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">QC</div>
              </div>
            </a>
            <a
              className="spicmacayclub"
              href="/spicmacay"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div
                  className="club__content__text"
                  style={{ fontSize: "1.3em" }}
                >
                  SPIC MACAY
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="smallerview">
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row7">
            <a
              href="/dance"
              className="danceclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div
                  className="circular__container"
                  style={{ opacity: 0.71 }}
                ></div>
                <div className="club__content__text">DANCE</div>
              </div>
            </a>
            <a
              className="litclub"
              href="/literati"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div
                  className="circular__container"
                  style={{ opacity: 0.65 }}
                ></div>
                <div className="club__content__text">LIT</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row8">
            <a
              className="designclub"
              href="/design"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DESIGN</div>
              </div>
            </a>
            <a
              className="debateclub"
              href="/debating"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DEBSOC</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row9">
            <a
              className="pfcclub"
              href="/pfc"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">PFC</div>
              </div>
            </a>
            <a
              className="faccclub"
              href="/facc"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">FACC</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row10">
            <a
              className="musicclub"
              href="/music"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">MUSIC</div>
              </div>
            </a>
            <a
              className="dramaclub"
              href="/dramatics"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DRAMA</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row11">
            <a
              className="hindisamiticlub"
              href="/hindisamiti"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div
                  className="club__content__text"
                  style={{ fontSize: "1.2em" }}
                >
                  HINDI SAMITI
                </div>
              </div>
            </a>
            <a
              className="quizclub"
              href="/quizzing"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">QC</div>
              </div>
            </a>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row12">
            <a
              className="spicmacayclub"
              href="/spicmacay"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div
                  className="club__content__text"
                  style={{ fontSize: "1.3em" }}
                >
                  SPIC MACAY
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <ClubsFooter />
    </div>
  );
}

export default ClubsApp;
