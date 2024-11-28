import React, { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("English"); // Default language is English
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang.label);
    // Add any language-specific actions here, such as updating an i18n library
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-bold">
              MyApp
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Language Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              {language}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg w-32 hidden group-hover:block">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
