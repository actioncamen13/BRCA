import "./ClubsApp.css";
import React from "react";
import "../css/animate.css";
import ClubsNavbar from "./Navbar/ClubsNavbar";
import ClubsFooter from "./Footer/ClubsFooter";
import BRCA_CLUBS from "./BRCA CLUBS.png";

function ClubsApp() {
  return (
    <div className="clubsapp">
      <ClubsNavbar />
      <div className="clubsapp__body ">
        <div className="clubsapp__body__title">BRCA CLUBS</div>
        <div className=" animate__animated animate__slideInLeft clubsapp__body__row1">
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
        <div className=" animate__animated animate__slideInRight clubsapp__body__row2">
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
        <div className="smallview">
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row3">
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
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row4">
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
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row5">
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
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row6">
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
        <div className="smallerview">
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row7">
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
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row8">
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
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row9">
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
          <div className=" animate__animated animate__slideInRight clubsapp__body__row10">
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
          </div>
          <div className=" animate__animated animate__slideInLeft clubsapp__body__row11">
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
          </div>
          <div className=" animate__animated animate__slideInRight clubsapp__body__row12">
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
      </div>
      <ClubsFooter />
    </div>
  );
}

export default ClubsApp;
