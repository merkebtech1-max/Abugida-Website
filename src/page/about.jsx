import { useNavigate } from "react-router-dom";
import p7 from "../assets/p7.jpg";
import { motion } from "framer-motion";

export default function About({ darkMode }) {
  const navigate = useNavigate();
  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={`w-full min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-[#050f23] via-[rgb(9,24,58)] to-[#060318] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div className="pt-32 mb-5">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 md:px-16 text-center"
        >
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-amber-400 mb-4 ">
            About Us
          </h1>

          <p className="mt-8 text-2xl md:text-3xl max-w-3xl mx-auto font-medium  mb-4">
            Experience authentic Habesha flavor at Abugida Restaurant.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center py-12"
        >
          <h2 className="text-4xl font-semibold mt-10 mb-5 text-amber-400">
            ABUGIDA RESTAURANT
          </h2>

          <p className=" font-medium leading-relaxed text-lg md:text-lg mb-10">
            <strong>Abugida Restaurant</strong> offers the true taste of
            authentic Habesha cuisine. With years of experience and passion for
            traditional cooking, we serve delicious Ethiopian dishes prepared
            with care, culture, and rich heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 md:px-24">
            <motion.button
              onClick={() => navigate("/menu")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-amber-300 text-lg md:text-xl rounded-lg text-amber-400"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl flex justify-center items-start mt-10 md:mt-20 mb-10"
        >
          <img
            src={p7}
            alt="Abugida Restaurant"
            loading="lazy"
            className="w-full h-auto object-cover object-center max-h-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
