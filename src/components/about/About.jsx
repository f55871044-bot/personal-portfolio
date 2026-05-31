import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/20 blur-[100px] sm:blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-500/20 blur-[100px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-[25px] sm:rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
          >

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="about"
              className="w-full h-[300px] sm:h-[450px] lg:h-[600px] object-cover"
            />

          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-8 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-4 sm:py-6 shadow-2xl"
          >

            <h3 className="text-2xl sm:text-4xl font-black text-cyan-400">
              1+
            </h3>

            <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-base">
              Years Learning <br /> Web Development
            </p>

          </motion.div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
            About Me
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 sm:mb-8">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Modern Web Design
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            I am a frontend developer focused on creating modern,
            responsive and cinematic user experiences using React,
            Tailwind CSS and creative animations.
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            I enjoy building beautiful interfaces, interactive web apps
            and premium UI designs that feel smooth and professional.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-6"
            >
              <h3 className="text-2xl sm:text-4xl font-black text-cyan-400">
                10+
              </h3>
              <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
                Projects Built
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-6"
            >
              <h3 className="text-2xl sm:text-4xl font-black text-purple-400">
                100%
              </h3>
              <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
                Responsive Design
              </p>
            </motion.div>

          </div>

          {/* ✅ CV Download Button */}
          <motion.a
            href="/Ayesha_Khan_CV.pdf"
            download="Ayesha_Khan_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 sm:mt-10 inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold shadow-2xl"
          >
            Download CV
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
