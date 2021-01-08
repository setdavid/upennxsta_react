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
                <div style={{ height: "1000vh" }} className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div style={{ borderBottom: "3px solid var(--text-color)" }} className=" h1 text-center">
                                CONFERENCES
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            {jsonPostingsToComps(conferencePostings, WhatWeveDoneConference)}
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WhatWeveDone;