// src/components/About.js
import React from 'react';

function About() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p>I am a web developer with a passion for building interactive and user-friendly websites...</p>
        </div>
      </div>
    </section>
  );
}

export default About;
