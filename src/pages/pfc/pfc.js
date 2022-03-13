/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from "react";
import "./css/stylePFC.css";

import imagee from "../pfc/images/pfclogo.png";
import image1 from "../pfc/images/pfci1.png";
import image2 from "../pfc/images/pfci2.png";
import image3 from "../pfc/images/pfci3.png";

// class PFC extends React.Component{

//     constructor (props) {
//         super(props);

//         this.state = {
//             slides: [image1, image2,image3],
//             currentSlideIndex: 0
//         };
//     }

//     let handleNext = () => {
//         this.setState({
//             currentSlideIndex: this.state.currentSlideIndex + 1
//         });
//     }

//     let handlePrev = () => {
//         this.setState({
//             currentSlideIndex: this.state.currentSlideIndex - 1
//         });
//     }

//     render () {
//         const { slides, currentSlideIndex } = this.state;

//         return (
//             <div className="pfcbody">
//             <div className="containerpfc">
//             <div className={'slide'}>
//             <div className="section1">
//              <img src={imagee} alt="logo" />
//              <h3>Photography and Films Club</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
//              <div class="social_icons">
//                  <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
//                  <a href="" className="instapfc fa fa-instagram" target="blank"></a>
//                  <a href="" className="fa fa-youtube"></a>
//              </div>
//         </div>
//                 {slides.map((slide, index) =>
//                     <img
//                         key={index}
//                         src={slide} className={'logo-banner'} 
//                         style={index === currentSlideIndex
//                             ? { verticalAlign: 'center' }
//                             : { verticalAlign: 'center', display: 'none' }} />
//                 )}

//                 <a className={"prev-photo"} onClick={handlePrev}>&#10094;</a>
//                 <a className={"next-photo"} onClick={handleNext}>&#10095;</a>
//             </div>
//             </div>
//             </div>
//         );
//     }
// }

function PFC(){
    var slideIndex=1;

    let minusSlides = () => {
        slideIndex = slideIndex - 1;
        showSlides(slideIndex)
    }

    let plusSlides = () => {
        slideIndex = slideIndex + 1;
        showSlides(slideIndex)
    }
    
    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

    return(
    <div className="pfcbody">
    <div className="containerpfc">
        <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Photography and Films Club</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
            <div class="social_icons">
                <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
                <a href="" className="instapfc fa fa-instagram" target="blank"></a>
                <a href="" className="fa fa-youtube"></a>
            </div>
        </div>
    <div className="slideshow-container">
        <div className="mySlides ">
            <div className="eventname">
                <h3>Event Name1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="imgs">
                <img src={image1} style={{width:"100"}} />
            </div>
        </div>
        <div className="mySlides fade">
            <div className="eventname">
                <h3>Event Name2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="imgs">
                <img src={image2} style={{width:"100"}} />
            </div>
        </div>
        <div className="mySlides fade">
            <div className="eventname">
                <h3>Event Name3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="imgs">
                <img src={image3} style={{width:"100%"}} />
            </div>
        </div>

        <a className="prev" onClick={minusSlides}>&#10094;</a>
        <a className="next" onClick={plusSlides}>&#10095;</a>

    </div>
</div>

    </div>

);
}

export default PFC;