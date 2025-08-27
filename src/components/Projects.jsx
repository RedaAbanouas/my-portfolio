import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';
import { projects } from "../data/Projects.js";

export default function Projects() {
    return (
        <section id='projects' className='flex flex-col justify-center items-center bg-dark-alt py-24'>
            {/* Section Title */}
            <motion.h1 className="text-gray-100 font-bold text-3xl sm:text-4xl font-mono mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}><span className='text-[var(--highlight-color)]'>4.</span>Projects</motion.h1>

            <div className='max-w-[1500px] w-full px-8 gap-20 flex flex-col'>
                {projects.map(project => (
                    <ProjectCard key={project.id} title={project.title} text={project.text} techs={project.tech} src={project.src} />
                ))}
            </div>
        </section>
    );
}