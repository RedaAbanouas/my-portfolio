import React from 'react'
import {motion} from 'framer-motion';
import Button from './ui/Button.jsx';
import { ArrowDown, Download } from 'lucide-react';
export default function Hero() {

    const isAvailable = true;

    return (
        <section id='home' className='min-h-screen flex flex-col justify-center items-center bg-dark pb-16'>
            <div className='max-w-[1400px] min-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 justify-between items-center px-8 mt-32'>
                {/* Left Content */}
                <div className='text-center md:text-left'>
                    {isAvailable && <motion.p className="mx-auto md:mx-0 font-mono text-[var(--bg-dark)] bg-[var(--yellow-highlight)] px-4 py-1 text-sm w-fit font-bold rounded-xl mb-8"
                    animate={{ opacity: [0, 1, 0]}}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeIn",}}>Available for Opportunities !</motion.p>}

                    <motion.p className='text-[var(--highlight-color)] font-mono text-xl mb-4' 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>Hi, I'm</motion.p>

                    <motion.h1 className='text-gray-100 font-bold text-3xl sm:text-4xl lg:text-6xl mb-4 font-grotesk'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>Reda Abanouas</motion.h1>

                    <motion.h2 className='text-[var(--highlight-color)] font-bold font-grotesk text-2xl sm:text-3xl lg:text-5xl mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                        AI & Web Development Student</motion.h2>

                    <motion.p className='text-gray-400 text-md md:text-lg lg:text-xl font-mono mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    I'm a passionate student developer specializing in creating intelligent web applications and AI solutions.
                    Currently focused on internships for building accessible, innovative products that solve real-world problems.
                    </motion.p>
                    
                    {/*Hero Section Buttons */}
                    <motion.div className='flex flex-col md:flex-row gap-5 items-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}>
                        <a href="#projects"><Button variant='primary' className='flex items-center space-x-2'><span>View my Projects</span> <ArrowDown size={20}></ArrowDown></Button></a>
                        <a href='/cv.pdf' download="Reda_Abanouas_CV.pdf"><Button variant='outline' className='flex items-center space-x-2'><span>Download CV</span><Download size={20}></Download></Button></a>
                    </motion.div>

                </div>

                {/* Right Content - Image */}
                <div className='flex justify-center items-center'>
                    <motion.img src="/programmer.png" alt="Hero-logo" className=' w-80 lg:w-100 h-auto' 
                    animate={{y: [0, -10, 0],}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }} />
                </div>
            </div>
            <motion.div
            animate={{y: [-10, 0, -10],}}
            transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            }}><ArrowDown size={32} className='mx-auto mt-8 text-gray-300'></ArrowDown></motion.div>
        </section>
    );
}