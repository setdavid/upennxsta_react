import React from "react";

const ResponsiveImage = (props) => {
    const { url, minHeight, backgroundSize, children, classes, styles } = props;

    const cssStyles = {
        minWidth: "100%",
        width: "100%",
        minHeight: minHeight,
        height: "100%",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: backgroundSize,
        zIndex: "-1"
    };

    return (
        <div className={classes} style={{ ...cssStyles, ...styles }}>
            {children}
        </div>
    );
}

export default ResponsiveImage;