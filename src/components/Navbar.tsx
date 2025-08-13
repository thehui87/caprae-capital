import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Caprae Capital
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 flex items-center">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
          <Link to="/login">
            <Button variant="solid" color="gray">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-teal-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 pb-4">
          <Link to="/" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <Button variant="solid" color="gray" className="w-full">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
