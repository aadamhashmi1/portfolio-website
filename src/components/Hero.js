// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-600 dark:bg-blue-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl">A Passionate Web Developer</p>
      </div>
    </section>
  );
}

export default Hero;
