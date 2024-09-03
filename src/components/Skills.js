// src/components/Skills.js
import React from 'react';

function Skills() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <p className="text-gray-600">Experienced in modern JavaScript frameworks.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-600">Building dynamic and responsive web applications.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">CSS</h3>
            <p className="text-gray-600">Creating visually appealing styles and layouts.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">HTML</h3>
            <p className="text-gray-600">Structuring and organizing web content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
