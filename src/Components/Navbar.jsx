import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();

  return (
    <nav className="bg-white-700 text-black px-4 py-3 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src="/images/WhatsApp Image 2025-08-02 at 11.19.27 PM.jpeg"
            alt="Logo"
            className="h-30 w-30"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="/" className="hover:text-lime-300">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-lime-300">
              Products
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-lime-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-lime-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <ShoppingCart className="h-6 w-6" />
            {cartItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0}
              </span>
            )}
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-2 px-4 text-lg">
          <li>
            <Link to="/" className="block py-1 hover:text-lime-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="block py-1 hover:text-lime-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-1 hover:text-lime-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-1 hover:text-lime-300">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
