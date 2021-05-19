import React from "react";
import Tabletop from "tabletop";

const DATA_LINKS = ["1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0",
        "1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0",
        "1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0"];

export let sheetData = new Array(DATA_LINKS.length);

export const retrieveData = (callback) => {
    getSheetData(DATA_LINKS, sheetData, 0, callback);

    console.log("here is the data");
    console.log(sheetData);
}

const getSheetData = (dataLinks, sheetData, i, callback) => {
    if (i < dataLinks.length) {
        Tabletop.init({
            key: dataLinks[i],
            simpleSheet: true
        }).then(d => {
            // console.log(d);
            sheetData[i] = d;
            getSheetData(dataLinks, sheetData, i + 1, callback);
        });
    } else {
        console.log("on index: " + i);
        callback();
    }
}

export const sheetDataToComp = (sheetData, Component, keyName) => {
    let idIndex = -1;

    const comps = (sheetData.map(posting => {
        idIndex++;
        return <Component key={idIndex} id={keyName + "-" + idIndex} {...posting }  />
    }));

    return comps;
};