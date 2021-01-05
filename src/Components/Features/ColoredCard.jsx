import React from "react";

const ColoredCard = (props) => {
    const { color, roundedCorners, styles, classes, children } = props;

    return (
        <div style={{ ...styles, backgroundColor: color }} className={`off-white-background ${classes ? classes : ""} ${roundedCorners ? "rounded-corners" : ""}`} >
            {children}
        </div>
    );
};

export default ColoredCard;