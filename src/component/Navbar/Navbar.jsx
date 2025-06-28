import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //  React Router Link import

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = (
    <>
      <li><Link to="/" className="hover:text-primary">Home</Link></li>
      <li><Link to="/about" className="hover:text-primary">About</Link></li>
      <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
      <li><Link to="/skills" className="hover:text-primary">Skills</Link></li>
      <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mx-auto shadow-md fixed top-0 z-50 px-4 md:px-10">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        {/* Logo & Brand */}
        <Link to="/home" className="flex items-center gap-2 font-bold text-xl">
          <img
            src="https://i.ibb.co/Lzn5vc1W/logo.png"
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-primary">Sanjid.Dev</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Dark Mode Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />

          {/* Sun icon */}
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M5.64 17.66L4.22 19.07 2.81 17.66l1.41-1.41 1.42 1.41zm12.02 
              0l1.41 1.41-1.41 1.41-1.41-1.41 1.41-1.41zM12 
              20c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6.36-5.64l1.41 
              1.41-1.41 1.41-1.41-1.41 1.41-1.41zM4.22 
              6.34L2.81 4.93l1.41-1.41 1.41 1.41-1.41 
              1.41zM12 4c1.1 0 2 .9 2 2h-4c0-1.1.9-2 
              2-2zm0-2C6.48 2 2 6.48 2 
              12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>

          {/* Moon icon */}
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M21.64 13.65A9 9 0 
              0110.35 2.36 9 9 0 0012 22c4.97 
              0 9-4.03 9-9 0-.88-.12-1.73-.36-2.52z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
