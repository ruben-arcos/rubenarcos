"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

// Define the ThemeSwitch component
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
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
