import React, { useEffect, useState, useRef } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

const Slideshow = (props) => {
    const { urls, minHeight, auto, styles, classes, children } = props;

    //Subcomponent
    const ScrollButtons = (props) => {
        const { leftButton } = props;

        const setWidth = "30%";

        return (
            <div style={{ width: setWidth }} className={`slideshow-scroll-button d-flex align-items-center justify-content-${leftButton ? "start" : "end"}`}>
                {leftButton ? <IoChevronBackCircleSharp onClick={leftButton ? prevImage : nextImage} size={setWidth} /> : <IoChevronForwardCircleSharp onClick={leftButton ? prevImage : nextImage} size={setWidth} />}
            </div>
        );
    };

    const interval = 6000;
    const transitionLength = 500;
    const autoTransitionLength = 2000;
    let initialization = [];

    if (urls && urls.length > 0) {
        for (let i = 0; i < urls.length; i++) {
            initialization[i] = {
                id: i,
                url: urls[i],
                prev: null,
                next: null
            };
        }

        for (let i = 0; i < initialization.length; i++) {
            if (i + 1 < initialization.length) {
                initialization[i].next = initialization[i + 1];
            } else if (i + 1 === initialization.length) {
                initialization[i].next = initialization[0];
            }

            if (i - 1 >= 0) {
                initialization[i].prev = initialization[i - 1];
            } else if (i - 1 === -1) {
                initialization[i].prev = initialization[initialization.length - 1];
            }
        }
    }

    const images = useRef(initialization);
    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        let autoTimer = null;

        if (urls && urls.length > 0 && images.current.length > 0) {
            if (auto) {
                autoTimer = setTimeout(() => {
                    console.log("next");
                    nextImage();
                }, interval);
            }
        }

        return (() => (auto) && (autoTimer != null) && (unmount(autoTimer)));
    }, [currImage]);

    const unmount = (timer) => {
        console.log("unmount");
        clearTimeout(timer);
    };

    const prepImage = () => {
        if (urls && urls.length > 0 && images.current.length > 0) {
            return <ResponsiveImage styles={{ transitionDuration: `${auto ? autoTransitionLength : transitionLength}ms` }} url={images.current[currImage].url} minHeight={minHeight} backgroundSize="cover" classes="slideshow-image" />
        };
    };

    const nextImage = () => {
        console.log("next image");
        setCurrImage(images.current[currImage].next.id);
    };

    const prevImage = () => {
        setCurrImage(images.current[currImage].prev.id);
    };

    const prepScrollButtons = () => {
        return (
            <div style={{ position: "absolute", height: "100%", width: "100%" }} className="d-flex justify-content-between">
                <ScrollButtons leftButton />
                <ScrollButtons />
            </div>
        );
    };

    return (
        <div style={{ ...styles, minHeight: minHeight }} className={`${classes ? classes : ""} slideshow d-flex align-items-center`} >
            <TransitionGroup>
                <CSSTransition key={images.current[currImage].id} timeout={auto ? autoTransitionLength : transitionLength} classNames="fade" unmountOnExit>
                    {prepImage()}
                </CSSTransition>
            </TransitionGroup>
            {!auto && prepScrollButtons()}
            {children}
        </div >
    );
}


export default Slideshow;