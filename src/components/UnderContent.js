import React, { useEffect } from "react";
import Typed from "typed.js";
import './UnderContent.css';

const UnderContent = ({string}) => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["^200 "+ string],
      typeSpeed: 30,
      cursorChar: "▮",
      startDelay: 200,
    });
    return () => typed.destroy();
  }, [string]);

  return (
    <div className="undercontent">
        <div className="undercontent-intro">
            <h2>HI! <br /><span className="auto-type"></span> </h2>
        </div>
    </div>
  );
};

export default UnderContent;