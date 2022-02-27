import "./ClubsApp.css";
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
              <div className="club__content__text">DEBATE</div>
            </div>
          </div>
          <div className="pfcclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">PFC</div>
            </div>
          </div>
        </div>
        <div className="clubsapp__body__text">
          <img src={BRCA_CLUBS} alt="Text saying BRCA Clubs" />
        </div>
        <div className="clubsapp__body__row2">
          <div className="danceclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">DANCE</div>
            </div>
          </div>
          <div className="litclub">
            <div className="club__content">
              <div className="circular__container"></div>
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
              <div className="club__content__text">DEBATE</div>
            </div>
          </div>
          <div className="pfcclub">
            <div className="club__content">
              <div className="circular__container"></div>
              <div className="club__content__text">PFC</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClubsApp;