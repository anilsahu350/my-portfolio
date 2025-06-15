import React from "react";

const Navbar = () => {
  const sections = ["about", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 bg-[#0d081f] border-b border-gray-800 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 text-white">
        <h1 className="text-xl font-bold text-purple-500 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Anil Sahu
        </h1>
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="hover:text-purple-500 font-semibold"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

