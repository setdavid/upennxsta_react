import React from "react";
import { useSelector } from "react-redux";
import { NAVBAR_HEIGHT } from "./Navbar";

export const LOADING_ANIM_DURATION = 1000;
const GIF_SIZE = "70px";

const Loading = () => {
    const dataHasLoaded = useSelector(state => state.dataLoad.dataLoaded);

    return (
        <div className="container-fluid">
            <div className="container" style={{ textAlign: "center", fontSize: "100px" }}>
                <div className="row">
                    <div style={{ top: "25vh", transition: "opacity " + LOADING_ANIM_DURATION + "ms", opacity: dataHasLoaded ? "0" : "1" }} className="col-12">
                        <img src="loadingAnim4.gif" width={GIF_SIZE} height={GIF_SIZE} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;