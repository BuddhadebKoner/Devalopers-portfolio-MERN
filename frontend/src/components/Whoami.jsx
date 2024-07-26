import React from "react";
import Homecards from "./Homecards";
import data from "@/Data/data";
import TextRevealByWord from "./magicui/text-reveal";
import useTheme from "@/context/Theme";

export default function components() {
   const { themeMode } = useTheme();
   return (
      <>
         <div
            className={`w-full h-fit flex items-center justify-start flex-col gap-20
         ${themeMode === "dark" ? "bg-whoamiDarkBG" : "bg-whoamiLightBG"}`}
         >
            <div className="z-10 flex min-h-[16rem] w-full items-center justify-center flex-col">
               <TextRevealByWord text="What&nbsp;i&nbsp;Know&nbsp;?" />
            </div>

            {data.whatIDo.map((item, index) => (
               <Homecards
                  key={index}
                  work={item.work}
                  title={item.title}
                  short_desc={item.short_desc}
                  see_more_link={item.see_more_link}
                  logo={item.logo}
               />
            ))}
         </div>
      </>
   );
}
