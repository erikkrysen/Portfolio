import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title'
import './Contact.css'

const SCATTER = [true, false, false, true, false, true];

const ScatterLetter = ({ front }) => (
  <svg className="scatterLetter" viewBox="0 0 300 200">
    <rect x="0.5" y="0.5" width="299" height="199"/>
    {front ? (
      <>
        <rect className="scatterStamp" x="250" y="16" width="34" height="42"/>
        <line x1="110" y1="96" x2="230" y2="96"/>
        <line x1="110" y1="116" x2="210" y2="116"/>
        <line x1="110" y1="136" x2="190" y2="136"/>
      </>
    ) : (
      <>
        <polyline points="0,0 150,112 300,0"/>
        <line x1="0" y1="200" x2="124" y2="93"/>
        <line x1="300" y1="200" x2="176" y2="93"/>
      </>
    )}
  </svg>
);

function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper wrapperStyle="photo-background">
      <div className="scatter" aria-hidden="true">
        {SCATTER.map((front, index) => <ScatterLetter key={index} front={front}/>)}
      </div>
      <div className="contactContent">
        <div className="contactTextArea">
          <Title topText="CONTACT" bottomText="ME" titleStyle="contacttitle"/>
        </div>
        <div className={open ? "mail mailOpen" : "mail"}>
          <div className="envelope">
            <div className="envBack"></div>
            <div className="envFlap">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="0,0 300,0 150,100"/>
              </svg>
              <span className="seal">EK</span>
            </div>
            <div className="letter">
              <p className="letterHead">ERIK KRYSÉN</p>
              <p>HI! YOU CAN REACH ME ON</p>
              <div className="letterLinks">
                <a href="https://www.linkedin.com/in/erik-krysén/">LINKEDIN</a>
                <a href="https://github.com/erikkrysen">GITHUB</a>
              </div>
              <p className="letterSign">ERIK</p>
            </div>
            <svg className="envPocket" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 150,112 300,0 300,200 0,200"/>
              <line x1="0" y1="200" x2="124" y2="93"/>
              <line x1="300" y1="200" x2="176" y2="93"/>
            </svg>
            <button
              type="button"
              className="envOpen"
              aria-label="Open the letter"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            ></button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
