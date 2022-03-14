/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// import React, { useState } from "react";
// import "./css/stylePFC.css";

// import imagee from "../pfc/images/pfclogo.png";
// import image1 from "../pfc/images/pfci1.png";
// import image2 from "../pfc/images/pfci2.png";
// import image3 from "../pfc/images/pfci3.png";

// // class PFC extends React.Component{

// //     constructor (props) {
// //         super(props);

// //         this.state = {
// //             slides: [image1, image2,image3],
// //             currentSlideIndex: 0
// //         };
// //     }

// //     let handleNext = () => {
// //         this.setState({
// //             currentSlideIndex: this.state.currentSlideIndex + 1
// //         });
// //     }

// //     let handlePrev = () => {
// //         this.setState({
// //             currentSlideIndex: this.state.currentSlideIndex - 1
// //         });
// //     }

// //     render () {
// //         const { slides, currentSlideIndex } = this.state;

// //         return (
// //             <div className="pfcbody">
// //             <div className="containerpfc">
// //             <div className={'slide'}>
// //             <div className="section1">
// //              <img src={imagee} alt="logo" />
// //              <h3>Photography and Films Club</h3>
// //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
// //              <div class="social_icons">
// //                  <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
// //                  <a href="" className="instapfc fa fa-instagram" target="blank"></a>
// //                  <a href="" className="fa fa-youtube"></a>
// //              </div>
// //         </div>
// //                 {slides.map((slide, index) =>
// //                     <img
// //                         key={index}
// //                         src={slide} className={'logo-banner'}
// //                         style={index === currentSlideIndex
// //                             ? { verticalAlign: 'center' }
// //                             : { verticalAlign: 'center', display: 'none' }} />
// //                 )}

// //                 <a className={"prev-photo"} onClick={handlePrev}>&#10094;</a>
// //                 <a className={"next-photo"} onClick={handleNext}>&#10095;</a>
// //             </div>
// //             </div>
// //             </div>
// //         );
// //     }
// // }

// function PFC() {
//   var slideIndex = 1;
//   let showSlides = (n) => {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex-1].className += " active";

//   };
//   let minusSlides = () => {
//     slideIndex = slideIndex - 1;
//     showSlides(slideIndex);
//   };

//   let plusSlides = () => {
//     slideIndex = slideIndex + 1;
//     showSlides(slideIndex);
//   };
//   let currentSlide = (n) =>{
//       slideIndex = n;
//     showSlides(slideIndex);
//   }

//   return (
//     <div className="pfcbody">
//       <div className="containerpfc">
//         <div className="section1">
//           <img src={imagee} alt="logo" />
//           <h3>Photography and Films Club</h3>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea{" "}
//           </p>
//           <div class="social_icons">
//             <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
//             <a href="" className="instapfc fa fa-instagram" target="blank"></a>
//             <a href="" className="fa fa-youtube"></a>
//           </div>
//         </div>
//         <div className="slideshow-container">
//           <div className="mySlides fade">
//             <div className="eventname">
//               <h3>Event Name1</h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor.
//               </p>
//             </div>
//             <div className="imgs">
//               <img src={image1} style={{ width: "100%" }} />
//             </div>
//           </div>
//           <div className="mySlides fade" >
//             <div className="eventname">
//               <h3>Event Name2</h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor.
//               </p>
//             </div>
//             <div className="imgs" >
//               <img src={image2} style={{ width: "100%" }} />
//             </div>
//           </div>
//           <div className="mySlides fade" >
//             <div className="eventname">
//               <h3>Event Name3</h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor.
//               </p>
//             </div>
//             <div className="imgs" >
//               <img src={image3} style={{ width: "100%" }} />
//             </div>
//           </div>

//           <a className="prev" onClick={minusSlides}>
//             &#10094;
//           </a>
//           <a className="next" onClick={plusSlides}>
//             &#10095;
//           </a>
//           {/* <div style={{textAlign:"center"}}>
//             <span class="dot" onClick={currentSlide(1)}></span>
//             <span class="dot" onClick={currentSlide(2)}></span>
//             <span class="dot" onClick={currentSlide(3)}></span>
//             </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PFC;

import React from "react";
import ReactDOM from "react-dom";
import { Zoom } from "react-slideshow-image";
import "./css/stylePFC.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../pfc/images/pfclogo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import PFCNavbar from "./Navbar/PFCNavbar";
import PFCFooter from "./Footer/PFCFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";

const PFC = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="pfcpage">
      <div className="pfcnavbar1">
        <PFCNavbar />
      </div>
      <div className="pfcbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Photography and Films Club</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea{" "}
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
                  <h3>Event Name3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
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
                  <h3>Event Name2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
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
                  <h3>Event Name1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
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
        <div className="pfcteam">
          <div className="pfcteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="pfcteamcontent">
            <div className="pfcformat1">
              <div className="pfcformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Gauransh Soni"
                  position="Secretary"
                />
              </div>
              <div className="pfcformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="Gunjit Jindal"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rohan Gupta"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Nishant Bansal"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Ayush Kanaujia"
                  position="Director"
                />
              </div>
              <div className="pfcformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Shukla"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanish Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aayush Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Udit Batish"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aditya Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Malhotra"
                  position="Representative"
                />
              </div>
              <div className="pfcformat1_4">
                <Infocard
                  image={DefaultPic}
                  name="Tushar Kant Sao"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Saurav K. Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Asmita Mehta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Pranjal Sachan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Varikuti V. Reddy"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Adarsh Roy"
                  position="Representative"
                />
              </div>
            </div>
            <div className="pfcformat2">
              <div className="pfcformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Gauransh Soni"
                  position="Secretary"
                />
              </div>
              <div className="pfcformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Gunjit Jindal"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rohan Gupta"
                  position="Director"
                />
              </div>
              <div className="pfcformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Nishant Bansal"
                  position="Director"
                />
                <Infocard
                  image={DefaultPic}
                  name="Ayush Kanaujia"
                  position="Director"
                />
              </div>
              <div className="pfcformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Shukla"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tanish Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aayush Gupta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat2_5">
                <Infocard
                  image={DefaultPic}
                  name="Udit Batish"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aditya Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Malhotra"
                  position="Representative"
                />
              </div>
              <div className="pfcformat2_6">
                <Infocard
                  image={DefaultPic}
                  name="Tushar Kant Sao"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Saurav K. Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Asmita Mehta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat2_7">
                <Infocard
                  image={DefaultPic}
                  name="Pranjal Sachan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Varikuti V. Reddy"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Adarsh Roy"
                  position="Representative"
                />
              </div>
            </div>
            <div className="pfcformat3">
              <div className="pfcformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Gauransh Soni"
                  position="Secretary"
                />
              </div>
              <div className="pfcformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Gunjit Jindal"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Rohan Gupta"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Nishant Bansal"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Ayush Kanaujia"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Akshat Shukla"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="Tanish Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aayush Gupta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_8">
                <Infocard
                  image={DefaultPic}
                  name="Udit Batish"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aditya Singh"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_9">
                <Infocard
                  image={DefaultPic}
                  name="S.Malhotra"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Tushar Kant Sao"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_10">
                <Infocard
                  image={DefaultPic}
                  name="Saurav K. Singh"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Asmita Mehta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_11">
                <Infocard
                  image={DefaultPic}
                  name="Pranjal Sachan"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Aryan Kumar"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_12">
                <Infocard
                  image={DefaultPic}
                  name="Varikuti V. Reddy"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Adarsh Roy"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pfcfooter1">
        <PFCFooter />
      </div>
    </div>
  );
};

export default PFC;
