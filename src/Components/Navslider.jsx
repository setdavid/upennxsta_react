import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSliderToggle } from "./Navbar";

import { GiHamburgerMenu } from "react-icons/gi";

const Navslider = () => {
    const dispatch = useDispatch();
    const navsliderOpened = useSelector(state => state.navslider.opened);

    const openedCSS = {
        width: "100%",
        opacity: "1"
    };

    const closedCSS = {
        width: "0",
        opacity: "0"
    };

    return (
        <div style={navsliderOpened ? openedCSS : closedCSS} id="nav-slider" className="nav-slider d-flex flex-column">
            <div className="nav-slider-item">
                <GiHamburgerMenu size="2rem" style={{ cursor: "pointer", color: "white" }} className="navbar-toggler d-block"
                    onClick={() => handleSliderToggle(navsliderOpened, dispatch)} />
            </div>
            <div className="nav-slider-item">
                <a href="#/home" style={{ fontWeight: 500, fontSize: "1.5rem" }}>UPENN&nbsp;&times;&nbsp;STA</a>
            </div>
            <div className="nav-slider-item">
                <a href="#/about-us">About us</a>
            </div>
            <div className="nav-slider-item">
                <a href="#/our-works">Our works</a>
            </div>
        </div>
    );
};

export default Navslider;