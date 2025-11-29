import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter, Coffee } from 'lucide-react';
import { PERSONAL_INFO, BUY_ME_COFFEE_URL, PROFILE_IMAGE } from '../constants';

interface HeroProps {
  onNavigate: (viewId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const roles = useMemo(() => ["Web Developer", "Educator", "YouTuber", "Banker"], []);
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Stable typing effect logic
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      if (displayedText.length > 0) {
        // Typing back (erasing)
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, 50);
      } else {
        // Finished erasing, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }
    } else {
      if (displayedText.length < currentRole.length) {
        // Typing forward
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 150);
      } else {
        // Finished typing, pause before erasing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background transition-colors duration-300">
      {/* Background Shapes - Responsive Sizing */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-blue-500/5 rounded-full blur-[50px] md:blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start order-1"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold tracking-wide text-xs sm:text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Available for Freelance
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight w-full">
              <span className="relative inline-block mb-2">
                <span className="relative z-10 text-foreground/90 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">My name is <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-4">Kassahun</span>,</span>
              </span> 
              <br/> 
              <span className="text-2xl sm:text-3xl md:text-5xl text-muted-foreground">and I'm a</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-purple-600 block h-[1.3em] lg:h-[1.2em]">
                {displayedText}
                <span className="text-primary animate-pulse ml-1">|</span>
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {PERSONAL_INFO.tagline} A passionate <span className="text-foreground font-medium">educator</span> and <span className="text-foreground font-medium">developer</span> crafting modern web experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 justify-center lg:justify-start flex-wrap w-full sm:w-auto px-4 sm:px-0">
              <button 
                onClick={() => onNavigate('projects')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:opacity-90 text-primary-foreground font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 group outline-none w-full sm:w-auto text-sm sm:text-base"
              >
                View My Work 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-border outline-none w-full sm:w-auto text-sm sm:text-base"
              >
                Contact Me <Mail size={20} />
              </button>
              <a 
                href={BUY_ME_COFFEE_URL}
                target="_blank"
                rel="noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-600/25 outline-none w-full sm:w-auto text-sm sm:text-base"
              >
                Buy Me Coffee <Coffee size={20} />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-muted-foreground">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all duration-300"><Github size={24} className="sm:w-7 sm:h-7" /></a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all duration-300"><Linkedin size={24} className="sm:w-7 sm:h-7" /></a>
              <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all duration-300"><Twitter size={24} className="sm:w-7 sm:h-7" /></a>
              <div className="h-px w-12 bg-border hidden sm:block"></div>
              <span className="text-sm font-medium hidden sm:block">Follow Me</span>
            </div>
          </motion.div>

          {/* Image/Visual - Responsive visibility and sizing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 mt-8 lg:mt-0"
          >
             <div className="relative z-10 w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-card rounded-[2rem] -rotate-3 border-4 border-card overflow-hidden shadow-2xl group-hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={PROFILE_IMAGE}
                      alt="Kassahun Mulatu" 
                      className="w-full h-full object-cover object-center opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-1 w-8 sm:w-12 bg-primary rounded-full"></div>
                        <p className="text-primary font-bold tracking-wider text-xs sm:text-sm uppercase shadow-black drop-shadow-md">Portfolio</p>
                      </div>
                      <p className="text-white text-lg sm:text-xl font-medium leading-relaxed drop-shadow-md">
                        "I build scalable solutions and teach others to do the same."
                      </p>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator - Hidden on very small screens to save space */}
      <motion.button 
        onClick={() => onNavigate('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer outline-none hidden md:block"
        aria-label="Scroll down"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full"></div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;