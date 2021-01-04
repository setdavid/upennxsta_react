import React from "react";
import TextOverImage from "./TextOverImage";
import { navbarHeight } from "./Navbar";
import { addMarginTop } from "./MainContent";

const Jumbotron = (props) => {
    const { text, subtext, children, height } = props;

    const jumbotronCSS = {
        position: "relative",
        top: "0",
        left: "0",
        minWidth: "100vw",
        width: "100vw",
        minHeight: height,
        height: height,
        padding: "0",
        margin: "0",
        overflow: "hidden"
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
        <div style={finalCSS} className="fixed-background">
            <TextOverImage text={text} subtext={subtext} isJumbotron={true}>
                {children}
            </TextOverImage>
        </div>
    );
}

export default Jumbotron;