import React, { useEffect } from "react";
import ResponsiveImage from "./ResponsiveImage";

const Slideshow = (props) => {
    const { urls, minHeight, auto, children } = props;

    const autoTimer = null;
    const interval = 500;
    const currImage = 0;

    useEffect(() => {
        if (auto) {
            autoTimer = setInterval(() => {
                nextImage();
            }, interval);
        }
        return ((auto) && (autoTimer != null) && (clearInterval(autoTimer)));
    }, []);

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
        minHeight: minHeight,
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

    const nextImage = () => {

    };

    return (
        <div style={slideshowCSS}>
            {prepImages()}
        </div>
    );
}


export default Slideshow;