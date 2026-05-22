import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
            Send Message
          </button>

        </form>
      </div>

    </section>
  );
};

export default Contact;