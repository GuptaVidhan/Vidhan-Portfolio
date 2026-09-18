"use client";

import { motion } from "motion/react";
import AnimatedBackground from "./components/AnimatedBackground";
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





export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <AnimatedBackground />

 {/* Navbar */}
<nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">

    {/* Logo */}
    <a href="#" className="text-xl font-bold tracking-wide">
      VIDHAN<span className="text-blue-500">.</span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 md:flex">
      <a href="#about" className="text-gray-300 transition hover:text-white">
        About
      </a>

      <a href="#skills" className="text-gray-300 transition hover:text-white">
        Skills
      </a>

      <a href="#projects" className="text-gray-300 transition hover:text-white">
        Projects
      </a>

      <a href="#contact" className="text-gray-300 transition hover:text-white">
        Contact
      </a>
    </div>

    {/* Contact Button */}
    <a
      href="#contact"
      className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
    >
      Let's Talk
    </a>

  </div>
</nav>


      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">

      
    


          <div className="relative mx-auto w-full max-w-6xl animate-[fadeIn_1s_ease-out]">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm">
  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
  Data Analyst • AI/ML • Python
</span>
          </p>
         <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
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
    I turn data into
    <br />
    <span className="text-white">meaningful insights.</span>
  </motion.span>
</h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
  I work with data, code, and intelligent systems to turn complex
  information into clear, actionable insights. My toolkit includes
  Python, SQL, Excel, Power BI, and modern AI/ML technologies.
</p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:bg-white/10"
            >
              Contact Me
            </a>

          </div>

          {/* Technologies */}
          <div className="mt-16 flex flex-wrap gap-3">

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
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
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
  <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:py-36">

    {/* Section heading */}
    <div className="mb-14 flex items-center gap-4">
      <span className="font-mono text-sm text-blue-400">01</span>

      <div className="h-px w-12 bg-blue-500/50" />

      <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
        About Me
      </span>
    </div>

    {/* Profile Card */}
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

      {/* Card glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* ================= PHOTO ================= */}
        <div className="relative flex min-h-[520px] items-end justify-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent lg:border-b-0 lg:border-r">

          {/* Large glow */}
          <div className="absolute bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[110px]" />

          {/* Decorative circles */}
          <div className="absolute bottom-16 h-[360px] w-[360px] rounded-full border border-blue-400/10" />

          <div className="absolute bottom-24 h-[300px] w-[300px] rounded-full border border-blue-400/10" />

          {/* Image */}
          <img
            src="/vidhan-profile.png"
            alt="Vidhan Gupta"
            className="relative z-10 h-[520px] w-auto object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          />

          {/* Status */}
          <div className="absolute left-6 top-6 z-20 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-xs text-gray-300">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-6 left-6 z-20 font-mono text-xs text-blue-400">
            VIDHAN.GUPTA
          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

          <p className="mb-5 font-mono text-sm text-blue-400">
            DATA • AI • CODE
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Curious about
            <br />
            <span className="text-gray-500">
              what data can reveal.
            </span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-gray-400 md:text-lg">

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
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">

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
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/Vidhan-Gupta-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              View My CV
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              Let's Connect
              <span>↗</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills */}
<section
  id="skills"
  className="border-y border-white/10 bg-white/[0.02]"
