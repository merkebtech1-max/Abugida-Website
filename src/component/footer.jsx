import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo_4 from "../assets/Logo_4.png";

export default function Fotter({ darkMode }) {
  const navigate = useNavigate();

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={`w-full max-w-full overflow-x-hidden py-12 px-6 left-0 z-10 md:px-16 
      ${
        darkMode
          ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Logo & Description */}
        <div>
          <div
            className="cursor-pointer flex items-center gap-5 mb-4"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo_4}
              alt="Abugida Restaurant"
              className="h-16 md:h-20 w-auto rounded-2xl"
            />

            <div className="font-semibold text-sm md:text-base leading-none">
              <span className="text-2xl font-bold block">ABUGIDA</span>
              <span className="text-lg font-semibold block -mt-0.5">
                RESTAURANT
              </span>
            </div>
          </div>

          <p className="leading-relaxed text-lg font-medium">
            Abugida Restaurant brings the authentic taste of traditional cuisine
            to every table, serving timeless flavors and a true cultural dining
            experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>

          <div className="flex items-center gap-2 mb-3">
            <FaMapMarkerAlt />
            <span>Bahir Dar, Ethiopia</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <FaPhone />
            <span>+251 964866786</span>
          </div>
          <p
            className="text-2xl font-semibold block mb-6
            "
          >
            Visit & Follow
          </p>
          <div className="flex items-center space-x-8  mt-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-3xl"
            >
              <FaTelegram />
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-3xl"
            >
              <FaInstagram />
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-3xl"
            >
              <FaFacebook />
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-3xl"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
