/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
     "./pages/**/*.{js,jsx}",
     "./components/**/*.{js,jsx}",
     "./app/**/*.{js,jsx}",
     "./src/**/*.{js,jsx}",
   ],
   theme: {
     extend: {
       colors: {
        // light
         primaryLightBG: "#E1F0DA",
         primaryLightFocus: "#E76F51",
         primaryLightText: "#1B2430",
         secoundryLightText: "#000000",
         whoamiLightBG: "#5AB2FF",
        //  dark
         whoamiDarkBG: "#0C0C0C",
         primaryDarkBG: "#1B2430",
         primaryDarkFocus: "#E76F51",
         primaryDarkText: "#FFFBDA",
         secoundryDarkText: "#FFFFFF",
       },
       container: {
         center: true,
         padding: "2rem",
         screens: {
           "2xl": "1400px",
         },
       },
       keyframes: {
         "accordion-down": {
           from: { height: "0" },
           to: { height: "var(--radix-accordion-content-height)" },
         },
         "accordion-up": {
           from: { height: "var(--radix-accordion-content-height)" },
           to: { height: "0" },
         },
       },
       animation: {
         "accordion-down": "accordion-down 0.2s ease-out",
         "accordion-up": "accordion-up 0.2s ease-out",
       },
     },
   },
   plugins: [require("tailwindcss-animate")],
 };
 