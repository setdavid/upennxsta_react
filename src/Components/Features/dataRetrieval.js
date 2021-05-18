import React from "react";
import Tabletop from "tabletop";

export const retrieveData = (callback) => {

    const DATA_LINKS = ["1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0",
        "1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0",
        "1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0"];

    let data = new Array(DATA_LINKS.length);

    getSheetData(DATA_LINKS, data, 0, callback);

    console.log("here is the data");
    console.log(data);
}

const getSheetData = (dataLinks, data, i, callback) => {
    if (i < dataLinks.length) {
        Tabletop.init({
            key: dataLinks[i],
            simpleSheet: true
        }).then(d => {
            // console.log(d);
            data[i] = d;
            getSheetData(dataLinks, data, i + 1, callback);
        });
    } else {
        console.log("on index: " + i);
        callback();
    }
}