import React from "react";
import Router from "./Router";
import { navbarHeight } from "./Navbar";

export const addMarginTop = false;

const MainContent = () => {
    return (
        <div style={addMarginTop ? { marginTop: navbarHeight } : {}} id="main-content" >
            <Router />
        </div >
    );
}

export default MainContent;