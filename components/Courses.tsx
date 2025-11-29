import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Calculator } from 'lucide-react';
import { COURSES } from '../constants';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'code': return <Code size={32} />;
    case 'book': return <Book size={32} />;
    case 'calculator': return <Calculator size={32} />;
    default: return <Book size={32} />;
  }
};

const Courses: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-12 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Teaching</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Courses I Offer</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            I believe in sharing knowledge. Here are the specialized courses I teach to help others grow their skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card text-card-foreground rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500">
                 {getIcon(course.icon)}
              </div>
              
              <div className="w-16 h-16 bg-muted text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {getIcon(course.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full group-hover:bg-background border border-transparent group-hover:border-border transition-all">
                    {course.level}
                </span>
                <button className="text-primary font-medium text-sm hover:underline">Details &rarr;</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
