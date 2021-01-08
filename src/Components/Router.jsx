import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { closeSlider } from "../redux/ducks/navslider";

import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import WhatWeveDone from "./Routes/WhatWeveDone";
import RecentUpdates from "./Routes/RecentUpdates";

export const defaultLocation = "/upennxsta_react";

const Router = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(closeSlider());
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    return (
        <Switch>
            <Route exact path={`${defaultLocation}/`} component={Home} />
            <Route exact path={`${defaultLocation}/about-us`} component={AboutUs} />
            <Route exact path={`${defaultLocation}/what-weve-done`} component={WhatWeveDone} />
            <Route exact path={`${defaultLocation}/recent-updates`} component={RecentUpdates} />
            <Redirect to={location}/>
            {/* <Route component={RecentUpdates} /> */}
        </Switch>
    );
}

export default Router;