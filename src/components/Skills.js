// src/components/Skills.js
import React from 'react';

function Skills() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border rounded shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="p-4 border rounded shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">React</h3>
          </div>
          <div className="p-4 border rounded shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="p-4 border rounded shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
