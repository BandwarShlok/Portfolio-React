import { motion } from "framer-motion"

function Work() {

  const projects = [
    {
      id: "01",
      title: "Student Result Management System",
      tech: "React • Node.js • MongoDB",
      desc: "A modern result management platform with student dashboard and admin controls.",
      live: "https://bandwarshlok.github.io/Student-Result-Management-System-SRMS/Frontend/Student.html",
      github: "https://github.com/BandwarShlok/Student-Result-Management-System-SRMS",
    },

    {
      id: "02",
      title: "Hotel Management System",
      tech: "React • Express • MySQL",
      desc: "A responsive hotel booking and room management application with modern UI and admin controls.",
      live: "https://bandwarshlok.github.io/hotel-management-system/Frontend/Index.html",
      github: "https://github.com/BandwarShlok/hotel-management-system",
    },

    {
      id: "03",
      title: "Career Compass",
      tech: "React • AI • Tailwind CSS",
      desc: "An AI-powered career guidance platform featuring resume analysis and career recommendations.",
      live: "https://bandwarshlok.github.io/career-bot/frontend/src/home.html",
      github: "https://github.com/BandwarShlok/career-bot",
    },

    {
      id: "04",
      title: "TaskFlow",
      tech: "React • Node.js • MongoDB",
      desc: "A modern full-stack task management platform designed to streamline productivity through efficient task tracking and organization.",
      live: "https://bandwarshlok.github.io/Task-Flow/",
      github: "https://github.com/BandwarShlok/Task-Flow",
    },
  ]

  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden bg-[#050509] px-6 py-24 lg:px-20"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[180px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-purple-400 uppercase tracking-[4px] mb-4">
            My Projects
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Featured <span className="text-purple-400">Work</span>
          </h2>

        </motion.div>

        {/* PROJECTS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 0 40px rgba(168,85,247,0.25)",
              }}
              className="group rounded-[30px] overflow-hidden border border-purple-500/20 bg-[#12031d]/70 backdrop-blur-xl"
            >

              {/* TOP AREA */}

              <div className="h-56 flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-black relative overflow-hidden">

                <div className="absolute inset-0 bg-purple-600/10 blur-3xl"></div>

                <h1 className="relative text-7xl font-bold text-purple-400/70">
                  {project.id}
                </h1>

              </div>

              {/* CONTENT */}

              <div className="p-8 flex flex-col justify-between h-[280px]">

                <div>

                  <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition duration-300 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-purple-400 text-sm tracking-wide mb-4">
                    {project.tech}
                  </p>

                  <p className="text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-4 pt-6">

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-white text-sm"
                  >
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/10 transition text-white text-sm"
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
  )
}

export default Work