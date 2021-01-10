import React from "react";
import { navbarHeight } from "../Navbar";

export const scrollTo = (id) => {
    if (id && id != null) {
        let elem = document.querySelector(id);
        if (elem != null) {
            let targetLocation = elem.getBoundingClientRect().top -
                document.querySelector("#main-content").getBoundingClientRect().top -
                navbarHeight;
            console.log(`${id}: ${elem.getBoundingClientRect().top}`);
            window.scrollTo({
                top: targetLocation,
                left: 0,
                behavior: "smooth"
            });
        }
    }
};

export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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