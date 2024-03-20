"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // State to manage the current theme, initialized to "light" by default
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      // If the current theme is light, switch to dark
      setTheme("dark");
      // Store the theme preference in local storage
      window.localStorage.setItem("theme", "dark");
      // Add 'dark' class to the root element (document.documentElement)
      document.documentElement.classList.add("dark");
    } else {
      // If the current theme is dark, switch to light
      setTheme("light");
      // Store the theme preference in local storage
      window.localStorage.setItem("theme", "light");
      // Remove 'dark' class from the root element (document.documentElement)
      document.documentElement.classList.remove("dark");
    }
  };

  // Effect to run when the component mounts (initialization)
  useEffect(() => {
    // Retrieve the theme preference from local storage
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      // If a theme preference is found in local storage, set the theme accordingly
      setTheme(localTheme);

      // If the theme is dark, add 'dark' class to the root element
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
       // If no theme preference is found in local storage, use system preference
      // If the system prefers dark mode, set the theme to dark and add 'dark' class
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
    // The empty dependency array ensures that this effect runs only once when the component mounts
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
