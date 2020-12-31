import React from "react";
import "./../css/base-styles.css";
import "./../css/footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div id="footer" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                            <h5>Quick Links</h5>
                            <div><a>About us</a></div>
                            <div><a>Our works</a></div>
                        </div>
                        <div class="footer-section col-12 col-md-4 d-flex-column justify-content-start">
                            <h5>Contact Us</h5>
                        </div>
                        <div class="footer-section col-12 col-md-4 d-flex-column justify-content-start">
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