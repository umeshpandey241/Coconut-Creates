import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 pb-12">
        <div className="flex flex-col items-start space-y-3">
          <img
            src="/images/WhatsApp Image 2025-08-02 at 11.19.27 PM.jpeg"
            alt="Coconut Logo"
            className="w-20 h-auto"
          />
          <h2 className="text-xl font-bold">CoconutCrafts</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sustainable accessories crafted from coconut shells.
            <br />
            Eco-friendly, stylish, and locally made.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="/" className="hover:text-lime-600">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-lime-600">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-lime-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-lime-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <div className="flex items-center text-sm text-gray-700 mb-2">
            <MdEmail className="mr-2 text-purple-600" />
            coconutcreates25@gmail.com
          </div>
          <div className="flex items-center text-sm text-gray-700 mb-2">
            <FaPhoneAlt className="mr-2 text-pink-600" />
            +91 8928296882
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-rose-600" />
            Mumbai, Maharashtra
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>
          <div className="w-full h-32 overflow-hidden rounded-xl border border-gray-300 shadow-md">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160983787!2d72.74109914769328!3d19.082522320558272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d1b8c5c4d%3A0x45e7ee0d81e44a96!2sMumbai!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CoconutCrafts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
