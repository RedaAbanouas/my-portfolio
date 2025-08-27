import React from 'react';
import { motion } from 'framer-motion';
import { skill_ml, skill_backend, skill_frontend } from '../data/Skills.js';
import SkillCard from './ui/SkillCard.jsx';

export default function Skills() {
    return (
        <section id='skills' className='flex flex-col justify-center items-center bg-dark py-24'>
            {/* Section Title */}
            <motion.h1 className="text-gray-100 font-bold text-3xl sm:text-4xl font-mono mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}><span className='text-[var(--highlight-color)]'>3.</span>Skills</motion.h1>

            {/* Skills section */}
            <div className='max-w-[1600px] w-full px-12 gap-20 flex flex-col'>
                {/* Skills Display */}
                <SkillCard title='AI & Machine Learning' skills={skill_ml}></SkillCard>
                <SkillCard title='Back-end & Databases' skills={skill_backend}></SkillCard>
                <SkillCard title='Front-end Development' skills={skill_frontend}></SkillCard>

               
            </div>

        </section>
    )
}