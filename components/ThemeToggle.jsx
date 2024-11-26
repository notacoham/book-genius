'use client';

import React, { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  synthwave: 'synthwave',
  retro: 'retro',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.retro);

  const toggleTheme = () => {
    const newTheme = theme === themes.retro ? themes.synthwave : themes.retro;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-outline brn-sm">
      {theme === 'retro' ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
