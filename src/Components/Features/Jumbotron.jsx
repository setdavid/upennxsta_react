import React from "react";
import TextOverImage from "./TextOverImage";
import { NAVBAR_HEIGHT } from "../Navbar";
import { addMarginTop } from "../MainContent";
import SetNavbarTrans from "./SetNavbarTrans";

const Jumbotron = (props) => {
    const { text, subtext, height, styles, classes, children } = props;

    const jumbotronCSS = {
        minHeight: height,
        height: height
    };

    const addMarginTopCSS = {
        minHeight: `calc(${height} - ${NAVBAR_HEIGHT}px)`,
        height: `calc(${height} - ${NAVBAR_HEIGHT}px)`
    };

    let finalCSS = { ...jumbotronCSS };

    if (addMarginTop) {
        finalCSS = { ...jumbotronCSS, ...addMarginTopCSS };
    }

    return (
        <div style={{ ...finalCSS, ...styles }} className={`${classes ? classes : ""} fixed-background jumbotron`}>
            <SetNavbarTrans>
                <TextOverImage text={text} subtext={subtext} isJumbotron={true} fadePassNavbar>
                    {children}
                </TextOverImage>
            </SetNavbarTrans>
        </div>
    );
}

export default Jumbotron;