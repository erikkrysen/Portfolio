import React from 'react';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title'
import './Contact.css'
import {Button} from '../components/Button'

function Contact() {
  return (
    <Wrapper>
      <div className="contactContent">
        <div className="contactTextArea">
          <Title topText="CONTACT" bottomText="ME" titleStyle="contacttitle"/>
        </div>
        <div className="contactButtonscontainer">
          <div className="buttons">
          <Button 
              buttonStyle="buttonCode" 
              to="https://www.linkedin.com/in/erik-krysén/"
              >
                  <div className="buttonText">
                    <div className="linkedin-container">
                      LINKEDIN
                      <img src={require("../images/linkedin-logo.png")} alt="LinkedIn Logo" className="linkedin-logo"></img>
                    </div>
                  </div>
          </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
