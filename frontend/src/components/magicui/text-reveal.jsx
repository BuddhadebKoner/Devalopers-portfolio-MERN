"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import useTheme from "@/context/Theme";

export const TextRevealByWord = ({ text, className }) => {
   const targetRef = useRef(null);

   const { scrollYProgress } = useScroll({
      target: targetRef,
   });
   const words = text.split("");

   return (
      <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
         <div
            className={
               "sticky w-fit top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
            }
         >
            <p
               ref={targetRef}
               className={
                  "flex flex-wrap w-full p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-7xl"
               }
            >
               {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                     <Word
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                     >
                        {word}
                     </Word>
                  );
               })}
            </p>
         </div>
      </div>
   );
};

const Word = ({ children, progress, range }) => {
   const { themeMode } = useTheme();
   const opacity = useTransform(progress, range, [0, 1]);

   return (
      <span className="relative inline-block">
         <span className="absolute opacity-30">{children}</span>
         <motion.span
            style={{ opacity: opacity }}
            className={`custom-font ${
               themeMode === "dark"
                  ? "text-white dark:text-white"
                  : "text-black dark:text-black"
            }`}
         >
            {children}
         </motion.span>
      </span>
   );
};



export default TextRevealByWord;
