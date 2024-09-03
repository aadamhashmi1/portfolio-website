// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact Me</h2>
        <form className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg mb-2">Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg mb-2">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
