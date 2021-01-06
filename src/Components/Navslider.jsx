import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleSliderToggle } from "./Navbar";
import { defaultLocation } from "./Router";

import { BsXSquare } from "react-icons/bs";

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

    const bodyStyle = document.body.style;

    if (navsliderOpened) {
        bodyStyle.overflowY = "hidden";
        // bodyStyle.left = "-100%";
    } else {
        bodyStyle.overflowY = "visible";
        // bodyStyle.left = "0";
    }

    return (
        <div style={navsliderOpened ? openedCSS : closedCSS} id="nav-slider" className="nav-slider d-flex flex-column">
            <div className="nav-slider-item">
                <BsXSquare size="2rem" style={{ cursor: "pointer", color: "white" }} className="navbar-toggler d-block"
                    onClick={() => handleSliderToggle(navsliderOpened, dispatch)} />
            </div>
            <div className="nav-slider-item">
                <Link style={{ fontWeight: 500, fontSize: "1.5rem" }} to={`${defaultLocation}/`}>UPENN&nbsp;&times;&nbsp;STA</Link>
            </div>
            <div className="nav-slider-item">
                <Link to={`${defaultLocation}/about-us`}>About Us</Link>
            </div>
            <div className="nav-slider-item">
                <Link to={`${defaultLocation}/what-weve-done`}>What We've Done</Link>
            </div>
            <div className="nav-slider-item">
                <Link to={`${defaultLocation}/recent-updates`}>Recent Updates</Link>
            </div>
        </div>
    );
};

export default Navslider;