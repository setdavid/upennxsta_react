import React from "react";
import "./../css/base-styles.css";
import "./../css/text-over-image.css";

const TextOverImage = (props) => {
    const { text, subtext, textFont, subtextFont, textSize, subtextSize, children } = props;

    return (
        <React.Fragment>
            <div className="image-frame">
                <div className="img-tint" />
                {children}
                <div className="text-container">
                    <div style={{ fontFamily: textFont, fontSize: textSize }} className="text-over">
                        {text}
                    </div>
                    <div style={{ fontFamily: subtextFont, fontSize: subtextSize }} className="subtext-over">
                        {subtext}
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default TextOverImage;