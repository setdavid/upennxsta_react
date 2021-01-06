import React from "react";
import { navbarHeight } from "../Navbar";

export const scrollTo = (id) => {
    if (id && id != null) {
        let elem = document.querySelector(id);
        if (elem != null) {
            let targetLocation = elem.getBoundingClientRect().top -
                document.querySelector("#main-content").getBoundingClientRect().top -
                navbarHeight;
            window.scrollTo({
                top: targetLocation,
                left: 0,
                behavior: "smooth"
            });
        }
    }
};

export const jsonPostingsToComps = (jsonPostings, Component) => {
    const postings = (jsonPostings.map(posting => {
        console.log(posting.images);

        return <Component {...posting} />
    }));


    return postings;
};