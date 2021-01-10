import React from "react";

const ResponsiveImage = (props) => {
    const { url, minHeight, backgroundSize, roundedCorners, float, styles, classes, children } = props;

    let cssStyles = {
        minHeight: minHeight,
        backgroundImage: `url(${url})`,
        backgroundSize: backgroundSize
    };

    if (float) {
        cssStyles = { ...cssStyles, maxHeight: minHeight };
    }

    return (
        <div style={{ ...cssStyles, ...styles }} className={`${classes ? classes : ""} ${roundedCorners ? "rounded-corners" : ""} 
        ${float ? "responsive-image-float" : ""}
        ${float === "left" ? "float-left-margin float-md-left" : (float === "right" ? "float-right-margin float-md-right" : "")} responsive-image`} >
            {children}
        </div>
    );
}

export default ResponsiveImage;