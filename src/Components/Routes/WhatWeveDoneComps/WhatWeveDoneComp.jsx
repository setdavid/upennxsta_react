import React, { useEffect, useState } from "react";
import Slideshow from "../../Features/Slideshow";
import { BsChevronCompactDown } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import ResponsiveImage from "../../Features/ResponsiveImage";

const WhatWeveDoneComp = (props) => {
    const { title, subtitle, date, text, images, backgroundColor } = props;

    const [opened, setOpened] = useState(false);
    useEffect(() => {
        setOpened(false);
        return setOpened(false);
    }, []);

    const handleClick = () => {
        setOpened(!opened);
    };

    const ContentComp = () => {
        return (
            <div className="row off-white-background wwdc-content">
                <div className="col-12 pb-0">
                    <div className="row pad-top-1p5rem">
                        <div className="col-12">
                            {text.map(paragraph => (
                                <p>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6">
                            {images && images.length > 1 ? (<Slideshow urls={images} minHeight="350px" />) : (<ResponsiveImage url={images[0]} minHeight="350px" backgroundSize="cover" />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="wwdc">
            <div style={{ backgroundColor: backgroundColor }} className="row wwdc-title-row">
                <div className="col-12 wwdc-title">
                    <div className="h3">{title}</div>
                    <div className="h6">{subtitle}</div>
                </div>
            </div>
            {opened ? (
                <CSSTransition timeout={3000} classNames="fade" in={opened} >
                    <ContentComp />
                </CSSTransition>
            ) : (<div />)}
            <div className="row">
                <div onClick={handleClick} style={{ backgroundColor: backgroundColor }} className="col-12 wwdc-read-more">
                    <h5>
                        {opened ? "Collapse" : "Read More"}
                    </h5>
                    <div style={{ transform: opened ? "rotate(180deg)" : "" }} className="wwdc-chevron">
                        <BsChevronCompactDown color="white" size="3rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeveDoneComp;