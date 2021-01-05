import React from "react";

const ResponsiveImage = (props) => {
    const { url, minHeight, backgroundSize, roundedCorners, children, classes, styles } = props;

    const cssStyles = {
        minHeight: minHeight,
        backgroundImage: `url(${url})`,
        backgroundSize: backgroundSize
    };

    return (
        <div className={`${classes} ${roundedCorners ? "rounded-corners" : ""} responsive-image`} style={{ ...cssStyles, ...styles }}>
            {children}
        </div>
    );
}

export default ResponsiveImage;