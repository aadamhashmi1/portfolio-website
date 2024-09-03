// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="bg-gray-800 dark:bg-gray-900 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  </header>
);

export default Header;
