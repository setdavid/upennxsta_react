import React from "react";
import WhatWeveDoneComp from "./WhatWeveDoneComp";

const WhatWeveDoneConference = (props) => {
    const { title, date, text, images } = props;

    return (
        <WhatWeveDoneComp {...props} backgroundColor="var(--theme-color-1)" />
    );
}

export default WhatWeveDoneConference;