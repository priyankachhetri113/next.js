import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Build Your Future With{" "}
            <span className="text-cyan-400">TechNova</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We create beautiful websites, modern applications, and smart
            digital solutions that help businesses grow faster in the online
            world.
          </p>

          {/* Buttons */}
          <div className="flex gap-5">
            <Link
              href="/about"
              className="bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-cyan-300 hover:scale-105 transition duration-300 shadow-xl"
            >
              Explore More
            </Link>

            <Link
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Technology"
            className="rounded-3xl shadow-2xl w-full max-w-lg hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        
        <h2 className="text-4xl font-bold text-center mb-14">
          Our <span className="text-cyan-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Web Development
            </h3>

            <p className="text-gray-300">
              Modern responsive websites using the latest technologies and best
              UI/UX practices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              App Development
            </h3>

            <p className="text-gray-300">
              Powerful mobile and web applications designed for performance and
              scalability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              UI/UX Design
            </h3>

            <p className="text-gray-300">
              Beautiful and user-friendly designs that improve customer
              experience and engagement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}