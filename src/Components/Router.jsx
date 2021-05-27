import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

import { closeSlider } from "../redux/ducks/navslider";

import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import WhatWeveDone from "./Routes/WhatWeveDone";
import RecentUpdates from "./Routes/RecentUpdates";
import PageNotFound from "./Routes/PageNotFound";
import { scrollToTop } from "./Features/tools";
import { setPathIn } from "../redux/ducks/linkTransition";

// defaultLocation previously used for Browser Router but not necessary for Hash Router
// export const defaultLocation = "/upennxsta_react";
// export const defaultLocation = "";

const Router = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const linkTranStates = useSelector(state => state.linkTransition);

    useEffect(() => {
        dispatch(closeSlider());
        scrollToTop(false);

        console.log(location);
        console.log(history);

        let count = 0;
        let currRoute = null;
        for (const prop in linkTranStates) {
            if (linkTranStates[prop]) {
                count++;
                currRoute = prop;
            }
        }

        console.log(count);

        if (count === 1 && currRoute !== location.pathname) {
            dispatch(setPathIn(currRoute, false));
        } else if (count > 1) {
            console.log("halp currRoute: " + currRoute + " vs " + location.pathname);
            for (const prop in linkTranStates) {
                if (linkTranStates[prop]) {
                    dispatch(setPathIn(prop, false));
                }
            }
        }

        dispatch(setPathIn(location.pathname, true));

    }, [location]);

    console.log(linkTranStates);

    return (
        <Switch>
            {/* <Route exact path={`${defaultLocation}/`} component={Home} />
            <Route exact path={`${defaultLocation}/about-us`} component={AboutUs} />
            <Route exact path={`${defaultLocation}/what-weve-done`} component={WhatWeveDone} />
            <Route exact path={`${defaultLocation}/recent-updates`} component={RecentUpdates} /> */}
            <Route exact path={`/`} component={Home} />
            <Route path={`/about-us`} component={AboutUs} />
            <Route path={`/what-weve-done`} component={WhatWeveDone} />
            <Route path={`/recent-updates`} component={RecentUpdates} />
            <Route path={""} component={PageNotFound} />
        </Switch>

        // <TransitionGroup>
        //     <CSSTransition key={location.key} classNames="fade" timeout={3000}>
        //         <Switch location={location}>
        //             <Route exact path={`/`} component={Home} />
        //             <Route path={`/about-us`} component={AboutUs} />
        //             <Route path={`/what-weve-done`} component={WhatWeveDone} />
        //             <Route path={`/recent-updates`} component={RecentUpdates} />
        //             <Route path={""} component={PageNotFound} />
        //         </Switch>
        //     </CSSTransition>
        // </TransitionGroup>

        // <Switch location={location}>
        //     <Route exact path={`/`}>
        //         <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        //             <Home/>
        //         </CSSTransition>
        //     </Route>

        //     <Route exact path={`/about-us`} component={AboutUs} />
        //     <Route exact path={`/what-weve-done`} component={WhatWeveDone} />
        //     <Route exact path={`/recent-updates`} component={RecentUpdates} />
        // </Switch>
    );
}

export default Router;