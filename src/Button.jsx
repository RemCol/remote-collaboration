import React from "react";
import "./button.css";

export const Button = ({children, type, OnClick , buttonStyle, buttonSize}) => {

return (
    <button onClick={onclick} type={type}>
        {children}
    </button>
)
};