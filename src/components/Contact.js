// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
