import {createBrowserRouter} from "react-router";
import Home from "../pages/Home/Home";
import Navbar from "../component/Navbar/Navbar";
import About from "../component/AboutMe/AboutMe";
import Skills from "../component/Skills/Skills";
import Hero from "../component/Hero/Hero";
import AboutMe from "../component/AboutMe/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
 {
    path:"/navbar",
    element:<Navbar></Navbar>
  },
  {
    path:"/skills",
    element:<Skills></Skills>
  },
  {
    path:"/hero",
    element:<Hero></Hero>
  },
  {
    path:"/about",
    element:<AboutMe></AboutMe>
  }
    ]},
])

  