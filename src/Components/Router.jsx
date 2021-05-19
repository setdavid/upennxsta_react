import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";

import { closeSlider } from "../redux/ducks/navslider";

import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import WhatWeveDone from "./Routes/WhatWeveDone";
import RecentUpdates from "./Routes/RecentUpdates";
import { scrollToTop } from "./Features/tools";

// defaultLocation previously used for Browser Router but not necessary for Hash Router
// export const defaultLocation = "/upennxsta_react";
// export const defaultLocation = "";

const Router = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(closeSlider());
        scrollToTop();
    }, [location]);

    return (
        <Switch>
            {/* <Route exact path={`${defaultLocation}/`} component={Home} />
            <Route exact path={`${defaultLocation}/about-us`} component={AboutUs} />
            <Route exact path={`${defaultLocation}/what-weve-done`} component={WhatWeveDone} />
            <Route exact path={`${defaultLocation}/recent-updates`} component={RecentUpdates} /> */}
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/about-us`} component={AboutUs} />
            <Route exact path={`/what-weve-done`} component={WhatWeveDone} />
            <Route exact path={`/recent-updates`} component={RecentUpdates} />
        </Switch>
    );
}

export default Router;