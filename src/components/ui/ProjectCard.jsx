import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

export default function ProjectCard({title, text, techs, src}) {

    return (
        <motion.div className="p-5 md:p-10 w-full flex flex-col lg:flex-row gap-10 shadow-lg rounded-xl bg-card-dark border-2 border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            >
            {/*Left Content */}
            <div className="w-full h-full flex flex-col">
                <p className="text-[var(--highlight-color)] font-mono text-sm md:text-md lg:text-lg mb-4">Featured Project</p>
                <h2 className='text-gray-100 font-bold text-lg sm:text-2xl font-grotesk mb-6 hover:text-[var(--highlight-color)] transition-colors duration-200'>{title}</h2>
                
                {/*Project Texts */}
                <div className="w-full md:w-[65%] mb-4">
                    {text.map((par, index) => (
                        <p key={index} className="text-gray-300 flex gap-1 items-start mb-4 font-grotesk text-sm md:text-md lg:text-lg">
                            <IoMdArrowDropright size={20} className="flex-none text-[var(--highlight-color)]" />
                            {par}
                        </p>
                    ))}
                </div>

                {/*Project Technologies */}
                <div className="w-full md:w-[65%] flex flex-wrap space-x-6 space-y-2">
                    {techs.map((tech, index) => (
                        <div key={index} className="text-gray-400 font-mono">
                            {tech}
                        </div>
                    ))}
                </div>
                
            </div>

            {/*Right Content */}
            <div className="w-full h-auto">
                <img src={src} alt="Image" className="object-cover w-full h-full rounded-2xl shadow-2xl" />
            </div>
        </motion.div>
    )
}