import React from "react";
import TextOverImage from "./TextOverImage";
import { navbarHeight } from "../Navbar";
import { addMarginTop } from "../MainContent";

const Jumbotron = (props) => {
    const { text, subtext, height, styles, classes, children } = props;

    const jumbotronCSS = {
        minHeight: height,
        height: height
    };

    const addMarginTopCSS = {
        minHeight: `calc(${height} - ${navbarHeight}px)`,
        height: `calc(${height} - ${navbarHeight}px)`
    };

    let finalCSS = { ...jumbotronCSS };

    if (addMarginTop) {
        finalCSS = { ...jumbotronCSS, ...addMarginTopCSS };
    }

    return (
        <div style={{ ...finalCSS, ...styles }} className={`${classes ? classes : ""} fixed-background jumbotron`}>
            <TextOverImage text={text} subtext={subtext} isJumbotron={true} fadePassNavbar>
                {children}
            </TextOverImage>
        </div>
    );
}

export default Jumbotron;