import React from "react";
import TextOverImage from "./TextOverImage";

const Jumbotron = (props) => {
    const { text, subtext, children } = props;

    const jumbotronCSS = {
        position: "relative",
        top: "0",
        left: "0",
        minWidth: "100%",
        width: "100%",
        minHeight: "100%",
        height: "100%",
        padding: "0",
        margin: "0",
        overflow: "hidden"
    };

    return (
        <div style={jumbotronCSS} className="fixed-background">
            <TextOverImage text={text} subtext={subtext} isJumbotron={true}>
                {children}
            </TextOverImage>
        </div>
    );
}

export default Jumbotron;