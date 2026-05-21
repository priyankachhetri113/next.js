import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Contact <span className="text-cyan-400">TechNova</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Have a project idea or want to work with us? Feel free to contact
            our team anytime. We are always ready to help you build amazing
            digital experiences.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            
            <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-400">
                📍 Address
              </h2>
              <p className="text-gray-300 mt-2">
                Kathmandu, Nepal
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-400">
                📧 Email
              </h2>
              <p className="text-gray-300 mt-2">
                contact@technova.com
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-400">
                📞 Phone
              </h2>
              <p className="text-gray-300 mt-2">
                +977 9800000000
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">
          
          <h2 className="text-3xl font-bold mb-8 text-center">
            Send Message
          </h2>

          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:bg-cyan-300 hover:scale-105 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;