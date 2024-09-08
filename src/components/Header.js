import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="bg-gray-800 dark:bg-gray-900 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <Link to="/gallery" className="hover:underline">Image Gallery</Link>
        <ThemeToggle /> {/* Moon/Sun toggle button */}
      </div>
    </nav>
  </header>
);

export default Header;