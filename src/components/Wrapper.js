import React, { useEffect, useRef } from "react";
import './Wrapper.css';

const STYLES = ["normal-background", "about-background", "photo-background"];

const Wrapper = ({ wrapperStyle, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const update = () => {
      el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
    };
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const checkWrapperStyle = STYLES.includes(wrapperStyle) ? wrapperStyle : STYLES[0];
  return <div ref={ref} className={`wrapper ${checkWrapperStyle}`} >{children}</div>;
};

export default Wrapper;
