import React, { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/constant.css";
import Index from "./pages/Index";
import { ThemeProvider } from "./context/Theme";

function App() {
   const [themeMode, setThemeMode] = useState("dark");

   const darkTheme = () => {
      setThemeMode("dark");
   };
   const lightTheme = () => {
      setThemeMode("light");
   };

   // theme change function

   useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
   }, [themeMode]);

   return (
      <>
         <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
            <Index />
         </ThemeProvider>
      </>
   );
}

export default App;
