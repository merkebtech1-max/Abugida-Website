import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import p1 from "../assets/beyeaynetu.jpg";
import p2 from "../assets/Tegabino.jpg";
import p3 from "../assets/lala3.jpg";
import p4 from "../assets/Feses.jpg";
import p5 from "../assets/Bufe.jpg";
import p6 from "../assets/Special.jpg";
import p7 from "../assets/Suf.jpg";
import p8 from "../assets/Drkosh.jpg";
import p9 from "../assets/Firfr.jpg";
import p10 from "../assets/Dinch.jpg";
import p11 from "../assets/Misrr.jpg";
import p12 from "../assets/Timatim.jpg";
import p13 from "../assets/Gomen.jpg";
import p14 from "../assets/Pasta.jpg";
import p15 from "../assets/Salad.jpg";

import nfp1 from "../assets/Kitfo22.jpg";
import nfp2 from "../assets/Tibs22.jpg";
import nfp3 from "../assets/Misto.jpg";
import nfp4 from "../assets/Kikl.jpg";
import nfp5 from "../assets/Kuanta.jpg";
import nfp6 from "../assets/Dulet.jpg";
import nfp7 from "../assets/sga firfr.jpg";
import nfp8 from "../assets/enkulal.jpg";
import nfp9 from "../assets/speciall.jpeg";
import nfp10 from "../assets/Bozena.jpg";
import nfp11 from "../assets/lala3.jpg";

