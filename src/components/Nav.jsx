"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Who We Are",
      path: "/about",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Our Commitment", path: "/commitment" },
      ],
    },
    {
      name: "What We Do",
      path: "/achievements",
      dropdown: [
        { name: "Our Achievements", path: "/achievements" },
        { name: "News & Updates", path: "/news" },
        { name: "Events", path: "/events" },
      ],
    },
    { name: "Get Involved!", path: "/get-involved" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-4 transform -translate-x-1/2 z-50 flex justify-end w-full transition-all duration-300 }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
  className={`relative px-6 py-3 mx-4 transition-all duration-300 
    ${isScrolled ? "shadow-lg" : ""} 
    bg-[#970303bb]/50 backdrop-blur-md border border-white/20
    ${isMobileMenuOpen ? "rounded-xl" : "rounded-full"}
  `}
>
        <div className="flex items-center justify-between max-w-container">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">H</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              HAAPNET
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`text-white hover:text-gray-200 transition-colors font-medium ${
                    location.pathname === item.path ? "text-gray-200" : ""
                  }`}
                >
                  {item.name}
                  {item.dropdown && <span className="ml-1">▾</span>}
                </Link>

                {item.dropdown && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 
                  bg-[#970303bb]/50 backdrop-blur-md border border-white/20 
                  rounded-lg shadow-lg opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200"
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 pt-4 border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  to={item.path}
                  className="block text-white hover:text-gray-200 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block text-white/80 hover:text-white transition-colors text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;
