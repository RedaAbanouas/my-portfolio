import { motion } from 'framer-motion';
import React from 'react';

export default function SkillCard({title, skills}) {
  return (
    <div className='w-full'>
      <h2 className='text-gray-100 font-bold text-3xl sm:text-4xl font-grotesk mb-10 text-center hover:text-[var(--highlight-color)] transition-colors duration-200'>{title}</h2>
      <div className='flex flex-wrap justify-center gap-20'>
        {skills.map(skill => (
          
          <motion.div className=' shadow-xl rounded-xl aspect-square w-40 bg-card flex flex-col justify-center items-center gap-2 border-2 border-slate-700 hover:border-[var(--highlight-color)] group transition-colors duration-200'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: skill.id * 0.25}}>
            <img className='w-[55%] h-auto' src={skill.src} alt={skill.name} />
            <span className='text-gray-100 font-bold text-lg font-grotesk group-hover:text-[var(--highlight-color)] transition-colors duration-200'>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
