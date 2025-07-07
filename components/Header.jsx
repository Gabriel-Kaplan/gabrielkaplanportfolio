"use client";
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="p-6 shadow-md flex justify-between items-center bg-black">
      {/* Left Dropdown Button */}
      <div className="relative">
        <button 
          className="text-white px-4 py-2 bg-tranparent rounded-xl hover:bg-blue-900"
          onClick={toggleDropdown}
        >
          Menu
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded shadow-lg">
            <a href="#about" className="block px-4 py-2 hover:bg-blue-600">About</a>
            <a href="#projects" className="block px-4 py-2 hover:bg-blue-600">Projects</a>
            <a href="#skills" className="block px-4 py-2 hover:bg-blue-600">Skills</a>
            <a href="#timeline" className="block px-4 py-2 hover:bg-blue-600">Timeline</a>
            <a href="#testimonials" className="block px-4 py-2 hover:bg-blue-600">Testimonials</a>
          </div>
        )}
      </div>

      {/* Logo in the center */}
      <div className="flex-grow text-center">
        <h1 className="text-2xl font-bold text-white">Gabriel Kaplan</h1>
      </div>

      {/* Right Contact Link */}
      <div>
        <a 
          href="#contact" 
          className="text-white px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}