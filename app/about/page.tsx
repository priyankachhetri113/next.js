import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team Work"
            className="rounded-3xl shadow-2xl w-full max-w-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            About <span className="text-blue-600">TechNova</span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            TechNova is a modern IT company focused on creating innovative
            digital solutions for businesses around the world. We specialize in
            web development, UI/UX design, mobile applications, and cloud-based
            technologies.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our mission is to help startups and companies grow faster with
            powerful technology and beautiful user experiences. We believe in
            creativity, teamwork, and delivering high-quality products that
            make a real impact.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            
            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <h2 className="text-3xl font-bold text-blue-600">5+</h2>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <h2 className="text-3xl font-bold text-blue-600">100+</h2>
              <p className="text-gray-600 mt-2">Projects Done</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <h2 className="text-3xl font-bold text-blue-600">50+</h2>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;