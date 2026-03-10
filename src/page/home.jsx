import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import L3 from "../assets/L3.jpg";

export default function Home({ darkMode }) {
  const navigate = useNavigate();

  const images = [p1, p2, p3, p4, p5, p6, p7];

  const [index, setIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);

  /* preload images */
  useEffect(() => {
    images.forEach((img) => (new Image().src = img));
  }, []);

  /* slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setImageLoading(false);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{ fontFamily: "'inter',sans-serif" }}
        className={`w-full min-h-screen ${
          darkMode
            ? "bg-gradient-to-br from-[#050f23] via-[rgb(9,24,58)] to-[#060318] text-white"
            : "bg-white text-black"
        }`}
      >
        {/* HERO IMAGE */}
        <div className="relative w-full min-h-screen overflow-hidden mb-6">
          <motion.img
            src={L3}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full h-full object-cover"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 pt-18 ">
            {/* welcome */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-amber-400 mb-4"
            >
              Welcome
            </motion.h1>

            {/* title */}
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-amber-400 mb-10"
            >
              ABUGIDA RESTAURANT
            </motion.h2>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-10  ">
              <motion.button
                onClick={() => navigate("/menu")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-300 text-lg md:text-xl rounded-lg text-amber-400"
              >
                View Menu
              </motion.button>

              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-300 text-lg md:text-xl rounded-lg text-amber-400"
              >
                Contact
              </motion.button>
            </div>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-400 text-center mb-8"
        >
          Our Restaurant
        </motion.h2>
        {/* IMAGE SLIDER SECTION */}
        <div className="relative w-full h-[300px] sm:h-[300px] md:h-[300px] lg:h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              onLoad={() => setImageLoading(true)}
              initial={{ opacity: 0, x: 80 }}
              animate={{
                opacity: imageLoading ? 1 : 0,
                x: imageLoading ? 0 : 80,
              }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
