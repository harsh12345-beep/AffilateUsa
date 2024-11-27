import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1F3C88] to-[#1F3C88]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#CDAA7D] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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

          {/* Logo (Centering in Mobile View) */}
          <div className="flex flex-1 sm:flex-none items-center justify-center sm:justify-start">
            <div className="text-white text-xl font-bold">Vijayvergiya Law Group</div>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {["Home", "About", "Services", "Blogs", "Career", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#CDAA7D] hover:text-black"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="bg-[#1F3C88] text-white space-y-1 px-2 pt-2 pb-3">
            {["Home", "About", "Services", "Blogs", "Career", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#CDAA7D] hover:text-black"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
