import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./Button.css";
import { Button } from "./Button";
import { scrollToTop, scrollToPosition } from "../js/scroll.js";
import { useScrollContext } from "../context/ScrollContext.js";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { activeSection } = useScrollContext();
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsClick = () => {
    if (location.pathname === "/") {
      scrollToPosition("ProjList");
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToPosition("ProjList");
      }, 100);
    }
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div onClick={scrollToTop} className="navname">ERIK KRYSÉN</div>
        {isPortrait && (
            <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        )}
      </div>
      <div className="nav-container">
        {!isPortrait && (
          <div className="nav">
            <Button buttonStyle={activeSection === "home" && location.pathname === "/" ? "buttonNavActive" : "buttonNav"} to=".." onClick={scrollToTop}>HOME</Button>
            <Button buttonStyle={activeSection === "projlist" && location.pathname === "/" ? "buttonNavActive" : "buttonNav"} to=".." onClick={projectsClick}>PROJECTS</Button>
            <Button buttonStyle={location.pathname === "/About" ? "buttonNavActive" : "buttonNav"} to="/About">ABOUT ME</Button>
            <Button buttonStyle={location.pathname === "/Contact" ? "buttonNavActive" : "buttonNav"} to="/Contact">CONTACT</Button>
          </div>
        )}
      </div>
      {isPortrait && menuOpen && (
        <div className="dropdown-nav">
          <Button 
            buttonStyle={activeSection === "home" && location.pathname === "/" ? "buttonNavActive" : "buttonNav"} 
            to=".." 
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            HOME
          </Button>
          <Button 
            buttonStyle={activeSection === "projlist" && location.pathname === "/" ? "buttonNavActive" : "buttonNav"} 
            to=".." 
            onClick={() => {
              projectsClick();
              setMenuOpen(false);
            }}
          >
            PROJECTS
          </Button>
          <Button 
            buttonStyle={location.pathname === "/About" ? "buttonNavActive" : "buttonNav"} 
            to="/About" 
            onClick={() => setMenuOpen(false)}
          >
            ABOUT ME
          </Button>
          <Button 
            buttonStyle={location.pathname === "/Contact" ? "buttonNavActive" : "buttonNav"} 
            to="/Contact" 
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
