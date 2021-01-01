import React from "react";
import "./../css/base-styles.css";

const ResponsiveImg = (props) => {
    const { url, minHeight, backgroundSize, children, classes } = props;

    const cssStyles = {
        width: "100%",
        minHeight: minHeight,
        height: "100%",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: backgroundSize,
        zIndex: "1000"
    };

    return (
        <React.Fragment>
            <div className={classes} style={cssStyles}>
                {children}
            </div>
        </React.Fragment >
    );
}

export default ResponsiveImg;