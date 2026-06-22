import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import resume from "../assets/ShlokBandwar_InternshalaResume.pdf";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050509] px-5 sm:px-6 lg:px-20 py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute top-1/2 left-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[180px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center order-1 lg:order-none"
        >
          <div className="relative w-full max-w-[620px]">
            <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-[30px] scale-110"></div>

            <div className="relative overflow-hidden rounded-[28px] border border-purple-500/20 bg-[#12031d] p-3 sm:p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.18)]">
              <img
                src={logo}
                alt="about"
                className="w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <div>
            <p className="text-purple-400 text-sm sm:text-lg tracking-[6px] uppercase mb-4">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15]">
              Passionate About{" "}
              <span className="text-purple-400">Modern Web Development</span>
            </h2>
          </div>

          <div className="w-28 h-[3px] bg-purple-500 rounded-full mx-auto lg:mx-0"></div>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            I'm Shlok Baranwal, an aspiring Full Stack Developer focused on
            building modern, responsive and visually engaging web applications.
          </p>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            I enjoy creating seamless user experiences with clean UI design,
            smooth animations and scalable backend systems.
          </p>

          {/* SKILLS */}

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Tailwind",
              "GitHub",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 25px rgba(168,85,247,0.35)",
                }}
                className="px-5 py-3 rounded-xl border border-purple-500/20 bg-white/5 text-zinc-200 backdrop-blur-lg cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-6">
            <motion.a
              href={resume}
              download="Shlok-Bandwar-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] inline-flex items-center justify-center"
            >
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-4 rounded-2xl border border-purple-500 text-white hover:bg-purple-600/10 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
