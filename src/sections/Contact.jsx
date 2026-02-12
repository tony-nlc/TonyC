import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, ExternalLink } from "lucide-react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "ngai.lam.chou@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-black text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400 text-lg">
                    I'm currently looking for new opportunities. Whether you have a question <br className="hidden md:block" /> 
                    or just want to say hi, my inbox is always open!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Email Card */}
                <div className="group relative bg-[#111] border border-gray-800 rounded-2xl p-6 transition-all hover:border-blue-500/50">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <Mail size={24} />
                        </div>
                        <button 
                            onClick={copyToClipboard}
                            className="text-gray-500 hover:text-white transition-colors"
                            title="Copy email"
                        >
                            {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
                        </button>
                    </div>
                    <h3 className="text-gray-100 font-bold text-xl mb-1">Email</h3>
                    <p className="text-gray-400 text-sm mb-4">{email}</p>
                    <a 
                        href={`mailto:${email}`}
                        className="inline-flex items-center text-blue-400 text-sm font-semibold hover:underline"
                    >
                        Send an email <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>

                {/* Socials Card */}
                <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <h3 className="text-gray-100 font-bold text-xl">Socials</h3>
                            <p className="text-gray-400 text-sm">Let's connect professionally</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a 
                            href="https://linkedin.com/in/tony-nlc" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 hover:border-blue-500 py-2 rounded-lg transition-all"
                        >
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a 
                            href="https://github.com/tony-nlc" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 hover:border-white py-2 rounded-lg transition-all"
                        >
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer-lite info */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-500 text-sm">
                    Based in <span className="text-gray-300">Vancouver, BC</span> • Available for Work May 2025
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;