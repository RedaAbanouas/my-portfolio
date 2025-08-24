import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({title, skills}) {
    console.log('SkillCard rendered with:', { title, skills });
    
    return (
        <>
            <motion.h2 className='text-gray-100 mb-8 hover:text-[var(--highlight-color)] transition-colors duration-200'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}>{title}</motion.h2>

            <div className='flex gap-5 p-8'>
                {skills.map((skill) => (
                    <div key={skill.id} title={skill.name}>{skill.icon} </div>
                ))}
            </div>
        </>
    )
}