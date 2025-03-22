import React from 'react';
import Wrapper from '../components/Wrapper';
import ScrollingText from '../components/ScrollingText';
import './Design.css'

function Design() {
  return (
    <Wrapper>
      <div className="designContent">
        <div className="designTextArea">
          <div className="designTitle">DESIGN</div>
        </div>
      </div>
      <div>
        <ScrollingText scrollText={"FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ FONTS ▪ "}/>
      </div>
      <div className="fontSection">
        <div className="fontTextOutward">Outward</div>
        <hr/>
        <div className="fontTextKarrik">Karrik</div>
        <hr/>
        <div className="fontTextBebas">Bebas Neue</div>
      </div>
      <div>
        <ScrollingText scrollText="COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ COLORS ▪ "/>
      </div>
      <div className="colorSection">
        <div className="highlight">
          <div className="colorText">#BF4342</div>
        </div>
        <div className="light">
          <div className="colorText">#fff7f0</div>
        </div>
        <div className="dark">
          <div className="colorTextLight">#262523</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Design;
