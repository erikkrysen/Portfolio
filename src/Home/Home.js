import React from "react";
import {Button} from '../components/Button';
import Title from '../components/Title';
import UnderContent from "../components/UnderContent";
import './Home.css';
import Wrapper from '../components/Wrapper';
import { galleryImages } from '../Photo/Photo';

const LISTING = [
  ["projects", "PROJECTS/", "1 FILE"],
  ["design", "DESIGN/", "3 FONTS, 3 COLOURS"],
  ["photo", "PHOTO/", `${galleryImages.length} FILES`],
  ["about", "ABOUT.TXT", "BIO"],
  ["contact", "CONTACT.TXT", "LINKEDIN"],
];

function Home() {
  return (
    <Wrapper>
      <div className="content">
        <div className="textArea">
            <Title topText="ERIK" bottomText="KRYSÉN"/>
        </div>
        <UnderContent string={"I'M A DESIGNER AND DEVELOPER BASED IN SWEDEN."}/>
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
                to="#design"
                >
                    <div className="buttonText">DESIGN</div>
            </Button>
            </div>
            <div className="buttons">
            <Button
                buttonStyle="buttonPhoto"
                to="#photo"
                >
                    <div className="buttonText">PHOTOGRAPHY</div>
            </Button>
            </div>
        </div>
      </div>
      <nav className="listing">
        <div className="listingRow">&gt; LS</div>
        {LISTING.map(([id, name, detail], index) => (
          <a key={id} href={`#${id}`} className="listingRow" style={{ "--i": index + 1 }}>
            <span>{name}</span>
            <span>{detail}</span>
          </a>
        ))}
      </nav>
    </Wrapper>
  );
}

export default Home;
