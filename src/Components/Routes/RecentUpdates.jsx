import React from "react";
// import { jsonPostingsToComps } from "../Features/tools";
// import recentUpdatesPostings from "../../json-postings/recent-updates-postings.json";
import { sheetData, sheetDataToComp } from "../Features/dataRetrieval";
import RUComp from "./RUComp";

import ResponsiveImage from "../Features/ResponsiveImage";
import Jumbotron from "../Features/Jumbotron";

const RecentUpdates = (props) => {
    return (
        <React.Fragment>
            <Jumbotron text="RECENT UPDATES" subtext="Updates of our works" height="85vh" >
                <ResponsiveImage url="img/wall_art1.jpg" minHeight="85vh" backgroundSize="cover" />
            </Jumbotron>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        {sheetDataToComp(sheetData[3], RUComp, "ru")}
                        {/* {jsonPostingsToComps(recentUpdatesPostings, RUComp)} */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RecentUpdates;