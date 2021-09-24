import React from 'react';
import "./Button.css";

const STYLE = ['btn_primary', 'btn_outline']

const SIZES = ['btn_medium', 'btn_large', 'btn_mobile', 'btn_wide']

const COLOR = ['primary', 'red', 'blue', 'green']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? 
    buttonStyle : STYLE[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? 
    buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? 
    buttonColor : null;

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}
         ${checkButtonColor}`} onClick={onClick} type={type}> {children} </button>
    )
}
