import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSlider, closeSlider } from "./../redux/ducks/navslider";
import { Link } from "react-router-dom";
// import { defaultLocation } from "./Router";
import { scrollToTop } from "./Features/tools";

import { GiHamburgerMenu } from "react-icons/gi";

export const navbarHeight = 82;

export const closeSliderToggle = (dispatch) => {
    return dispatch(closeSlider());
};

export const openSliderToggle = (dispatch) => {
    return dispatch(openSlider());
};

export const handleSliderToggle = (navsliderOpened, dispatch) => {
    return navsliderOpened ? closeSliderToggle(dispatch) : openSliderToggle(dispatch);
};

const Navbar = () => {
    const dispatch = useDispatch();
    const navsliderOpened = useSelector(state => state.navslider.opened);
    const transparent = useSelector(state => state.navbar.transparent);

    const navbarTransparentCSS = {
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "white"
    };

    let finalCSS = {
        minHeight: navbarHeight,
        height: navbarHeight
    };

    if (transparent) {
        finalCSS = { ...finalCSS, ...navbarTransparentCSS };
    }

    return (
        <nav style={finalCSS} className="navbar navbar-expand-md container-fluid d-flex align-items-center">
            <div className="navbar-container container">
                <div className="row navbar-row">
                    <div className="navbar-col col-12 d-flex justify-content-between align-items-center">
                        {/* <div className="navbar-brand-container d-flex align-items-center">
                            <Link onClick={scrollToTop} to={`${defaultLocation}/`} className="navbar-brand h1">UPENN&nbsp;&times;&nbsp;STA</Link>
                        </div>
                        <div className="d-none d-md-block">
                            <div className="navTo-group d-flex align-items-center">
                                <div>
                                    <Link onClick={scrollToTop} to={`${defaultLocation}/about-us`}>About Us</Link>
                                </div>
                                <div>
                                    <Link onClick={scrollToTop} to={`${defaultLocation}/what-weve-done`}>What We've Done</Link>
                                </div>
                                <div>
                                    <Link onClick={scrollToTop} to={`${defaultLocation}/recent-updates`}>Recent Updates</Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="navbar-brand-container d-flex align-items-center">
                            <Link onClick={scrollToTop} to={`/`} className="navbar-brand h1">UPENN&nbsp;&times;&nbsp;STA</Link>
                        </div>
                        <div className="d-none d-md-block">
                            <div className="navTo-group d-flex align-items-center">
                                <div>
                                    <Link onClick={scrollToTop} to={`/about-us`}>About Us</Link>
                                </div>
                                <div>
                                    <Link onClick={scrollToTop} to={`/what-weve-done`}>What We've Done</Link>
                                </div>
                                <div>
                                    <Link onClick={scrollToTop} to={`/recent-updates`}>Recent Updates</Link>
                                </div>
                            </div>
                        </div>
                        <GiHamburgerMenu size="2rem" style={{ cursor: "pointer", opacity: navsliderOpened ? "0" : "1" }} className="navbar-toggler d-block d-md-none"
                            onClick={() => handleSliderToggle(navsliderOpened, dispatch)} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;