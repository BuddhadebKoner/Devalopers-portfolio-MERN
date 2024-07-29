import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Themebtn from "./Themebtn";
import useTheme from "@/context/Theme";

export default function Navbar() {
   const location = useLocation();
   const { themeMode } = useTheme();

   const routeTitles = {
      "/post": "Buddhadeb - Post",
      "/aboutme": "Buddhadeb - About",
      "/explore": "Buddhadeb - Explore",
   };

   const currentTitle = routeTitles[location.pathname] || "Buddhadeb - Home";

   const linkClassName = ({ isActive }) =>
      `box-border text-[1.1rem] font-black py-[10px] px-[40px] rounded-[0_50px_0_50px] border-2 flex items-center justify-center ${
         isActive
            ? themeMode === "light"
               ? "bg-transparent border-primaryDarkBG text-primaryDarkBG"
               : "bg-transparent border-primaryLightBG text-primaryLightBG"
            : themeMode === "dark"
            ? "bg-primaryDarkFocus border-transparent text-lightTextColor"
            : "bg-primaryLightFocus border-transparent text-darkTextColor"
      }`;

   return (
      <>
         <Helmet>
            <title>{currentTitle}</title>
         </Helmet>
         <div
            className={`navbar_container fixed z-10 flex items-center justify-start w-full h-24 px-8  ${
               themeMode === "dark" ? "bg-primaryDarkBG" : "bg-primaryLightBG"
            }`}
         >
            <div className="flex items-center justify-center">
               <NavLink to="/" className={linkClassName}>
                  Home
               </NavLink>
            </div>
            <div className="navbar_container_links flex gap-5 ml-auto">
               <NavLink to="/post" className={linkClassName}>
                  POST
               </NavLink>
               <NavLink to="/aboutme" className={linkClassName}>
                  ABOUT ME
               </NavLink>
               <NavLink to="/explore" className={linkClassName}>
                  EXPLORE
               </NavLink>
               <Themebtn />
            </div>
         </div>
      </>
   );
}
