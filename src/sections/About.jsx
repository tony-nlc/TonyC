import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket } from "lucide-react";

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-16 mx-auto max-w-4xl px-6"
        >
            {/* Ambient Background Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* LHS: Text Content */}
                <div className="lg:col-span-7 relative border-l-2 border-blue-500/30 pl-8">
                    <motion.h1 variants={itemVariants} className="text-5xl font-black tracking-tight text-white mb-8">
                        About <span className="text-blue-400">Me</span>
                    </motion.h1>
                    
                    <motion.div variants={itemVariants} className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <p>
                            Currently a student in Computer Information Technology at <span className="text-gray-200 font-semibold underline decoration-blue-500/50 underline-offset-4">BCIT</span>.
                        </p>
                        
                        <p>
                            I specialize in bridging the gap between <span className="text-white font-medium">complex backend logic</span> and 
                            intuitive user experiences. I focus on building scalable systems—from 
                            custom search APIs to automated financial tools.
                        </p>

                        <p>
                            I thrive in collaborative environments where I can leverage my skills in 
                            <span className="text-blue-300"> Go, Python, and JavaScript</span> to solve high-impact problems.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-10">
                        <a 
                            href="#contact" 
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            Let’s build something 
                            <Rocket size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* RHS: Avatar + Cards */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Avatar Container */}
                    {/* <motion.div variants={itemVariants} className="relative group self-center lg:self-start">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative aspect-square w-full max-w-[280px] bg-[#111] rounded-3xl overflow-hidden border border-white/10">
                            <img 
                                src="/path-to-your-avatar.jpg" 
                                alt="Tony Chou"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                            />
                        </div>
                    </motion.div> */}

                    {/* Stats Cards */}
                    <motion.div variants={itemVariants} className="p-5 bg-[#111] border border-gray-800 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <GraduationCap className="text-blue-400" size={20} />
                            <h3 className="text-white font-bold text-sm">Education</h3>
                        </div>
                        <p className="text-xs text-gray-400 font-medium leading-relaxed">
                            CIT Diploma @ BCIT <br/>
                            <span className="text-gray-500 text-[10px] uppercase tracking-wider">Graduating April 2026</span>
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-5 bg-[#111] border border-gray-800 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <Code2 className="text-emerald-400" size={20} />
                            <h3 className="text-white font-bold text-sm">Current Focus</h3>
                        </div>
                        <ul className="text-[11px] text-gray-400 space-y-2">
                            <li className="flex items-center gap-2">• Backend Development</li>
                            <li className="flex items-center gap-2">• System Architecture</li>
                            <li className="flex items-center gap-2">• AWS & Azure Cloud</li>
                        </ul>
                    </motion.div>
                </div>

            </div>
        </motion.section>
    );
}

export default About;