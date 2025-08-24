import React from 'react'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", index: "1"},
    { href: "#about", label: "About", index: "2" },
    { href: "#skills", label: "Skills", index: "3"},
    { href: "#projects", label: "Projects", index: "4"},
    { href: "#contact", label: "Contact", index: "5"},
  ];

  return (
    <nav
    className="fixed min-w-screen m-0 p-0 bg-[var(--bg-dark)] z-50"
    >
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--highlight-color)] font-grotesk">Reda . Abanouas</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 md:text-sm lg:text-lg text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--highlight-color)] transition-colors duration-200 font-mono"
            >
            <span className="text-[var(--highlight-color)]">{item.index}.</span>
            {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-100 transition-transform duration-200 p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} className="rotate-90" /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
