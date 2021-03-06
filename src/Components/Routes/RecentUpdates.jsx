import React from "react";
// import { jsonPostingsToComps } from "../Features/tools";
// import recentUpdatesPostings from "../../json-postings/recent-updates-postings.json";
import { sheetDataObj, sheetDataToComp } from "../Features/dataRetrieval";
import RUComp from "./RUComp";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import { ROUTE_TRANSITION_DURATION, TRANSITION_TYPE } from "../LinkTransition";

import ResponsiveImage from "../Features/ResponsiveImage";
import Jumbotron from "../Features/Jumbotron";

const RecentUpdates = (props) => {
    const RUIn = useSelector(state => state.linkTransition["/recent-updates"]);

    return (
        <CSSTransition key="recent-updates" classNames={TRANSITION_TYPE} className={TRANSITION_TYPE + "-enter"} timeout={ROUTE_TRANSITION_DURATION} in={RUIn}>
            <div>
                <Jumbotron text="RECENT UPDATES" subtext="Updates of our works" height="85vh" >
                    <ResponsiveImage url="img/wall_art1.jpg" minHeight="85vh" backgroundSize="cover" />
                </Jumbotron>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            {sheetDataToComp(sheetDataObj.Recent_Updates, RUComp, "ru")}
                            {/* {jsonPostingsToComps(recentUpdatesPostings, RUComp)} */}
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default RecentUpdates;