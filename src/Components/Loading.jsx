import React from "react";
import { navbarHeight } from "./Navbar";

const MainContent = () => {
    return (
        <div className="container-fluid">
            <div className="container" style={{ textAlign: "center", fontSize: "100px" }}>
                <div className="row">
                    <div style={{ marginTop: navbarHeight }} className="col-12">
                        LOADING!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;