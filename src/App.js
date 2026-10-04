import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjList from './components/ProjList';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Design from './Design/Design';
import Photo from './Photo/Photo'
import './App.css';

const FOLDERS = [
  ["home", Home],
  ["projects", ProjList],
  ["design", Design],
  ["photo", Photo],
  ["about", About],
  ["contact", Contact],
];

function App() {
  useEffect(() => {
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <>
      <Navbar/>
      {FOLDERS.map(([id, Folder]) => (
        <React.Fragment key={id}>
          <span id={id} className="anchor"/>
          <Folder/>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
