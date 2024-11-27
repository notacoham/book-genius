import React from 'react';
import { SiOpenaigym } from 'react-icons/si';
import { PiBookOpenTextDuotone } from 'react-icons/pi';
import ThemeToggle from './ThemeToggle';

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <PiBookOpenTextDuotone className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto">
        BookGeniusAI
      </h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
