/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./css/stylesHome.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    return(
        <div>
                <div className="container">
        <div className="row">
            <div className="texts">
                <h1 className="hhead">BRCA, <span className="iit"> IIT Delhi </span></h1>
                <h3 className="shead">Board for Recreational and Creative Activites</h3>
                <p>
                    BRCA stands for the Board For Recreational and Creative Activties.
                    It consists of eleven clubs that conduct events - competitive and non-
                    competitive throughout the year in IIT Delhi. BRCA also conducts
                    Rendezvous each year, which is one of the largest college cultural
                    festivals in India.
                </p>
                <a href="#"><button className="btn btn-lg exp">Start Exploring</button></a>
            </div>
            <div className="images">
            </div>
        </div>
        
    </div>
    <div className="s_icons text-right">
        <a href="" className="fa fa-twitter lg" target="blank"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
        <a href="https://www.facebook.com/cultureIITD/?ref=page_internal" className="fa fa-facebook" target="blank"><FontAwesomeIcon icon/></a>
        <a href="https://www.instagram.com/brcaiitd/?hl=en" className="fa fa-instagram" target="blank"><FontAwesomeIcon icon/></a>
    </div>
        </div>
    );
}
export default Home;