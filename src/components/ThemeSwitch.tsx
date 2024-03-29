'use client';

import { useCallback, useEffect, useState } from 'react';
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export function ThemeSwitch() {
  const [dark, setDark] = useState(true);

  const toggleTheme = useCallback(() => setDark((prev) => !prev), []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      className="text-text transition-all duration-200 p-2 rounded-md"
      onClick={toggleTheme}
    >
      {dark ? <RiMoonFill /> : <RiSunFill />}
    </button>
  );
}
