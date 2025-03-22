import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Design from './Design/Design';
import Photo from './Photo/Photo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ScrollProvider } from "./context/ScrollContext";
import './App.css';

function App() {
  return (
    <ScrollProvider>
      <Router>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Design" element={<Design/>} />
            <Route path="/Photo" element={<Photo/>} />
          </Routes>
      </Router>
    </ScrollProvider>
  );
}

export default App;
