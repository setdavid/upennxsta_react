import React, { useEffect } from "react";
import { jsonPostingsToComps } from "../Features/tools";
import WhatWeveDoneConference from "./WhatWeveDoneComps/WhatWeveDoneConference";

import conferencePostings from "../../json-postings/conferences-postings/conference-postings.json";

const WhatWeveDone = (props) => {
    console.log(props);

    // useEffect(() => {
    //     jsonPostingsToComps(conferencePostings,);
    // }, []);

    return (
        <React.Fragment>
            <div style={{ height: "1000vh" }}>WhatWeveDone us hellow</div>
            <div className="container">
                {jsonPostingsToComps(conferencePostings, WhatWeveDoneConference)}
            </div>
        </React.Fragment>
    );
}

export default WhatWeveDone;