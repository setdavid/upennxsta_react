import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";

import { closeSlider } from "../redux/ducks/navslider";

import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import WhatWeveDone from "./Routes/WhatWeveDone";
import RecentUpdates from "./Routes/RecentUpdates";
import ContactUs from "./Routes/ContactUs";

export const defaultLocation = "/upennxsta_react";

const Router = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(closeSlider());
    }, [location]);

    return (
        <Switch>
            <Route exact path={`${defaultLocation}/`} component={Home} />
            <Route exact path={`${defaultLocation}/about-us`} component={AboutUs} />
            <Route exact path={`${defaultLocation}/what-weve-done`} component={WhatWeveDone} />
            <Route exact path={`${defaultLocation}/recent-updates`} component={RecentUpdates} />
            <Route exact path={`${defaultLocation}/contact-us`} component={ContactUs} />
        </Switch>
    );
}

export default Router;