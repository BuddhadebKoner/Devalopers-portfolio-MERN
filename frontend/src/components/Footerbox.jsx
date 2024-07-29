import React from "react";
import useTheme from "@/context/Theme";
import { useForm } from "@formspree/react";

export default function Footerbox() {
   const formId = import.meta.env.VITE_FORMID;
   const [state, handleSubmit] = useForm(formId);
   const { themeMode } = useTheme();
   return (
      <>
         <footer
            className={` w-[100vw] h-fit
               ${
                  themeMode === "dark"
                     ? "bg-whoamiDarkBG bg-gradient-to-b from-transparent   to-primaryDarkBG text-primaryDarkText"
                     : "bg-whoamiLightBG bg-gradient-to-b from-transparent to-primaryLightBG text-black"   
               }
               `}
         >
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-20 sm:px-6 lg:px-8">
               <div className="mx-auto max-w-md">
                  <strong className="block text-center text-xl font-bold sm:text-3xl">
                     Hey There! Drop Here Your&nbsp;
                     <span className="text-primaryDarkFocus">Feedback</span>
                  </strong>

                  <form
                     className="mt-6 bg-primaryDarkBG p-6 rounded-lg shadow-lg"
                     onSubmit={handleSubmit}
                  >
                     <div className="relative max-w-lg">
                        <label className="sr-only" htmlFor="email">
                           Email
                        </label>
                        <input
                           className="w-full rounded-full border-primaryDarkText bg-primaryDarkBG p-4 text-sm font-medium text-primaryDarkText placeholder-primaryDarkText focus:outline-none focus:ring-2 focus:ring-primaryDarkFocus"
                           id="email"
                           name="email"
                           type="email"
                           placeholder="john@doe.com"
                           required
                        />
                        <label className="sr-only" htmlFor="message">
                           Message
                        </label>
                        <textarea
                           className="w-full max-h-[100px] overflow-hidden mt-4 rounded-lg border-primaryDarkText bg-primaryDarkBG p-4 text-sm font-medium text-primaryDarkText placeholder-primaryDarkText focus:outline-none focus:ring-2 focus:ring-primaryDarkFocus"
                           id="message"
                           name="message"
                           placeholder="Your short message here"
                           rows="4"
                           required
                        />
                        <button
                           className="mt-4 w-full rounded-full bg-primaryDarkFocus px-5 py-3 text-sm font-medium text-primaryDarkText transition hover:bg-primaryDarkFocus/80 focus:outline-none focus:ring-2 focus:ring-primaryDarkFocus"
                           type="submit"
                           disabled={state.submitting}
                        >
                           {state.succeeded ? "Subscribed" : "Subscribe"}
                        </button>
                     </div>
                  </form>
               </div>

               <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                  <div className="mx-auto max-w-sm lg:max-w-none">
                     <p className="mt-4 text-center lg:text-left lg:text-lg">
                        Welcome to my portfolio website. Thanks for visiting my website, I hope you like it. If you have any feedback or suggestion, please let me know. I will be happy to hear from you .
                     </p>

                     <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                        <a
                           className="text-secoundryDarkText transition hover:text-secoundryDarkText/75"
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <span className="sr-only"> Facebook </span>
                           {/* facebook */}
                        </a>

                        <a
                           className="text-secoundryDarkText transition hover:text-secoundryDarkText/75"
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <span className="sr-only"> Instagram </span>
                           {/* instagram */}
                        </a>

                        <a
                           className="transition hover:text-secoundryDarkText/75"
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <span className="sr-only"> Twitter </span>
                           {/* tweeter */}
                        </a>

                        <a
                           className="transition hover:text-secoundryDarkText/75"
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <span className="sr-only"> GitHub </span>
                           {/* github */}
                        </a>

                        <a
                           className="transition hover:text-secoundryDarkText/75"
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <span className="sr-only"> Linkedin </span>
                           {/* linkedin */}
                        </a>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                     <div>
                        <strong className="font-medium">
                           Services
                        </strong>

                        <ul className="mt-6 space-y-1">
                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Marketing
                              </a>
                           </li>

                           <li>
                              <a
                                 className="transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Graphic Design
                              </a>
                           </li>

                           <li>
                              <a
                                 className="transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 App Development
                              </a>
                           </li>

                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Web Development
                              </a>
                           </li>
                        </ul>
                     </div>

                     <div>
                        <strong className="font-medium ">
                           About
                        </strong>

                        <ul className="mt-6 space-y-1">
                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 About
                              </a>
                           </li>

                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Careers
                              </a>
                           </li>

                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 History
                              </a>
                           </li>

                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Our Team
                              </a>
                           </li>
                        </ul>
                     </div>

                     <div>
                        <strong className="font-medium ">
                           Support
                        </strong>

                        <ul className="mt-6 space-y-1">
                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 FAQs
                              </a>
                           </li>

                           <li>
                              <a
                                 className="t transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Contact
                              </a>
                           </li>

                           <li>
                              <a
                                 className=" transition hover:text-secoundryDarkText/75"
                                 href="#"
                              >
                                 Live Chat
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="mt-16 border-t border-primaryDarkText pt-8">
                  <p className="text-center text-xs ">
                     © Company 2024. All rights reserved.
                  </p>
               </div>
            </div>
         </footer>
      </>
   );
}
