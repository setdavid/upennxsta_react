import React from "react";
import { Link } from "react-router-dom";
import { defaultLocation } from "./Router";

const Footer = () => {
    return (
        <div id="footer" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                        <h5>Quick Links</h5>
                        <div><Link to={`${defaultLocation}/about-us`}>About Us</Link></div>
                        <div><Link to={`${defaultLocation}/what-weve-done`}>What We've Done</Link></div>
                        <div><Link to={`${defaultLocation}/recent-updates`}>Recent Updates</Link></div>
                    </div>
                    <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                        <h5>Contact Us</h5>
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