import React from "react";
import { FaInstagramSquare, FaFacebook  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Logo</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare className="w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="w-6 h-6" />
      </a>
          
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
