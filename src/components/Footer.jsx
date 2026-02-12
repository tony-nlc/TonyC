import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.footer 
            // Animation logic
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of footer is visible
            transition={{ 
                duration: 1.5, 
                ease: "easeOut" 
            }}
            className="w-full py-12 px-6 border-t border-white/5 bg-[#0a0a0a]"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                
                {/* Brand & Status */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="text-xl font-black tracking-tighter text-white">
                        TONY<span className="text-blue-500">.</span>
                    </div>
                    <p className="text-gray-500 text-xs">
                        &copy; {currentYear} Designed & Built by Tony Chou
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                            Available for hire
                        </span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6 text-gray-400">
                    <a href="https://github.com/tony-nlc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/tony-nlc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:nchou8@my.bcit.ca" className="hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Back to Top */}
                <button 
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                >
                    Back to top 
                    <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </motion.footer>
    );
}

export default Footer;