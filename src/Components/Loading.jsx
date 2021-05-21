import React from "react";
import { NAVBAR_HEIGHT } from "./Navbar";

const Loading = () => {
    return (
        <div className="container-fluid">
            <div className="container" style={{ textAlign: "center", fontSize: "100px" }}>
                <div className="row">
                    <div style={{ marginTop: NAVBAR_HEIGHT }} className="col-12">
                        LOADING!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;