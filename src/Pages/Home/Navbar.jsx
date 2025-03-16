import React, { useState } from 'react';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0); // Cart count state
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const handleCartClick = () => {
    alert('Go to the cart page!');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" p-3 bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 text-white">
      <div className="container flex justify-between items-center">

     
      <div className="logo">
        <h2 className="text-2xl font-bold">My Shop</h2>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#home" className="text-lg hover:text-gray-200">Home</a></li>
        <li><a href="#shop" className="text-lg hover:text-gray-200">Shop</a></li>
        <li><a href="#about" className="text-lg hover:text-gray-200">About</a></li>
        <li><a href="#contact" className="text-lg hover:text-gray-200">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle Button (aligned to the right) */}
      <div 
        className="md:hidden flex items-center ml-auto" 
        onClick={toggleMenu}
      >
        <span className="text-2xl">☰</span>
      </div>

      {/* Cart Icon (Now White) */}
      <div 
        className="flex items-center cursor-pointer"
        onClick={handleCartClick}
      >
        <span className="text-2xl text-white mr-2">🛒</span> {/* Set icon color to white */}
        <span 
          className="text-sm bg-red-500 text-white rounded-full px-2 py-1"
        >
          {cartCount}
        </span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 text-white p-4 space-y-4">
          <li><a href="#home" className="text-lg hover:text-gray-200">Home</a></li>
          <li><a href="#shop" className="text-lg hover:text-gray-200">Shop</a></li>
          <li><a href="#about" className="text-lg hover:text-gray-200">About</a></li>
          <li><a href="#contact" className="text-lg hover:text-gray-200">Contact</a></li>
        </ul>
      )}
       </div>
    </nav>
  );
};

export default Navbar;
