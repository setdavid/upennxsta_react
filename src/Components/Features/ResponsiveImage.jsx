import React from "react";

const ResponsiveImage = (props) => {
    const { url, minHeight, backgroundSize, roundedCorners, styles, classes, children } = props;

    const cssStyles = {
        minHeight: minHeight,
        backgroundImage: `url(${url})`,
        backgroundSize: backgroundSize
    };

    return (
        <div style={{ ...cssStyles, ...styles }} className={`${classes} ${roundedCorners ? "rounded-corners" : ""} responsive-image`} >
            {children}
        </div>
    );
}

export default ResponsiveImage;