// import React from "react";
// import "./../../css/base-styles.css";
// import "./../../css/home.css";

// // import { faAngleDoubleDown, faTimes, faUsers, faBook, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'


// // import whoWeAreImg from "./../../img/group_picture1.jpg";
// // import upennImg from "./../../img/upenn-symbol.png";
// // import staImg from "./../../img/sta-symbol-trans.png";
// // import middleSchoolersImg from "./../../img/middle-schoolers.JPG";
// // // import highSchoolersImg from "./../../img/high-shcoolers.jpg";
// // import collegeStudentsImg from "./../../img/college-students.jpg";
// // import parentsImg from "./../../img/parents1.jpg";
// // import educatorsImg from "./../../img/educators1.JPG";
// // import communityImg from "./../../img/park_group1.jpg";
// // import currentProjectsImg from "./../../img/wall_art1.jpg";

// const Home = () => {
//     return (
//         <div>
//             <Container className="jumbotron-text-container">
//                 <div className="text-over-jumbotron fadePassNavbar">
//                     COMMUNITY POWERED
//                 </div>
//                 <div className="subtext-over-jumbotron fadePassNavbar">
//                     A community based research group centered in Philadelphia
//                 </div>
//                 <div className="scroll-learn-more fadePassNavbar bobbing-anim">
//                     <a>
//                         Learn more
//                         <br />
//                         <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
//                     </a>
//                 </div>
//             </Container>
//             <div className="jumbotron-frame">
//                 <div className="slideshow-jumbotron-collage"></div>
//                 <div className="img-tint"></div>
//             </div>
//             <Container fluid id="container-1">
//                 <Container>
//                     <Row>
//                         <Col xs={12} className="h1 text-center theme-1-text">
//                             STRIVING TO MAKE A DIFFERENCE ONE STEP AT A TIME
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col xs={12} md={6} className="order-md-2">
//                             <div id="who-we-are-img" className="responsive-img"></div>
//                         </Col>
//                         <Col xs={12} md={6} className="order-md-1">
//                             <Row>
//                                 <Col xs={12}>
//                                     <h4>Who we are</h4>
//                                     <p>
//                                         We are a research group stemming from a partnership between the University of Pennsylvania
//                                         Graduate School of Education (Penn GSE) and the
//                                         Saint Thomas Aquinas Church (STA). We discuss issues of educational equity and center our
//                                         projects around this important issue.
//                                     </p>
//                                 </Col>
//                             </Row>
//                             <Row id="symbol-group" className="d-flex align-items-center justify-content-center">
//                                 <Col xs={3} id="upenn-img" className="responsive-img"></Col>
//                                 <Col xs={3} id="times">
//                                     <FontAwesomeIcon icon={faTimes} size="3x" />
//                                 </Col>
//                                 <Col xs={3} id="sta-img" className="responsive-img"></Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//             <Container fluid id="container-2" className="off-white-background">
//                 <div id="container-2-background-2"></div>
//                 <div id="container-2-background-1"></div>
//                 <Row>
//                     <Col xs={12} className="h1 text-center theme-1-text">
//                         WE ARE...
//                     </Col>
//                 </Row>
//                 <Row id="we-are-1" className="we-are">
//                     <Col xs={12} md={4} className="white-text">
//                         <div>
//                             <div className="img-tint"></div>
//                             <div id="middle-schoolers-img" className="responsive-img">
//                                 <div className="text-center">Middle Schoolers</div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col xs={12} md={4} className="white-text">
//                         <div>
//                             <div className="img-tint"></div>
//                             <div id="college-students-img" className="responsive-img">
//                                 <div className="text-center">High Schoolers</div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col xs={12} md={4} className="white-text">
//                         <div>
//                             <div className="img-tint"></div>
//                             <div id="college-students-img" className="responsive-img">
//                                 <div className="text-center">College Students</div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row id="we-are-2" className="we-are">
//                     <Col xs={12} md={4} className="white-text">
//                         <div>
//                             <div className="img-tint"></div>
//                             <div id="parents-img" className="responsive-img">
//                                 <div className="text-center">Parents</div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col xs={12} md={4} className="white-text">
//                         <div>
//                             <div className="img-tint"></div>
//                             <div id="educators-img" className="responsive-img">
//                                 <div className="text-center">Educators</div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row id="we-are-3" className="we-are">
//                     <Col xs={12} md={4} className="white-text">
//                         <div>
//                             <div className="img-tint"></div>
//                             <div id="community-img" className="responsive-img">
//                                 <div className="text-center">A Community</div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container fluid>
//                 <Container id="container-3">
//                     <Row>
//                         <Col xs={12} md={4} className="d-flex align-items-stretch">
//                             <div className="off-white-background">
//                                 <FontAwesomeIcon icon={faUsers} size="4x" />
//                                 <br />
//                                 <h4>Learn more about us</h4>
//                                 <p>Our group started as a way to teach students about using research to answer
//                                 questions that interested them. However, through the years, our focus has gradually shifted.
//                         {/* <!-- towards
//                         researching educational equity as a response to the hopes of the members
//                         of the Saint Thomas Aquinas community. -->
//                         <!-- Many community members are immigrant families with hopes that their children receive good
//                         educational experiences as students of color. --> */}
//                                 </p>
//                                 <div>
//                                     <a href="#/about-us">Learn more</a>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col xs={12} md={4} className="d-flex align-items-stretch">
//                             <div className="off-white-background">
//                                 <FontAwesomeIcon icon={faBook} size="4x" />
//                                 <br />
//                                 <h4>Publications</h4>
//                                 <p>Many members of our group have published pieces in academic journals.
//                                 </p>
//                                 <div>
//                                     <a href="#/publications">Learn more</a>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col xs={12} md={4} className="d-flex align-items-stretch">
//                             <div className="off-white-background">
//                                 <FontAwesomeIcon icon={faChalkboardTeacher} size="4x" />
//                                 <br />
//                                 <h4>Conferences</h4>
//                                 <p>Our group has presented various research projects at several conferences.
//                                 </p>
//                                 <div>
//                                     <a href="#/conferences">Learn more</a>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//             <Container fluid className="off-white-background">
//                 <Container>
//                     <Row>
//                         <Col xs={12} className="text-center">
//                             <h1>Current Project</h1>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col xs={12} md={6}>
//                             <div id="current-projects-img" className="responsive-img"></div>
//                         </Col>
//                         <Col xs={12} md={6}>
//                             <h4>Pushing the Community's "12 Demands"</h4>
//                             <p>After the creation of the community's <a href="">"12 Demands"</a>, we compressed the 12
//                     items into three specific topics that our research group can feasibly pursue: </p>
//                             <ul>
//                                 <li>AP classNamees</li>
//                                 <li>AP classNamees</li>
//                                 <li>AP classNamees</li>
//                             </ul>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga harum, ratione repudiandae,
//                             dolores nulla accusantium beatae exercitationem ut autem consectetur alias nesciunt numquam odit
//                     recusandae necessitatibus similique nobis reiciendis.</p>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </div>
//     );
// }

// export default Home;