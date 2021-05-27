import React from "react";
import { NAVBAR_HEIGHT } from "../Navbar";

export const scrollTo = (id) => {
    if (id && id != null) {
        let elem = document.querySelector(id);
        if (elem != null) {
            let targetLocation = elem.getBoundingClientRect().top -
                document.querySelector("#main-content").getBoundingClientRect().top -
                NAVBAR_HEIGHT;
            console.log(`${id}: ${elem.getBoundingClientRect().top}`);
            window.scrollTo({
                top: targetLocation,
                left: 0,
                behavior: "smooth"
            });
        }
    }
};

export const scrollToTop = (smooth) => {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
};

export const jsonPostingsToComps = (jsonPostings, Component) => {
    let paragraphCount = 0;
    const incrParagraphCount = () => {
        const i = paragraphCount;
        paragraphCount += 1;
        return i;
    };

    const postings = (jsonPostings.map(posting => {
        return <Component key={incrParagraphCount()} {...posting} />
    }));

    return postings;
};