import React from 'react';

const TopBar = () => {
  const languages = ['English', 'Español', 'Français', 'Deutsch', 'हिन्दी'];

  return (
    <div className="border-gray-200  text-white flex justify-center items-center py-2">
      <p className="mr-3">🌐 Select Language:</p>
      <select
        className="bg-gray-700 text-white rounded px-2 py-1 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopBar;
