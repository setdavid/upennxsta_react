// import React from "react";
// import "./../css/navslider.css";
// import "./../css/base-styles.css";

// import { useSelector, useDispatch } from "react-redux";
// import { handleSliderToggle } from "./Navbar";


// const Navslider = () => {
//     const dispatch = useDispatch();
//     const navsliderOpened = useSelector(state => state.navslider.opened);

//     const openedCSS = {
//         width: "100%",
//         opacity: "1"
//     };

//     const closedCSS = {
//         width: "0",
//         opacity: "0"
//     };

//     return (
//         <React.Fragment>
//             <div style={navsliderOpened ? openedCSS : closedCSS} id="nav-slider" className="nav-slider list-group list-group-flush">
//                 <div id="slider-close-button">
//                     <button className="navbar-toggler custom-toggler" type="button" onClick={() => handleSliderToggle(navsliderOpened, dispatch)}>
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                 </div>
//                 <div><a href="#/home" className="list-group-item list-group-item-action"
//                 >UPENN&nbsp;&times;&nbsp;STA</a></div>
//                 <div><a href="#/about-us" className="list-group-item list-group-item-action"
//                 >About us</a></div>
//                 <div><a href="#/our-works" className="list-group-item list-group-item-action">Our works</a></div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Navslider;