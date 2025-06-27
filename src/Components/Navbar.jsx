import React, { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Imported for routing
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/home" },
    { label: "Services", href: "/home" },
    { label: "Contact", href: "/contact_us" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* ✅ Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="uppercase text-sm md:text-base text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ✅ Search & User icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-700 hover:text-blue-600">
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* ✅ Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-semibold text-blue-700">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="uppercase block py-2 text-sm md:text-base font-medium text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}

          {/* ✅ Search & User in mobile view */}
          <div className="flex gap-4 pt-4 border-t">
            <button className="text-gray-700 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-blue-600">
              <User className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* ✅ Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
