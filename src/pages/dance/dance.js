/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { Zoom } from "react-slideshow-image";
import "./css/styleDance.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../dance/images/logo.png";
import image1 from "./images/Duo.png";
import image2 from "./images/GroupDance.jpg";
import image3 from "./images/Offbeat.png";
import DanceNavbar from "./Navbar/DanceNavbar";
import DanceFooter from "./Footer/DanceFooter";
import Infocard from "./Infocard/Infocard";
// import DefaultPic from "./Infocard/Rectangle 103.png";
import Akash from "./1.png";
import Anukriti from "./2.png";
import Vatsal from "./3.png";
import Bhavya from "./4.png";
import Samarthya from "./5.png";
import Shlokh from "./6.png";
import Dishant from "./7.png";
import Mitanshu from "./8.png";
import Madhav from "./9.png";
import Franklin from "./10.png";
import Pranjalee from "./11.png";
import Rinish from "./12.png";
import Sanjay from "./13.png";
import Prasad from "./14.jpeg";

const Dance = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="dancepage">
      <div className="dancenavbar1">
        <DanceNavbar />
      </div>
      <div className="dancebody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Dance Club</h3>
            <p>
              In the words of Martha Graham, "Great dancers are not great
              because of their technique; they are great because of their
              passion", and we at Dance Club believe the same. Known for its
              glamorous performances and dedication, the club outperforms itself
              with popular events like Duo Dance and Group Dance every year.
              It's also a fresher inclusive club, providing them with the
              opportunity to start as a Novice and grow into a professional
              through various workshops and Fresher only event, Offbeat.
              V-Defyn, IIT Delhi's dance troupe, is a well-known dance group in
              the Delhi region that has made its legacy with a thread of
              glorified victories. Ensemble, the choreography society of IIT
              Delhi, having won several national podiums, can surely boast that
              they are the finest in their domain. The Institute Dance
              Production, organised towards the end of the year, is the magnum
              opus of the club, and it also provides aspiring students with a
              platform to improve their skills.{" "}
            </p>
            <div class="social_icons">
              <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
              <a
                href=""
                className="instapfc fa fa-instagram"
                target="blank"
              ></a>
              <a href="" className="fa fa-youtube"></a>
            </div>
          </div>
          <Zoom
            className="slideshow-container "
            {...zoomOutProperties}
            style={{}}
          >
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Group Dance</h3>
                  <p>
                    The first event of the Dance club where freshers
                    participate. It is the most awaited event of the year where
                    the enthusiasm of newly incubated fache and the talent of
                    their seniors combine to set the fire in the event. It is
                    mostly conducted when freshers get free by their majors
                    because in end of February.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image2}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Duo</h3>
                  <p>
                    Looking for the chance to cheer for your hostel before the
                    GC? In the month of December Duo+ is there for you, the
                    first inter-hostel event everyone waits for. Where GD is by
                    the freshers, duo+ is for the freshers. This is the event
                    where freshers witness the dance culture of their hostel as
                    well as the whole of the institute.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image1}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Offbeat</h3>
                  <p>
                    Inspired by the seniors dancing in the duo+, now our
                    freshers have a rush flowing to show off their dance skills
                    too. Offbeat presented by the Dance Club IIT Delhi in
                    January (mostly after the minors of freshers) is the only
                    freshers event conducted by the club in which freshers give
                    their solo performances.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image3}
                />
              </div>
            ))}
          </Zoom>
        </div>
        <div className="danceteam">
          <div className="danceteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="danceteamcontent">
            <div className="danceformat1">
              <div className="danceformat1_1">
                <Infocard
                  image={Dishant}
                  name="Dishant Dhiman"
                  position="Secretary"
                  phone="7206435754"
                  insta="https://www.instagram.com/dishant_.dhiman/"
                  email="ddxdhiman@gmail.com"
                />
              </div>
              <div className="danceformat1_2">
                <Infocard
                  image={Pranjalee}
                  name="Pranjalee"
                  position="Representative"
                  phone="9930780046"
                  insta="https://www.instagram.com/pranjalee_raj1208/"
                  email="pranjalee123@gmail.com"
                />
                <Infocard
                  image={Anukriti}
                  name="Anukriti"
                  position="Representative"
                  phone="9079194452"
                  insta="https://www.instagram.com/anuuuuuukriti/"
                  email="anukriti.ak21@gmail.com "
                />
                <Infocard
                  image={Bhavya}
                  name="Bhavya Shah"
                  position="Representative"
                  phone="9310591282"
                  insta="https://www.instagram.com/bhavyay.shah/"
                  email="bhavya.shw@gmail.com"
                />
              </div>
              <div className="danceformat1_3">
                <Infocard
                  image={Shlokh}
                  name="Shlokh Mohta"
                  position="Representative"
                  phone="9460324454"
                  insta="https://www.instagram.com/aspectratio09/"
                  email="shlokhmohta23@gmail.com"
                />
                <Infocard
                  image={Mitanshu}
                  name="Mitanshu Kansal"
                  position="Representative"
                  phone="9536191596"
                  insta="https://www.instagram.com/mitanshu_kansal/"
                  email="kansal.mitanshu@gmail.com"
                />
                <Infocard
                  image={Vatsal}
                  name="Vatsal Jingar"
                  position="Representative"
                  phone="7727022731"
                  insta="https://www.instagram.com/_vatsal_2709/"
                  email="vatsaljingar2002@gmail.com"
                />
                <Infocard
                  image={Sanjay}
                  name="Sanjay Kumar"
                  position="Representative"
                  phone="9821041925"
                  insta="https://www.instagram.com/hyper._.bhola/"
                  email="sanjayhreo@gmail.com"
                />
                <Infocard
                  image={Akash}
                  name="Akash Sinha"
                  position="Representative"
                  phone="8707894644"
                  insta="https://www.instagram.com/_akashsinha77/"
                  email="akashsinha2503@gmail.com"
                />
              </div>
              <div className="danceformat1_4">
                <Infocard
                  image={Franklin}
                  name="Franklin"
                  position="Representative"
                  phone="7005529559"
                  insta="https://www.instagram.com/barijuban_/"
                  email="barijubansohliya@gmail.com"
                />
                <Infocard
                  image={Samarthya}
                  name="S.Gupta"
                  position="Representative"
                  phone="9140594491"
                  insta="https://www.instagram.com/_.samarthya/"
                  email="samarthyaspectacular@gmail.com"
                />
                <Infocard
                  image={Madhav}
                  name="Madhav Goel"
                  position="Representative"
                  phone="7015823744"
                  insta="https://www.instagram.com/madhav_goel21/"
                  email="madhav1234vasu@gmail.com"
                />
                <Infocard
                  image={Prasad}
                  name="Prasad Bhosale"
                  position="Representative"
                  phone="9552246123"
                  insta="https://www.instagram.com/_prasad_bhosale._/"
                  email="prasadbhosale360@gmail.com"
                />
                <Infocard
                  image={Rinish}
                  name="Rinish Agrawal"
                  position="Representative"
                  phone="9929505706"
                  insta="https://www.instagram.com/rinish_01/"
                  email="rinish2866jpr@gmail.com"
                />
              </div>
            </div>
            <div className="danceformat2">
              <div className="danceformat2_1">
                <Infocard
                  image={Dishant}
                  name="Dishant Dhiman"
                  position="Secretary"
                  phone="7206435754"
                  email="ddxdhiman@gmail.com"
                />
              </div>
              <div className="danceformat2_2">
                <Infocard
                  image={Pranjalee}
                  name="Pranjalee"
                  position="Representative"
                  phone="9930780046"
                  insta="https://www.instagram.com/pranjalee_raj1208/"
                  email="pranjalee123@gmail.com"
                />
                <Infocard
                  image={Anukriti}
                  name="Anukriti"
                  position="Representative"
                  phone="9079194452"
                  insta="https://www.instagram.com/anuuuuuukriti/"
                  email="anukriti.ak21@gmail.com "
                />
                <Infocard
                  image={Bhavya}
                  name="Bhavya Shah"
                  position="Representative"
                  phone="9310591282"
                  insta="https://www.instagram.com/bhavyay.shah/"
                  email="bhavya.shw@gmail.com"
                />
              </div>
              <div className="danceformat2_3">
                <Infocard
                  image={Shlokh}
                  name="Shlokh Mohta"
                  position="Representative"
                  phone="9460324454"
                  insta="https://www.instagram.com/aspectratio09/"
                  email="shlokhmohta23@gmail.com"
                />
                <Infocard
                  image={Mitanshu}
                  name="Mitanshu Kansal"
                  position="Representative"
                  phone="9536191596"
                  insta="https://www.instagram.com/mitanshu_kansal/"
                  email="kansal.mitanshu@gmail.com"
                />
                <Infocard
                  image={Vatsal}
                  name="Vatsal Jingar"
                  position="Representative"
                  phone="7727022731"
                  insta="https://www.instagram.com/_vatsal_2709/"
                  email="vatsaljingar2002@gmail.com"
                />
              </div>
              <div className="danceformat2_4">
                <Infocard
                  image={Sanjay}
                  name="Sanjay Kumar"
                  position="Representative"
                  phone="9821041925"
                  insta="https://www.instagram.com/hyper._.bhola/"
                  email="sanjayhreo@gmail.com"
                />
                <Infocard
                  image={Akash}
                  name="Akash Sinha"
                  position="Representative"
                  phone="8707894644"
                  insta="https://www.instagram.com/_akashsinha77/"
                  email="akashsinha2503@gmail.com"
                />
                <Infocard
                  image={Franklin}
                  name="Franklin"
                  position="Representative"
                  phone="7005529559"
                  insta="https://www.instagram.com/barijuban_/"
                  email="barijubansohliya@gmail.com"
                />
              </div>
              <div className="danceformat2_5">
                <Infocard
                  image={Samarthya}
                  name="S.Gupta"
                  position="Representative"
                  phone="9140594491"
                  insta="https://www.instagram.com/_.samarthya/"
                  email="samarthyaspectacular@gmail.com"
                />
                <Infocard
                  image={Madhav}
                  name="Madhav Goel"
                  position="Representative"
                  phone="7015823744"
                  insta="https://www.instagram.com/madhav_goel21/"
                  email="madhav1234vasu@gmail.com"
                />
                <Infocard
                  image={Prasad}
                  name="Prasad Bhosale"
                  position="Representative"
                  phone="9552246123"
                  insta="https://www.instagram.com/_prasad_bhosale._/"
                  email="prasadbhosale360@gmail.com"
                />
                <Infocard
                  image={Rinish}
                  name="Rinish Agrawal"
                  position="Representative"
                  phone="9929505706"
                  insta="https://www.instagram.com/rinish_01/"
                  email="rinish2866jpr@gmail.com"
                />
              </div>
            </div>
            <div className="danceformat3">
              <div className="danceformat3_1">
                <Infocard
                  image={Dishant}
                  name="Dishant Dhiman"
                  position="Secretary"
                  phone="7206435754"
                  email="ddxdhiman@gmail.com"
                />
              </div>
              <div className="danceformat3_2">
                <Infocard
                  image={Pranjalee}
                  name="Pranjalee"
                  position="Representative"
                  phone="9930780046"
                  insta="https://www.instagram.com/pranjalee_raj1208/"
                  email="pranjalee123@gmail.com"
                />
              </div>
              <div className="danceformat3_3">
                <Infocard
                  image={Anukriti}
                  name="Anukriti"
                  position="Representative"
                  phone="9079194452"
                  insta="https://www.instagram.com/anuuuuuukriti/"
                  email="anukriti.ak21@gmail.com "
                />
                <Infocard
                  image={Bhavya}
                  name="Bhavya Shah"
                  position="Representative"
                  phone="9310591282"
                  insta="https://www.instagram.com/bhavyay.shah/"
                  email="bhavya.shw@gmail.com"
                />
              </div>
              <div className="danceformat3_4">
                <Infocard
                  image={Shlokh}
                  name="Shlokh Mohta"
                  position="Representative"
                  phone="9460324454"
                  insta="https://www.instagram.com/aspectratio09/"
                  email="shlokhmohta23@gmail.com"
                />
                <Infocard
                  image={Mitanshu}
                  name="Mitanshu Kansal"
                  position="Representative"
                  phone="9536191596"
                  insta="https://www.instagram.com/mitanshu_kansal/"
                  email="kansal.mitanshu@gmail.com"
                />
              </div>
              <div className="danceformat3_5">
                <Infocard
                  image={Vatsal}
                  name="Vatsal Jingar"
                  position="Representative"
                  phone="7727022731"
                  insta="https://www.instagram.com/_vatsal_2709/"
                  email="vatsaljingar2002@gmail.com"
                />
                <Infocard
                  image={Sanjay}
                  name="Sanjay Kumar"
                  position="Representative"
                  phone="9821041925"
                  insta="https://www.instagram.com/hyper._.bhola/"
                  email="sanjayhreo@gmail.com"
                />
              </div>
              <div className="danceformat3_6">
                <Infocard
                  image={Akash}
                  name="Akash Sinha"
                  position="Representative"
                  phone="8707894644"
                  insta="https://www.instagram.com/_akashsinha77/"
                  email="akashsinha2503@gmail.com"
                />
                <Infocard
                  image={Franklin}
                  name="Franklin"
                  position="Representative"
                  phone="7005529559"
                  insta="https://www.instagram.com/barijuban_/"
                  email="barijubansohliya@gmail.com"
                />
              </div>
              <div className="danceformat3_7">
                <Infocard
                  image={Samarthya}
                  name="S.Gupta"
                  position="Representative"
                  phone="9140594491"
                  insta="https://www.instagram.com/_.samarthya/"
                  email="samarthyaspectacular@gmail.com"
                />
                <Infocard
                  image={Madhav}
                  name="Madhav Goel"
                  position="Representative"
                  phone="7015823744"
                  insta="https://www.instagram.com/madhav_goel21/"
                  email="madhav1234vasu@gmail.com"
                />
              </div>
              <div className="danceformat3_8">
                <Infocard
                  image={Prasad}
                  name="Prasad Bhosale"
                  position="Representative"
                  phone="9552246123"
                  insta="https://www.instagram.com/_prasad_bhosale._/"
                  email="prasadbhosale360@gmail.com"
                />
                <Infocard
                  image={Rinish}
                  name="Rinish Agrawal"
                  position="Representative"
                  phone="9929505706"
                  insta="https://www.instagram.com/rinish_01/"
                  email="rinish2866jpr@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dancefooter1">
        <DanceFooter />
      </div>
    </div>
  );
};

export default Dance;
