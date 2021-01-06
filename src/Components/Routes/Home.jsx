import React from "react";

import ResponsiveImage from "../Features/ResponsiveImage";
import TextOverImage from "../Features/TextOverImage";
import Slideshow from "../Features/Slideshow";
import Jumbotron from "../Features/Jumbotron";
import FadePassNavbar from "../Features/FadePassNavbar";
import ColoredCard from "../Features/ColoredCard";
import RoundedButton from "../Features/RoundedButton";

import { FaAngleDoubleDown, FaTimes, FaUsers, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import { RiArrowRightSLine } from "react-icons/ri";

import slideshow1 from "./../../img/group_picture2.jpg";
import slideshow2 from "./../../img/group_meeting1.jpg";
import slideshow3 from "./../../img/group_picture3.jpg";
import slideshow4 from "./../../img/group_meeting2.jpg";

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
            {/* <TextOverImage text="COMMUNITY POWERED" subtext="A community based research group centered in Philadelphia" isJumbotron={true}>
                    <ResponsiveImage url={communityImg} minHeight="100vh" backgroundSize="cover" />
                    <Slideshow urls={[whoWeAreImg, parentsImg]} minHeight="100vh" />
                </TextOverImage> */}
            <Jumbotron text="COMMUNITY POWERED" subtext="A community based research group centered in Philadelphia" height="100vh" >
                {/* <ResponsiveImage url={communityImg} minHeight="100vh" backgroundSize="cover" /> */}
                <Slideshow urls={[slideshow1, slideshow2, slideshow3, slideshow4]} minHeight="100vh" auto />
                <FadePassNavbar classes="scroll-learn-more fadePassNavbar bobbing-anim">
                    <a onclick="jsUtils.scrollTo('#container-1')">
                        Learn more
                        <br />
                        <FaAngleDoubleDown size="2rem" />
                    </a>
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
                            <ColoredCard roundedCorners >
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
                                <RoundedButton>
                                    Learn more&nbsp;<RiArrowRightSLine size="1.5rem" />
                                </RoundedButton>
                            </ColoredCard>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <ColoredCard roundedCorners>
                                <FaBook size="4rem" />
                                <br />
                                <h4>Publications</h4>
                                <p>Many members of our group have published pieces in academic journals.
                                </p>
                                <RoundedButton>
                                    Learn more&nbsp;<RiArrowRightSLine size="1.5rem" />
                                </RoundedButton>
                            </ColoredCard>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <ColoredCard roundedCorners>
                                <FaChalkboardTeacher size="4rem" />
                                <br />
                                <h4>Conferences</h4>
                                <p>Our group has presented various research projects at several conferences.
                                </p>
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
                        <div className="col-12 col-md-6">
                            <ResponsiveImage url={currentProjectsImg} minHeight="300px" backgroundSize="cover" roundedCorners />
                        </div>
                        <div className="col-12 col-md-6">
                            <h4>Pushing the Community's "12 Demands"</h4>
                            <p>After the creation of the community's <a>"12 Demands"</a>, we compressed the 12
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