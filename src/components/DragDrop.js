import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import readFile from "./readFile";

const fileTypes = ["CSV"];

function DragDrop() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        readFile(file);
        setFile(file.toString());

    };
    return (
        <div>
            <div>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            </div>
            <div>
                {file}
            </div>
        </div>

    );
}

export default DragDrop;
