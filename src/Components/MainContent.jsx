import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Router from "./Router";
import { dataLoaded } from "./../redux/ducks/dataLoad";
import { retrieveData } from "./../Components/Features/dataRetrieval";
import { navbarHeight } from "./Navbar";
import Loading from "./Loading";

export const addMarginTop = false;

const MainContent = () => {
    const dispatch = useDispatch();
    const dataHasLoaded = useSelector(state => state.dataLoad.dataLoaded);
  
    console.log("not yet finished!: " + dataHasLoaded)
    retrieveData(() => {  
      dispatch(dataLoaded());
      console.log("finished!: " + dataHasLoaded);
    });

    return (
        <div style={addMarginTop ? { marginTop: navbarHeight } : {}} id="main-content" >
            {/* <Loading/> */}
            { dataHasLoaded ? <Router/> : <Loading/>}
            {/* <Router /> */}
        </div >
    );
}

export default MainContent;