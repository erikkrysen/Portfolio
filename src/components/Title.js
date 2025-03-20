import React from "react";
import './Title.css';

const Title = ({
topText,
bottomText
}) => {
return (
    <>
        <div className="title">{topText}<br />{bottomText}</div>
    </>
  );
};

export default Title;