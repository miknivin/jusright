"use client";

import { useEffect } from "react";

const ThemeAndLayoutWrapper = ({ children }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      if (mediaQuery.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    applyTheme();
    document.body.classList.add("it-consulting");

    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
      document.body.classList.remove("dark");
      document.body.classList.remove("it-consulting");
    };
  }, []);

  return <>{children}</>;
};

export default ThemeAndLayoutWrapper;
