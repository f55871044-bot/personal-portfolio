import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6 pt-20 sm:pt-24"
    >

      {/* Background Glow */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/30 blur-[100px] sm:blur-[120px] rounded-full top-[-80px] sm:top-[-100px] left-[-80px] sm:left-[-100px]" />
      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/20 blur-[80px] sm:blur-[120px] rounded-full bottom-[-80px] sm:bottom-[-100px] right-[-80px] sm:right-[-100px]" />

      {/* Animated Grid */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Floating light */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[120px] sm:w-[200px] h-[120px] sm:h-[200px] bg-white/10 blur-[60px] sm:blur-[80px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6"
        >
          Frontend Developer
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight"
        >
          Creating{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Modern
          </span>
          <br />
          Web Experiences
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mt-6 sm:mt-8 text-gray-400 text-sm sm:text-lg leading-relaxed px-2"
        >
          I build cinematic, interactive and modern web applications
          with React, Tailwind CSS and beautiful animations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold shadow-2xl"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
          >
            Contact Me
          </motion.button>

        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 flex-wrap"
        >

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            LinkedIn
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}