import "./ClubsApp.css";
import React from "react";
import "../css/animate.css";
import ClubsNavbar from "./Navbar/ClubsNavbar";
import ClubsFooter from "./Footer/ClubsFooter";
import { Link } from "react-router-dom";
// import BRCA_CLUBS from "./BRCA CLUBS-min.png";

function ClubsApp() {
  return (
    <div className="clubsapp">
      <ClubsNavbar />
      <div className="clubsapp__body ">
        <div className="clubsapp__body__title">BRCA CLUBS</div>
        <div className=" animate__animated animate__slideInLeft clubsapp__body__row1">
          <Link
            to="/dance"
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
          </Link>
          <Link
            to="/literati"
            className="litclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div
                className="circular__container"
                style={{ opacity: 0.65 }}
              ></div>
              <div className="club__content__text">LIT</div>
            </div>
          </Link>
          <Link
            to="/design"
            className="designclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DESIGN</div>
            </div>
          </Link>
          <Link
            to="/debating"
            className="debateclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DEBSOC</div>
            </div>
          </Link>
          <Link
            to="/pfc"
            className="pfcclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">PFC</div>
            </div>
          </Link>
          <Link
            to="/facc"
            className="faccclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">FACC</div>
            </div>
          </Link>
        </div>
        <div className="clubsapp__body__text">
          {/* <img src={BRCA_CLUBS} alt="Text saying BRCA Clubs" /> */}
          <h1>BRCA CLUBS</h1>
        </div>
        <div className=" animate__animated animate__slideInRight clubsapp__body__row2">
          <Link
            to="/music"
            className="musicclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">MUSIC</div>
            </div>
          </Link>
          <Link
            to="/dramatics"
            className="dramaclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DRAMA</div>
            </div>
          </Link>
          <Link
            to="/hindisamiti"
            className="hindisamiticlub"
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
          </Link>
          <Link
            to="/quizzing"
            className="quizclub"
            style={{ textDecoration: "none" }}
          >
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">QC</div>
            </div>
          </Link>
          <Link
            to="spicmacay"
            className="spicmacayclub"
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
          </Link>
        </div>
        <div className="smallview">
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row3">
            <Link
              to="/dance"
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
            </Link>
            <Link
              to="/literati"
              className="litclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div
                  className="circular__container"
                  style={{ opacity: 0.65 }}
                ></div>
                <div className="club__content__text">LIT</div>
              </div>
            </Link>
            <Link
              to="/design"
              className="designclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DESIGN</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row4">
            <Link
              to="/debating"
              className="debateclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DEBSOC</div>
              </div>
            </Link>
            <Link
              to="/pfc"
              className="pfcclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">PFC</div>
              </div>
            </Link>
            <Link
              to="/facc"
              className="faccclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">FACC</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row5">
            <Link
              to="/music"
              className="musicclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">MUSIC</div>
              </div>
            </Link>
            <Link
              to="/dramatics"
              className="dramaclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DRAMA</div>
              </div>
            </Link>
            <Link
              to="/hindisamiti"
              className="hindisamiticlub"
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
            </Link>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row6">
            <Link
              to="/quizzing"
              className="quizclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">QC</div>
              </div>
            </Link>
            <Link
              to="spicmacay"
              className="spicmacayclub"
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
            </Link>
          </div>
        </div>
        <div className="smallerview">
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row7">
            <Link
              to="/dance"
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
            </Link>
            <Link
              to="/literati"
              className="litclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div
                  className="circular__container"
                  style={{ opacity: 0.65 }}
                ></div>
                <div className="club__content__text">LIT</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row8">
            <Link
              to="/design"
              className="designclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DESIGN</div>
              </div>
            </Link>
            <Link
              to="/debating"
              className="debateclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DEBSOC</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row9">
            <Link
              to="/pfc"
              className="pfcclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">PFC</div>
              </div>
            </Link>
            <Link
              to="/facc"
              className="faccclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">FACC</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row10">
            <Link
              to="/music"
              className="musicclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">MUSIC</div>
              </div>
            </Link>
            <Link
              to="/dramatics"
              className="dramaclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">DRAMA</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row11">
            <Link
              to="/hindisamiti"
              className="hindisamiticlub"
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
            </Link>
            <Link
              to="/quizzing"
              className="quizclub"
              style={{ textDecoration: "none" }}
            >
              <div className="club__content">
                <div className="circular__container"></div>
                <div className="club__content__text">QC</div>
              </div>
            </Link>
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row12">
            <Link
              to="spicmacay"
              className="spicmacayclub"
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
            </Link>
          </div>
        </div>
      </div>
      <ClubsFooter />
    </div>
  );
}

export default ClubsApp;
