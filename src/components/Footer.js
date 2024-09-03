// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-6 lg:px-8">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-twitter fa-lg"></i> {/* FontAwesome icon for Twitter */}
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <i className="fab fa-linkedin fa-lg"></i> {/* FontAwesome icon for LinkedIn */}
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white">
            <i className="fas fa-envelope fa-lg"></i> {/* FontAwesome icon for Email */}
          </a>
        </div>
        <div className="text-sm">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link> &bull; 
          <Link to="/terms-of-service" className="text-gray-400 hover:text-white"> Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
