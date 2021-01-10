import React from "react";
import { jsonPostingsToComps } from "../Features/tools";
import WhatWeveDoneConference from "./WhatWeveDoneComps/WhatWeveDoneConference";
import WhatWeveDonePublication from "./WhatWeveDoneComps/WhatWeveDonePublication";
import WhatWeveDoneOther from "./WhatWeveDoneComps/WhatWeveDoneOther";

import conferencePostings from "../../json-postings/conference-postings.json";
import publicationPostings from "../../json-postings/publication-postings.json";
import otherWorkPostings from "../../json-postings/other-work-postings.json";

import ResponsiveImage from "../Features/ResponsiveImage";
import Jumbotron from "../Features/Jumbotron";

const WhatWeveDone = (props) => {

    const SideBorder = (props) => {
        const { backgroundColor, left } = props;
        let margin = {
            marginLeft: "10px"
        };

        if (!left) {
            margin = {
                marginRight: "10px"
            };
        }
        return (<div style={{ ...margin, height: "5rem", width: "10px", backgroundColor: backgroundColor }} className="d-none d-lg-block" />);
    }

    return (
        <React.Fragment>
            <Jumbotron text="WHAT WE'VE DONE" subtext="An overview of our works over the years" height="85vh" >
                <ResponsiveImage url="img/community.jpg" minHeight="85vh" backgroundSize="cover" />
            </Jumbotron>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className=" h1 text-center d-flex justify-content-center align-items-center">
                                CONFERENCES <SideBorder backgroundColor="var(--theme-color-1)" left />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            {jsonPostingsToComps(conferencePostings, WhatWeveDoneConference)}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 order-2 order-lg-1">
                            {jsonPostingsToComps(publicationPostings, WhatWeveDonePublication)}
                        </div>
                        <div className="col-12 col-lg-4 order-1 order-lg-2">
                            <div className=" h1 text-center d-flex justify-content-center align-items-center">
                                <SideBorder backgroundColor="var(--theme-color-2)" /> PUBLICATIONS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className=" h1 text-center d-flex justify-content-center align-items-center">
                                OTHER WORKS <SideBorder backgroundColor="black" left />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            {jsonPostingsToComps(otherWorkPostings, WhatWeveDoneOther)}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WhatWeveDone;