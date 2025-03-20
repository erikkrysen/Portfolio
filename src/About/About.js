import React from 'react';
import Wrapper from '../components/Wrapper';
import './About.css'

function About() {
  return (
    <Wrapper wrapperStyle="image-background">
      <div className="content">
        <div className="textArea">
          <div className="aboutmetitle">ABOUT<br/>ME</div>
        </div>
        <div className="aboutmeinfo">
          <p>
              Hi, I&apos;m <strong>Erik Krysén</strong>! I&apos;m a <em>Software Developer / Virtual Reality Developer</em> and 
              I&apos;m currently studying my 5th and final year of Computer Science at Lund University.
          </p>
          <p>
              Outside of studies and work, I love exercise, design and photography.
          </p>
        </div>
        <div className="profil">
          <img src={require("../images/me.png")} alt="It's me!" className="profile-pic"/>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
