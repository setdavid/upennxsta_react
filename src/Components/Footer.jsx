import React from "react";

const Footer = () => {
    return (
        <React.Fragment>
            <div id="footer" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                            <h5>Quick Links</h5>
                            <div><a>About us</a></div>
                            <div><a>Our works</a></div>
                        </div>
                        <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                            <h5>Contact Us</h5>
                        </div>
                        <div className="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                            <h5>Our Vision</h5>
                            <p>Merry Christmas and a Happy New Year! This is filler text</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;