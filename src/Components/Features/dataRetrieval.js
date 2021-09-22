import React from "react";
import Tabletop from "tabletop";
import Papa from "papaparse";

// const SHEET_DATA_LINK = "1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0";
// const SHEET_DATA_LINK = "1ou8cYRhUjRzpi-28Vu91RRtuI68AcIBjgM3A2sLMmGM";
// const SHEET_DATA_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrMNsRWNUz9exe3iBrT-dPeEbn2yIqoXHmuViGL7pS8SM62NRNXGENjauZ5jr1H1J6NcgjcOeYyI5N/pub?output=csv";
// const SHEET_DATA_LINK = "2PACX-1vQrMNsRWNUz9exe3iBrT-dPeEbn2yIqoXHmuViGL7pS8SM62NRNXGENjauZ5jr1H1J6NcgjcOeYyI5N";

// const WWD_CONFERENCES_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6LZo8RU6AX1qY4Ze36U2z3rAXdwfgFb79cBYZOcDbUrr9Ij6FZD0txVtl7rK_RiUNvlxw5Bb5d67q/pub?output=csv";
// const WWD_PUBLICATIONS_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS573w7h_eZrQWZBdtrbz0xyzeRbd976bLbiWlNeTqnx04msltxZGrDBphanoqNdVliOpCEABCJx6KX/pub?output=csv";
// const WWD_OTHER_WORKS_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTKVrKzNw6C-nWcOxnaq7S4zW_0iak57XOKFr8di5HY0wz9PVyy7BO7CN8GNnfM8LdOPo-DGN47SOTa/pub?output=csv";
// const RECENT_UPDATES_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9ts_yH6RJFE-NKA8LfShDboLHqAN8ssjbRUOKGzEa9By0bt4IDSYI56t_EiOUFQkjQrnDevkVSB1P/pub?output=csv";

const LINK_OBJECTS = {
    "WWD_Conferences": "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6LZo8RU6AX1qY4Ze36U2z3rAXdwfgFb79cBYZOcDbUrr9Ij6FZD0txVtl7rK_RiUNvlxw5Bb5d67q/pub?output=csv",
    "WWD_Publications": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS573w7h_eZrQWZBdtrbz0xyzeRbd976bLbiWlNeTqnx04msltxZGrDBphanoqNdVliOpCEABCJx6KX/pub?output=csv",
    "WWD_Other_Works": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTKVrKzNw6C-nWcOxnaq7S4zW_0iak57XOKFr8di5HY0wz9PVyy7BO7CN8GNnfM8LdOPo-DGN47SOTa/pub?output=csv",
    "Recent_Updates": "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9ts_yH6RJFE-NKA8LfShDboLHqAN8ssjbRUOKGzEa9By0bt4IDSYI56t_EiOUFQkjQrnDevkVSB1P/pub?output=csv"
}
const NUM_LINKS = 4


//[0: WWD_Conferences, 1: WWD_Publications, 2: WWD_Other_Works, 3: Recent_Updates]
export let sheetDataObj = {};
let sheetsRetrievedCount = 0;

export const retrieveData = (callback) => {
    console.log("start_data_retrieval");

    // Tabletop.init({
    //     key: SHEET_DATA_LINK,
    //     simpleSheet: false
    // }).then(data => {
    //     console.log(data);

    //     for (const prop in data) {
    //         let sheetData = data[prop].elements
    //         sheetDataObj[prop] = sheetData;
    //         sheetImgsToImgArr(sheetData);
    //     }

    //     console.log(sheetDataObj);
    //     console.log("finish_data_retrieval");
    //     callback();
    // }).catch(err => alert(err));

    for (const prop in LINK_OBJECTS) {
        Papa.parse(LINK_OBJECTS[prop], {
            download: true,
            header: true,
            complete: (rawData) => {
                let sheetData = rawData.data;
                console.log(sheetData);
                sheetDataObj[prop] = sheetData;
                sheetImgsToImgArr(sheetData);
                sheetsRetrievedCount++;
                finishedDataRetrieval(sheetsRetrievedCount, callback);
            }
        });
    }
}

const finishedDataRetrieval = (linksCount, callback) => {
    if (linksCount == NUM_LINKS) {
        console.log(sheetDataObj);
        console.log("finish_data_retrieval");
        callback();
    }
}

const sheetImgsToImgArr = (sheetData) => {
    for (let i = 0; i < sheetData.length; i++) {
        if (sheetData[i].images.length !== 0) {
            const imagesString = sheetData[i].images;
            sheetData[i].images = imagesString.split(";");
        }
    }
}

export const sheetDataToComp = (sheetData, Component, keyName) => {
    let idIndex = -1;
    console.log(sheetData);
    const comps = (sheetData.map(row => {
        idIndex++;
        return <Component key={idIndex} id={keyName + "-" + idIndex} {...row} />
    }));

    return comps;
};

// export const retrieveData = (callback) => {
//     getSheetData(DATA_LINKS, sheetData, 0, callback);

//     console.log(sheetData);
// }

// const getSheetData = (dataLinks, sheetData, i, callback) => {
//     if (i < dataLinks.length) {
//         Tabletop.init({
//             key: dataLinks[i],
//             simpleSheet: true
//         }).then(d => {
//             // console.log(d);
//             sheetData[i] = d;
//             sheetImgsToImgArr(d);
//             getSheetData(dataLinks, sheetData, i + 1, callback);
//         });
//     } else {
//         console.log("done_data_retrieval");
//         callback();
//     }
// }