'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  ExternalLink, 
  FolderGit2, 
  Users, 
  GraduationCap, 
  Layers, 
  FileText, 
  Presentation, 
  Compass,
  Terminal,
  Sparkles,
  Megaphone,
  Briefcase
} from 'lucide-react';
import projects from '@/data/projects';
import experience from '@/data/experience';

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Faculty of Computer Science, University of Indonesia (Fasilkom UI)",
    duration: "2023 - Present",
    status: "Active Student",
  },
];

// Component pembungkus Section agar memiliki efek Scroll Reveal & Animasi Garis otomatis
function AnimatedSection({ children, id, className, glowColor }: { children: React.ReactNode, id: string, className?: string, glowColor: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 transition-all duration-1000 ${className}`}>
      {/* Garis Pembatas dengan Animasi Melebar & Berpijar secara dinamis saat di-scroll */}
      <div 
        className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent ${glowColor} to-transparent transition-all duration-1000 origin-center`}
        style={{
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          opacity: isVisible ? 0.8 : 0
        }}
      />
      {/* Konten di dalam Section ikut memudar naik secara elegan */}
      <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {children}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const getCategoryIcon = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'system development':
        return <Terminal size={14} className="text-blue-400" />;
      case 'product':
        return <Sparkles size={14} className="text-purple-400" />;
      case 'marketing':
        return <Megaphone size={14} className="text-pink-400" />;
      default:
        return <Briefcase size={14} className="text-zinc-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 font-sans antialiased selection:bg-purple-500/30 selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* Subtle Background Gradients - Diperhalus jangkauan blurnya */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-950/15 via-blue-950/5 to-transparent pointer-events-none blur-[150px] z-0" />
      <div className="absolute top-[1200px] right-[-10%] w-[500px] h-[500px] bg-blue-950/10 pointer-events-none blur-[130px] z-0" />
      <div className="absolute bottom-[400px] left-[-10%] w-[500px] h-[500px] bg-purple-950/10 pointer-events-none blur-[130px] z-0" />

      {/* Header / Navbar */}
      <nav className="relative z-50 max-w-5xl mx-auto px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#030712]/60 sticky top-0 border-b border-zinc-900/40">
        <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
          Raisa Sakila.
        </span>
        <div className="flex gap-6 text-xs font-medium text-zinc-400">
          <a href="#projects" className="hover:text-zinc-100 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all">Projects</a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all">Experience</a>
          <a href="#education" className="hover:text-zinc-100 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all">Education</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 max-w-3xl mx-auto text-center pt-24 pb-32 px-6 flex flex-col items-center animate-fadeIn">
        {/* Profile Picture Frame Modern */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 p-[1.5px] mb-8 shadow-2xl shadow-black/80 overflow-hidden transform hover:scale-105 transition-all duration-500">
          <img 
            src="RaisaSakila.jpeg" 
            alt="Raisa Sakila"
            className="w-full h-full object-cover rounded-full bg-zinc-950 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Raisa Sakila
        </h1>

        {/* Badges Berkelas */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {['Data Science', 'Product Management', 'Growth Marketing'].map((interest) => (
            <span key={interest} className="px-3.5 py-1 text-[11px] font-medium rounded-full bg-zinc-900/40 border border-zinc-800/60 text-zinc-300 tracking-wide hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
              {interest}
            </span>
          ))}
        </div>

        <p className="text-zinc-400 text-md sm:text-lg max-w-xl mb-10 leading-relaxed font-normal tracking-wide">
          Leveraging data insights and product strategy to drive impactful user growth and seamless product experiences.
        </p>

        {/* Social Icons Link */}
        <div className="flex gap-4">
          <a href="#" title="LinkedIn Profile" className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" title="GitHub Profile" className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" title="Email Contact" className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20">
            <Mail size={18} />
          </a>
        </div>
      </header>

      {/* Projects Section - Glow Biru Tersemat */}
      <AnimatedSection id="projects" glowColor="via-blue-500/60">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="text-blue-400" size={20} />
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 backdrop-blur-md hover:bg-zinc-900/20 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.12)]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 block mb-2">
                  {project.category}
                </span>
                <h3 className="text-md font-bold text-zinc-100 group-hover:text-white transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400 tracking-wide group-hover:border-zinc-800 group-hover:text-zinc-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-900/60 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" title="GitHub Frontend Repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {project.links.github2 && (
                  <a href={project.links.github2} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" title="GitHub Backend Repository">
                    <Layers size={16} />
                  </a>
                )}
                {project.links.docs && (
                  <a href={project.links.docs} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" title="Project Documentation">
                    <FileText size={16} />
                  </a>
                )}
                {project.links.slides && (
                  <a href={project.links.slides} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" title="Presentation Slides">
                    <Presentation size={16} />
                  </a>
                )}
                {project.links.figma && (
                  <a href={project.links.figma} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" title="Figma Workspace Design">
                    <Compass size={16} />
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" title="Live Project Demo">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience Section - Glow Ungu Tersemat */}
      <AnimatedSection id="experience" max-w-4xl glowColor="via-purple-500/60">
        <div className="flex items-center gap-3 mb-12">
          <Users className="text-purple-400" size={20} />
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Professional & Academic Experience</h2>
        </div>

        <div className="space-y-4">
          {experience.map((item, index) => (
            <div key={index} className="group border border-transparent hover:border-zinc-900/60 hover:bg-zinc-900/20 p-5 rounded-2xl transition-all duration-500 backdrop-blur-sm flex flex-col sm:flex-row justify-between sm:items-start gap-4 hover:shadow-[0_0_35px_-10px_rgba(168,85,247,0.1)]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(item.category)}
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed font-light mt-2.5 mb-4 tracking-wide">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-[9px] font-medium rounded-md bg-zinc-950/60 text-zinc-400 border border-zinc-900">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Education Section - Glow Pink Tersemat */}
      <AnimatedSection id="education" max-w-4xl glowColor="via-pink-500/60">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-pink-400" size={20} />
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Education</h2>
        </div>

        <div className="grid sm:grid-cols-1 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="group bg-zinc-900/5 border border-zinc-900 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-zinc-800/60 transition-all duration-500 hover:shadow-[0_0_35px_-10px_rgba(236,72,153,0.1)]">
              <div>
                <span className="text-[10px] font-semibold text-zinc-500 tracking-wider block mb-1">{edu.duration}</span>
                <h3 className="text-base font-bold text-zinc-200 mb-1.5 group-hover:text-white transition-colors duration-300">{edu.degree}</h3>
                <p className="text-xs text-zinc-400 leading-normal font-light tracking-wide">{edu.institution}</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900/60 mt-32 py-10 text-center text-[10px] font-medium text-zinc-600 tracking-widest uppercase">
        <p>© 2026 Raisa Sakila. Architectural Engineering Portfolio.</p>
      </footer>
    </div>
  );
}