import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050509] px-5 sm:px-6 lg:px-20 py-24 md:py-32"
    >
      {/* GLOW */}

      <div className="absolute top-1/2 left-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[180px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[6px] text-sm sm:text-lg mb-5">
            Contact Me
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]">
            Let's Build Something{" "}
            <span className="text-purple-400">Amazing</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Have a project idea, collaboration opportunity or just want to
            connect? Feel free to send me a message.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            {/* EMAIL */}

            <div className="rounded-[28px] border border-purple-500/20 bg-[#12031d]/70 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white mb-5">Email</h3>

              <a
                href="mailto:bandwarshlok@gmail.com"
                className="block w-full text-center sm:text-left px-5 py-4 rounded-2xl border border-purple-500/20 hover:bg-purple-500/10 transition text-zinc-300 break-all"
              >
                bandwarshlok@gmail.com
              </a>
            </div>

            {/* SOCIAL */}

            <div className="rounded-[28px] border border-purple-500/20 bg-[#12031d]/70 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white mb-5">
                Socials
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-5 py-3 rounded-xl border border-purple-500/20 hover:bg-purple-500/10 transition text-zinc-300"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="px-5 py-3 rounded-xl border border-purple-500/20 hover:bg-purple-500/10 transition text-zinc-300"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="px-5 py-3 rounded-xl border border-purple-500/20 hover:bg-purple-500/10 transition text-zinc-300"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* LOCATION */}

            <div className="rounded-[28px] border border-purple-500/20 bg-[#12031d]/70 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Location
              </h3>

              <p className="text-zinc-400 text-lg">Mumbai, India</p>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-purple-500/20 bg-[#12031d]/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/30 border border-purple-500/20 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition placeholder:text-zinc-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-black/30 border border-purple-500/20 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition placeholder:text-zinc-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-black/30 border border-purple-500/20 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition placeholder:text-zinc-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-black/30 border border-purple-500/20 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition resize-none placeholder:text-zinc-500"
            ></textarea>

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 35px rgba(168,85,247,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition text-white font-medium text-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
