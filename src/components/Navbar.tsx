import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { twMerge } from 'tailwind-merge';

export function Navbar() {
  return (
    <nav className="flex justify-between lg:justify-around items-center py-5 px-4 lg:px-0">
      <h3
        className={twMerge(
          'p-2',
          'text-text font-bold text-xl',
          'transition-colors duration-200',
          'hover:text-accent hover:cursor-pointer'
        )}
      >
        Mrlion
      </h3>
      <ThemeSwitch />
    </nav>
  );
}
