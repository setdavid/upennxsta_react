import React from "react";
import { jsonPostingsToComps } from "../Features/tools";
import recentUpdatesPostings from "../../json-postings/recent-updates-postings.json";
import RecentUpdatesComp from "./RecentUpdatesComps/RecentUpdatesComp";

import ResponsiveImage from "../Features/ResponsiveImage";
import Jumbotron from "../Features/Jumbotron";

const RecentUpdates = (props) => {
    return (
        <React.Fragment>
            <Jumbotron text="RECENT UPDATES" subtext="Read about our most recent projects" height="85vh" >
                <ResponsiveImage url="img/wall_art1.jpg" minHeight="85vh" backgroundSize="cover" />
            </Jumbotron>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        {jsonPostingsToComps(recentUpdatesPostings, RecentUpdatesComp)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RecentUpdates;