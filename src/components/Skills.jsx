import React from 'react';
import { motion } from 'framer-motion';
import { skills } from './data/Skills.js';
import SkillCard from './ui/SkillCard.jsx';

export default function Skills() {
    return (
        <section className='flex flex-col justify-center items-center bg-[var(--bg-dark)] py-24'>
            {/* Section Title */}
            <motion.h1 className="text-gray-100 font-bold text-3xl sm:text-4xl font-mono mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}><span className='text-[var(--highlight-color)]'>2.</span>Skills</motion.h1>

            {/* Skills section */}
            <div className='max-w-[1400px] w-full px-8 grid grid-cols-1 md:grid-cols-2'>
                {/* Skills Display */}
                <div className='flex flex-col justify-center'>
                    <SkillCard title="AI & Machine Learning" skills={skills} />
                </div>

               
            </div>

        </section>
    )
}