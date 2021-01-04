import React from "react";
import TextOverImage from "./TextOverImage";
import { navbarHeight } from "../Navbar";
import { addMarginTop } from "../MainContent";

const Jumbotron = (props) => {
    const { text, subtext, children, height } = props;

    const jumbotronCSS = {
        minHeight: height,
        height: height
    };

    const addMarginTopCSS = {
        minHeight: `calc(${height} - ${navbarHeight})`,
        height: `calc(${height} - ${navbarHeight})`
    };

    let finalCSS = { ...jumbotronCSS };

    if (addMarginTop) {
        finalCSS = { ...jumbotronCSS, ...addMarginTopCSS };
    }

    return (
        <div style={finalCSS} className="fixed-background jumbotron">
            <TextOverImage text={text} subtext={subtext} isJumbotron={true}>
                {children}
            </TextOverImage>
        </div>
    );
}

export default Jumbotron;