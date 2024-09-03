// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-900 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center px-6 lg:px-8">
      <div className="text-2xl font-extrabold">My Portfolio</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;
