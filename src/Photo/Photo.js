import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../components/Wrapper";
import "./Photo.css";

function Photo() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const indicatorRef = useRef(null);
  const galleryContainerRef = useRef(null);

  const defaultItemFlex = "0 1 20px";
  const hoverItemFlex = "1 1 40vw";

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseMove = (e) => {
    if (galleryContainerRef.current && indicatorRef.current) {
      const containerRect = galleryContainerRef.current.getBoundingClientRect();
      indicatorRef.current.style.left = `${e.clientX - containerRect.left}px`;
    }
  };

  useEffect(() => {
    setHoveredIndex(0);
  }, []);

  const galleryImages = [
    "redcar.jpg",
    "field.jpg",
    "greenhouse.jpg",
    "hiking.jpg",
    "infanta.png",
    "kebnekaise.jpg",
    "metro.jpg",
    "parking.jpg",
    "beach.png",
    "roof.png",
    "statue.png",
    "sunset.jpg",
    "swan.png",
    "valencia.png",
    "volvocars.jpg",
    "water.png",
    "window.png",
    "about-bakgrund.png",
    "jinx.png",
    "train.jpg",
  ];

  return (
    <Wrapper wrapperStyle="photo-background">
      <div
        className="photo-container"
        ref={galleryContainerRef}
        onMouseMove={handleMouseMove}
      >
        <div className="indicator" ref={indicatorRef}></div>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{
                flex: hoveredIndex === index ? hoverItemFlex : defaultItemFlex,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <img src={require(`../images/${image}`)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Photo;
