"use client";

import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUserOverride, setIsUserOverride] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("theme");

    const applyTheme = (dark) => {
      setIsDarkMode(dark);
      document.body.classList.toggle("dark", dark);
    };

    // 1. Apply saved preference if exists
    if (savedTheme === "dark" || savedTheme === "light") {
      applyTheme(savedTheme === "dark");
      setIsUserOverride(true);
      console.log(savedTheme, "saved");
    } else {
      console.log("system theme");

      // 2. Otherwise follow system theme
      applyTheme(mediaQuery.matches);
    }

    // 3. React to system theme changes only if no user override
    const handleSystemChange = (e) => {
      if (!isUserOverride) {
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [isUserOverride]);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;

    setIsDarkMode(newDarkMode);
    setIsUserOverride(true);

    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <div
      className={`tt-style-switch ${isDarkMode ? "index-dark" : ""}`}
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
    >
      <i
        className={`bi ${
          isDarkMode ? "bi-brightness-low-fill" : "bi-moon-fill"
        }`}
      />
    </div>
  );
};

export default ThemeSwitch;
