import React, { useState, useEffect } from "react";
import { links } from "../data";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      id="nav-bar"
      style={style}
      className={`select-none  navbar fixed top-0 w-full z-50 ransition-all duration-300 ${
        isScrolled ? "bg-blue-800 border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 py-6 flex items-center justify-between">
        <h1 className="text-emerald-500 text-3xl font-bold">
          <span className="text-emerald-500">@</span>Bon
          <span className="text-slate-50">Devops</span>
        </h1>
        {isOpen ? (
          <FaTimes
            className="lg:hidden text-2xl text-slate-50 cursor-pointer z-50"
            onClick={toggleMenu}
          />
        ) : (
          <FaBars
            className="lg:hidden text-2xl text-slate-50 cursor-pointer z-50"
            onClick={toggleMenu}
          />
        )}
        <div
          className={`fixed inset-0 z-40 bg-blue-800 transition-transform duration-500 ease-in-out 
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:flex lg:flex-row lg:items-center lg:bg-transparent `}
        >
          <div className="flex flex-col items-center w-full lg:flex-row lg:items-center lg:w-full lg:justify-start">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize font-bold text-gray-50 text-lg tracking-wide
          hover:text-sky-600 duration-200 py-4 px-6 lg:py-0 lg:px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
        {/* Overlay for closing the menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30" // Lower z-index than the X icon
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