import L2 from "../assets/L2.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const spring = { type: "spring", stiffness: 260, damping: 22 };

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu({ darkMode = false }) {
  const images = useMemo(() => [p1, p2, p3, p4, p5, p6, p7, p8,p9,p10,p11,p12,p13,p14,p15, L2], []);
  const nonFastingImages = useMemo(() => [nfp1, nfp2, nfp3, nfp4, nfp5, nfp6, nfp7, nfp8, nfp9, nfp10, nfp11], []);
  
  const fasting = useMemo(
    () => [
      {
        id: "f-1",
        nameAm: "አይነት",
        nameEn: "Beyeaynetu",
        price: 175,
        description:
          "A vibrant vegan and different sauce of fasting dishes served together.",
      },
      {
        id: "f-2",
        nameAm: "ተጋቢኖ",
        nameEn: "Tegabino",
        price: 150,
        description:
          "Shiro baked and served in a traditional clay pot deep, comforting flavor.",
      },
      {
        id: "f-3",
        nameAm: "ሽሮ ላላ",
        nameEn: "Shiro Lala",
        price: 150,
        description:
          "Smooth chickpea stew with Ethiopian spices silky, aromatic, and satisfying.",
      },
      {
        id: "f-4",
        nameAm: "ሽሮ ፈሰስ",
        nameEn: "Shiro Feses",
        price: 120,
        description:
          "A lighter shiro preparation with a thinner texture simple and delicious.",
      },
      {
        id: "f-5",
        nameAm: "ቡፌ",
        nameEn: "Bufe",
        price: 250,
        description:
          "A hearty mix of vegan stews served with injera perfect for sharing.",
      },
      {
        id: "f-6",
        nameAm: "የጾም ስፔሻል",
        nameEn: "Fasting Special",
        price: 600,
        description:
          "Chef’s premium fasting platter generous portions with our best vegan dishes.",
      },
      {
        id: "f-7",
        nameAm: "ሱፍ / ተልባ",
        nameEn: "Suf",
        price: 150,
        description:
          "Traditional flax/suf dish nutty, hearty, and beautifully seasoned.",
      },
      {
        id: "f-8",
        nameAm: "ድርቆሽ",
        nameEn: "Drkosh",
        price: 175,
        description:
          "A classic fasting dish with bold seasoning comfort food with character.",
      },
      {
        id: "f-9",
        nameAm: "የጾም ፍርፍር",
        nameEn: "Fasting Firfir",
        price: 120,
        description:
          "Injera pieces tossed in a flavorful fasting sauce warm, tangy, and filling.",
      },
      {
        id: "f-10",
        nameAm: "ድንች ፍርፍር",
        nameEn: "Dinch Firfir",
        price: 150,
        description:
          "Potato firfir—injera mixed with a savory sauce and tender potatoes.",
      },
      {
        id: "f-11",
        nameAm: "ምስር በድንች",
        nameEn: "Misir Bedinch",
        price: 150,
        description:
          "Red lentils cooked with potatoes rich, warming, and perfectly balanced.",
      },
      {
        id: "f-12",
        nameAm: "ቲማቲም",
        nameEn: "Tomato Sauce",
        price: 120,
        description:
          "Tomato-based sauce with aromatics bright, simple, and delicious with injera.",
      },
      {
        id: "f-13",
        nameAm: "ጎመን",
        nameEn: "Gomen",
        price: 120,
        description:
          "Tender collard greens sautéed with onion and garlic—clean and comforting.",
      },
      {
        id: "f-14",
        nameAm: "ፓስታ",
        nameEn: "Spaghetti",
        price: 150,
        description:
          "Spaghetti prepared with a flavorful sauce simple, satisfying, and hearty.",
      },
      {
        id: "f-15",
        nameAm: "አትክልት በ ዳቦ",
        nameEn: "Vegetable with Bread",
        price: 150,
        description:
          "Seasoned vegetables served with bread—fresh, vibrant, and comforting.",
      },
    ],
    []
  );
  
  const nonFasting = useMemo(
    () => [
      {
        id: "n-1",
        nameAm: "ክትፎ",
        nameEn: "Kitfo",
        price: 400,
        description:
          "Finely minced beef seasoned with spiced butter and mitmita rich and traditional.",
      },
      {
        id: "n-2",
        nameAm: "ጥብስ",
        nameEn: "Tibs",
        price: 350,
        description:
          "Sautéed beef with peppers and onion smoky, tender, and juicy.",
      },
      {
        id: "n-3",
        nameAm: "ሚስቶ",
        nameEn: "Misto",
        price: 250,
        description:
          "A comforting mixed meat dish with Ethiopian spices and hearty flavor.",
      },
      {
        id: "n-4",
        nameAm: "ቅቅል",
        nameEn: "Kikil",
        price: 280,
        description:
          "Bone-in meat soup, slow-cooked for deep, warming flavor.",
      },
      {
        id: "n-5",
        nameAm: "ቋንጣ",
        nameEn: "Quanta",
        price: 300,
        description:
          "Air-dried beef cooked with berbere smoky, intense, and satisfying.",
      },
      {
        id: "n-6",
        nameAm: "ዱለት",
        nameEn: "Dulet",
        price: 250,
        description:
          "Traditional chopped meat mix with spices intense, rustic, and flavorful.",
      },
      {
        id: "n-7",
        nameAm: "ስጋ ፍርፍር",
        nameEn: "Sega Firfir",
        price: 250,
        description:
          "Injera mixed with a rich, meaty sauce hearty and full of depth.",
      },
      {
        id: "n-8",
        nameAm: "እንቁላል በ ስጋ",
        nameEn: "Egg with Meat",
        price: 250,
        description:
          "Eggs cooked together with seasoned meat simple, filling, and flavorful.",
      },
      {
        id: "n-9",
        nameAm: "የቤቱ ስፔሻል",
        nameEn: "House Special",
        price: 1500,
        description:
          "Our signature mixed platter generous selection of the chef’s favorite meat dishes.",
      },
      {
        id: "n-10",
        nameAm: "ሽሮ ቦዘና",
        nameEn: "Shiro Bozzena",
        price: 225,
        description:
          "Chickpea stew prepared with meat creamy, spiced, and deeply satisfying.",
      },
      {
        id: "n-11",
        nameAm: "ሽሮ በ ቅቤ",
        nameEn: "Shiro Be Kibe",
        price: 200,
        description:
          "Shiro enriched with spiced butter smooth, aromatic, and comforting.",
      },
    ],
    []
  );

  const [category, setCategory] = useState("fasting");
  const items = category === "fasting" ? fasting : nonFasting;

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={cx(
        "w-full min-h-screen",
        darkMode
          ? "bg-gradient-to-br from-[#050f23] via-[rgb(9,24,58)] to-[#060318] text-white"
          : "bg-white text-black"
      )}
    >
      {/* HERO */}
      <div className="pt-32 pb-10">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 md:px-16 text-center"
        >
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-amber-400 mb-4">
            Our Menu
          </h1>
          <p className="mt-8 text-2xl md:text-3xl max-w-3xl mx-auto font-medium mb-4">
            A curated selection of fresh, vibrant, and artfully crafted dishes.
          </p>
        </motion.div>
      </div>

      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="tracking-[0.25em] text-gray-400/90 text-sm font-semibold">
            OUR CREATIONS
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-amber-400">
            Discover Our Menu
          </h2>
        </motion.div>

        {/* TOGGLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <div
            className={cx(
              "relative inline-grid grid-cols-2 rounded-full p-1 border",
              darkMode
                ? "border-white/15 bg-white/5"
                : "border-black/10 bg-black/5"
            )}
          >
            <motion.div
              className={cx(
                "absolute top-1 bottom-1 left-1 rounded-full",
                darkMode ? "bg-amber-400/20" : "bg-amber-400/25"
              )}
              style={{ width: "calc(50% - 0.25rem)" }}
              animate={{ x: category === "fasting" ? 0 : "100%" }}
              transition={spring}
            />

            <button
              type="button"
              onClick={() => setCategory("fasting")}
              className={cx(
                "relative z-10 px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-colors",
                category === "fasting"
                  ? "text-amber-300"
                  : darkMode
                    ? "text-white/70 hover:text-white"
                    : "text-black/70 hover:text-black"
              )}
            >
              የጾም ምግቦች
            </button>
            <button
              type="button"
              onClick={() => setCategory("nonFasting")}
              className={cx(
                "relative z-10 px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-colors",
                category === "nonFasting"
                  ? "text-amber-300"
                  : darkMode
                    ? "text-white/70 hover:text-white"
                    : "text-black/70 hover:text-black"
              )}
            >
              የፍስክ ምግቦች
            </button>
          </div>
        </motion.div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="mt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {items.map((item, idx) => {
              const imgArray =
                category === "fasting" ? images : nonFastingImages;
              const img = imgArray[idx % imgArray.length];
              return (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={spring}
                  className={cx(
                    "group overflow-hidden rounded-2xl border shadow-lg",
                    darkMode
                      ? "border-white/10 bg-white/5"
                      : "border-black/10 bg-white"
                  )}
                >
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={img}
                      alt={item.nameEn}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold text-amber-400 truncate">
                          {item.nameAm}
                        </h3>
                        <p
                          className={cx(
                            "mt-1 text-sm font-semibold tracking-wide",
                            darkMode ? "text-white/75" : "text-black/60"
                          )}
                        >
                          {item.nameEn}
                        </p>
                      </div>

                      <div
                        className={cx(
                          "shrink-0 rounded-full px-3 py-1 text-sm font-semibold border",
                          darkMode
                            ? "border-white/10 bg-white/5 text-amber-300"
                            : "border-black/10 bg-black/5 text-amber-700"
                        )}
                      >
                        {item.price} Birr
                      </div>
                    </div>
                    <p
                      className={cx(
                        "mt-2 leading-relaxed",
                        darkMode ? "text-white/80" : "text-black/50"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
