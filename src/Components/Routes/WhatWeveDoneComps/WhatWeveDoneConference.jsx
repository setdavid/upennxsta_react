import React from "react";
import Slideshow from "../../Features/Slideshow";

const WhatWeveDone = (props) => {
    const { title, date, text, images } = props;

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 h2">
                        {title}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {text.map(paragraph => (
                            <p>
                                { paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                        <Slideshow style={{ maxHeight: "400px" }} urls={images} minHeight="50vw" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeveDone;