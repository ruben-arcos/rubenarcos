"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

// Define a type for the theme
type Theme = "light" | "dark";

// Define the ThemeSwitch component
export default function ThemeSwitch() {
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

  // Render the theme switch button
  return (
    <button
      className=" fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme} // Call toggleTheme function when the button is clicked
    >
      {/* Render sun or moon icon based on the current theme */}
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
