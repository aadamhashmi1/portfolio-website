// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => ( 
    
    <div>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );

export default Home;
