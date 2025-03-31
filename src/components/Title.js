import React from "react";
import './Title.css';

const STYLES = ["title", "aboutmetitle", "contacttitle", "designtitle"];

const Title = ({
topText,
bottomText,
titleStyle
}) => {
const checkTitleStyle = STYLES.includes(titleStyle) ? titleStyle : STYLES[0];
return (
    <>
      <div className={`${checkTitleStyle}`} >{topText}
        {bottomText && (
          <>
            <br />
            {bottomText}
          </>
        )}
      </div>
    </>
  );
};

export default Title;