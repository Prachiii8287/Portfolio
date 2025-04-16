import React from 'react';
import Hero from './components/Hero';
import './index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './Achievements';
import Skills from './Skills';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <Skills/>
    <Projects/>
    <Achievements/>
    <Footer/>
    </>
    
  );
}

export default App;