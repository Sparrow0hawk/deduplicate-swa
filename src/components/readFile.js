import React from "react";
import { csv } from "d3";

function readFile(fileObject) {
    // drag and drop returns a File object
    // we need to get a url to pass to d3.csv to read this file
    csv(URL.createObjectURL(fileObject))
        .then(function (data) {
            console.log(data[0]);
        }).catch(function (err) {
            console.log(err)
        });
}

export default readFile;
