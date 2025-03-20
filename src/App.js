import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Design from './Design/Design';
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
          </Routes>
      </Router>
    </ScrollProvider>
  );
}

export default App;
