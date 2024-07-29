import React from "react";
import IconCloud from "./magicui/icon-cloud";
import data from "@/Data/data";
import useTheme from "@/context/Theme";

const slugs = [
   "javascript",
   "react",
   "html5",
   "css3",
   "nodedotjs",
   "express",
   "nextdotjs",
   "firebase",
   "nginx",
   "vercel",
   "git",
   "github",
   "visualstudiocode",
   "androidstudio",
   "figma",
   "mongodb",
   "appwrite",
];

export default function Homehero() {
   const {
      name,
      bio,
      media_links: { github },
   } = data.user;

   const { themeMode } = useTheme();

   return (
      <>
         <section
            className={`home_hero_container flex flex-col items-center justify-center w-full h-[65vh] ${
               themeMode === "dark" ? "bg-primaryDarkBG" : "bg-primaryLightBG"
            }`}
         >
            <div
               className={`home_container_heading_content flex flex-row items-center justify-center gap-8 ${
                  themeMode === "dark"
                     ? "text-primaryDarkText"
                     : "text-primaryLightText"
               }`}
            >
               <h2 className="home_hero_container_heading text-5xl font-black">
                  Hi I Am
               </h2>
               <div className="typewriter flex items-center justify-start">
                  <h1
                     className={`text-5xl font-black font-mono ${
                        themeMode === "dark"
                           ? "text-primaryDarkFocus"
                           : "text-primaryLightFocus"
                     } overflow-hidden`}
                  >
                     {name}
                  </h1>
               </div>
            </div>
            <p
               className={`home_hero_container_bio text-2xl mt-5 ${
                  themeMode === "dark"
                     ? "text-secoundryDarkText"
                     : "text-secoundryLightText"
               }`}
            >
               {bio}
            </p>
            <div className="home_hero_container_btn mt-14">
               <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block rounded-lg border-2 ${
                     themeMode === "dark"
                        ? "border-secoundryDarkText"
                        : "border-secoundryLightText text-primaryDarkBG"
                  } py-2 px-10 text-2xl font-black`}
               >
                  GitHub
               </a>
               <div
                  className={`w-full h-1.5 mt-5 ${
                     themeMode === "dark"
                        ? "bg-primaryDarkFocus"
                        : "bg-primaryLightFocus"
                  }`}
               ></div>
            </div>
         </section>
         <div
            className={`iconCloud_container w-full h-fit  ${
               themeMode === "dark"
                  ? "bg-primaryDarkBG bg-gradient-to-b from-transparent   to-whoamiDarkBG"
                  : "bg-primaryLightBG bg-gradient-to-b from-transparent to-whoamiLightBG"
               }`}
         >
            <IconCloud iconSlugs={slugs} themeMode />
         </div>
      </>
   );
}
