import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export default function Contact({ darkMode = false }) {
  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={`w-full min-h-screen pt-32 pb-16 ${
        darkMode
          ? "bg-gradient-to-br from-[#050f23] via-[rgb(9,24,58)] to-[#060318] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400 mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have a question, booking request, or special event? Send us a
            message and we’ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info side */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-amber-400">
              Visit Abugida Restaurant
            </h2>
            <p
              className={
                darkMode ? "text-white/80 leading-relaxed" : "text-black/70 leading-relaxed"
              }
            >
              We’re happy to welcome you for family dinners, celebrations, and
              everyday meals filled with authentic Habesha flavor.
            </p>

            <div className="space-y-3 text-sm md:text-base">
              <div>
                <p className="font-semibold text-amber-400">Phone</p>
                <p className={darkMode ? "text-white/80" : "text-black/70"}>
                  +251-9
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-400">Email</p>
                <p className={darkMode ? "text-white/80" : "text-black/70"}>
                  info@abugidarestaurant.com
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-400">Location</p>
                <p className={darkMode ? "text-white/80" : "text-black/70"}>
                  Bahirdar, Ethiopia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.form
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`rounded-2xl p-6 md:p-8 shadow-2xl ${
              darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-black/10"
            }`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] mb-1 text-amber-500">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={`w-full bg-transparent px-1 py-2 text-sm outline-none border-b transition-colors ${
                    darkMode
                      ? "border-white/25 focus:border-amber-300 placeholder:text-white/40"
                      : "border-black/20 focus:border-amber-500 placeholder:text-black/40"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] mb-1 text-amber-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+251..."
                  className={`w-full bg-transparent px-1 py-2 text-sm outline-none border-b transition-colors ${
                    darkMode
                      ? "border-white/25 focus:border-amber-300 placeholder:text-white/40"
                      : "border-black/20 focus:border-amber-500 placeholder:text-black/40"
                  }`}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs uppercase tracking-[0.2em] mb-1 text-amber-300">
                Subject
              </label>
              <input
                type="text"
                placeholder="write the subject here..."
                className={`w-full bg-transparent px-1 py-2 text-sm outline-none border-b transition-colors ${
                  darkMode
                    ? "border-white/25 focus:border-amber-300 placeholder:text-white/40"
                    : "border-black/20 focus:border-amber-500 placeholder:text-black/40"
                }`}
              />
            </div>

            <div className="mt-4">
              <label className="block text-xs uppercase tracking-[0.2em] mb-1 text-amber-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className={`w-full bg-transparent px-1 py-2 text-sm outline-none border-b resize-none transition-colors ${
                  darkMode
                    ? "border-white/25 focus:border-amber-300 placeholder:text-white/40"
                    : "border-black/20 focus:border-amber-500 placeholder:text-black/40"
                }`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 w-full md:w-auto px-8 py-3 rounded-md border-1 border-amber-300 text-amber-400 font-semibold text-sm md:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
