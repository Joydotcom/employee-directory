import React, { Component } from "react";
import "../style/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <h1> Employee Directory</h1>
            <p> Click to flip through or search.</p>
            </div>
        )
    }
};