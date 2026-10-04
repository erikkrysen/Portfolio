import React from "react";
import './ProjList.css';
import ScrollingText from '../components/ScrollingText';
import Wrapper from './Wrapper';

const ProjList = () => {
return (
<Wrapper>
<div className="list">
    <ScrollingText scrollText="PROJECTS ▪ "/>
    <div className="projects">
        <figure className="projektinfo">
            <img src={require("../images/medventure.png")} alt=""/>
            <figcaption>MEDVENTURE</figcaption>
        </figure>
    </div>
</div>
</Wrapper>
  );
};

export default ProjList;
