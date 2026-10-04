import React from 'react';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title'
import './About.css'

function About() {
  return (
    <Wrapper wrapperStyle="about-background">
      <div className="aboutContent">
        <div className="aboutTextArea">
          <Title topText="ABOUT" bottomText="ME" titleStyle="aboutmetitle"/>
        </div>
        <div className="aboutmeinfo">
          <p>
              Hi, I&apos;m <strong>Erik Krysén</strong>! I&apos;m a <em>Software Developer / Virtual Reality Developer</em>.
          </p>
          <p>
              Outside of work, I love exercise, design and photography.
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
