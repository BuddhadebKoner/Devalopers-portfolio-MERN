import React, { useRef } from "react";
import IconCloud from "./magicui/icon-cloud";
import data from "@/Data/data";

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
   return (
      <>
         <div className="home_hero_container">
            <div className="home_container_heading_content">
               <div className="home_hero_container_heading">Hi I Am</div>
               <div className="typewriter">
                  <h1>
                     <span>{data.user.name}</span>
                  </h1>
               </div>
            </div>
            <p className="home_hero_container_bio">{data.user.bio}</p>
            <div className="home_hero_container_btn">
               <a href={data.user.media_links.github} target="_blank">
                  GitHub
               </a>
            <div className="home_hero_container_btn_underline"></div>
            </div>
         </div>
         
         <IconCloud iconSlugs={slugs} />
      </>
   );
}
