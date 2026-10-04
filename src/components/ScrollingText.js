import React, { useEffect, useRef, useState } from "react";
import "./ScrollingText.css";

const SPEED = 80;

const ScrollingText = ({ scrollText }) => {
  const containerRef = useRef(null);
  const firstCopyRef = useRef(null);
  const [copies, setCopies] = useState(1);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const update = () => {
      const containerW = containerRef.current.offsetWidth;
      const textW = firstCopyRef.current.offsetWidth;
      if (!textW) return;
      const n = Math.ceil(containerW / textW);
      setCopies(n);
      setDuration((n * textW) / SPEED);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    ro.observe(firstCopyRef.current);
    return () => ro.disconnect();
  }, [scrollText]);

  const group = (hidden) => (
    <div
      className="group"
      style={{ animationDuration: `${duration}s` }}
      aria-hidden={hidden}
    >
      {Array.from({ length: copies }, (_, i) => (
        <span key={i} ref={!hidden && i === 0 ? firstCopyRef : null}>
          {scrollText}
        </span>
      ))}
    </div>
  );

  return (
    <>
      <hr />
      <div className="scrollContainer" ref={containerRef}>
        <div className="scroll">
          {group(false)}
          {group(true)}
        </div>
      </div>
      <hr />
    </>
  );
};

export default ScrollingText;