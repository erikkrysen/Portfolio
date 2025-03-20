import React, { useEffect, useRef } from "react";
import {Button} from '../components/Button';
import Title from '../components/Title';
import UnderContent from "../components/UnderContent";
import './Home.css';
import '../components/Button.css';
import Wrapper from '../components/Wrapper';
import ProjList from '../components/ProjList';
import { useScrollContext } from "../context/ScrollContext";

function Home() {
  const { setActiveSection } = useScrollContext();
  const projectsRef = useRef(null);

  useEffect(() => {
    const currentProjRef = projectsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setActiveSection("projlist");
        } else {
          setActiveSection("home");
        }
      },
      { threshold: 0.5 }
    );

    if (currentProjRef) {
      observer.observe(currentProjRef);
    }

    return () => {
      if (currentProjRef) {
        observer.unobserve(currentProjRef);
      }
    };
  }, [setActiveSection]);

  return (
    <Wrapper>
      <div className="content">
        <div className="textArea">
            <Title topText="ERIK" bottomText="KRYSÉN"/>
        </div>
        <UnderContent string="I'M A DESIGNER AND DEVELOPER BASED IN SWEDEN."/>
        <div className="buttonscontainer">
            <div className="buttons">
            <Button 
                buttonStyle="buttonCode" 
                to="https://github.com/erikkrysen"
                >
                    <div className="buttonText">CODE</div>
            </Button>
            </div>
            <div className="buttons">
            <Button 
                buttonStyle="buttonDesign" 
                to="/Design"
                >
                    <div className="buttonText">DESIGN</div>
            </Button>
            </div>
            <div className="buttons">
            <Button 
                buttonStyle="buttonPhoto" 
                to=".."
                >
                    <div className="buttonText">PHOTOGRAPHY</div>
            </Button>
            </div>
        </div>
      </div>
      <ProjList id="projlist" ref={projectsRef}/>
    </Wrapper>
  );
}

export default Home;
