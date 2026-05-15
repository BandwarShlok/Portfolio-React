import logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-32 flex items-center justify-center overflow-hidden bg-[#050509] px-6 sm:px-10 lg:px-20 pt-32 pb-24"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute w-[650px] h-[650px] bg-purple-700/20 blur-[180px] rounded-full"></div>

      {/* DESKTOP SOCIAL SIDEBAR */}

      <div className="hidden xl:flex flex-col items-center absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <div className="w-[2px] h-20 bg-gradient-to-b from-purple-500 to-transparent"></div>

        <div className="flex flex-col gap-5 py-5">
          <a
            href="https://github.com/BandwarShlok"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-white hover:border-purple-500 hover:text-purple-400 transition"
          >
            G
          </a>

          <a
            href="https://www.linkedin.com/in/shlokbaranwal"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-white hover:border-purple-500 hover:text-purple-400 transition"
          >
            in
          </a>

          <a
            href="https://x.com/bandwar49584"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-white hover:border-purple-500 hover:text-purple-400 transition"
          >
            X
          </a>

          <a
            href="mailto:bandwarshlok@gmail.com"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm text-white hover:border-purple-500 hover:text-purple-400 transition"
          >
            @
          </a>
        </div>

        <div className="w-[2px] h-20 bg-gradient-to-t from-purple-500 to-transparent"></div>
      </div>

      {/* MAIN CONTENT */}

      <div className="grid lg:grid-cols-3 items-center gap-8 lg:gap-20 w-full max-w-7xl relative z-10">
        {/* LEFT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div>
            <p className="text-zinc-400 text-lg sm:text-xl mb-4">Hello I'm</p>

            <div className="w-16 h-[2px] bg-purple-500 mb-6 mx-auto lg:mx-0"></div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight">
              Shlok <br />
              Baranwal
            </h1>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            I build scalable, efficient and beautiful web applications.
          </p>

          <a href="#work">
            <button className="px-6 py-3 rounded-2xl border border-purple-500 text-base sm:text-lg font-medium hover:bg-purple-600/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              View My Work →
            </button>
          </a>
        </motion.div>

        {/* CENTER IMAGE */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center -mt-2"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* IMAGE GLOW */}

            <div className="absolute inset-0 bg-purple-600/20 blur-[90px] rounded-[28px] scale-110"></div>

            {/* IMAGE CARD */}

            <div className="relative rounded-[28px] overflow-hidden border border-purple-500/20 bg-[#140320] backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.15)] w-[280px] sm:w-[360px] xl:w-[420px]">
              <img
                src={logo}
                alt="logo"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center lg:text-left -mt-4"
        >
          <div>
            <h2 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-[1.05] text-purple-400">
              Aspiring <br />
              Full Stack <br />
              Developer
            </h2>

            <div className="w-16 h-[2px] bg-purple-500 mt-6 mx-auto lg:mx-0"></div>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[280px] mx-auto lg:mx-0">
            Passionate about creating seamless digital experiences through code
            and innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
