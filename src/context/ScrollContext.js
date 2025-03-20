import React, { createContext, useState, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
