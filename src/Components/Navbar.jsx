import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/navbar.css";
import "./../css/base-styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openSlider, closeSlider } from "./../redux/ducks/navslider";

export const handleSliderToggle = (navsliderOpened, dispatch) => {
    console.log(navsliderOpened);
    return navsliderOpened ? dispatch(closeSlider()) : dispatch(openSlider());
};

const Navbar = () => {
    const dispatch = useDispatch();
    const navsliderOpened = useSelector(state => state.navslider.opened);

    return (
        <div>
            <Container fluid className="navbar navbar-expand-md">
                <Container className="navbar-container">
                    <Row className="navbar-row">
                        <Col xs={12} className="navbar-col col-12 d-flex justify-content-between align-items-center">
                            <div className="navbar-brand-container">
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
                            <button className="navbar-toggler custom-toggler" type="button" onClick={() => handleSliderToggle(navsliderOpened, dispatch)}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* <div id="nav-slider" className="nav-slider list-group list-group-flush">
                <div id="slider-close-button">
                    <button className="navbar-toggler custom-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div><a href="#/home" className="list-group-item list-group-item-action"
                >UPENN&nbsp;&times;&nbsp;STA</a></div>
                <div><a href="#/about-us" className="list-group-item list-group-item-action"
                >About us</a></div>
                <div><a href="#/our-works" className="list-group-item list-group-item-action">Our works</a></div>
                <div>
                    <a className="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">Publications</a>
                    <div className="dropdown-menu">
                        <a href="#/publications" className="dropdown-item">PUBLICATIONS</a>
                        <a href="#/publications/incite" className="dropdown-item">InCite</a>
                        <a href="#/publications/urban-perspectives" className="dropdown-item">Penn GSE Perspectives on Urban
                    Perspectives</a>
                        <a href="#/publications/book" className="dropdown-item">Book</a>
                    </div>
                </div>
                <div>
                    <a className="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">Conferences</a>
                    <div className="dropdown-menu">
                        <a href="#/conferences" className="dropdown-item">CONFERENCES</a>
                        <a href="#/conferences/nctear" className="dropdown-item">NCTEAR</a>
                        <a href="#/conferences/aera" className="dropdown-item">AERA</a>
                        <a href="#/conferences/museum-of-ny" className="dropdown-item">Museum of New York</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Navbar;