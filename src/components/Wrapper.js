import React from "react";
import './Wrapper.css';

const STYLES = ["normal-background", "about-background", "photo-background"];

const Wrapper = ({ wrapperStyle, children }) => {
  
  const checkWrapperStyle = STYLES.includes(wrapperStyle) ? wrapperStyle : STYLES[0];
  return <div className={`wrapper ${checkWrapperStyle}`} >{children}</div>;
};

export default Wrapper;