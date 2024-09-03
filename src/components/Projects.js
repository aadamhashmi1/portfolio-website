// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application built with React.',
      image: 'path-to-image', // Update with actual image paths
      link: 'https://github.com/your-username/project-one'
    },
    {
      title: 'Project Two',
      description: 'Another cool project using Tailwind CSS.',
      image: 'path-to-image', // Update with actual image paths
      link: 'https://github.com/your-username/project-two'
    },
    // Add more projects
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden dark:border-gray-700">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 dark:text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
