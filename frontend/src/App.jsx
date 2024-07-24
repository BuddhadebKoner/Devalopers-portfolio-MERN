import React, { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/constant.css";
import Index from "./pages/Index";
import { ThemeProvider } from "./context/Theme";

function App() {
   // Initialize themeMode from localStorage, defaulting to "dark"
   const [themeMode, setThemeMode] = useState(() => {
      return localStorage.getItem("themeMode") || "dark";
   });

   const darkTheme = () => {
      setThemeMode("dark");
   };
   const lightTheme = () => {
      setThemeMode("light");
   };

   useEffect(() => {
      // Update localStorage whenever themeMode changes
      localStorage.setItem("themeMode", themeMode);

      // Update the HTML class list
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
   }, [themeMode]);

   return (
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
         <Index />
      </ThemeProvider>
   );
}

export default App;
