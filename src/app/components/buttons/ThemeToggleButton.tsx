import React from 'react';
import { useTheme } from '@/context/ThemeContext'; // Adjust the import path accordingly

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md shadow-md border ${
        theme === "light" ? "bg-[var(--background-light)] border-gray-300" : "bg-[var(--background-dark)] border-gray-500"
      }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggleButton;