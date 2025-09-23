"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
      className="fixed top-4 z-50 flex justify-center w-full transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative px-6 py-3 mx-6 w-full max-w-6xl transition-all duration-300 bg-[#970303bb]
          ${isScrolled ? "shadow-lg bg-[#970303bb]/50" : ""}
          backdrop-blur-md border border-white/20
          ${isMobileMenuOpen ? "rounded-xl" : "rounded-full"}
        `}
      >
        <div className="flex items-center justify-between max-w-full">
          {/* Logo - slightly smaller */}
          <Link href="/" className="flex items-center space-x-2 mr-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#970303] font-bold text-lg">H</span>
            </div>
          </Link>

          {/* Desktop Menu - reduced spacing */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className={`relative text-white font-medium transition-colors text-sm
                    ${(pathname === '/' && item.path === '/') || pathname.startsWith(item.path)
                      ? 'text-gray-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300'
                      : 'hover:text-gray-200'
                    }`}
                >
                  {item.name}
                  {item.dropdown && <span className="ml-1">▾</span>}
                </Link>

                {item.dropdown && (
                  <div
                    className="absolute top-full left-0 mt-2 w-44
                      bg-[#970303bb]/50 backdrop-blur-md border border-white/20
                      rounded-lg shadow-lg opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200"
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.path}
                          className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
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

          {/* Mobile Menu Button - smaller */}
          <button
            className="lg:hidden text-white p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
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
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 mt-3 pt-3 border-t border-white/20 w-[92%]
            bg-[#970303bb]/50 backdrop-blur-md rounded-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <div key={item.name} className="py-1.5 px-5">
              <Link
                href={item.path}
                className="block text-white hover:text-gray-200 transition-colors font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="ml-3 mt-1.5 space-y-1">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.path}
                      className="block text-white/80 hover:text-white transition-colors text-xs"
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
    </motion.nav>
  );
};

export default Nav;