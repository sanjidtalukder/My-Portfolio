import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutMe from "../component/AboutMe/AboutMe";
import Skills from "../component/Skills/Skills";
import Hero from "../component/Hero/Hero";
import MainLayout from "../Layout/MainLayout";
import Contact from "../component/Contact/Contact";
import ProjectsSection from "../component/Contact/ProjectsSection/ProjectsSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/skills", element: <Skills /> },
      { path: "/hero", element: <Hero /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <ProjectsSection /> },

    ],
  },
]);
