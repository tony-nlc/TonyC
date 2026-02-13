import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const skills = [
    // --- Programming Languages ---
    { 
        label: "Go", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        isGoodAt: true,
        category: "Programming Languages" 
    },
    { 
        label: "Python", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        isGoodAt: true,
        category: "Programming Languages" 
    },
    { 
        label: "TypeScript", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        isGoodAt: true,
        category: "Programming Languages" 
    },
    { 
        label: "JavaScript", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        isGoodAt: true,
        category: "Programming Languages"
    },

    // --- Backend Development ---
    { 
        label: "NestJS", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        isGoodAt: true,
        category: "Backend Development"
    },
    { 
        label: "Node.js", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        isGoodAt: true,
        category: "Backend Development"
    },
    { 
        label: "Flask", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        isGoodAt: true,
        category: "Backend Development"
    },
    { 
        label: "GraphQL", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
        isGoodAt: false,
        category: "Backend Development"
    },
    { 
        label: "Socket.IO", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
        isGoodAt: false,
        category: "Backend Development"
    },

    // --- Frontend Development ---
    { 
        label: "React", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        isGoodAt: true,
        category: "Frontend/Web Development"
    },
    { 
        label: "Tailwind CSS", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        isGoodAt: true,
        category: "Frontend/Web Development"
    },

    // --- Database ---
    { 
        label: "PostgreSQL", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        isGoodAt: true,
        category: "Database"
    },
    { 
        label: "MySQL", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        isGoodAt: true,
        category: "Database"
    },
    { 
        label: "SQLite", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
        isGoodAt: true,
        category: "Database"
    },
    { 
        label: "MongoDB", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        isGoodAt: true,
        category: "Database"
    },
    
    // --- Testing ---
    { 
        label: "Postman", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        isGoodAt: true,
        category: "Testing"
    },
    { 
        label: "Apache", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg",
        isGoodAt: true,
        category: "Testing"
    },
    { 
        label: "Pytest", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
        isGoodAt: false,
        category: "Testing"
    },

    // --- Cloud & DevOps ---
    { 
        label: "AWS", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        isGoodAt: true,
        category: "Cloud & DevOps"
    },
    { 
        label: "Azure", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
        isGoodAt: true,
        category: "Cloud & DevOps"
    },
    { 
        label: "DigitalOcean", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
        isGoodAt: false,
        category: "Cloud & DevOps"
    },
    { 
        label: "Docker", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        isGoodAt: true,
        category: "Cloud & DevOps"
    },
    
    { 
        label: "Kubernetes", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        isGoodAt: false,
        category: "Cloud & DevOps"
    },
    { 
        label: "Jenkins", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
        isGoodAt: false,
        category: "Cloud & DevOps"
    },

    // --- Software Development ---

    { 
        label: "Linux", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        isGoodAt: true,
        category: "Software Development"
    },

    { 
        label: "Git", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        isGoodAt: true,
        category: "Software Development"
    },
    { 
        label: "Bash", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        isGoodAt: true,
        category: "Software Development" 
    },
    { 
        label: "GitLab", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
        isGoodAt: false,
        category: "Software Development" 
    },
    { 
        label: "GitHub", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        isGoodAt: false,
        category: "Software Development" 
    },
];

const SkillsSection = () => {
    // Dynamically group items by category
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <header className="mb-16">
                <h1 className="text-4xl font-black text-white mb-4">Technical Lexicon</h1>
                <p className="text-gray-400 max-w-2xl leading-relaxed">
                    A comprehensive breakdown of my digital toolbelt, ranging from system-level programming to modern cloud architectures.
                </p>
            </header>

            {Object.entries(groupedSkills).map(([category, items], categoryIdx) => (
                <motion.div 
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIdx * 0.1, duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="text-sm uppercase tracking-[0.3em] font-black text-blue-500 whitespace-nowrap">
                            {category}
                        </h2>
                        <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/30 to-transparent" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                        {items.map((skill) => (
                            <Skill key={skill.label} {...skill} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default SkillsSection;