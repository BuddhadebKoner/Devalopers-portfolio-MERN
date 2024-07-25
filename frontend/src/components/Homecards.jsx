import useTheme from "@/context/Theme";
import React from "react";

export default function Homecards({ work, title, short_desc, see_more_link }) {

   const { themeMode } = useTheme();

   return (
      <>
         <a href={see_more_link} target="_blank" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-white rounded-[20px]"></span>
            <div className={` rounded-[20px] relative flex h-full w-[50vw] transform items-end border-2 border-white transition-transform group-hover:-translate-x-5 group-hover:-translate-y-5 
               ${themeMode === "dark" ? "bg-black text-white" : "bg-white text-black"}
               `}>
               <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="size-10 sm:size-12"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                     />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                     {work}
                  </h2>
               </div>

               <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                     {title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">
                    {short_desc}
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
               </div>
            </div>
         </a>
      </>
   );
}
