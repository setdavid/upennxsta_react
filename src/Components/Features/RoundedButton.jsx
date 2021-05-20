import React from "react";

const RoundedButton = (props) => {
    const { id, styles, classes, children, onClick } = props;

    return (
        <div id={id} onClick={onClick} style={{ ...styles }} className={`rounded-button ${classes ? classes : ""}`} >
            {children}
        </div>
    );
};

export default RoundedButton;