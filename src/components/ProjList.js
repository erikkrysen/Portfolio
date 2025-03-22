import React, { forwardRef } from "react";
import './ProjList.css';
import ScrollingText from '../components/ScrollingText';

const ProjList = forwardRef((props, ref) => {
return (
<div id="projlist" ref={ref} className="list" {...props}>
    <ScrollingText scrollText="PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ "/>
    <div className="projects">
        <div className="projektinfo">
            <img src={require("../images/medventure.png")} alt="MedVenture"/>
        </div>
    </div>
</div>
  );
});

export default ProjList;