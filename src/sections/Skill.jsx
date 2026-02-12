import React from "react";
import { motion } from "framer-motion";

const Skill = ({ svgUrl, label, isGoodAt }) => {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="group relative flex flex-col items-center p-4 transition-all duration-300 ease-out"
        >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
            
            <div className="relative z-10">
                {/* Minimalist Expertise Indicator */}
                {isGoodAt && (
                    <div className="absolute -top-1 -right-1 z-20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                        </span>
                    </div>
                )}

                {/* Icon Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#111] border border-gray-800 flex items-center justify-center shadow-xl group-hover:border-blue-500/50 group-hover:shadow-blue-500/10 transition-all duration-500">
                    <img
                        src={svgUrl}
                        alt={`${label} icon`}
                        className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Label */}
            <span className="text-xs md:text-sm mt-4 font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">
                {label}
            </span>
        </motion.div>
    );
};

export default Skill;