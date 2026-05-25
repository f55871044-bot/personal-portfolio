import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Supabase", level: 70 },
  { name: "Git & GitHub", level: 75 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-10 left-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-purple-500/20 blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-cyan-500/20 blur-[100px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            My Skills
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black">
            Tech I Work With
          </h2>

        </motion.div>

        {/* Skills List */}
        <div className="space-y-6 sm:space-y-10">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 hover:border-cyan-400/30 transition duration-500 shadow-xl"
            >

              {/* Top Row */}
              <div className="flex justify-between items-center mb-3 sm:mb-4">

                <span className="text-base sm:text-xl font-semibold tracking-wide">
                  {skill.name}
                </span>

                <span className="text-xs sm:text-base text-gray-400 font-medium">
                  {skill.level}%
                </span>

              </div>

              {/* Bar Background */}
              <div className="relative w-full h-3 sm:h-4 bg-white/10 rounded-full overflow-hidden">

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />

                {/* Animated Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="relative h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}