import React from "react";
import FadePassNavbar from "./FadePassNavbar";

const TextOverImage = (props) => {
    const { text, subtext, textFont, subtextFont, textSize, subtextSize, isJumbotron, fadePassNavbar, roundedCorners, styles, classes, children } = props;

    const textArea = (
        <div style={{ fontFamily: textFont, fontSize: textSize }} className={`text-over ${isJumbotron && "text-over-jumbotron"}`}>
            {text}
        </div>
    );

    const subtextArea = (
        <div style={{ fontFamily: subtextFont, fontSize: subtextSize }} className={`subtext-over ${isJumbotron && "subtext-over-jumbotron"}`}>
            {subtext}
        </div>
    );


    return (
        <div style={styles} className={`image-frame ${classes} ${roundedCorners ? "rounded-corners" : ""}`}>
            <div className="img-tint" />
            {children}
            <div className="text-container">
                {fadePassNavbar ? <FadePassNavbar>{textArea}</FadePassNavbar> : textArea}
                {fadePassNavbar ? <FadePassNavbar>{subtextArea}</FadePassNavbar> : subtextArea}
            </div>
        </div>
    );
}

export default TextOverImage;