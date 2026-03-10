import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo_4 from "../assets/logo_4.png";

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  function handleClick(path) {
    setDarkMode(false);
    navigate(path);
  }
  function toggleTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <nav
      style={{ fontFamily: "'inter',sans-serif" }}
      className={`w-full mt-0 shadow-md fixed z-50 text-[20px] ${
        darkMode
          ? "bg-gradient-to-br from-[#050f23] via-[rgb(9,24,58)] to-[#060318] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="w-full flex items-center justify-between px-8 py-2">
        <div className="cursor-pointer" onClick={() => handleClick("/")}>
          <img src={logo_4} className="h-24 w-32 ml-0 mt-0 rounded-r-full" />
        </div>

        {/*Desktop Nav link (hidden on mobile) */}
        <ul className="hidden md:flex space-x-10  justify-center flex-1 items-center">
          <li>
            <button
              onClick={() => handleClick("/")}
              className="hover:text-amber-300 "
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("/about")}
              className="hover:text-amber-300 "
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("/menu")}
              className="hover:text-amber-300 "
            >
              Menu
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("/contact")}
              className="hover:text-amber-300 "
            >
              Contact
            </button>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="hidden md:block text-lg hover:text-amber-300 ml-4"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="md:hidden text-2xl hover:text-amber-300"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {mobileMenu && (
        <div className="md:hidden mt-2 pb-4 border-t border-amber-300">
          <ul className="flex flex-col space-y-3 px-4">
            <li>
              <button
                onClick={() => handleClick("/")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("/about")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("/menu")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("/contact")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
