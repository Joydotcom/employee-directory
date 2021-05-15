import React from "react";
import "./style/wrapper.css";

function Wrapper ({ children }) {
    return (
        <div className="wrapper">
            { children }
    
        </div>
    );
}
export default Wrapper;
