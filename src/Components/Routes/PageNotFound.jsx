import React from "react";
import { NAVBAR_HEIGHT } from "../Navbar";

const PageNotFound = () => {
    return (
        <div className="container-fluid">
            <div className="container" style={{ textAlign: "center", fontSize: "100px" }}>
                <div className="row">
                    <div style={{ marginTop: NAVBAR_HEIGHT }} className="col-12">
                        PAGE NOT FOUND!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;