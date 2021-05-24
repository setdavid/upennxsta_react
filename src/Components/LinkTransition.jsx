import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { setPathIn } from "../redux/ducks/linkTransition";
import { scrollToTop } from "./Features/tools";
import { closeSlider } from "../redux/ducks/navslider";

export const ROUTE_TRANSITION_DURATION = 1000;

const LinkTransition = (props) => {
    const { children, styles, classes, id, path } = props;
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const linkTo = (path) => {
        scrollToTop();
        dispatch(closeSlider());

        if (path != null && path != "" && location.pathname != path) {
            dispatch(setPathIn(location.pathname, false));

            window.setTimeout(() => {
                history.push(path);
                dispatch(setPathIn(path, true));
            }, ROUTE_TRANSITION_DURATION / 4);

        }
    }

    // useEffect(()=>{

    // }, [location]);

    const parentDivStyle = {
        cursor: "pointer"
    };

    return (
        <div id={id} className={classes} style={{ ...parentDivStyle, ...styles }} onClick={() => { linkTo(path) }}>
            {children}
        </div>
    );
}

export default LinkTransition;