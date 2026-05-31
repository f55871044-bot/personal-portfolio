import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6"
    >
      <div className="mx-auto max-w-7xl py-3 sm:py-4">

        <div className="flex items-center justify-between
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        rounded-full px-4 sm:px-6 py-2 sm:py-3">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold text-lg sm:text-xl"
          >
            Ayesha<span className="text-cyan-400">.dev</span>
          </motion.h1>

          {/* Links */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm text-gray-300">

            {["home", "about", "skills", "projects", "contact"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item}`}
                whileHover={{ y: -2, color: "#22d3ee" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="capitalize hover:text-cyan-400 transition"
              >
                {item}
              </motion.a>
            ))}

          </div>

          {/* Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white text-black font-semibold shadow-lg"
          >
            Hire Me
          </motion.a>

        </div>
      </div>
    </motion.nav>
  );
}