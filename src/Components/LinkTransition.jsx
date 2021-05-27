import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { setPathIn } from "../redux/ducks/linkTransition";
import { scrollToTop } from "./Features/tools";
import { closeSlider } from "../redux/ducks/navslider";

export const ROUTE_TRANSITION_DURATION = 250;
export const TRANSITION_TYPE = "ascend";

const LinkTransition = (props) => {
    const { children, styles, classes, id, path } = props;
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const linkTo = (path) => {
        dispatch(closeSlider());

        if (path !== null && path !== "" && location.pathname !== path) {
            dispatch(setPathIn(location.pathname, false));

            window.setTimeout(() => {
                history.push(path);
                // dispatch(setPathIn(path, true));

                scrollToTop(false);
            }, ROUTE_TRANSITION_DURATION);

        } else {
            scrollToTop(true);

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