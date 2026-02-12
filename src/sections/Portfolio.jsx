import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database, Terminal } from "lucide-react";

const projects = [
    {
        title: "Cypress Hill Partners",
        role: "Backend Developer",
        description: "Built a NestJS backend to automate investment scorecard processing, replacing manual Excel workflows for financial analysts.",
        tech: ["NestJS", "PostgreSQL", "GraphQL", "TypeScript"],
        type: "Industry Project",
        icon: <Database className="text-blue-400" size={20} />
    },
    {
        title: "Insight Forge",
        role: "Full-Stack Developer",
        description: "YouTube analytics platform featuring Sentiment Analysis and Word Clouds to extract topical patterns from thousands of comments.",
        tech: ["Python", "Flask", "SQLite", "YouTube API"],
        type: "Industry Project",
        icon: <Terminal className="text-emerald-400" size={20} />
    },
    {
        title: "Goggle",
        role: "Full-Stack Developer",
        description: "Search engine API utilizing a custom Trie implementation for high-performance autocomplete and fuzzy matching.",
        tech: ["Flask", "React", "SQLAlchemy", "Trie Data Structure"],
        demo: "https://tony-nlc.github.io/goggle-FE/",
        type: "Personal Project",
        icon: <Code2 className="text-purple-400" size={20} />
    },
    {
        title: "Yahtzee",
        role: "Developer",
        description: "A mobile-responsive React implementation of the classic dice game with custom physics-based animations and state management.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        demo: "https://tony-nlc.github.io/yahtzee/",
        type: "Personal Project",
        icon: <ExternalLink className="text-orange-400" size={20} />
    }
];

const Portfolio = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-white mb-4">Selected Works</h1>
                <p className="text-gray-400 max-w-2xl">
                    A collection of industry-sponsored projects and personal experiments focusing on backend scalability and intuitive UX.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-[#151515] transition-all duration-300"
                    >
                        {/* Project Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-blue-500/30 transition-colors">
                                {project.icon}
                            </div>
                            <div className="flex gap-4 text-gray-500">
                                {project.github && (
        <a 
            href={project.github} 
            className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View Source Code"
        >
            <Github size={20} />
        </a>
    )}

    {/* Demo/External Link */}
    {project.demo && (
        <a 
            href={project.demo} 
            className="hover:text-emerald-400 transition-all duration-300 transform hover:scale-110" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View Live Demo"
        >
            <ExternalLink size={20} />
        </a>
    )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                                {project.type}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-100 group-hover:text-white">
                                {project.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span 
                                    key={t} 
                                    className="px-3 py-1 text-[10px] font-bold bg-gray-900 text-gray-400 rounded-full border border-gray-800 group-hover:border-blue-500/20"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;