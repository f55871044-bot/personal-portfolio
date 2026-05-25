import { motion } from "framer-motion";

const projects = [
  {
    title: "Habit Tracker",
    description:
      "A modern habit tracking web app with authentication, reminders and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    github: "#",
  },

  {
    title: "Admin Dashboard",
    description:
      "Responsive admin panel with analytics, charts and clean UI design.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    github: "#",
  },

  {
    title: "Portfolio Website",
    description:
      "Cinematic animated personal portfolio built using React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-cyan-500/20 blur-[90px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-purple-500/20 blur-[90px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            My Work
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Featured Projects
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 sm:h-52 lg:h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 relative z-10">

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-5 lg:mt-6">

                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-xs sm:text-sm lg:text-base rounded-full bg-white text-black font-medium shadow-lg"
                  >
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-xs sm:text-sm lg:text-base rounded-full border border-white/20 hover:bg-white/10 transition"
                  >
                    GitHub
                  </motion.a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}