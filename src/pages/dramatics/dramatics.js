/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
// import ReactDOM from 'react-dom';
import { Zoom } from "react-slideshow-image";
import "./css/styleDramatics.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../dramatics/images/logo.png";
import image1 from "./images/2.png";
import image2 from "./images/1.png";
import image3 from "./images/3.png";
import DramaticsNavbar from "./Navbar/DramaticsNavbar";
import DramaticsFooter from "./Footer/DramaticsFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";
import Akshat from "./1.png";
import Aadil from "./2.png";
import Garvit from "./3.png";
import Kulveer from "./4.png";
import Nikhil from "./5.png";
import Navneet from "./6.png";
import PriyanshuJain from "./7.png";
import Sanskriti from "./8.png";
import Smrati from "./9.png";
import Sujal from "./10.png";
import Upasak from "./11.png";
import Yash from "./12.png";
import Abhinav from "./Abhinav Verma.jpg";
import AkshatL from "./Akshat Lohiya.JPG";
import Naman from "./Naman.JPG";
import Nameer from "./Nameer Khan.jpg";
import Sarvagya from "./Sarvagya Kumar.jpg";

const Dramatics = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="dramaticspage">
      <div className="dramaticsnavbar1">
        <DramaticsNavbar />
      </div>
      <div className="dramaticsbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Dramatics Club</h3>
            <p>
              Hola Amigos We present to you ANKAHI, the dramatics society of IIT
              Delhi. And of course dramatics , where to begin with..... Well
              nowhere cause everything here is a beginning point. Be it acting
              like Bollywood or directing like Hollywood, be it story like
              K-drama or music like Dil se nikalta hua gaana everything is
              available here. From "et tu brute" to "How's the Josh", from a
              dramatic breeze to Haider ki speech we cover it all with the line
              of events including but not limited to the street plays, stage
              acts, monoacts ohh and wait it just doesn't end here with things
              online right now, first plan movies, don't worry we gotcha. Filled
              with fun, starting at drama and ending nowhere this is probably
              (totally not asked by other clubs to put a probably in there) the
              BEST club here at IIT Delhi Looking forward to all the enthusiasm
              and love by the audience and of course the participants{" "}
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
                  <h3> Interhostel Stage Play</h3>
                  <p>
                    Interhostel group event where teams from all the hostel come
                    and perform their production on a professional level stage
                    at IIT Delhi campus and compete together
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
                  <h3>Interhostel Street Play </h3>
                  <p>
                    Interhostel group event where teams from all the hostel come
                    and perform a street play addressing a social issue. The
                    energy is so high during this event that it witnesses one of
                    the highest footfalls.
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
                  <h3> Interhostel Monoact</h3>
                  <p>
                    Monoact is a solo event where each hostel sends certain
                    amount of entries to further compete on stage at IIT Delhi
                    campus
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
        <div className="dramaticsteam">
          <div className="dramaticsteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="dramaticsteamcontent">
            <div className="dramaticsformat1">
              <div className="dramaticsformat1_1">
                <Infocard
                  image={Naman}
                  name="Naman Porwal"
                  position="Secretary"
                  phone="8290198198"
                  insta="https://www.instagram.com/porwal_naman_/"
                  email="porwalnaman01@gmail.com"
                />
              </div>
              <div className="dramaticsformat1_2">
                <Infocard
                  image={Sarvagya}
                  name="Sarvagya Kumar"
                  position="Director"
                  phone="8866643422"
                  insta="https://www.instagram.com/sarvisydelic/"
                  email="sarvisydelic@gmail.com"
                />

                <Infocard
                  image={DefaultPic}
                  name="Tarun Khinchi"
                  position="Director"
                  phone="9461990448"
                  insta="https://www.instagram.com/kenitchi_trunn/"
                  email="tarunkhinchi.iitd@gmail.com"
                />
                <Infocard
                  image={Abhinav}
                  name="Abhinav Verma"
                  position="Director"
                  phone="8765750208"
                  insta="https://www.instagram.com/xbhinv/"
                  email="a.verma00shine@gmail.com"
                />
                <Infocard
                  image={AkshatL}
                  name="Akshat Lohiya"
                  position="Director"
                  phone="8989982413"
                  insta="https://www.instagram.com/akshat_lohiya/"
                  email="akshatlohiya1106@gmail.com"
                />
                <Infocard
                  image={Nameer}
                  name="Nameer Khan"
                  position="Director"
                  phone="8477074434"
                  insta="https://www.instagram.com/nameerkhan23/"
                  email="knameer1@gmail.com"
                />
              </div>
              <div className="dramaticsformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Kumar"
                  position="Representative"
                  phone="6398599760"
                  insta="https://www.instagram.com/p.r.i.y.a.n.s.h.u_kr/"
                  email="priyanshukr1703@gmail.com"
                />
                <Infocard
                  image={PriyanshuJain}
                  name="Priyanshu Jain"
                  position="Representative"
                  phone="8800668064"
                  insta="https://www.instagram.com/priyanshu_jain11/"
                  email="jain.priyanshu1110@gmail.com"
                />
                <Infocard
                  image={Garvit}
                  name="Garvit Dhawan"
                  position="Representative"
                  phone="7895037751"
                  insta="http://instagram.com/_garvit.the.one_"
                  email="dhawangarvit03@gmail.com"
                />
                <Infocard
                  image={Sujal}
                  name="Sujal Jain"
                  position="Representative"
                  phone="7023307535"
                  insta="http://instagram.com/su__jain"
                  email="sujaljain1111@gmail.com"
                />
                <Infocard
                  image={Akshat}
                  name="Akshat Chauhan"
                  position="Representative"
                  phone="8860136512"
                  insta="https://instagram.com/akshat.27_?utm_medium=copy_link"
                  email="akshat27chauhan@gmail.com"
                />
                <Infocard
                  image={Sanskriti}
                  name="Sanskriti Jain"
                  position="Representative"
                  phone="9910960739"
                  insta="https://www.instagram.com/sanskriti.jain13/"
                  email="sanskritijain1311@gmail.com"
                />
              </div>
              <div className="dramaticsformat1_4">
                <Infocard
                  image={Upasak}
                  name="Upasak Sharma"
                  position="Representative"
                  phone="9070700019"
                  insta="https://www.instagram.com/upasak19/"
                  email="upasak19dhotra@gmail.com"
                />
                <Infocard
                  image={Smrati}
                  name="Smrati Tripathi"
                  position="Representative"
                  phone="6266118317"
                  insta="https://www.instagram.com/smrati_25/?hl=en"
                  email="smrati.iitdelhi@gmail.com@gmail.com"
                />
                <Infocard
                  image={Navneet}
                  name="Navneet Singh"
                  position="Representative"
                  phone="9416579331"
                  insta="https://instagram.com/masum._.balak/"
                  email="navneetsihag50@gmail.com"
                />
                <Infocard
                  image={Aadil}
                  name="Aadil Akhtar"
                  position="Representative"
                  phone="8210155112"
                  insta="https://www.instagram.com/aadil_akhtar_3402/"
                  email="aadilakhtar3402@gmail.com"
                />
                <Infocard
                  image={Kulveer}
                  name="Kulveer Singh"
                  position="Representative"
                  phone="8595349484"
                  insta="https://www.instagram.com/sihagkulveer/"
                  email="kulveersihag70@icloud.com"
                />
                <Infocard
                  image={Nikhil}
                  name="Nikhil Kumar"
                  position="Representative"
                  phone="7073705533"
                  insta="https://www.instagram.com/z.e.r.o._.0"
                  email="nikhilkumarlkr09@gmail.com"
                />
                <Infocard
                  image={Yash}
                  name="Yash Gupta"
                  position="Representative"
                  phone="9999502569"
                  insta="https://www.instagram.com/invites/contact/?i=1avg3goplwdr6&utm_content=jkuwnyj"
                  email="yashguptagdg@gmail.com"
                />
              </div>
            </div>
            <div className="dramaticsformat2">
              <div className="dramaticsformat2_1">
                <Infocard
                  image={Naman}
                  name="Naman Porwal"
                  position="Secretary"
                  phone="8290198198"
                  insta="https://www.instagram.com/porwal_naman_/"
                  email="porwalnaman01@gmail.com"
                />
              </div>
              <div className="dramaticsformat2_2">
                <Infocard
                  image={Sarvagya}
                  name="Sarvagya Kumar"
                  position="Director"
                  phone="8866643422"
                  insta="https://www.instagram.com/sarvisydelic/"
                  email="sarvisydelic@gmail.com"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tarun Khinchi"
                  position="Director"
                  phone="9461990448"
                  insta="https://www.instagram.com/kenitchi_trunn/"
                  email="tarunkhinchi.iitd@gmail.com"
                />
              </div>
              <div className="dramaticsformat2_3">
                <Infocard
                  image={Abhinav}
                  name="Abhinav Verma"
                  position="Director"
                  phone="8765750208"
                  insta="https://www.instagram.com/xbhinv/"
                  email="a.verma00shine@gmail.com"
                />
                <Infocard
                  image={AkshatL}
                  name="Akshat Lohiya"
                  position="Director"
                  phone="8989982413"
                  insta="https://www.instagram.com/akshat_lohiya/"
                  email="akshatlohiya1106@gmail.com"
                />
                <Infocard
                  image={Nameer}
                  name="Nameer Khan"
                  position="Director"
                  phone="8477074434"
                  insta="https://www.instagram.com/nameerkhan23/"
                  email="knameer1@gmail.com"
                />
              </div>
              <div className="dramaticsformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Kumar"
                  position="Representative"
                  phone="6398599760"
                  insta="https://www.instagram.com/p.r.i.y.a.n.s.h.u_kr/"
                  email="priyanshukr1703@gmail.com"
                />
                <Infocard
                  image={PriyanshuJain}
                  name="Priyanshu Jain"
                  position="Representative"
                  phone="8800668064"
                  insta="https://www.instagram.com/priyanshu_jain11/"
                  email="jain.priyanshu1110@gmail.com"
                />
                <Infocard
                  image={Garvit}
                  name="Garvit Dhawan"
                  position="Representative"
                  phone="7895037751"
                  insta="http://instagram.com/_garvit.the.one_"
                  email="dhawangarvit03@gmail.com"
                />
              </div>
              <div className="dramaticsformat2_5">
                <Infocard
                  image={Sujal}
                  name="Sujal Jain"
                  position="Representative"
                  phone="7023307535"
                  insta="http://instagram.com/su__jain"
                  email="sujaljain1111@gmail.com"
                />
                <Infocard
                  image={Akshat}
                  name="Akshat Chauhan"
                  position="Representative"
                  phone="8860136512"
                  insta="https://instagram.com/akshat.27_?utm_medium=copy_link"
                  email="akshat27chauhan@gmail.com"
                />
                <Infocard
                  image={Sanskriti}
                  name="Sanskriti Jain"
                  position="Representative"
                  phone="9910960739"
                  insta="https://www.instagram.com/sanskriti.jain13/"
                  email="sanskritijain1311@gmail.com"
                />
              </div>
              <div className="dramaticsformat2_6">
                <Infocard
                  image={Upasak}
                  name="Upasak Sharma"
                  position="Representative"
                  phone="9070700019"
                  insta="https://www.instagram.com/upasak19/"
                  email="upasak19dhotra@gmail.com"
                />
                <Infocard
                  image={Smrati}
                  name="Smrati Tripathi"
                  position="Representative"
                  phone="6266118317"
                  insta="https://www.instagram.com/smrati_25/?hl=en"
                  email="smrati.iitdelhi@gmail.com@gmail.com"
                />
                <Infocard
                  image={Navneet}
                  name="Navneet Singh"
                  position="Representative"
                  phone="9416579331"
                  insta="https://instagram.com/masum._.balak/"
                  email="navneetsihag50@gmail.com"
                />
              </div>
              <div className="dramaticsformat2_7">
                <Infocard
                  image={Aadil}
                  name="Aadil Akhtar"
                  position="Representative"
                  phone="8210155112"
                  insta="https://www.instagram.com/aadil_akhtar_3402/"
                  email="aadilakhtar3402@gmail.com"
                />
                <Infocard
                  image={Kulveer}
                  name="Kulveer Singh"
                  position="Representative"
                  phone="8595349484"
                  insta="https://www.instagram.com/sihagkulveer/"
                  email="kulveersihag70@icloud.com"
                />
                <Infocard
                  image={Nikhil}
                  name="Nikhil Kumar"
                  position="Representative"
                  phone="7073705533"
                  insta="https://www.instagram.com/z.e.r.o._.0"
                  email="nikhilkumarlkr09@gmail.com"
                />
                <Infocard
                  image={Yash}
                  name="Yash Gupta"
                  position="Representative"
                  phone="9999502569"
                  insta="https://www.instagram.com/invites/contact/?i=1avg3goplwdr6&utm_content=jkuwnyj"
                  email="yashguptagdg@gmail.com"
                />
              </div>
            </div>
            <div className="dramaticsformat3">
              <div className="dramaticsformat3_1">
                <Infocard
                  image={Naman}
                  name="Naman Porwal"
                  position="Secretary"
                  phone="8290198198"
                  insta="https://www.instagram.com/porwal_naman_/"
                  email="porwalnaman01@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_2">
                <Infocard
                  image={Sarvagya}
                  name="Sarvagya Kumar"
                  position="Director"
                  phone="8866643422"
                  insta="https://www.instagram.com/sarvisydelic/"
                  email="sarvisydelic@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Tarun Khinchi"
                  position="Director"
                  phone="9461990448"
                  insta="https://www.instagram.com/kenitchi_trunn/"
                  email="tarunkhinchi.iitd@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_4">
                <Infocard
                  image={Abhinav}
                  name="Abhinav Verma"
                  position="Director"
                  phone="8765750208"
                  insta="https://www.instagram.com/xbhinv/"
                  email="a.verma00shine@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_5">
                <Infocard
                  image={AkshatL}
                  name="Akshat Lohiya"
                  position="Director"
                  phone="8989982413"
                  insta="https://www.instagram.com/akshat_lohiya/"
                  email="akshatlohiya1106@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_6">
                <Infocard
                  image={Nameer}
                  name="Nameer Khan"
                  position="Director"
                  phone="8477074434"
                  insta="https://www.instagram.com/nameerkhan23/"
                  email="knameer1@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Priyanshu Kumar"
                  position="Representative"
                  phone="6398599760"
                  insta="https://www.instagram.com/p.r.i.y.a.n.s.h.u_kr/"
                  email="priyanshukr1703@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_8">
                <Infocard
                  image={PriyanshuJain}
                  name="Priyanshu Jain"
                  position="Representative"
                  phone="8800668064"
                  insta="https://www.instagram.com/priyanshu_jain11/"
                  email="jain.priyanshu1110@gmail.com"
                />
                <Infocard
                  image={Garvit}
                  name="Garvit Dhawan"
                  position="Representative"
                  phone="7895037751"
                  insta="http://instagram.com/_garvit.the.one_"
                  email="dhawangarvit03@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_9">
                <Infocard
                  image={Sujal}
                  name="Sujal Jain"
                  position="Representative"
                  phone="7023307535"
                  insta="http://instagram.com/su__jain"
                  email="sujaljain1111@gmail.com"
                />
                <Infocard
                  image={Akshat}
                  name="Akshat Chauhan"
                  position="Representative"
                  phone="8860136512"
                  insta="https://instagram.com/akshat.27_?utm_medium=copy_link"
                  email="akshat27chauhan@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_10">
                <Infocard
                  image={Sanskriti}
                  name="Sanskriti Jain"
                  position="Representative"
                  phone="9910960739"
                  insta="https://www.instagram.com/sanskriti.jain13/"
                  email="sanskritijain1311@gmail.com"
                />
                <Infocard
                  image={Upasak}
                  name="Upasak Sharma"
                  position="Representative"
                  phone="9070700019"
                  insta="https://www.instagram.com/upasak19/"
                  email="upasak19dhotra@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_11">
                <Infocard
                  image={Smrati}
                  name="Smrati Tripathi"
                  position="Representative"
                  phone="6266118317"
                  insta="https://www.instagram.com/smrati_25/?hl=en"
                  email="smrati.iitdelhi@gmail.com@gmail.com"
                />
                <Infocard
                  image={Navneet}
                  name="Navneet Singh"
                  position="Representative"
                  phone="9416579331"
                  insta="https://instagram.com/masum._.balak/"
                  email="navneetsihag50@gmail.com"
                />
              </div>
              <div className="dramaticsformat3_12">
                <Infocard
                  image={Aadil}
                  name="Aadil Akhtar"
                  position="Representative"
                  phone="8210155112"
                  insta="https://www.instagram.com/aadil_akhtar_3402/"
                  email="aadilakhtar3402@gmail.com"
                />
                <Infocard
                  image={Kulveer}
                  name="Kulveer Singh"
                  position="Representative"
                  phone="8595349484"
                  insta="https://www.instagram.com/sihagkulveer/"
                  email="kulveersihag70@icloud.com"
                />
              </div>
              <div className="dramaticsformat3_13">
                <Infocard
                  image={Nikhil}
                  name="Nikhil Kumar"
                  position="Representative"
                  phone="7073705533"
                  insta="https://www.instagram.com/z.e.r.o._.0"
                  email="nikhilkumarlkr09@gmail.com"
                />
                <Infocard
                  image={Yash}
                  name="Yash Gupta"
                  position="Representative"
                  phone="9999502569"
                  insta="https://www.instagram.com/invites/contact/?i=1avg3goplwdr6&utm_content=jkuwnyj"
                  email="yashguptagdg@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dramaticsfooter1">
        <DramaticsFooter />
      </div>
    </div>
  );
};

export default Dramatics;
