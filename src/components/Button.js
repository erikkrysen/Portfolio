import React from 'react';
import './Button.css';

const STYLES = ["buttonNav", "buttonNavActive", "buttonCode", "buttonDesign", "buttonPhoto"];

export const Button = ({
    children,
    type,
    onClick,
    to,
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    return (
        <a href={to}>
          <button 
            className={`${checkButtonStyle}`} 
            type={type} 
            onClick={onClick}
          >
            {children}
          </button>
        </a>
    )
}