import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", index: "1" },
    { href: "#about", label: "About", index: "2" },
    { href: "#skills", label: "Skills", index: "3" },
    { href: "#projects", label: "Projects", index: "4" },
    { href: "#contact", label: "Contact", index: "5" },
  ];

  return (
    <nav className="fixed min-w-screen m-0 p-0 bg-nav z-30">
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--highlight-color)] font-grotesk">
          Reda . Abanouas
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 md:text-sm lg:text-lg text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--highlight-color)] transition-colors duration-200 font-mono"
            >
              <span className="text-[var(--highlight-color)]">
                {item.index}.
              </span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-100 transition-transform duration-200 p-2 rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-dark shadow-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col px-8 py-16 space-y-8 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-gray-300 hover:text-[var(--highlight-color)] transition-colors"
        >
          <X size={32} />
        </button>

        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-gray-200 hover:text-[var(--highlight-color)] transition-colors duration-200 text-lg font-mono"
          >
            <span className="text-[var(--highlight-color)] mr-2">
              {item.index}.
            </span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
