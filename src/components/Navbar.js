import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
import './Button.css';
import {Button} from './Button';
import {scrollToTop,scrollToPosition} from '../js/scroll.js'
import { useScrollContext } from "../context/ScrollContext.js";

function Navbar(){
  const location = useLocation();
  const navigate = useNavigate();
  const { activeSection } = useScrollContext();

  const projectsClick = () => {
    if (location.pathname === "/") {
      scrollToPosition("ProjList");
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToPosition("ProjList");
      }, 100);
    }
  };
  
  return (
      <>
      <header>
          <div onClick={scrollToTop}className="navname">ERIK KRYSÉN</div>
          <div className="nav">
              <Button 
                buttonStyle={activeSection === "home" && location.pathname === "/" ? "buttonNavActive" : "buttonNav"}
                to=".."
                onClick={scrollToTop}
              >
                HOME
              </Button>
              <Button 
                buttonStyle={activeSection === "projlist" ? "buttonNavActive" : "buttonNav"}
                to=".."
                onClick={projectsClick}
              >
                PROJECTS
              </Button>
              <Button 
                buttonStyle={location.pathname === "/About" ? "buttonNavActive" : "buttonNav"}
                to="/About"
              >
                ABOUT ME
              </Button>
              <Button 
                buttonStyle={location.pathname === "/Contact" ? "buttonNavActive" : "buttonNav"}
                to="/Contact"
              >
                CONTACT
              </Button>
          </div>
      </header>
      </>
  )
}

export default Navbar