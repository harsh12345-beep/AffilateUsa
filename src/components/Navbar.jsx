import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1F3C88] to-[#1F3C88]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Vijayvergiya Law Group</div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6">
          {["Home", "About", "Services", "Blogs", "Career", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-[#CDAA7D] text-base font-medium"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="sm:hidden text-white hover:text-[#CDAA7D]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#1F3C88] text-white space-y-2 py-4 px-4">
          {["Home", "About", "Services", "Blogs", "Career", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block text-base font-medium hover:text-[#CDAA7D]"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
