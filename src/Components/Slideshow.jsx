import React, { useEffect, useState } from "react";
import ResponsiveImage from "./ResponsiveImage";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

const Slideshow = (props) => {
    const { urls, minHeight, auto, children } = props;

    //Subcomponent
    const ScrollButtons = (props) => {
        const { leftButton } = props;

        const setWidth = "30%";

        const scrollButtonsCSS = {
            minHeight: "100%",
            height: "100%",
            width: setWidth,
            color: "white",
            zIndex: "100"
        };

        return (
            <div style={scrollButtonsCSS} className={`d-flex align-items-center justify-content-${leftButton ? "start" : "end"}`}>
                {leftButton ? <IoChevronBackCircleSharp onClick={leftButton ? prevImage : nextImage} size={setWidth} /> : <IoChevronForwardCircleSharp onClick={leftButton ? prevImage : nextImage} size={setWidth} />}
            </div>
        );
    };

    let autoTimer = null;
    const interval = 6000;
    let initialImages = new Array();

    if (urls && urls.length > 0) {
        for (let i = 0; i < urls.length; i++) {
            initialImages[i] = {
                index: i,
                opacity: 0,
                prev: null,
                next: null
            };
        }

        for (let i = 0; i < initialImages.length; i++) {
            if (i + 1 < initialImages.length) {
                initialImages[i].next = initialImages[i + 1];
            } else if (i + 1 == initialImages.length) {
                initialImages[i].next = initialImages[0];
            }

            if (i - 1 >= 0) {
                initialImages[i].prev = initialImages[i - 1];
            } else if (i - 1 == -1) {
                initialImages[i].prev = initialImages[initialImages.length - 1];
            }
        }

        initialImages[0].opacity = 1;
    }

    const [images, setImages] = useState(initialImages);
    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        if (urls && urls.length > 0 && images.length > 0) {
            if (auto) {
                autoTimer = setTimeout(() => {
                    nextImage();
                }, interval);
            }
        }

        return (() => (auto) && (autoTimer != null) && (unmount()));
    }, [images]);

    const unmount = () => {
        clearTimeout(autoTimer);
    };

    const imageCSS = {
        position: "absolute",
        top: "0",
        left: "0",
        opacity: "0.5",
        transitionProperty: "opacity",
        transitionDuration: auto ? "2s" : "0.5s",
        zIndex: "-1"
    };

    const slideshowCSS = {
        position: "relative",
        top: "0",
        left: "0",
        minWidth: "100%",
        width: "100%",
        minHeight: minHeight,
        height: "100%",
        padding: "0",
        margin: "0",
        overflow: "hidden"
    };

    const prepImages = () => {
        if (urls && urls.length > 0 && images.length > 0) {
            let index = 0;

            return urls.map(url => {
                const key = index;

                let updateImageCSS = { ...imageCSS, opacity: images[index].opacity };

                if (index == 0) {
                    updateImageCSS = { ...updateImageCSS, position: "relative" };
                }

                index += 1;

                return <ResponsiveImage key={key} url={url} minHeight={minHeight} backgroundSize="cover" styles={updateImageCSS} />
            });
        };
    }

    const nextImage = () => {
        let newImages = [...images];

        newImages[currImage].opacity = 0;
        newImages[currImage].next.opacity = 1;

        setCurrImage(newImages[currImage].next.index);
        setImages(newImages);
    };

    const prevImage = () => {
        let newImages = [...images];

        newImages[currImage].opacity = 0;
        newImages[currImage].prev.opacity = 1;

        setCurrImage(newImages[currImage].prev.index);

        setImages(newImages);
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
        <div style={slideshowCSS} className="d-flex align-items-center">
            {prepImages()}
            {!auto && prepScrollButtons()}
        </div>
    );
}


export default Slideshow;