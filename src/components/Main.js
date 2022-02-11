import React from "react";
import DragDrop from "./DragDrop";

const Main = () => {
    const value = 'World';
    return (
        <div>
            Hello {value}
            <DragDrop />
        </div>
    )
}

export default Main;
