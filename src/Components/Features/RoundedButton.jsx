import React from "react";

const RoundedButton = (props) => {
    const { styles, classes, children, onClick } = props;

    return (
        <div onClick={onClick} style={{ ...styles }} className={`rounded-button ${classes ? classes : ""}`} >
            {children}
        </div>
    );
};

export default RoundedButton;