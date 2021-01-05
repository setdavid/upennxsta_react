import React from "react";

const FeatCompTemplate = (props) => {
    const { styles, classes, children } = props;

    return (
        <div style={{ ...styles }} className={`${classes}`} >
            {children}
        </div>
    );
};

export default FeatCompTemplate;