import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai"; // Import the WhatsApp icon

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm">
              BonDevOps specializes in creating beautiful, functional websites
              that drive results.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-white">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Contact Us
            </h3>
            <p className="text-gray-400 text-sm">Email: info@bondevops</p>
            <p className="text-gray-400 text-sm">Phone: +234-916-338-1375</p>
            <div className="flex space-x-4 mt-4">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/2349163381375?text=Welcome%20to%20Bondevops" // Replace with your WhatsApp number
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-white"
              >
                <AiOutlineWhatsApp size={20} />
              </a>

              {/* Add other social media icons here */}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; 2024 BonDevOps. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
