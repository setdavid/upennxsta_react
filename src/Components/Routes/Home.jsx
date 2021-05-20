import React from "react";
import { Link } from "react-router-dom";
import { sheetData } from "../Features/dataRetrieval";
// import {defaultLocation} from "../Router"

import ResponsiveImage from "../Features/ResponsiveImage";
import TextOverImage from "../Features/TextOverImage";
import Slideshow from "../Features/Slideshow";
import Jumbotron from "../Features/Jumbotron";
import FadePassNavbar from "../Features/FadePassNavbar";
import ColoredCard from "../Features/ColoredCard";
import RoundedButton from "../Features/RoundedButton";
import { scrollTo } from "../Features/tools";

import RUComp from "./RUComp";
import recentUpdatesPostings from "../../json-postings/recent-updates-postings.json";

import { FaAngleDoubleDown, FaTimes, FaUsers, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import { RiArrowRightSLine } from "react-icons/ri";

// import slideshow1 from "./../../img/group_picture2.jpg";
// import slideshow2 from "./../../img/group_meeting1.jpg";
// import slideshow3 from "./../../img/group_picture3.jpg";
// import slideshow4 from "./../../img/group_meeting2.jpg";

// import whoWeAreImg from "./../../img/group_picture1.jpg";
// import upennImg from "./../../img/upenn-symbol.png";
// import staImg from "./../../img/sta-symbol-trans.png";
// import middleSchoolersImg from "./../../img/middle-schoolers.JPG";
// // import highSchoolersImg from "./../../img/high-shcoolers.jpg";
// import collegeStudentsImg from "./../../img/college-students.jpg";
// import parentsImg from "./../../img/parents1.jpg";
// import educatorsImg from "./../../img/educators1.JPG";
// import communityImg from "./../../img/park_group1.jpg";
// import currentProjectsImg from "./../../img/wall_art1.jpg";

const slideshow1 = "img/group_picture2.jpg";
const slideshow2 = "img/group_meeting1.jpg";
const slideshow3 = "img/group_picture3.jpg";
const slideshow4 = "img/group_meeting2.jpg";

const whoWeAreImg = "img/group_picture1.jpg";
const upennImg = "img/upenn-symbol.png";
const staImg = "img/sta-symbol-trans.png";
const middleSchoolersImg = "img/middle-schoolers.JPG";
// const highSchoolersImg = "./../../img/high-shcoolers.jpg";
const collegeStudentsImg = "img/college-students.jpg";
const parentsImg = "img/parents1.jpg";
const educatorsImg = "img/educators1.JPG";
const communityImg = "img/park_group1.jpg";
const currentProjectsImg = "img/wall_art1.jpg";

const WeAreCards = (props) => {
    const { text, url } = props;

    return (
        <TextOverImage text={text} textFont="inherit" textSize="2rem" roundedCorners>
            <ResponsiveImage url={url} minHeight="300px" backgroundSize="cover" />
        </TextOverImage>
    );
};

const Home = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <Jumbotron text="COMMUNITY POWERED" subtext="A community based research group centered in Philadelphia" height="100vh" >
                <Slideshow urls={[slideshow1, slideshow2, slideshow3, slideshow4]} minHeight="100vh" auto />
                <FadePassNavbar classes="scroll-learn-more fadePassNavbar bobbing-anim">
                    <div style={{ cursor: "pointer" }} onClick={() => scrollTo("#container-1")}>
                        Learn more
                        <br />
                        <FaAngleDoubleDown size="2rem" />
                    </div>
                </FadePassNavbar>
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
                            <ResponsiveImage url={whoWeAreImg} minHeight="300px" backgroundSize="cover" roundedCorners />
                            {/* <Slideshow urls={[slideshow1, slideshow2, slideshow3, slideshow4]} minHeight="300px" /> */}
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
                                    <ResponsiveImage url={upennImg} minHeight="150px" backgroundSize="contain" />
                                </div>
                                <div className="col-3 p-0 text-center">
                                    <FaTimes size="3rem" />
                                </div>
                                <div className="col-3 p-0">
                                    <ResponsiveImage url={staImg} minHeight="150px" backgroundSize="contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="container-2" className="container-fluid off-white-background">
                <div id="container-2-background-2"></div>
                <div id="container-2-background-1"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 h1 text-center theme-1-text">
                            WE ARE...
                    </div>
                    </div>
                    <div id="we-are-1" className="we-are row">
                        <div className="col-12 col-md-4">
                            <WeAreCards text="Middle Schoolers" url={middleSchoolersImg} />
                        </div>
                        <div className="col-12 col-md-4">
                            <WeAreCards text="High Schoolers" url={collegeStudentsImg} />
                        </div>
                        <div className="col-12 col-md-4">
                            <WeAreCards text="College Students" url={collegeStudentsImg} />
                        </div>
                    </div>
                    <div id="we-are-2" className="we-are row">
                        <div className="col-12 col-md-4">
                            <WeAreCards text="Educators" url={educatorsImg} />
                        </div>
                        <div className="col-12 col-md-4">
                            <WeAreCards text="Parents" url={parentsImg} />
                        </div>
                    </div>
                    <div id="we-are-3" className="we-are row">
                        <div className="col-12 col-md-4">
                            <WeAreCards text="A Community" url={communityImg} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div id="container-3" className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <ColoredCard roundedCorners classes="d-flex flex-column justify-content-between">
                                <div>
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
                                </div>
                                <RoundedButton>
                                    Learn more&nbsp;<RiArrowRightSLine size="1.5rem" />
                                </RoundedButton>
                            </ColoredCard>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <ColoredCard roundedCorners classes="d-flex flex-column justify-content-between">
                                <div>
                                    <FaChalkboardTeacher size="4rem" />
                                    <br />
                                    <h4>Conferences</h4>
                                    <p>Our group has presented various research projects at several conferences.
                                </p>
                                </div>
                                <RoundedButton>
                                    <Link to={{ pathname: "/what-weve-done", hash: "conferences" }}>Learn more&nbsp;</Link>
                                    <RiArrowRightSLine size="1.5rem" />
                                    {/* <Link onClick={scrollTo("#conf")} to={`${defaultLocation}/what-weve-done`}>Learn more&nbsp;<RiArrowRightSLine size="1.5rem" /></Link> */}
                                </RoundedButton>
                            </ColoredCard>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <ColoredCard roundedCorners classes="d-flex flex-column justify-content-between">
                                <div>
                                    <FaBook size="4rem" />
                                    <br />
                                    <h4>Publications</h4>
                                    <p>Many members of our group have published pieces in academic journals.
                                </p>
                                </div>
                                <RoundedButton>
                                    Learn more&nbsp;<RiArrowRightSLine size="1.5rem" />
                                </RoundedButton>
                            </ColoredCard>
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
                        {/* <div className="col-12 col-md-6">
                            
                        </div> */}
                        <div className="col-12 ">
                            <RUComp {...sheetData[3][0]} text="" noHr />
                            {/* <RUComp {...recentUpdatesPostings[0]} noHr /> */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;