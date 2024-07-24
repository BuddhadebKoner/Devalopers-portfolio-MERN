import React from "react";
import useTheme from "@/context/Theme";
import assets from "@/assets/assets";

export default function Themebtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? darkTheme() : lightTheme();
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />

      {/* Sun icon */}
      <img
        src={assets.lightMode} 
        alt="Sun icon for light mode"
        className={`swap-off h-10 w-10 ${themeMode === "dark" ? "hidden" : "block"}`}
      />

      {/* Moon icon */}
      <img
        src={assets.darkMode} 
        alt="Moon icon for dark mode"
        className={`swap-on h-10 w-10 ${themeMode === "dark" ? "block" : "hidden"}`}
      />
    </label>
  );
}
