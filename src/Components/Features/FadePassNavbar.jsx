import React, { useEffect, useState, useRef } from "react";
import { NAVBAR_HEIGHT } from "../Navbar";

const FadePassNavbar = (props) => {
    const { styles, classes, children } = props;
    const elemRef = useRef();

    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        if (elemRef.current != null) {
            const boundary = 1.0 * NAVBAR_HEIGHT;
            const rect = elemRef.current.getBoundingClientRect();
            const height = rect.height;
            const top = rect.top;
            const bottom = rect.bottom;

            if (top <= boundary && bottom >= boundary) {
                setOpacity((1.0 * (bottom - boundary)) / height);
            } else if (top >= boundary && bottom >= boundary) {
                setOpacity(1);
            } else if (top <= boundary && bottom <= boundary) {
                setOpacity(0);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return (() => window.removeEventListener("scroll", handleScroll));
    }, [elemRef]);

    return (
        <div className={`${classes ? classes : ""}`} ref={elemRef} style={{ width: "100%", zIndex: "1000", transition: "opacity 0.01s", opacity: `${opacity}`, ...styles }}>
            {children}
        </div >
    );
}

export default FadePassNavbar;