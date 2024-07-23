import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Explore from "./pages/Explore.jsx";
import Allprojects from "./pages/Allprojects.jsx";

const Main = () => {
   useEffect(() => {
      // Check if the page is being reloaded
      if (performance.getEntriesByType("navigation")[0].type === "reload") {
         // Check if localStorage has the last visited path
         const lastVisitedPath = localStorage.getItem("lastVisitedPath");
         if (!lastVisitedPath || lastVisitedPath === "/") {
            // Redirect to '/ExploreBuddhadebKoner'
            window.location.href = "./";
         }
      }
      // Store the current path in localStorage
      localStorage.setItem("lastVisitedPath", window.location.pathname);
   }, []);

   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="post" element={<Post />} />
            <Route path="aboutme" element={<Aboutme />} />
            <Route path="explore" element={<Explore />} />
            <Route path="allprojects" element={<Allprojects />} />
         </Route>
      )
   );

   return (
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
