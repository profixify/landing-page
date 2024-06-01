"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleAction = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <a className="text-xl" onClick={toggleAction}>
        {theme === "dark" ? <PiSunDuotone /> : <PiMoonDuotone />}
      </a>
    </>
  );
};
