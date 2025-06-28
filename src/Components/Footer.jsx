import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* 🔔 Email Strip */}
      <div className="bg-black text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          {/* Email input */}
          <div className="flex w-full md:w-3/4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500 placeholder-gray-500"
            />
            <button className="bg-[#4a1c08] px-5 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Main Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Boosty Bites</h2>
            <p className="text-sm text-gray-400">
              Whether you're a chocolate lover, health professional, or investor, we invite you to join us in shaping the future of chocolate—cleaner, smarter, and naturally delicious.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
              <li><a href="/terms&condition" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">
              📍 Corporate Office: 123 Cocoa Street, Chocolate City, Maharashtra, 400001, India
            </p>
            <p className="text-sm text-gray-400 mt-2">📞 +91-9876543210</p>
            <p className="text-sm text-gray-400 mt-2">📧 hello@chocolateco.com</p>
            <p className="text-sm text-gray-400 mt-2">🌐 www.chocolateco.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
          &copy; 2025 Boosty Bites. All rights reserved.
        </div>
      </footer>
    </>
  );
}
