import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className='flex justify-center items-center bg-[var(--bg-lighter-dark)]'>
            <div className='max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 justify-between items-center px-8 py-24'>
                {/*About Left content */}
                <div className='text-left'>
                    <motion.h1 className="text-gray-100 font-bold text-3xl sm:text-4xl font-mono mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}><span className='text-[var(--highlight-color)]'>1.</span>About me</motion.h1>

                    <motion.p className="text-gray-400 text-md md:text-lg lg:text-xl font-mono mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5}}>
                        Hello! I'm Reda, a developer with a passion for building things that live on the internet and in the cloud. 
                        My interest in technology started back when I tried to build my first Web application. That experience taught me 
                        a ton about programming and Machine Learning and sparked my journey into both web development and AI.
                        <div className='mb-10'></div>
                        Fast-forward to today, I've had the privilege of working on various projects, from responsive websites to machine 
                        learning models. My main focus is on building practical, scalable, and user-friendly applications that solve 
                        real-world problems.
                </motion.p>

                </div>

                {/*About Right content Photo */}
                <motion.div className='rounded-full p-6 bg-[var(--bg-dark)] w-fit mx-auto'
                initial={{ opacity: 0, x: 30}}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5, delay: 0.3}}>
                    <img src="/photo.png" alt="Photo" className='w-100 h-auto rounded-full' />
                </motion.div>
            </div>
        </section>
    );
}