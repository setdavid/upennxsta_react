import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";

export const defaultLocation = "/upennxsta_react";

const Router = () => {
    return (
        <Switch>
            <Route exact path={`${defaultLocation}/`} component={Home} />
            <Route exact path={`${defaultLocation}/about-us`} component={AboutUs} />
            <Route exact path={`${defaultLocation}/our-works`} component={Home} />
            <Route exact path={`${defaultLocation}/recent-updates`} component={Home} />
            <Route exact path={`${defaultLocation}/contact-us`} component={Home} />
        </Switch>
    );
}

export default Router;