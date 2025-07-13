import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-[#00B5B8] font-bold text-xl">Kartik.dev</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium ${
                location.pathname === path
                  ? "text-[#00B5B8]"
                  : "text-gray-700 hover:text-[#00B5B8]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`font-medium ${
                location.pathname === path
                  ? "text-[#00B5B8]"
                  : "text-gray-700 hover:text-[#00B5B8]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
