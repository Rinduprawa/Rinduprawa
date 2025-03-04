import React, { useState, useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";
import SocialIcon from './components/SocialIcon';
import ProjectCard from "./components/ProjectCard";
import { skill } from './data/skill';
import { projectList } from './data/project';

const ScrollReveal = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0B2447] text-white font-cardo">
      {/* HEADER */}
     <header className={`fixed top-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-[#0B2447] shadow-lg py-5' : 'py-8 bg-transparent'}`}>
        {/* DESKTOP MENU */}
        <div className="px-8 md:px-20 flex justify-between items-center">
          <div className="flex gap-3 items-center"> 
            <img src="/images/icon.png" alt="" className='w-5 h-5' />
            <div className="text-xl md:text-2xl text-[#A5D7E8] hover:text-amber-100 transition-colors">
              <span className="text-amber-100 font-bold">Rindu</span>Prawa
            </div>
          </div>
          
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6">
            <a href="#project" className="md:text-lg hover:text-amber-100 transition-colors">Project</a>
            <a href="#skill" className="md:text-lg hover:text-amber-100 transition-colors">Proficiency</a>
          </nav>
          
          {/* MOBILE DROPDON*/}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* MOBILE MENU */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'bg-[#0B2447]' : 'bg-[#0B2447]/90'}`}
        >
          <nav className={`flex flex-col pt-4 px-8 ${isScrolled ? 'pb-0' : 'pb-4'}`}>
            <a 
              href="#project" 
              className="text-base py-3 hover:bg-blue-900/40 hover:text-amber-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </a>
            <a 
              href="#skill" 
              className="text-base py-3 hover:bg-blue-900/40 hover:text-amber-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proficiency
            </a>
            <a 
              href="#contact" 
              className="text-base py-3 hover:bg-blue-900/40 hover:text-amber-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="xl:h-screen xl:py-0 pt-30 pb-16 px-8 md:px-20 md:flex items-center gap-12">
        {/* LEFT */}
        <div className="md:w-1/2 relative mb-12 md:mb-0 flex justify-center">
          <div className="relative w-80 h-80 xl:w-100 xl:h-100">            
            {/* PROFILE */}
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-solid border-[#A5D7E8]">
              <img 
                src="/images/profile.jpg" 
                alt="Ryn" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* STARS */}
            <div className="absolute -top-2 -left-2 text-amber-100 text-3xl">✦</div>
            <div className="absolute -bottom-2 -right-2 text-amber-100 text-3xl">✦</div>
          </div>
        </div>
        
        {/* RIGHT */}
        <div className="md:w-1/2 flex flex-col gap-1 lg:gap-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#A5D7E8]">Heyy,</h2>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 text-amber-100">I am Ryn!</h1>
          <h2 className="text-lg md:text-xl lg:text-3xl xl:text-4xl">Front-end Web Developer &</h2>
          <h2 className="text-lg md:text-xl lg:text-3xl xl:text-4xl mb-8">Machine Learning Engineer</h2>
          
          {/* SOCIAL */}
          <div className="flex gap-4 justify-center md:justify-start">
            <SocialIcon href="https://github.com/Rinduprawa" github></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/rinduprawa/" linkedin></SocialIcon>
            <SocialIcon href="mailto:rprawa04@gmail.com" email></SocialIcon>
            <SocialIcon href="https://wa.me//6282135165055" whatsapp></SocialIcon>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="project" className="bg-[#A5D7E8] ">
        <div className="">
          <ScrollReveal>
            <div className="pt-16 px-8 md:px-20 text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center text-[#0B2447]">Project Showchase</div>
              <div className="pb-16 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skill" className="py-16 px-8 md:px-20 bg-[#0B2447]">
        <ScrollReveal>
          <div className="text-3xl font-bold mb-8 lg:mb-12 text-center">My Skills</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skill.map((skills) => (
                <ScrollReveal key={skills.title}>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-3 bg-blue-950 p-5 rounded-lg text-center group hover:bg-[#A5D7E8] transition-colors shadow-lg">
                  {skills.fa ? (
                    <i className={`${skills.fa} text-white text-2xl lg:text-3xl group-hover:text-[#0B2447]`} />
                  ) : (
                    <Icon icon={skills.iconify} className="w-6 h-6 lg:w-8 lg:h-8 group-hover:text-[#0B2447]" />
                  )}
                    <div className="font-bold text-white text-sm lg:text-base group-hover:text-[#0B2447]">{skills.title}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
      </section>

      {/* FOOTER */}
      <footer className="py-5 text-center text-blue-300 bg-blue-950">
        <div className="container mx-auto px-6">
          <div className="text-[#A5D7E8] text-sm md:text-base">© 2025 RinduPrawa. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;