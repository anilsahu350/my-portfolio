import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-[#0d081f] text-gray-500 border-t border-gray-800">
      © {new Date().getFullYear()} Anil Sahu. All rights reserved.
    </footer>
  );
};

export default Footer;
