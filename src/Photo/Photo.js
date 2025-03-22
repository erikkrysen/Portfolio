import React from 'react';
import Wrapper from '../components/Wrapper';
import ScrollingText from '../components/ScrollingText';
import './Photo.css'

function Photo() {
  return (
    <Wrapper wrapperStyle="photo-background">
        <div className="container">
            <div className="indicator"></div>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={require("../images/redcar.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/field.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/greenhouse.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/hiking.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/infanta.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/kebnekaise.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/metro.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/parking.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/beach.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/roof.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/statue.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/sunset.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/swan.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/valencia.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/volvocars.jpg")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/water.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/window.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/about-bakgrund.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/jinx.png")} alt=""/>
                </div>
                <div className="gallery-item">
                    <img src={require("../images/train.jpg")} alt=""/>
                </div>
            </div>
        </div>
    </Wrapper>
  );
}

export default Photo;
