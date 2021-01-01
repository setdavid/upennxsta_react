import React from "react";
import "./../../css/base-styles.css";
import "./../../css/home.css";

import ResponsiveImg from "./../ResponsiveImg";
import TextOverImg from "./../TextOverImg";
import Jumbotron from "./../Jumbotron";

import { FaAngleDoubleDown, FaTimes, FaUsers, FaBook, FaChalkboardTeacher } from 'react-icons/fa';


import whoWeAreImg from "./../../img/group_picture1.jpg";
import upennImg from "./../../img/upenn-symbol.png";
import staImg from "./../../img/sta-symbol-trans.png";
import middleSchoolersImg from "./../../img/middle-schoolers.JPG";
// import highSchoolersImg from "./../../img/high-shcoolers.jpg";
import collegeStudentsImg from "./../../img/college-students.jpg";
import parentsImg from "./../../img/parents1.jpg";
import educatorsImg from "./../../img/educators1.JPG";
import communityImg from "./../../img/park_group1.jpg";
import currentProjectsImg from "./../../img/wall_art1.jpg";

const Home = () => {
    return (
        <React.Fragment>
            {/* <div className="jumbotron-text-container container">
                <div className="text-over-jumbotron fadePassNavbar">
                    COMMUNITY POWERED
                </div>
                <div className="subtext-over-jumbotron fadePassNavbar">
                    A community based research group centered in Philadelphia
                </div>
                <div className="scroll-learn-more fadePassNavbar bobbing-anim">
                    <a onclick="jsUtils.scrollTo('#container-1')">
                        Learn more
                        <br />
                        <FaAngleDoubleDown size="2rem" />
                    </a>
                </div>
            </div>
            <div className="jumbotron-frame">
                <div className="slideshow-jumbotron-collage"></div>
                <div className="img-tint"></div>
            </div> */}
            <Jumbotron url={collegeStudentsImg} height="100vh" text="COMMUNITY POWERED" subtext="A community based research group centered in Philadelphia">
                <div className="scroll-learn-more fadePassNavbar bobbing-anim">
                    <a onclick="jsUtils.scrollTo('#container-1')">
                        Learn more
                        <br />
                        <FaAngleDoubleDown size="2rem" />
                    </a>
                </div>
            </Jumbotron>
            <div id="container-1" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 h1 text-center theme-1-text">
                            STRIVING TO MAKE A DIFFERENCE ONE STEP AT A TIME
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-2">
                            <ResponsiveImg url={whoWeAreImg} minHeight="300px" backgroundSize="cover" />
                        </div>
                        <div className="col-12 col-md-6 order-md-1">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Who we are</h4>
                                    <p>
                                        We are a research group stemming from a partnership between the University of Pennsylvania
                                        Graduate School of Education (Penn GSE) and the
                                        Saint Thomas Aquinas Church (STA). We discuss issues of educational equity and center our
                                        projects around this important issue.
                                    </p>
                                </div>
                            </div>
                            <div id="symbol-group" className="row d-flex align-items-center justify-content-center">
                                <div className="col-3 p-0">
                                    <ResponsiveImg url={upennImg} minHeight="150px" backgroundSize="contain" />
                                </div>
                                <div className="col-3 p-0 text-center">
                                    <FaTimes size="3rem" />
                                </div>
                                <div className="col-3 p-0">
                                    <ResponsiveImg url={staImg} minHeight="150px" backgroundSize="contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="container-2" className="container-fluid off-white-background">
                <div id="container-2-background-2"></div>
                <div id="container-2-background-1"></div>
                <div className="row">
                    <div className="col-12 h1 text-center theme-1-text">
                        WE ARE...
                    </div>
                </div>
                <div id="we-are-1" className="we-are row">
                    <div className="col-12 col-md-4 white-text">
                        <TextOverImg url={middleSchoolersImg} minHeight="300px" backgroundSize="cover" text="Middle Schoolers" />
                    </div>
                    <div className="col-12 col-md-4 white-text">
                        <TextOverImg url={middleSchoolersImg} minHeight="300px" backgroundSize="cover" text="High Schoolers" />
                    </div>
                    <div className="col-12 col-md-4 white-text">
                        <TextOverImg url={collegeStudentsImg} minHeight="300px" backgroundSize="cover" text="College Students" />
                    </div>
                </div>
                <div id="we-are-2" className="we-are row">
                    <div className="col-12 col-md-4 white-text">
                        <TextOverImg url={parentsImg} minHeight="300px" backgroundSize="cover" text="Parents" />
                    </div>
                    <div className="col-12 col-md-4 white-text">
                        <TextOverImg url={educatorsImg} minHeight="300px" backgroundSize="cover" text="Educators" />
                    </div>
                </div>
                <div id="we-are-3" className="we-are row">
                    <div className="col-12 col-md-4 white-text">
                        <TextOverImg url={communityImg} minHeight="300px" backgroundSize="cover" text="A Community" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div id="container-3" className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <div className="off-white-background">
                                <FaUsers size="4rem" />
                                <br />
                                <h4>Learn more about us</h4>
                                <p>Our group started as a way to teach students about using research to answer
                                questions that interested them. However, through the years, our focus has gradually shifted.
                        {/* <!-- towards
                        researching educational equity as a response to the hopes of the members
                        of the Saint Thomas Aquinas community. -->
                        <!-- Many community members are immigrant families with hopes that their children receive good
                        educational experiences as students of color. --> */}
                                </p>
                                <div>
                                    <a href="#/about-us">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <div className="off-white-background">
                                <FaBook size="4rem" />
                                <br />
                                <h4>Publications</h4>
                                <p>Many members of our group have published pieces in academic journals.
                                </p>
                                <div>
                                    <a href="#/publications">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <div className="off-white-background">
                                <FaChalkboardTeacher size="4rem" />
                                <br />
                                <h4>Conferences</h4>
                                <p>Our group has presented various research projects at several conferences.
                                </p>
                                <div>
                                    <a href="#/conferences">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid off-white-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Current Project</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ResponsiveImg url={currentProjectsImg} minHeight="300px" backgroundSize="cover" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h4>Pushing the Community's "12 Demands"</h4>
                            <p>After the creation of the community's <a href="">"12 Demands"</a>, we compressed the 12
                    items into three specific topics that our research group can feasibly pursue: </p>
                            <ul>
                                <li>AP Classes</li>
                                <li>AP Classes</li>
                                <li>AP Classes</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga harum, ratione repudiandae,
                            dolores nulla accusantium beatae exercitationem ut autem consectetur alias nesciunt numquam odit
                    recusandae necessitatibus similique nobis reiciendis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;