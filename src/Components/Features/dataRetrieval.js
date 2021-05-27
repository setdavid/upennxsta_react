import React from "react";
import Tabletop from "tabletop";

const SHEET_DATA_LINK = "1m1OPqUlB0hkNJHgV7YlH_7fuICKgPBAb75wUX-R_gk0";

//[0: WWD_Conferences, 1: WWD_Publications, 2: WWD_Other_Works, 3: Recent_Updates]
export let sheetDataObj = {};

export const retrieveData = (callback) => {
    console.log("start_data_retrieval");

    Tabletop.init({
        key: SHEET_DATA_LINK,
        simpleSheet: false
    }).then(data => {
        console.log(data);

        for (const prop in data) {
            let sheetData = data[prop].elements
            sheetDataObj[prop] = sheetData;
            sheetImgsToImgArr(sheetData);
        }

        console.log(sheetDataObj);
        console.log("finish_data_retrieval");
        callback();
    }).catch(err => alert(err));



}

const sheetImgsToImgArr = (sheetData) => {
    sheetData.forEach((row) => {
        if (row.images.length !== 0) {
            const imagesString = row.images;
            row.images = imagesString.split(";");
        }
    });
}

export const sheetDataToComp = (sheetData, Component, keyName) => {
    let idIndex = -1;
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