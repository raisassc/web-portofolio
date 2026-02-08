import Image from "next/image";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FCE7F3] font-sans dark:bg-zinc-900">

      {/*Navbar*/}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold">Welcome</h1>

          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-pink-600 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-pink-600 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-pink-600 transition">
                Education
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*End of Navbar*/}
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-24 px-16 sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
       <div className="flex items-center rounded-md bg-white px-6 py-2 dark:bg-zinc-800">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-50">
            Available for Internship
          </p>
        </div>

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left py-6 w-full">
          <h1 className="text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Hello, I'm
          </h1>
          <h1 className="text-3xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Raisa Sakila
          </h1>
          <h1 className="text-xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Information System Student
          </h1>
          <h2 className="text-l leading-10 tracking-tight text-black dark:text-zinc-50">
            Tech Enthusiast | Product Lover | Data Lover | Software Lover | Problem Solver
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-justify">
            A disciplined and responsible Information Systems undergraduate with strong critical thinking and time management skills. Experienced in academic assistance, volunteer work, and technology-driven projects, with a solid foundation in web development and system analysis. Highly motivated to learn, adaptable to new environments, and driven by a strong interest in innovation, research, and technology. Approaches challenges analytically and is committed to continuous personal and professional growth.
            {/* <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "} */}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/email_white.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Get in Touch
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[180px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/download.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Download CV
          </a>
        </div>
        <div className="flex flex-col gap-4 py-4 sm:flex-row">
          <a 
            className="flex h-12 w-full items-center justify-center border border-solid border-black/[.08] gap-2 rounded-full px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[80px]"
            href="https://github.com/raisassc"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              className="dark:invert"
              src="/github.svg"
              alt="Github"
              width={16}
              height={16}
              color="#8200DB"/>
          </a>
          <a 
            className="flex h-12 w-full items-center justify-center border border-solid border-black/[.08] gap-2 rounded-full px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[80px]"
            href="https://www.linkedin.com/in/raisa-sakila/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              className="dark:invert"
              src="/linkedin.svg"
              alt="Github"
              width={16}
              height={16}/>
          </a>
          <a 
            className="flex h-12 w-full items-center justify-center border border-solid border-black/[.08] gap-2 rounded-full px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[80px]"
            href="mailto:sakila.raisa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              className="dark:invert"
              src="/email_violet.svg"
              alt="Github"
              width={16}
              height={16}/>
          </a>
        </div>

        {/* About me section */}
        <div id="about" className="flex flex-col gap-4 items-center text-center sm:text-left py-6 w-full">
          <h1 className="text-xl font-semibold">
            Get to Know Me
          </h1>
          <h1 className="text-3xl font-bold">
            About Me
          </h1>
          <p className="text-justify">
            I am an Information Systems undergraduate with a strong interest in technology, innovation, and continuous learning. I enjoy working on projects that involve problem-solving, system analysis, and web development, and I am always eager to explore new tools and technologies.
            Through academic, organizational, and volunteer experiences, I have developed strong critical thinking, time management, and communication skills. I am known as a responsible and detail-oriented individual who approaches challenges thoughtfully and analytically. I believe that growth comes from curiosity, consistency, and the willingness to learn from every experience.
          </p>
        </div>

        {/* Project section */}
        <div id="projects" className="flex flex-col gap-4 items-center text-center sm:text-left py-16 w-full">
          <h1 className="text-3xl font-bold">
            Projects and Case Study
          </h1>
          <p className="text-justify">
              A collection of academic and practical projects highlighting my experience in system analysis, web development, and data-driven problem solving.
          </p>

          {/* card for project */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl bg-white dark:bg-zinc-800 p-6 shadow-sm"
              >
                <div>
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-sm text-zinc-500">{project.category}</p>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {project.links.github && (
                    <a className="flex items-center gap-2 border border-solid border-black/[.08] px-2 py-1 rounded-md" href={project.links.github} target="_blank">
                      <Image src="/github.svg" alt="GitHub" width={18} height={18} />
                      <p className="text-xs">Github</p>
                    </a>
                  )}
                  {project.links.github2 && (
                    <a className="flex items-center gap-2 border border-solid border-black/[.08] px-2 py-1 rounded-md" href={project.links.github2} target="_blank">
                      <Image src="/github.svg" alt="GitHub" width={18} height={18} />
                      <p className="text-xs">Github</p>
                    </a>
                  )}
                  {project.links.figma && (
                    <a className="flex items-center gap-2 border border-solid border-black/[.1] px-2 py-1 rounded-md" href={project.links.figma} target="_blank">
                      <Image src="/figma.svg" alt="Figma" width={18} height={18} />
                      <p className="text-xs">Figma</p>
                    </a>
                  )}
                  {project.links.docs && (
                    <a className="flex items-center gap-2 border border-solid border-black/[.08] px-2 py-1 rounded-md" href={project.links.docs} target="_blank">
                      <Image src="/file.svg" alt="Docs" width={18} height={18} color="#666"/>
                      <p className="text-xs">Document</p>
                    </a>
                  )}
                  {project.links.slides && (
                    <a className="flex items-center gap-2 border border-solid border-black/[.08] px-2 py-1 rounded-md" href={project.links.slides} target="_blank">
                      <Image src="/slide.svg" alt="Slides" width={18} height={18} /> <p className="text-xs">Slides</p>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*end of project section*/}

        {/*Education Information*/}
        {/* Education Section */}
        <div id="education" className="flex flex-col items-center gap-4 py-10 w-full">
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Education
          </h1>
           <p className="text-justify">
             Formal Education Background
          </p>
          <div className="rounded-xl bg-white dark:bg-zinc-800 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  Universitas Indonesia
                </h2>
                <p className="text-sm text-zinc-500">
                  Bachelor of Information Systems
                </p>
              </div>

              <div className="mt-2 sm:mt-0 text-sm text-zinc-500 text-left sm:text-right">
                <p>2023 – Present</p>
                <p className="font-semibold text-black dark:text-zinc-100">
                  GPA 3.79 / 4.00
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 text-justify">
              An Information Systems undergraduate at Universitas Indonesia with strong
              academic performance and a solid foundation in software development,
              system analysis, data analytics, and digital product management.
            </p>

            {/* Highlighted Courses */}
            <div className="mt-4 flex flex-wrap gap-2">
              {/* Programming & Software */}
              <span className="badge">Programming Fundamentals I & II</span>
              <span className="badge">Data Structures & Algorithms</span>
              <span className="badge">Platform-Based Programming</span>

              {/* Data & AI */}
              <span className="badge">Statistics</span>
              <span className="badge">Databases</span>
              <span className="badge">Artificial Intelligence & Data Science</span>

              {/* System & Product */}
              <span className="badge">Information Systems Analysis & Design</span>
              <span className="badge">Information Systems Management</span>
              <span className="badge">Digital Product Management</span>

              {/* Security & Infra */}
              <span className="badge">Software Security</span>
              <span className="badge">Operating Systems</span>
              <span className="badge">Computer Architecture</span>
            </div>
          </div>
        </div>


        {/*Contact and Information*/}
        <div>

        </div>
      </main>
    </div>
  );
}
