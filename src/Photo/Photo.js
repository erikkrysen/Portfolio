import React, { useState, useRef } from "react";
import Wrapper from "../components/Wrapper";
import "./Photo.css";

export const galleryImages = [
  ["redcar.jpg", "RED CAR"],
  ["field.jpg", "FIELD"],
  ["greenhouse.jpg", "GREENHOUSE"],
  ["hiking.jpg", "HIKING"],
  ["infanta.png", "INFANTA"],
  ["kebnekaise.jpg", "KEBNEKAISE"],
  ["metro.jpg", "METRO"],
  ["parking.jpg", "PARKING"],
  ["beach.png", "BEACH"],
  ["roof.png", "ROOF"],
  ["statue.png", "STATUE"],
  ["sunset.jpg", "SUNSET"],
  ["swan.png", "SWAN"],
  ["valencia.png", "VALENCIA"],
  ["volvocars.jpg", "VOLVO CARS"],
  ["water.png", "WATER"],
  ["window.png", "WINDOW"],
  ["about-bakgrund.png", "FOREST"],
  ["jinx.png", "JINX"],
  ["train.jpg", "TRAIN"],
];

function Photo() {
  const [openIndex, setOpenIndex] = useState(0);
  const indicatorRef = useRef(null);
  const galleryContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (galleryContainerRef.current && indicatorRef.current) {
      const containerRect = galleryContainerRef.current.getBoundingClientRect();
      indicatorRef.current.style.left = `${e.clientX - containerRect.left}px`;
    }
  };

  return (
    <Wrapper wrapperStyle="photo-background">
      <div
        className="photo-container"
        ref={galleryContainerRef}
        onMouseMove={handleMouseMove}
      >
        <div className="indicator" ref={indicatorRef}></div>
        <div className="gallery">
          {galleryImages.map(([image, label], index) => (
            <button
              key={image}
              type="button"
              className={index === openIndex ? "gallery-item gallery-itemOpen" : "gallery-item"}
              onMouseEnter={() => setOpenIndex(index)}
              onFocus={() => setOpenIndex(index)}
              onClick={() => setOpenIndex(index)}
            >
              <span className="spine">{label}</span>
              <img src={require(`../images/${image}`)} alt="" />
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Photo;
