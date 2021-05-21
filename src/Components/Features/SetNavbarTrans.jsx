import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { transparentizeNavbar, fillNavbar } from "./../../redux/ducks/navbar";
import { NAVBAR_HEIGHT } from "../Navbar";

const SetNavbarTrans = (props) => {
    const { styles, classes, children } = props;

    const elemRef = useRef();
    const dispatch = useDispatch();

    const handleScroll = () => {
        if (elemRef.current != null) {
            const rect = elemRef.current.getBoundingClientRect();
            const top = rect.top;
            const bottom = rect.bottom;

            if (top <= NAVBAR_HEIGHT && bottom >= NAVBAR_HEIGHT) {
                dispatch(transparentizeNavbar());
            } else {
                dispatch(fillNavbar());
            }
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return unmount;
    }, [elemRef]);

    const unmount = () => {
        console.log("setNavbarTrans unmount");
        window.removeEventListener("scroll", handleScroll)
    };

    return (
        <div ref={elemRef} style={styles} className={`${classes ? classes : ""}`}>
            {children}
        </div>
    );
}

export default SetNavbarTrans;