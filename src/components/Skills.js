// src/components/Skills.js
import React from 'react';

function Skills() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border rounded-lg shadow-md dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <p className="text-gray-600 dark:text-gray-400">Experienced in building dynamic and interactive web applications with JavaScript. Proficient in modern ES6+ features and asynchronous programming.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-600 dark:text-gray-400">Skilled in creating single-page applications using React. Knowledgeable in component-based architecture, state management, and hooks.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">CSS</h3>
            <p className="text-gray-600 dark:text-gray-400">Proficient in styling web pages with CSS. Experienced in responsive design, Flexbox, Grid, and preprocessors like SASS.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">HTML</h3>
            <p className="text-gray-600 dark:text-gray-400">Solid understanding of HTML5. Capable of creating semantic and accessible markup to enhance user experience and SEO.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
