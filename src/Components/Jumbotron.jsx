import React from "react";
import "./../css/base-styles.css";
import "./../css/jumbotron.css";
import ResponsiveImg from "./ResponsiveImg";

const Jumbotron = (props) => {
    const { url, height, text, subtext, children } = props;

    const heightCSS = {
        height: height,
        minHeight: height
    };

    return (
        <React.Fragment>
            <div style={heightCSS} className="jumbotron-text-container container">
                <div className="text-over-jumbotron">
                    {text}
                </div>
                <div className="subtext-over-jumbotron">
                    {subtext}
                </div>
                {children}
            </div>
            <div style={heightCSS} className="jumbotron-frame">
                <ResponsiveImg classes="jumbotron-image" url={url} minHeight={height} backgroundSize="cover" />
            </div>
        </React.Fragment >
    );
}

export default Jumbotron;