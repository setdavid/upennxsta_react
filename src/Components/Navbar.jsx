import React from "react";
import "./../css/bootstrap-grid.min.css";
import "./../css/base-styles.css";
import "./../css/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { openSlider, closeSlider } from "./../redux/ducks/navslider";

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
        <React.Fragment>
            <nav className="navbar navbar-expand-md container-fluid d-flex align-items-center">
                <div className="navbar-container container">
                    <div className="row navbar-row">
                        <div className="navbar-col col-12 d-flex justify-content-between align-items-center">
                            <div className="navbar-brand-container d-flex align-items-center">
                                <a className="navbar-brand h1" href="#/home">UPENN&nbsp;&times;&nbsp;STA</a>
                            </div>
                            <div className="d-none d-md-block">
                                <div className="navTo-group d-flex align-items-center">
                                    <div>
                                        <a href="#/about-us">About us</a>
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
        </React.Fragment>
    );
}

export default Navbar;