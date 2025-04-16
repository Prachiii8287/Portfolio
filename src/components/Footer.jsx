import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Portfolio</h2>
          <p className="text-sm text-gray-300 mb-4">
            Bringing creative ideas to life through clean code and thoughtful design.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/Prachiii8287" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prachi-sharma-988874293/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="mailto:prachiii0501@gmail.com" className="hover:text-gray-400">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p className="text-sm text-gray-300">prachiii0501@gmail.com</p>
          {/* <p className="text-sm text-gray-300">*****4567</p> */}
          {/* <p className="text-sm text-gray-300">123 Web Dev , Internet City</p> */}
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between text-sm text-gray-400">
          <p className="text-right md:text-left">&copy; 2025 Prachi Sharma. All rights reserved.</p>
          <div className="flex justify-end md:justify-start space-x-4 pt-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
