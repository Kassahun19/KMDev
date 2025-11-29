import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, EXPERIENCE, SKILLS, PERSONAL_DETAILS, PROFILE_IMAGE } from '../constants';

interface AboutProps {
  onOpenContact: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section className="min-h-screen pt-28 pb-12 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">I'm {PERSONAL_INFO.name}</h2>
          <p className="text-red-500 font-medium mt-2">UI/UX Designer & MERN Stack Web Developer</p>
        </div>

        {/* Top Section: Image, Bio & Details */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Image Column - Visible on larger screens */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 lg:w-full lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
              <img 
                src={PROFILE_IMAGE} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover object-top"
              />
              {/* Optional Overlay effect */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="lg:col-span-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-red-500 inline-block pb-2">
              Who am I?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              {PERSONAL_DETAILS.map((detail, index) => (
                <div key={index} className="flex border-b border-border pb-2">
                  <span className="font-bold text-foreground w-24 flex-shrink-0">{detail.label} :</span>
                  <span className="text-muted-foreground truncate">{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
               <h4 className="text-xl font-bold text-foreground mb-4">Core Skills</h4>
               <div className="space-y-4">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm font-bold text-muted-foreground">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
               </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={onOpenContact}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all shadow-lg shadow-red-500/30"
              >
                Hire Me
              </button>
              <button 
                className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold rounded-full transition-all"
              >
                Download CV
              </button>
            </div>
          </motion.div>
        </div>

        {/* Education & Experience Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Education Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
              <GraduationCap className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="border-l-2 border-red-500 ml-3 space-y-12">
              {EDUCATION.map((item) => (
                <div key={item.id} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-2 border-card shadow-sm"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-md shadow-sm">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mt-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-medium mb-3 italic">{item.institution}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm bg-muted p-3 rounded-lg border border-border">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm"
          >
             <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
              <Briefcase className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="border-l-2 border-red-500 ml-3 space-y-12">
              {EXPERIENCE.map((item) => (
                <div key={item.id} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-2 border-card shadow-sm"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-md shadow-sm">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mt-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-medium mb-3 italic">{item.institution}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm bg-muted p-3 rounded-lg border border-border">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
