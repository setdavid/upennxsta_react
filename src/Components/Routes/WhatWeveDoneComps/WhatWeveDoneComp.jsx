import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../../Features/Slideshow";
import { BsChevronCompactDown } from "react-icons/bs";
import ResponsiveImage from "../../Features/ResponsiveImage";
import { scrollTo } from "../../Features/tools";

const WhatWeveDoneComp = (props) => {
    const { id, title, subtitle, text, images, backgroundColor } = props;

    const transDuration = 1000;
    const contentRef = useRef();
    const contentHeight = useRef(0);
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        contentHeight.current = contentRef.current.getBoundingClientRect().height;
        setOpened(false);
        return setOpened(false);
    }, []);

    const handleClick = () => {
        // if (!opened) {
            scrollTo(`#${id}`);
        // }

        setOpened(!opened);
    };

    return (
        <div id={id ? id : ""} className="wwdc">
            <div className="row">
                <div className="col-12">
                    <div style={{ backgroundColor: backgroundColor }} className="row wwdc-title-row">
                        <div className="col-12 wwdc-title">
                            <div className="h5">{title}</div>
                            <div className="p mb-0">{subtitle}</div>
                        </div>
                    </div>
                    <div className="row off-white-background wwdc-content">
                        <div style={{ transitionDuration: `${transDuration}ms`, maxHeight: opened ? `${2 * contentHeight.current}px` : "0" }} className="col-12 pb-0">
                            <div ref={contentRef}>
                                <div className="row pad-top-1p5rem">
                                    <div style={{ transitionDuration: `${transDuration}ms`, left: opened ? "0" : "-100%" }} className="col-12 wwdc-paragraphs" dangerouslySetInnerHTML={{__html: text}}>
                                    </div>
                                </div>
                                {images && images.length > 0 ?
                                    <div className="row d-flex justify-content-center">
                                        <div style={{ transitionDuration: `${transDuration}ms`, left: opened ? "0" : "100%" }} className="col-12 col-md-10 wwdc-slideshow">
                                            {images.length > 1 ? (<Slideshow urls={images} minHeight="350px" />) : (<ResponsiveImage url={images[0]} minHeight="350px" backgroundSize="cover" />)}
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={handleClick} style={{ backgroundColor: backgroundColor }} className="col-12 wwdc-read-more">
                            <h6>
                                {opened ? "Collapse" : "Read More"}
                            </h6>
                            <div style={{ transitionDuration: `${transDuration}ms`, transform: opened ? "rotate(180deg)" : "" }} className="wwdc-chevron">
                                <BsChevronCompactDown color="white" size="2rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeveDoneComp;