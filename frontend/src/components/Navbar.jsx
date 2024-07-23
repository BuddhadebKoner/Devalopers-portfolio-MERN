import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import assets from "../assets/assets";
import { Helmet } from "react-helmet";

export default function Navbar() {
   const location = useLocation();
   const routeTitles = {
      "/post": "Buddhadeb - Post",
      "/aboutme": "Buddhadeb - About",
      "/explore": "Buddhadeb - Explore",
   };

   const currentTitle = routeTitles[location.pathname] || "Buddhadeb - Home";

   return (
      <>
         <Helmet>
            <title>{currentTitle}</title>
         </Helmet>
         <div className="navbar_container">
            <div className="navbar_container_home">
               <NavLink
                  to=""
                  className={({ isActive }) =>
                     isActive
                        ? "primary_button_style active"
                        : "primary_button_style"
                  }
               >
                  HOME
               </NavLink>
            </div>
            <div className="navbar_container_links">
               <NavLink
                  to="/post"
                  className={({ isActive }) =>
                     isActive
                        ? "primary_button_style active"
                        : "primary_button_style"
                  }
               >
                  POST
               </NavLink>
               <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                     isActive
                        ? "primary_button_style active"
                        : "primary_button_style"
                  }
               >
                  ABOUT ME
               </NavLink>
               <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                     isActive
                        ? "primary_button_style active"
                        : "primary_button_style"
                  }
               >
                  EXPLORE
               </NavLink>
               <button>
                  <img src={assets.darkMode} alt="" />
               </button>
            </div>
         </div>
      </>
   );
}
