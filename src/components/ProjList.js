import React, { forwardRef } from "react";
import './ProjList.css';

const ProjList = forwardRef((props, ref) => {
return (
<div id="projlist" ref={ref} className="list" {...props}>
    <hr/>
    <div className="container">
        <div className="scroll">
          <div className="RightToLeft">
            <p>PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ </p>
            <p>PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ PROJECTS ▪ </p>
          </div>
        </div>
      </div>
    <hr/>
    <div className="projects">
        <div className="projektinfo">
            <img src={require("../images/medventure.png")} alt="MedVenture"/>
        </div>
    </div>
</div>
  );
});

export default ProjList;