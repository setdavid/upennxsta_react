import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSlider, closeSlider } from "./../redux/ducks/navslider";
import { Link } from "react-router-dom";
import { defaultLocation } from "./Router";

import { GiHamburgerMenu } from "react-icons/gi";

export const closeSliderToggle = (dispatch) => {
    return dispatch(closeSlider());
};

export const openSliderToggle = (dispatch) => {
    return dispatch(openSlider());
};

export const handleSliderToggle = (navsliderOpened, dispatch) => {
    console.log(navsliderOpened);
    return navsliderOpened ? closeSliderToggle(dispatch) : openSliderToggle(dispatch);
};

const Navbar = () => {
    const dispatch = useDispatch();
    const navsliderOpened = useSelector(state => state.navslider.opened);

    return (
        <nav className="navbar navbar-expand-md container-fluid d-flex align-items-center">
            <div className="navbar-container container">
                <div className="row navbar-row">
                    <div className="navbar-col col-12 d-flex justify-content-between align-items-center">
                        <div className="navbar-brand-container d-flex align-items-center">
                            <Link to={`${defaultLocation}/`} className="navbar-brand h1">UPENN&nbsp;&times;&nbsp;STA</Link>
                        </div>
                        <div className="d-none d-md-block">
                            <div className="navTo-group d-flex align-items-center">
                                <div>
                                    <Link to={`${defaultLocation}/about-us`}>About us</Link>
                                </div>
                                <div>
                                    <a href="#/our-works"> Our works</a>
                                </div>
                            </div>
                        </div>
                        <GiHamburgerMenu size="2rem" style={{ cursor: "pointer" }} className="navbar-toggler d-block d-md-none"
                            onClick={() => handleSliderToggle(navsliderOpened, dispatch)} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;