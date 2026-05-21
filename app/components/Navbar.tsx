import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link href="/">
            <span className="text-blue-600">Tech</span>
            <span className="text-gray-900">Nova</span>
          </Link>
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/teams"
              className="hover:text-blue-600 transition duration-300"
            >
              Teams
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;