>
  <div className="mx-auto max-w-7xl px-6 py-32 md:px-8">

    {/* Heading */}
    <div className="max-w-3xl">

      <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
        My Toolkit
      </p>

      <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
        Tools I use to
        <br />
        <span className="text-gray-500">
          work with data.
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-500">
        A growing collection of technologies I use to
        explore, clean, analyze and visualize data.
      </p>

    </div>


    {/* Skills */}
    <div className="mt-20 grid gap-6 lg:grid-cols-3">

      {/* Data Analytics */}
      <div className="group rounded-3xl border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">

        <div className="flex items-center justify-between">

          <span className="text-sm text-blue-400">
            01
          </span>

          <span className="text-2xl text-gray-700">
            ◇
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Data Analytics
        </h3>

        <p className="mt-3 text-gray-500">
          Analyzing data and discovering useful patterns.
        </p>


        <div className="mt-10 space-y-6">

          <SkillBar name="Excel" level="Advanced" width="85%" />

          <SkillBar name="Power BI" level="Intermediate" width="75%" />

          <SkillBar name="Visualization" level="Intermediate" width="75%" />

        </div>

      </div>


      {/* Programming */}
      <div className="group rounded-3xl border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">

        <div className="flex items-center justify-between">

          <span className="text-sm text-blue-400">
            02
          </span>

          <span className="text-2xl text-gray-700">
            {"</>"}
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Programming
        </h3>

        <p className="mt-3 text-gray-500">
          Using Python to manipulate and analyze data.
        </p>


        <div className="mt-10 space-y-6">

          <SkillBar name="Python" level="Advanced" width="85%" />

          <SkillBar name="Pandas" level="Intermediate" width="75%" />

          <SkillBar name="NumPy" level="Intermediate" width="70%" />

        </div>

      </div>


      {/* Database */}
      <div className="group rounded-3xl border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">

        <div className="flex items-center justify-between">

          <span className="text-sm text-blue-400">
            03
          </span>

          <span className="text-2xl text-gray-700">
            ◎
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold">
          Database
        </h3>

        <p className="mt-3 text-gray-500">
          Querying and exploring structured datasets.
        </p>


        <div className="mt-10 space-y-6">

          <SkillBar name="SQL" level="Advanced" width="85%" />

          <SkillBar name="Data Cleaning" level="Intermediate" width="75%" />

          <SkillBar name="Data Exploration" level="Intermediate" width="75%" />

        </div>

      </div>

    </div>

  </div>
</section>



      {/* Projects */}
<section id="projects" className="mx-auto max-w-6xl px-6 py-32 md:px-8">

