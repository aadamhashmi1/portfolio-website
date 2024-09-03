// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center mt-2">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com" className="mx-2">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="mt-4">
          <Link to="/privacy-policy" className="text-gray-400 dark:text-gray-600 hover:text-white">Privacy Policy</Link> | 
          <Link to="/terms-of-service" className="text-gray-400 dark:text-gray-600 hover:text-white"> Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
