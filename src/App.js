import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { motion, useAnimation } from 'framer-motion';

import Home from './pages/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ImageGallery from './components/ImageGallery'; // Ensure this path is correct

const AnimatedRoutes = () => {
  const location = useLocation();
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: 0 }).then(() => controls.start({ opacity: 1 }));
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </Routes>
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;