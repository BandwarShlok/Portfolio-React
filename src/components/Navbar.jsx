import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "#home",
    },

    {
      name: "About",
      path: "#about",
    },

    {
      name: "Work",
      path: "#work",
    },

    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <>
      {/* TOP NAVBAR */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between">

          {/* LOGO */}

          <a href="#home">
            <motion.h1
              whileHover={{
                scale: 1.05,
                textShadow:
                  "0px 0px 12px rgba(168,85,247,0.8)",
              }}
              className="text-2xl font-bold tracking-wide text-white"
            >
              SHLOK
            </motion.h1>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-10 text-sm">

            {navLinks.map((link) => (

              <motion.a
                key={link.path}
                href={link.path}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`relative transition duration-300 ${
                  activeLink === link.path
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}

                {activeLink === link.path && (
                  <motion.span
                    layoutId="desktopUnderline"
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-purple-500 rounded-full"
                  />
                )}

              </motion.a>

            ))}

          </nav>

        </div>
      </motion.header>

      {/* MOBILE BOTTOM NAV */}

      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%]">

        <div className="flex items-center justify-between px-5 py-4 rounded-2xl border border-purple-500/20 bg-black/80 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.18)]">

          {navLinks.map((link) => (

            <motion.a
              key={link.path}
              href={link.path}
              whileTap={{
                scale: 0.9,
              }}
              className={`relative text-[15px] transition duration-300 ${
                activeLink === link.path
                  ? "text-white"
                  : "text-zinc-400"
              }`}
            >
              {link.name}

              {activeLink === link.path && (
                <motion.span
                  layoutId="mobileUnderline"
                  className="absolute left-0 -bottom-2 w-full h-[2px] bg-purple-500 rounded-full"
                />
              )}

            </motion.a>

          ))}

        </div>

      </div>
    </>
  );
}

export default Navbar;