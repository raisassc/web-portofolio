"use client";

import Image from "next/image";
import projects from "@/data/projects";
import experience from "@/data/experience";

export default function Home() {
  const groupedExperience = {
    "Tech & Development": experience.filter((e) =>
      [
        "Web Development",
        "Fullstack",
        "System Development",
        "Web Application Development",
      ].includes(e.category)
    ),

    "Product & Design": experience.filter((e) =>
      [
        "UI/UX",
        "Product",
        "System Analysis",
        "System Analysis & Fullstack Development",
      ].includes(e.category)
    ),

    "Marketing & Analytics": experience.filter((e) =>
      [
        "Marketing",
        "Business Intelligence",
        "Analytics",
        "Digital Media Marketing",
      ].includes(e.category)
    ),

    "Leadership & Organization": experience.filter((e) =>
      [
        "Organization",
        "Leadership",
        "Teaching",
        "Volunteer",
      ].includes(e.category)
    ),
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#fff7fb_20%,_#ffe8f2_45%,_#ffd9e8_70%,_#fbcfe8_100%)] font-sans text-zinc-800">

      {/* Dusty Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />
      </div>

      {/* Decorative Blur Background */}
      <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-pink-200 blur-[120px] opacity-40"></div>

      <div className="absolute right-[-100px] top-[40%] h-[350px] w-[350px] rounded-full bg-rose-200 blur-[120px] opacity-30"></div>

      <div className="absolute bottom-[-120px] left-[35%] h-[320px] w-[320px] rounded-full bg-fuchsia-100 blur-[100px] opacity-30"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/30 bg-white/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,182,193,0.08)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-[Cormorant_Garamond] text-3xl font-bold text-pink-700">
            Portfolio
          </h1>

          <ul className="flex gap-8 text-sm font-medium">
            {["about", "experience", "projects", "education"].map((item) => (
              <li
                key={item}
                className="relative group"
              >
                <a
                  href={`#${item}`}
                  className="capitalize transition duration-300 hover:text-pink-600"
                >
                  {item}
                </a>

                <span className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 text-pink-400 group-hover:block">
                  ❀
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-32">

        {/* Hero Section */}
        <section className="flex min-h-[85vh] flex-col justify-center">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">

          {/* LEFT: TEXT */}
          <div className="flex-1">
            <div className="mb-6 flex w-fit items-center rounded-full border border-pink-200 bg-white/60 px-6 py-2 backdrop-blur-md shadow-sm">
              <p className="text-sm font-medium text-pink-700">
                𐙚 Available for Internship
              </p>
            </div>

            <h2 className="text-lg tracking-[0.3em] uppercase text-pink-500">
              Hello, I’m
            </h2>

            <h1 className="font-[Cormorant_Garamond] bg-gradient-to-r from-pink-700 via-rose-500 to-pink-400 bg-clip-text text-7xl font-bold leading-none text-transparent">
              Raisa Sakila
            </h1>

            <p className="mt-4 text-lg tracking-[0.2em] uppercase text-pink-500">
              Information Systems • Tech Enthusiast • Product Explorer
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
              Information Systems student passionate about technology,
              digital products, and meaningful innovation.
              Blending analytical thinking with creativity to build impactful
              and elegant solutions.
            </p>

            {/* Buttons tetap */}
            {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 px-8 text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-pink-300"
              href="mailto:sakila.raisa@gmail.com"
            >
              <Image
                src="/email_white.svg"
                alt="Email"
                width={18}
                height={18}
              />

              Get in Touch
            </a>

            <a
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-pink-300 bg-white/60 px-8 backdrop-blur-md transition hover:bg-pink-50"
              href="/cv.pdf"
              target="_blank"
            >
              <Image
                src="/download.svg"
                alt="Download"
                width={18}
                height={18}
              />

              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex gap-4">

            {[
              {
                href: "https://github.com/raisassc",
                icon: "/github.svg",
                alt: "Github",
              },
              {
                href: "https://www.linkedin.com/in/raisa-sakila/",
                icon: "/linkedin.svg",
                alt: "LinkedIn",
              },
              {
                href: "mailto:sakila.raisa@gmail.com",
                icon: "/email_violet.svg",
                alt: "Email",
              },
            ].map((social, index) => (
              <a
                key={index}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white/70 backdrop-blur-md transition hover:-translate-y-1 hover:bg-pink-50"
                href={social.href}
                target="_blank"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={18}
                  height={18}
                />
              </a>
            ))}
          </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] overflow-hidden rounded-full border-4 border-white/60 shadow-[0_20px_60px_rgba(244,114,182,0.25)]">
              <Image
                src="/profile.jpg"   // <- ganti sesuai file kamu di public/
                alt="Raisa Sakila"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="flex flex-col items-center py-24 text-center"
        >
          <p className="tracking-[0.3em] uppercase text-pink-500">
            Get To Know Me
          </p>

          <h1 className="font-[Cormorant_Garamond] mt-2 text-6xl font-bold text-pink-700">
            About Me
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-700">
            I enjoy building meaningful digital experiences through
            technology, creativity, and problem-solving.
            Passionate about innovation, continuous learning,
            and creating elegant solutions with impact.
          </p>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="py-24"
        >
          <div className="text-center">
            <p className="tracking-[0.3em] uppercase text-pink-500">
              Leadership Journey
            </p>

            <h1 className="font-[Cormorant_Garamond] mt-2 text-6xl font-bold text-pink-700">
              Experience
            </h1>
          </div>

          <div className="mt-16 space-y-20">
            {Object.entries(groupedExperience).map(([group, items]) => (
              <div key={group}>
                <h2 className="mb-8 font-[Cormorant_Garamond] text-4xl font-bold text-pink-700">
                  {group}
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((exp, index) => (
                    <div
                      key={index}
                      className="group rounded-[32px] border border-white/40 bg-white/45 p-6 shadow-[0_10px_40px_rgba(244,114,182,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_15px_50px_rgba(244,114,182,0.2)]"
                    >
                      <h2 className="text-xl font-semibold transition duration-300 group-hover:text-pink-600">
                        {exp.title}
                      </h2>

                      <p className="mt-1 text-sm text-pink-500">
                        {exp.category}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-zinc-600">
                        {exp.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-pink-100 bg-pink-50/80 px-4 py-1 text-xs text-pink-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="py-24"
        >
          <div className="text-center">
            <p className="tracking-[0.3em] uppercase text-pink-500">
              Selected Works
            </p>

            <h1 className="font-[Cormorant_Garamond] mt-2 text-6xl font-bold text-pink-700">
              Projects
            </h1>
          </div>

          <div className="relative mt-16">

            {/* Left */}
            <button
              onClick={() =>
                document
                  .getElementById("project-scroll")
                  ?.scrollBy({ left: -400, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 bg-white/60 p-4 backdrop-blur-xl transition hover:scale-110 hover:bg-pink-50"
            >
              ←
            </button>

            {/* Right */}
            <button
              onClick={() =>
                document
                  .getElementById("project-scroll")
                  ?.scrollBy({ left: 400, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 bg-white/60 p-4 backdrop-blur-xl transition hover:scale-110 hover:bg-pink-50"
            >
              →
            </button>

            <div
              id="project-scroll"
              className="flex gap-8 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group min-w-[380px] max-w-[380px] rounded-[32px] border border-white/40 bg-white/45 p-6 shadow-[0_10px_40px_rgba(244,114,182,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_15px_50px_rgba(244,114,182,0.2)]"
                >
                  <div>
                    <h2 className="text-xl font-semibold transition duration-300 group-hover:text-pink-600">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-sm text-pink-500">
                      {project.category}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-pink-100 bg-pink-50/80 px-4 py-1 text-xs text-pink-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.links.github && (
                      <a
                        className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-sm transition hover:bg-pink-50"
                        href={project.links.github}
                        target="_blank"
                      >
                        <Image
                          src="/github.svg"
                          alt="GitHub"
                          width={16}
                          height={16}
                        />

                        Github
                      </a>
                    )}

                    {project.links.figma && (
                      <a
                        className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-sm transition hover:bg-pink-50"
                        href={project.links.figma}
                        target="_blank"
                      >
                        <Image
                          src="/figma.svg"
                          alt="Figma"
                          width={16}
                          height={16}
                        />

                        Figma
                      </a>
                    )}

                    {project.links.docs && (
                      <a
                        className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-sm transition hover:bg-pink-50"
                        href={project.links.docs}
                        target="_blank"
                      >
                        <Image
                          src="/file.svg"
                          alt="Docs"
                          width={16}
                          height={16}
                        />

                        Document
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="py-24"
        >
          <div className="text-center">
            <p className="tracking-[0.3em] uppercase text-pink-500">
              Academic Journey
            </p>

            <h1 className="font-[Cormorant_Garamond] mt-2 text-6xl font-bold text-pink-700">
              Education
            </h1>
          </div>

          <div className="mt-16 rounded-[32px] border border-white/40 bg-white/45 p-8 shadow-[0_10px_40px_rgba(244,114,182,0.12)] backdrop-blur-2xl">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  Universitas Indonesia
                </h2>

                <p className="text-pink-500">
                  Bachelor of Information Systems
                </p>
              </div>

              <div className="mt-4 text-sm text-zinc-500 sm:mt-0 sm:text-right">
                <p>2023 — Present</p>

                <p className="font-semibold text-pink-700">
                  GPA 3.79 / 4.00
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-zinc-600">
              Strong academic foundation in software development,
              data analytics, system analysis, and digital product management.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Programming",
                "Data Structures",
                "Artificial Intelligence",
                "Databases",
                "System Analysis",
                "Product Management",
                "Software Security",
                "Operating Systems",
              ].map((course, i) => (
                <span
                  key={i}
                  className="rounded-full border border-pink-100 bg-pink-50/80 px-4 py-2 text-sm text-pink-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/30 bg-white/30 py-8 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 text-sm text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Raisa Sakila. All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            Made with ♡ using Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}