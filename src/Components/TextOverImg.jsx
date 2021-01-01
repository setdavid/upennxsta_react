import React from "react";
import "./../css/base-styles.css";

import ResponsiveImg from "./ResponsiveImg";


const TextOverImg = (props) => {
    const { url, minHeight, backgroundSize, text } = props;
    const cssText = {
        color: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        maxWidth: "80%",
        fontSize: "2.5rem",
        zIndex: "1000"
    };

    return (
        <div style={{ position: "relative" }}>
            <div className="img-tint"></div>
            <ResponsiveImg url={url} minHeight={minHeight} backgroundSize={backgroundSize} classes="d-flex justify-content-center align-items-center" >
                <div style={cssText} className="text-center">{text}</div>
            </ResponsiveImg>
        </div>
    );
}

export default TextOverImg;