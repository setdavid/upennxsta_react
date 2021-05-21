import React from "react";
import Router from "./Router";
import { NAVBAR_HEIGHT } from "./Navbar";

export const addMarginTop = false;

const MainContent = () => {
    return (
        <div style={addMarginTop ? { marginTop: NAVBAR_HEIGHT } : {}} id="main-content" >
            {/* <Loading/> */}
            {/* { dataHasLoaded ? <Router/> : <Loading/>} */}
            <Router />
        </div >
    );
}

export default MainContent;