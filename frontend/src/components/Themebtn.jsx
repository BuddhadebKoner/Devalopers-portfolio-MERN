import React from "react";
import useTheme from "@/context/Theme";

export default function Themebtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? darkTheme() : lightTheme();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className={`w-11 h-6 rounded-full peer-focus:outline-none peer-focus:ring-4 ${themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"} peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600`}>
        <div className={`absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform ${themeMode === "dark" ? "translate-x-full border-white" : "border-gray-300"} after:content-['']`}></div>
      </div>
    </label>
  );
}
