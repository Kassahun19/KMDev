import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-12 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Featured Projects</h2>
          </div>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center text-primary font-medium hover:opacity-80 transition-colors bg-secondary px-4 py-2 rounded-full"
          >
            View Github Profile <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card text-card-foreground rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-56 bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.demoUrl} className="p-3 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110" title="View Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.repoUrl} className="p-3 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110" title="View Code">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:opacity-80 transition-colors">
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
