import React from "react";
import { jsonPostingsToComps } from "../Features/tools";
import WhatWeveDoneConference from "./WhatWeveDoneComps/WhatWeveDoneConference";

import conferencePostings from "../../json-postings/conferences-postings/conference-postings.json";
import ResponsiveImage from "../Features/ResponsiveImage";
import Jumbotron from "../Features/Jumbotron";

const WhatWeveDone = (props) => {
    console.log(props);

    // useEffect(() => {
    //     jsonPostingsToComps(conferencePostings,);
    // }, []);

    return (
        <React.Fragment>
            <Jumbotron text="WHAT WE'VE DONE" subtext="An overview of our works over the years" height="85vh" >
                <ResponsiveImage url="img/community.jpg" minHeight="85vh" backgroundSize="cover" />
            </Jumbotron>
            <div className="container-fluid">
                <div className="container">
                    {jsonPostingsToComps(conferencePostings, WhatWeveDoneConference)}
                </div>
            </div>
        </React.Fragment>
    );
}

export default WhatWeveDone;