import React from "react";
import "./../css/base-styles.css";
import Home from "./Routes/Home";

const MainContent = () => {
    return (
        <React.Fragment>
            <div id="main-content">
                <Home />
            </div>
        </React.Fragment>
    );
}

export default MainContent;