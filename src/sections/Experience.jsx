import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Formations Corp",
    role: "Co-op Software Developer",
    period: "May 2025 – Dec 2025",
    location: "Remote",
    description: [
      "Designed and implemented Go data models for complex tax-filing workflows.",
      "Automated data retrieval via Hubspot and SendGrid APIs, cutting manual entry.",
      "Managed MongoDB schema updates using custom Go migration scripts."
    ],
    tags: ["Go", "MongoDB", "API Integration", "Microservices"]
  }
];

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l border-gray-800 last:pb-0"
  >
    {/* Timeline Dot */}
    <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

    <div className="group bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {exp.company}
          </h3>
          <p className="text-blue-500 font-medium text-sm">{exp.role}</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-gray-500 block">{exp.period}</span>
          <span className="text-xs text-gray-600">{exp.location}</span>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {exp.description.map((item, i) => (
          <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
            <span className="mr-2 text-blue-500/50">•</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-900 text-gray-400 rounded-full border border-gray-800 group-hover:border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => { 
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-black">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
       Professional Path
      </h2>
      <div className="ml-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;