{/* Heading */}
<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

  <div>
    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      Featured Work
    </p>

    <h2 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
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
<div className="mt-20 space-y-8">


  {/* Project 01 */}
  <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-blue-500/40">

    <div className="grid lg:grid-cols-2">

      {/* Project Preview */}
      <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-blue-950/40 via-black to-black">

        {/* Decorative dashboard */}
        <div className="absolute inset-8 rounded-2xl border border-white/10 bg-black/60 p-6 transition duration-500 group-hover:scale-[1.02]">

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

        <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs text-gray-400 backdrop-blur">
          POWER BI
        </div>

      </div>


      {/* Project information */}
      <div className="flex flex-col justify-between p-8 lg:p-12">

        <div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-blue-400">
              01 / 04
            </span>

            <span className="text-sm text-gray-600">
              Data Analytics
            </span>

          </div>

          <h3 className="mt-8 text-3xl font-bold md:text-4xl">
            Sales Analytics Dashboard
          </h3>

          <p className="mt-6 leading-8 text-gray-500">
            An interactive dashboard designed to analyze
            sales performance, profit, products and regional
            trends.
          </p>


          {/* Key insight */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">

            <p className="text-xs uppercase tracking-wider text-blue-400">
              Key Focus
            </p>

            <p className="mt-2 text-gray-300">
              Sales performance • Profit analysis •
              Regional trends
            </p>

          </div>


          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">

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
        <div className="mt-10 flex gap-3">

          <a
            href="#"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
          >
            View Project ↗
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-gray-300 transition hover:bg-white/10"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* Project 02 */}
  <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-blue-500/40">

    <div className="grid lg:grid-cols-2">


      {/* Information first */}
      <div className="order-2 flex flex-col justify-between p-8 lg:order-1 lg:p-12">

        <div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-blue-400">
              02 / 04
            </span>

            <span className="text-sm text-gray-600">
              Python
            </span>

          </div>

          <h3 className="mt-8 text-3xl font-bold md:text-4xl">
            Exploratory Data Analysis
          </h3>

          <p className="mt-6 leading-8 text-gray-500">
            A Python-based analysis project focused on
            cleaning a dataset, exploring patterns and
            visualizing important findings.
          </p>


          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">

            <p className="text-xs uppercase tracking-wider text-blue-400">
              Key Focus
            </p>

            <p className="mt-2 text-gray-300">
              Data cleaning • Exploration • Visualization
            </p>

          </div>


          <div className="mt-8 flex flex-wrap gap-2">

            {["Python", "Pandas", "NumPy", "Matplotlib"].map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>


        <div className="mt-10 flex gap-3">

          <a
            href="#"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
          >
            View Project ↗
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-gray-300 transition hover:bg-white/10"
          >
            GitHub ↗
          </a>

        </div>

      </div>


      {/* Python visualization */}
      <div className="relative order-1 min-h-[320px] overflow-hidden bg-gradient-to-br from-purple-950/30 via-black to-black lg:order-2">

        <div className="absolute inset-8 rounded-2xl border border-white/10 bg-black/70 p-6 font-mono">

          <div className="text-xs text-gray-600">
            analysis.py
          </div>

          <div className="mt-8 space-y-3 text-sm">

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

        <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs text-gray-400 backdrop-blur">
          PYTHON
        </div>

      </div>

    </div>

  </article>


  {/* Project 03 */}
  <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-blue-500/40 lg:p-12">

    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

      <div className="max-w-2xl">

        <span className="text-sm text-blue-400">
          03 / 04
        </span>

        <h3 className="mt-6 text-3xl font-bold md:text-4xl">
          SQL Data Exploration
        </h3>

        <p className="mt-5 leading-8 text-gray-500">
          A collection of SQL queries used to explore
          datasets, identify trends and answer
          business-focused questions.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {["SQL", "Data Analysis", "Database"].map((tech) => (

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
        className="whitespace-nowrap rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
      >
        Explore Project ↗
      </a>

    </div>

  </article>


  {/* Project 04 */}
  <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-blue-500/40 lg:p-12">

    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

      <div className="max-w-2xl">

        <span className="text-sm text-blue-400">
          04 / 04
        </span>

        <h3 className="mt-6 text-3xl font-bold md:text-4xl">
          Business Insights Dashboard
        </h3>

        <p className="mt-5 leading-8 text-gray-500">
          A business-focused dashboard that transforms
          raw data into clear visual insights for
          decision-making.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {["Power BI", "Excel", "Data Visualization"].map((tech) => (

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
        className="whitespace-nowrap rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
      >
        Explore Project ↗
      </a>

    </div>

  </article>

</div>

</section>
       {/* Journey */}
<section className="border-t border-white/10">

<div className="mx-auto max-w-7xl px-6 py-32 md:px-8">

  {/* Heading */}
  <div className="max-w-3xl">

    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      My Journey
    </p>

    <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
      Experience,
      <br />
      <span className="text-gray-500">
        education & growth.
      </span>
    </h2>

  </div>


  {/* Timeline */}
  <div className="mt-20">


    {/* LLM Internship */}
    <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[200px_1fr]">

      <div>
        <p className="text-sm text-blue-400">
          EXPERIENCE
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Feb 2026 — May 2026
        </p>
      </div>


      <div>

        <h3 className="text-2xl font-semibold">
          LLM Intern
        </h3>

        <p className="mt-2 text-gray-500">
          Ethara.AI · Gurugram
        </p>

        <ul className="mt-6 max-w-2xl space-y-3 text-gray-500">

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
    <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[200px_1fr]">

      <div>
        <p className="text-sm text-blue-400">
          EXPERIENCE
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Aug 2025 — Oct 2025
        </p>
      </div>


      <div>

        <h3 className="text-2xl font-semibold">
          Web Developer Intern
        </h3>

        <p className="mt-2 text-gray-500">
          Orphic Solutions
        </p>

        <ul className="mt-6 max-w-2xl space-y-3 text-gray-500">

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
    <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[200px_1fr]">

      <div>
        <p className="text-sm text-blue-400">
          EDUCATION
        </p>

        <p className="mt-2 text-sm text-gray-600">
          2026
        </p>
      </div>


      <div>

        <h3 className="text-2xl font-semibold">
          Bachelor of Technology
        </h3>

        <p className="mt-2 text-gray-400">
          Computer Science — AI/ML
        </p>

        <p className="mt-2 text-gray-500">
          Dr. A. P. J. Abdul Kalam Technical University
        </p>

        <p className="mt-6 max-w-2xl leading-7 text-gray-500">
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

<div className="mx-auto max-w-7xl px-6 py-24 md:px-8">

  <div className="grid gap-12 md:grid-cols-[1fr_2fr]">

    <div>

      <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
        Highlights
      </p>

      <h2 className="mt-5 text-4xl font-bold">
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
          className="group flex items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-blue-500/40"
        >

          <span className="text-sm text-blue-400">
            0{index + 1}
          </span>

          <p className="text-gray-300">
            {achievement}
          </p>

          <span className="ml-auto text-gray-700 transition group-hover:text-blue-400">
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

        <div className="mx-auto max-w-6xl px-6 py-32 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Let's build something
            <br />
            <span className="text-gray-500">
              meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-gray-400">
            I'm always interested in learning, building projects
            and connecting with people working with data and technology.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Get In Touch →
          </a>

        </div>

      </section>
      


      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © 2026 Vidhan. Built with Next.js.
      </footer>

    </main>
  );
}