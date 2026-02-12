import { motion } from "framer-motion";
import { User, Code, Folder, Mail } from "lucide-react";

function Header({ activeTab, handleTabClick }) {
    const navItems = [
        { label: "About", icon: <User size={18} />, id: "about" },
        { label: "Skills", icon: <Code size={18} />, id: "skills" },
        { label: "Portfolio", icon: <Folder size={18} />, id: "portfolio" },
        { label: "Contact", icon: <Mail size={18} />, id: "contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <nav className="flex items-center gap-8 px-6 py-3 bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl transition-all duration-300">
                {/* Logo Section */}
                <div className="hidden md:block pr-4 border-r border-white/10">
                    <button
                        onClick={() => handleTabClick("home")}
                        className="text-xl font-black tracking-tighter hover:text-blue-400 transition-colors"
                    >
                        TONY<span className="text-blue-500">.</span>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center gap-2">
                    {navItems.map(({ label, icon, id }) => (
                        <li key={id} className="relative">
                            <button
                                onClick={() => handleTabClick(id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors relative z-10 ${
                                    activeTab === id ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {icon}
                                <span className="hidden sm:inline">{label}</span>
                                
                                {/* Animated Active Background */}
                                {activeTab === id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;