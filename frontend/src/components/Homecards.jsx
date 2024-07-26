import useTheme from "@/context/Theme";
import React from "react";

export default function Homecards({ work, title, short_desc, see_more_link, logo }) {
   const { themeMode } = useTheme();

   return (
      <>
         <a
            href={see_more_link}
            target="_blank"
            className="group relative block h-64 sm:h-80 lg:h-96"
         >
            <span className="absolute inset-0 border-2 border-dashed border-white rounded-[20px]"></span>
            <div
               className={` rounded-[20px] relative flex h-full w-[50vw] transform items-end border-2 border-white transition-transform group-hover:-translate-x-5 group-hover:-translate-y-5 
               ${
                  themeMode === "dark"
                     ? "bg-black text-white"
                     : "bg-white text-black"
               }
               `}
            >
               <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  {/* https://skillicons.dev/icons?i=javascript */}
                  <img
                     src={`https://skillicons.dev/icons?i=${logo}`}
                     alt=""
                     className="size-10 sm:size-12"
                  />

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                     {work}
                  </h2>
               </div>

               <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                     {title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">{short_desc}</p>

                  <p className="mt-8 font-bold">Read more</p>
               </div>
            </div>
         </a>
      </>
   );
}
