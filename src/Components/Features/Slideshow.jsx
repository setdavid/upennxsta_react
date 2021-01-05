import React, { useEffect, useState } from "react";
import ResponsiveImage from "./ResponsiveImage";

import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

const Slideshow = (props) => {
    const { urls, minHeight, auto, children } = props;

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
    let initialImages = [];

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
            } else if (i + 1 === initialImages.length) {
                initialImages[i].next = initialImages[0];
            }

            if (i - 1 >= 0) {
                initialImages[i].prev = initialImages[i - 1];
            } else if (i - 1 === -1) {
                initialImages[i].prev = initialImages[initialImages.length - 1];
            }
        }

        initialImages[0].opacity = 1;
    }

    const [images, setImages] = useState(initialImages);
    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        let autoTimer = null;

        if (urls && urls.length > 0 && images.length > 0) {
            if (auto) {
                autoTimer = setTimeout(() => {
                    nextImage();
                }, interval);
            }
        }

        return (() => (auto) && (autoTimer != null) && (unmount(autoTimer)));
    }, [images]);

    const unmount = (timer) => {
        clearTimeout(timer);
    };

    const prepImages = () => {
        if (urls && urls.length > 0 && images.length > 0) {
            let index = 0;

            return urls.map(url => {
                const key = index;

                let imageCSS = {
                    transitionDuration: auto ? "2s" : "0.5s",
                    opacity: images[index].opacity
                };

                if (index === 0) {
                    imageCSS = { ...imageCSS, position: "relative" };
                }

                index += 1;

                return <ResponsiveImage key={key} url={url} minHeight={minHeight} backgroundSize="cover" styles={imageCSS} classes="slideshow-image" />
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
        <div style={{ minHeight: minHeight }} className="slideshow d-flex align-items-center" >
            { prepImages()}
            { !auto && prepScrollButtons()}
            {children}
        </div >
    );
}


export default Slideshow;