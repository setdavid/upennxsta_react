import React from "react";
// import { Link } from "react-router-dom";
import LinkTransition from "./LinkTransition";
// import { defaultLocation } from "./Router";
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id="footer" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                        {/* <div><Link to={`${defaultLocation}/about-us`}>About Us</Link></div>
                        <div><Link to={`${defaultLocation}/what-weve-done`}>What We've Done</Link></div>
                        <div><Link to={`${defaultLocation}/recent-updates`}>Recent Updates</Link></div> */}
                        {/* <div><Link to={`/about-us`}>About Us</Link></div>
                        <div><Link to={`/what-weve-done`}>What We've Done</Link></div>
                        <div><Link to={`/recent-updates`}>Recent Updates</Link></div> */}
                        <h5><LinkTransition path="/about-us">About Us</LinkTransition></h5>
                        <h5><LinkTransition path="/what-weve-done">What We've Done</LinkTransition></h5>
                        <h5><LinkTransition path="/recent-updates">Recent Updates</LinkTransition></h5>
                    </div>
                    <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                        {/* <h5>Contact Us</h5> */}
                        <a href="https://www.instagram.com/pennteam.yg/" target="blank"><FaInstagram size="2rem"/></a>
                        <div>sainthomas@sas.upenn.edu</div>
                    </div>
                    <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                        <h5>Our Vision</h5>
                        <p>Merry Christmas and a Happy New Year! This is filler text</p>
                    </div>
                </div>
                <div style={{ minHeight: "10rem", height: "10rem" }} className="row">
                </div>
                <div className="row">
                    <div style={{ fontSize: "0.75rem" }} className="col-12 d-flex justify-content-center align-items-center">
                        &copy; UPennXSTA
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;