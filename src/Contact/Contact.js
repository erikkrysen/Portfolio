import React from 'react';
import Wrapper from '../components/Wrapper';
import './Contact.css'
import {Button} from '../components/Button'

function Contact() {
  return (
    <Wrapper>
      <div className="content">
        <div className="textArea">
          <div className="contactTitle">CONTACT<br/>ME</div>
        </div>
        <div className="buttonscontainer">
          <div className="buttons">
          <Button 
              buttonStyle="buttonCode" 
              to="https://www.linkedin.com/in/erik-krysén/"
              >
                  <div className="buttonText">
                    <div className="linkedin-container">
                      LINKEDIN
                      <img src={require("../images/linkedin-logo.png")} alt="LinkedIn Logo" class="linkedin-logo"></img>
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
