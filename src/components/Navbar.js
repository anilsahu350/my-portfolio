import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-[#0d081f] border-b border-gray-800 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 text-white">
        <h1 className="text-xl font-bold text-purple-500">Anil Sahu</h1>
        <ul className="flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
