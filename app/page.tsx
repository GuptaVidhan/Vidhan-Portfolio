"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedBackground from "./components/AnimatedBackground";
import Reveal from "./components/Reveal";
import ScrollFlip from "./components/ScrollFlip";
import SkillCard from "./components/SkillCard";
function SkillBar({
  name,
  level,
  width,
}: {
  name: string;
  level: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-gray-300">
          {name}
        </span>

        <span className="text-xs text-gray-600">
          {level}
        </span>
      </div>

      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-1000"
          style={{ width }}
        />
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen text-white">
      <AnimatedBackground />

      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:py-5 md:px-8">

          {/* Logo */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-bold tracking-wide text-white sm:text-xl"
          >
            VIDHAN<span className="text-blue-500">.</span>
          </a>


          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            {/* GitHub */}
            <a
              href="https://github.com/GuptaVidhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.13c.97 0 1.94.13 2.85.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.07.77 2.16v3.03c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vidhan-gupta-901b7424a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
              </svg>
            </a>

          </div>


          {/* Contact Button - desktop only, mobile gets the hamburger instead */}
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm text-white transition duration-300 hover:bg-white hover:text-black md:inline-block"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-all duration-300 ${
                  menuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-white transition-all duration-300 ${
                  menuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-base text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-2 flex items-center gap-5 px-3">
                  <a
                    href="https://github.com/GuptaVidhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.13c.97 0 1.94.13 2.85.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.07.77 2.16v3.03c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vidhan-gupta-901b7424a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
                    </svg>
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 rounded-full border border-white/20 px-5 py-3 text-center text-sm text-white transition hover:bg-white hover:text-black"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 sm:px-6 sm:pt-24">

        <div className="relative mx-auto w-full max-w-6xl animate-[fadeIn_1s_ease-out]">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-2 text-[11px] font-medium text-blue-400 backdrop-blur-sm sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400" />
              Data Analyst • Web Developer • AI/ML
            </span>
          </p>
          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:mt-8 sm:text-6xl sm:leading-[0.98] md:text-7xl lg:text-8xl">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="block"
            >
              Hi,
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="block"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Vidhan.
              </span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-3 block text-gray-400"
            >
              I turn data into{" "}
              <span className="text-white">meaningful insights.</span>
            </motion.span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
            I work across data analytics, web development, and AI/ML
            to build useful, data-driven solutions. My toolkit includes
            Python, SQL, Excel, Power BI, Django, JavaScript, and modern
            AI/ML technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105 sm:px-7 sm:text-base"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/10 sm:px-7 sm:text-base"
            >
              Contact Me
            </a>

          </div>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap gap-2.5 sm:mt-16 sm:gap-3">

            {[
              "Python",
              "SQL",
              "Excel",
              "Power BI",
              "Pandas",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>



      {/* About */}
      <section
        id="about"
        className="relative z-10 overflow-hidden border-t border-white/10 bg-black/30"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:py-36">

          {/* Section heading */}
          <Reveal className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-blue-400">01</span>

              <div className="h-px w-12 bg-blue-500/50" />

              <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
                About Me
              </span>
            </div>
          </Reveal>

          {/* Profile Card */}
          <Reveal delay={0.15}>
            <ScrollFlip>
              <div className="about-card relative overflow-hidden rounded-3xl border border-blue-400/50 bg-black/40 shadow-[0_0_35px_rgba(59,130,246,0.22)] backdrop-blur-xl transition-all duration-700 hover:border-blue-300/80 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]">

                {/* Card glow */}
                <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                  {/* ================= PHOTO ================= */}
                  <div className="relative flex min-h-[320px] items-end justify-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent sm:min-h-[400px] lg:min-h-[520px] lg:border-b-0 lg:border-r">

                    {/* Large glow */}
                    <div className="absolute bottom-0 h-56 w-56 rounded-full bg-blue-500/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px]" />

                    {/* Decorative circles */}
                    <div className="absolute bottom-10 h-[220px] w-[220px] rounded-full border border-blue-400/10 sm:bottom-16 sm:h-[360px] sm:w-[360px]" />

                    <div className="absolute bottom-16 h-[180px] w-[180px] rounded-full border border-blue-400/10 sm:bottom-24 sm:h-[300px] sm:w-[300px]" />

                    {/* Image */}
                    <img
                      src="/vidhan-profile.png"
                      alt="Vidhan Gupta"
                      className="relative z-10 h-[320px] w-auto object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] sm:h-[400px] lg:h-[520px]"
                    />

                    {/* Status */}
                    <div className="absolute left-4 top-4 z-20 rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl sm:left-6 sm:top-6 sm:px-4 sm:py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400" />
                        <span className="text-[11px] text-gray-300 sm:text-xs">
                          Available for opportunities
                        </span>
                      </div>
                    </div>


                    {/* Bottom label */}
                    <div className="absolute bottom-4 left-4 z-20 font-mono text-xs text-blue-400 sm:bottom-6 sm:left-6">
                      VIDHAN.GUPTA
                    </div>

                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">

                    <p className="mb-4 font-mono text-sm text-blue-400 sm:mb-5">
                      DATA • AI • CODE
                    </p>

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      Curious about
                      <br />
                      <span className="text-gray-500">
                        what data can reveal.
                      </span>
                    </h2>

                    <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-gray-400 sm:mt-8 sm:space-y-5 sm:leading-8 md:text-lg">

                      <p>
                        I'm Vidhan, a passionate learner focused on Data Analytics
                        and technology. I enjoy working with data, discovering
                        patterns and turning numbers into meaningful insights.
                      </p>

                      <p>
                        My current toolkit includes Python, SQL, Excel and Power BI.
                        I'm constantly learning through practical projects and
                        real-world datasets.
                      </p>

                    </div>

                    {/* Quick information */}
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 md:grid-cols-4">

                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                          Focus
                        </p>
                        <p className="mt-2 text-sm text-white">
                          Data Analytics
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                          Degree
                        </p>
                        <p className="mt-2 text-sm text-white">
                          B.Tech AI/ML
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                          Python
                        </p>
                        <p className="mt-2 text-sm text-white">
                          Data & AI
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                          Tools
                        </p>
                        <p className="mt-2 text-sm text-white">
                          SQL • Power BI
                        </p>
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

                      <a
                        href="/Vidhan-Gupta-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] sm:px-6 sm:py-3.5"
                      >
                        View My CV
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 sm:px-6 sm:py-3.5"
                      >
                        Let's Connect
                        <span>↗</span>
                      </a>

                    </div>

                  </div>
                </div>
              </div>
            </ScrollFlip>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-32">

          {/* Heading */}
          <Reveal>
            <div className="max-w-3xl">

              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                My Toolkit
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                Tools I use to
                <br />
                <span className="text-gray-500">
                  work with data.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8">
                Technologies I use to explore, clean, analyze,
                visualize and build with data.
              </p>

            </div>
          </Reveal>


          {/* Skill Cards */}
          <div className="mt-12 grid gap-5 sm:mt-20 sm:gap-6 lg:grid-cols-3">


            {/* DATA ANALYTICS */}
            <Reveal delay={0.1}>
              <SkillCard>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-blue-400/30 bg-black/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-[0_0_45px_rgba(59,130,246,0.22)] sm:p-8">

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-sm text-blue-400">
                        01
                      </span>

                      <span className="text-2xl text-gray-700 transition duration-500 group-hover:rotate-45 group-hover:text-blue-400">
                        ◇
                      </span>

                    </div>

                    <h3 className="mt-8 text-xl font-semibold sm:mt-12 sm:text-2xl">
                      Data Analytics
                    </h3>

                    <p className="mt-3 text-gray-500">
                      Turning raw data into meaningful insights.
                    </p>


                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">

                      {[
                        "Excel",
                        "Power BI",
                        "Python",
                        "Pandas",
                        "NumPy",
                        "Matplotlib",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-gray-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>


                    {/* Bottom */}
                    <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-600 sm:mt-12">

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                      Analytics

                    </div>

                  </div>
                </div>
              </SkillCard>
            </Reveal>


            {/* PROGRAMMING */}
            <Reveal delay={0.2}>
              <SkillCard>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-blue-400/30 bg-black/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-[0_0_45px_rgba(59,130,246,0.22)] sm:p-8">

                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-sm text-blue-400">
                        02
                      </span>

                      <span className="text-2xl text-gray-700 transition duration-500 group-hover:text-blue-400">
                        {"</>"}
                      </span>

                    </div>

                    <h3 className="mt-8 text-xl font-semibold sm:mt-12 sm:text-2xl">
                      Programming
                    </h3>

                    <p className="mt-3 text-gray-500">
                      Building solutions with code and logic.
                    </p>


                    <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">

                      {[
                        "Python",
                        "JavaScript",
                        "C++",
                        "HTML",
                        "CSS",
                        "Django",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-gray-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>


                    <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-600 sm:mt-12">

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                      Development

                    </div>

                  </div>
                </div>
              </SkillCard>
            </Reveal>


            {/* DATABASE */}
            <Reveal delay={0.3}>
              <SkillCard>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-blue-400/30 bg-black/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-[0_0_45px_rgba(59,130,246,0.22)] sm:p-8">

                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-sm text-blue-400">
                        03
                      </span>

                      <span className="text-2xl text-gray-700 transition duration-500 group-hover:scale-110 group-hover:text-blue-400">
                        ◎
                      </span>

                    </div>

                    <h3 className="mt-8 text-xl font-semibold sm:mt-12 sm:text-2xl">
                      Database
                    </h3>

                    <p className="mt-3 text-gray-500">
                      Querying and working with structured data.
                    </p>


                    <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">

                      {[
                        "SQL",
                        "MySQL",
                        "MongoDB",
                        "Data Cleaning",
                        "Data Exploration",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-gray-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>


                    <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-600 sm:mt-12">

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                      Data Systems

                    </div>

                  </div>
                </div>
              </SkillCard>
            </Reveal>

          </div>


          {/* Bottom connection line */}
          <Reveal delay={0.4}>
            <div className="mt-12 flex items-center gap-4 sm:mt-16">

              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

              <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-gray-600 sm:text-xs sm:tracking-[0.3em]">
                DATA • CODE • INSIGHTS
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            </div>
          </Reveal>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:px-8 md:py-32">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Featured Work
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-6xl md:leading-[1.05]">
              Things I've
              <br />
              <span className="text-gray-500">
                built with data.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-gray-500 md:text-right">
            A selection of projects where I explored data,
            solved problems and created useful insights.
          </p>

        </div>


        {/* Project list */}
        <div className="mt-14 space-y-6 sm:mt-20 sm:space-y-8">


          {/* Project 01 */}
          <Reveal delay={0.1}>
            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_45px_rgba(59,130,246,0.15)]">

              <div className="grid lg:grid-cols-2">

                {/* Project Preview */}
                <div className="relative min-h-[260px] overflow-hidden bg-gradient-to-br from-blue-950/40 via-black to-black sm:min-h-[320px]">

                  {/* Decorative dashboard */}
                  <div className="absolute inset-5 rounded-2xl border border-white/10 bg-black/60 p-5 transition duration-500 group-hover:scale-[1.02] sm:inset-8 sm:p-6">

                    <div className="flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-white/20" />
                      <div className="h-3 w-12 rounded-full bg-blue-500/50" />
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">

                      <div className="h-16 rounded-xl border border-white/10 bg-white/5" />
                      <div className="h-16 rounded-xl border border-white/10 bg-white/5" />
                      <div className="h-16 rounded-xl border border-white/10 bg-white/5" />

                    </div>

                    <div className="mt-4 h-32 rounded-xl border border-white/10 bg-white/5 p-4">

                      <div className="flex h-full items-end gap-2">

                        <div className="h-[40%] w-full rounded-t bg-blue-500/30" />
                        <div className="h-[65%] w-full rounded-t bg-blue-500/40" />
                        <div className="h-[50%] w-full rounded-t bg-blue-500/30" />
                        <div className="h-[85%] w-full rounded-t bg-blue-500/50" />
                        <div className="h-[70%] w-full rounded-t bg-blue-500/40" />
                        <div className="h-[95%] w-full rounded-t bg-blue-500/60" />

                      </div>

                    </div>

                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 text-[11px] text-gray-400 backdrop-blur sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-xs">
                    POWER BI
                  </div>

                </div>


                {/* Project information */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">

                  <div>

                    <div className="flex items-center justify-between">

                      <span className="text-sm text-blue-400">
                        01 / 04
                      </span>

                      <span className="text-sm text-gray-600">
                        Data Analytics
                      </span>

                    </div>

                    <h3 className="mt-6 text-2xl font-bold sm:mt-8 sm:text-3xl md:text-4xl">
                      Sales Analytics Dashboard
                    </h3>

                    <p className="mt-5 leading-7 text-gray-500 sm:mt-6 sm:leading-8">
                      An interactive dashboard designed to analyze
                      sales performance, profit, products and regional
                      trends.
                    </p>


                    {/* Key insight */}
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-8">

                      <p className="text-xs uppercase tracking-wider text-blue-400">
                        Key Focus
                      </p>

                      <p className="mt-2 text-gray-300">
                        Sales performance • Profit analysis •
                        Regional trends
                      </p>

                    </div>


                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">

                      {["Power BI", "Excel", "SQL"].map((tech) => (

                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">

                    <a
                      href="#"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105 sm:px-6 sm:py-3"
                    >
                      View Project ↗
                    </a>

                    <a
                      href="#"
                      className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 sm:px-6 sm:py-3"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </div>

            </article>
          </Reveal>


          {/* Project 02 */}
          <Reveal delay={0.2}>
            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-blue-500/40">

              <div className="grid lg:grid-cols-2">


                {/* Information first */}
                <div className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-12">

                  <div>

                    <div className="flex items-center justify-between">

                      <span className="text-sm text-blue-400">
                        02 / 04
                      </span>

                      <span className="text-sm text-gray-600">
                        Python
                      </span>

                    </div>

                    <h3 className="mt-6 text-2xl font-bold sm:mt-8 sm:text-3xl md:text-4xl">
                      Language Translator
                    </h3>

                    <p className="mt-5 leading-7 text-gray-500 sm:mt-6 sm:leading-8">
                      A language translation project using Natural Language
                      Processing to translate text between different languages.
                    </p>


                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-8">
                      <p className="mt-2 text-gray-300">
                        Natural Language Processing • Text Translation •
                        Language Models
                      </p>


                    </div>


                    <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                      {["Python", "NLP", "NMT"].map((tech) => (

                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>


                  <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">

                    <a
                      href="#"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105 sm:px-6 sm:py-3"
                    >
                      View Project ↗
                    </a>

                    <a
                      href="#"
                      className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 sm:px-6 sm:py-3"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>


                {/* Python visualization */}
                <div className="relative order-1 min-h-[260px] overflow-hidden bg-gradient-to-br from-purple-950/30 via-black to-black sm:min-h-[320px] lg:order-2">

                  <div className="absolute inset-5 rounded-2xl border border-white/10 bg-black/70 p-5 font-mono sm:inset-8 sm:p-6">

                    <div className="text-xs text-gray-600">
                      analysis.py
                    </div>

                    <div className="mt-6 space-y-3 text-xs sm:mt-8 sm:text-sm">

                      <p>
                        <span className="text-purple-400">import</span>{" "}
                        <span className="text-gray-300">pandas</span>
                      </p>

                      <p>
                        <span className="text-purple-400">import</span>{" "}
                        <span className="text-gray-300">matplotlib</span>
                      </p>

                      <p className="pt-4 text-gray-500">
                        # Explore the dataset
                      </p>

                      <p>
                        df{" "}
                        <span className="text-purple-400">=</span>{" "}
                        pd.read_csv(
                        <span className="text-green-400">
                          "data.csv"
                        </span>
                        )
                      </p>

                      <p>
                        df.describe()
                      </p>

                    </div>

                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 text-[11px] text-gray-400 backdrop-blur sm:bottom-6 sm:right-6 sm:px-4 sm:py-2 sm:text-xs">
                    NLP
                  </div>

                </div>

              </div>

            </article>
          </Reveal>


          {/* Project 03 */}
          <Reveal delay={0.3}>
            <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:-translate-y-1 hover:border-blue-500/40 sm:p-8 lg:p-12">

              <div className="flex flex-col justify-between gap-6 sm:gap-10 lg:flex-row lg:items-center">

                <div className="max-w-2xl">

                  <span className="text-sm text-blue-400">
                    03 / 04
                  </span>

                  <h3 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl md:text-4xl">
                    Smart Football Segmentation
                  </h3>
                  <p className="mt-4 leading-7 text-gray-500 sm:mt-5 sm:leading-8">
                    A computer vision project focused on identifying and
                    segmenting football players from match footage using
                    machine learning and deep learning techniques.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">

                    {["Python", "Machine Learning", "Deep Learning", "Computer Vision"].map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                <a
                  href="#"
                  className="inline-block whitespace-nowrap rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
                >
                  View Project ↗
                </a>

              </div>

            </article>
          </Reveal>


          {/* Project 04 */}
          <Reveal delay={0.4}>
            <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:-translate-y-1 hover:border-blue-500/40 sm:p-8 lg:p-12">

              <div className="flex flex-col justify-between gap-6 sm:gap-10 lg:flex-row lg:items-center">

                <div className="max-w-2xl">

                  <span className="text-sm text-blue-400">
                    04 / 04
                  </span>

                  <h3 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl md:text-4xl">
                    Energy Efficient Node Localization
                  </h3>
                  <p className="mt-4 leading-7 text-gray-500 sm:mt-5 sm:leading-8">
                    A deep learning-based project focused on efficient node
                    localization in wireless sensor networks for real-time
                    environmental and agricultural monitoring.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                    {[
                      "Deep Learning",
                      "Wireless Sensor Networks",
                      "Real-Time Monitoring",
                    ].map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                <a
                  href="#"
                  className="inline-block whitespace-nowrap rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
                >
                  View Project ↗
                </a>

              </div>

            </article>
          </Reveal>

        </div>

      </section>
      {/* Journey */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-32">

          {/* Heading */}
          <div className="max-w-3xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              My Journey
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Experience,
              <br />
              <span className="text-gray-500">
                education & growth.
              </span>
            </h2>

          </div>


          {/* Timeline */}
          <div className="mt-12 sm:mt-20">


            {/* LLM Internship */}
            <div className="grid gap-3 border-t border-white/10 py-8 sm:gap-8 sm:py-10 md:grid-cols-[200px_1fr]">

              <div>
                <p className="text-sm text-blue-400">
                  EXPERIENCE
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Feb 2026 — May 2026
                </p>
              </div>


              <div>

                <h3 className="text-xl font-semibold sm:text-2xl">
                  LLM Intern
                </h3>

                <p className="mt-2 text-gray-500">
                  Ethara.AI · Gurugram
                </p>

                <ul className="mt-5 max-w-2xl space-y-3 text-gray-500 sm:mt-6">

                  <li>
                    • Assisted team in organizing project materials
                    and resources efficiently.
                  </li>

                  <li>
                    • Conducted research to support ongoing projects
                    and client needs.
                  </li>

                  <li>
                    • Collaborated with colleagues to streamline
                    communication.
                  </li>

                </ul>

              </div>

            </div>


            {/* Web Developer Internship */}
            <div className="grid gap-3 border-t border-white/10 py-8 sm:gap-8 sm:py-10 md:grid-cols-[200px_1fr]">

              <div>
                <p className="text-sm text-blue-400">
                  EXPERIENCE
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Aug 2025 — Oct 2025
                </p>
              </div>


              <div>

                <h3 className="text-xl font-semibold sm:text-2xl">
                  Web Developer Intern
                </h3>

                <p className="mt-2 text-gray-500">
                  Orphic Solutions
                </p>

                <ul className="mt-5 max-w-2xl space-y-3 text-gray-500 sm:mt-6">

                  <li>
                    • Assisted team in organizing project materials
                    and resources efficiently.
                  </li>

                  <li>
                    • Conducted research to support ongoing projects
                    and client needs.
                  </li>

                  <li>
                    • Supported onboarding of new interns through
                    orientation activities.
                  </li>

                </ul>

              </div>

            </div>


            {/* Education */}
            <div className="grid gap-3 border-t border-white/10 py-8 sm:gap-8 sm:py-10 md:grid-cols-[200px_1fr]">

              <div>
                <p className="text-sm text-blue-400">
                  EDUCATION
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  2026
                </p>
              </div>


              <div>

                <h3 className="text-xl font-semibold sm:text-2xl">
                  Bachelor of Technology
                </h3>

                <p className="mt-2 text-gray-400">
                  Computer Science — AI/ML
                </p>

                <p className="mt-2 text-gray-500">
                  Dr. A. P. J. Abdul Kalam Technical University
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-gray-500 sm:mt-6">
                  Focused on artificial intelligence, machine
                  learning, programming and modern technology.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>
      {/* Achievements */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8 md:py-24">

          <div className="grid gap-8 sm:gap-12 md:grid-cols-[1fr_2fr]">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Highlights
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Key achievements
              </h2>

            </div>


            <div className="grid gap-4">

              {[
                "Volunteered in organizing a tech fest",
                "Built a football player segmentation model using ML & DL",
                "Attended webinars and workshops on AI, Cybersecurity and Cloud",
                "Top performer in college coding fests",
              ].map((achievement, index) => (

                <div
                  key={achievement}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-blue-500/40 sm:items-center sm:gap-6 sm:p-6"
                >

                  <span className="shrink-0 text-sm text-blue-400">
                    0{index + 1}
                  </span>

                  <p className="text-sm text-gray-300 sm:text-base">
                    {achievement}
                  </p>

                  <span className="ml-auto shrink-0 text-gray-700 transition group-hover:text-blue-400">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10"
      >

        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-6 md:py-32">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Let's build something
            <br />
            <span className="text-gray-500">
              meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400 sm:mt-8">
            I'm always interested in learning, building projects
            and connecting with people working with data and technology.
          </p>

          <a
            href="mailto:guptavidhan42@gmail.com"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105 sm:mt-10 sm:px-8 sm:py-4 sm:text-base"
          >
            Get In Touch →
          </a>

        </div>

      </section>



      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-gray-500">
        © 2026 Vidhan. Built with Next.js.
      </footer>

    </main>
  );
}