import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ImageGallery from './components/ImageGallery'; // Ensure this path is correct

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<ImageGallery />} /> {/* Add the ImageGallery route */}
    </Routes>
  </Router>
);

export default App;