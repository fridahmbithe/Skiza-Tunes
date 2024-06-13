import React from 'react';

function Navbar() {
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-black font-bold text-xl">
          My App
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/about"
              className="text-black-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/features"
              className="text-black-400 hover:text-white transition-colors duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-black-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;