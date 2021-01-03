import React, { useEffect } from "react";
import ResponsiveImage from "./ResponsiveImage";

const Slideshow = (props) => {
    const { urls, minHeight, type, children } = props;

    const imageCSS = {
        position: "absolute",
        top: "0",
        left: "0",
        opacity: "0.5",
        transitionProperty: "opacity"
    };

    const slideshowCSS = {
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

    const prepImages = () => {
        if (urls) {
            if (urls.length > 0) {
                let zIndices = urls.length - 1;
                let indices = 0;

                return urls.map(url => {
                    let updateImageCSS = { ...imageCSS, zIndex: zIndices }

                    if (zIndices == 0) {
                        updateImageCSS = { ...updateImageCSS, position: "relative" }
                    }

                    indices += 1;
                    zIndices -= 1;

                    return <ResponsiveImage key={indices} url={url} minHeight={minHeight} backgroundSize="cover" styles={updateImageCSS} />
                });
            }
        };
    }

    return (
        <div style={slideshowCSS}>
            {prepImages()}
        </div>
    );
}


export default Slideshow;