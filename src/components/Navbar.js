import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const TABS = [
  ["home", "HOME"],
  ["projects", "PROJECTS"],
  ["design", "DESIGN"],
  ["photo", "PHOTO"],
  ["about", "ABOUT ME"],
  ["contact", "CONTACT"],
];

const DOCK = 56;
const TAB_HEIGHT = 50;

function Navbar() {
  const [active, setActive] = useState("home");
  const [incoming, setIncoming] = useState(null);
  const tabsRef = useRef(null);
  const riderRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const tops = TABS.map(([id]) => [id, document.getElementById(id).getBoundingClientRect().top]);

      setActive(tops.findLast(([, top]) => top <= DOCK)?.[0] ?? "home");

      const next = tops.find(([, top]) => top > DOCK && top < window.innerHeight);
      setIncoming(next?.[0] ?? null);
      if (next) {
        const slot = tabsRef.current.querySelector(`[href="#${next[0]}"]`);
        const left = slot.getBoundingClientRect().left;
        riderRef.current.style.transform = `translate(${left}px, ${next[1] - TAB_HEIGHT}px)`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const rail = tabsRef.current;
    const tab = rail.querySelector(".tabActive");
    const left = tab.offsetLeft - (rail.clientWidth - tab.offsetWidth) / 2;
    rail.scrollTo({ left });
  }, [active]);

  return (
    <header>
      <a href="#home" className="navname">ERIK KRYSÉN</a>
      <nav className="tabs" ref={tabsRef}>
        {TABS.map(([id, label], index) => (
          <a
            key={id}
            href={`#${id}`}
            className={id === active ? "tab tabActive" : "tab"}
            aria-current={id === active ? "true" : undefined}
            style={{ zIndex: id === active ? TABS.length + 1 : TABS.length - index, "--i": index }}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        ref={riderRef}
        href={`#${incoming}`}
        className="tab tabActive tabRider"
        aria-hidden="true"
        tabIndex={-1}
        style={{ visibility: incoming ? "visible" : "hidden" }}
      >
        {TABS.find(([id]) => id === incoming)?.[1]}
      </a>
    </header>
  );
}

export default Navbar;
