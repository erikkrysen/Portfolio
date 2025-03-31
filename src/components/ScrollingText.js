import React from "react";
import './ScrollingText.css';

const ScrollingText = ({scrollText}) => {
return (
    <>
    <hr/>
    <div className="scrollContainer">
        <div className="scroll">
          <div className="RightToLeft">
            <p>{scrollText}</p>
            <p>{scrollText}</p>
          </div>
        </div>
      </div>
    <hr/>
    </>
  );
};

export default ScrollingText;