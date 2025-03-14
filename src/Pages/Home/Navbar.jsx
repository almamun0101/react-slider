import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
