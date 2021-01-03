import React from "react";
import ResponsiveImg from "./ResponsiveImage";

const Slideshow = (props) => {
    const { urls, height, type, children } = props;

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
                <ResponsiveImage classes="jumbotron-image" url={url} minHeight={height} backgroundSize="cover" />
            </div>
        </React.Fragment >
    );
}

export default Slideshow;