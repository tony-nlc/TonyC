    import { useState, useEffect } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import Greeting from "./components/Greeting";
    import HomeContent from "./sections/HomeContent";
    import About from "./sections/About";
    import SkillsSection from "./sections/SkillsSection";
    import Experience from "./sections/Experience";
    import Portfolio from "./sections/Portfolio";
    import Contact from "./sections/Contact";
    import './index.css';

    function App() {
        const [activeTab, setActiveTab] = useState("home");
        const [showGreeting, setShowGreeting] = useState(true);
        const [greetingText, setGreetingText] = useState("");
        const fullGreeting = "Welcome";

        // 1. Cleaner Typing Logic
        useEffect(() => {
    if (greetingText.length < fullGreeting.length) {
        const timeout = setTimeout(() => {
            // Functional update ensures you always have the latest state
            setGreetingText(prev => fullGreeting.slice(0, prev.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
    } else {
        const exitTimeout = setTimeout(() => setShowGreeting(false), 1000);
        return () => clearTimeout(exitTimeout);
    }
}, [greetingText]); // greetingText is the correct dependency here

        useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [activeTab]);

    const sections = {
        home: <HomeContent />,
        about: <About />,
        skills: <SkillsSection />,
        experience: <Experience/>,
        portfolio: <Portfolio />,
        contact: <Contact />
    };

        return (
        <div className="bg-[#0a0a0a] min-h-screen flex flex-col text-gray-300 font-sans selection:bg-blue-500/30">
            
            {/* Header stays sticky/fixed */}
            <header className="sticky top-0 z-50">
                <Header activeTab={activeTab} handleTabClick={setActiveTab} />
            </header>

            <main className="flex-grow flex flex-col relative">
                <AnimatePresence mode="wait">
                    {showGreeting ? (
                        <motion.div
                            key="greeting"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 flex items-center justify-center z-[60] bg-[#0a0a0a]"
                        >
                            <Greeting greetingText={greetingText} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="site-wrapper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col min-h-screen w-full"
                        >
                            {/* 2. POPLAYOUT: This keeps the footer from snapping up while the old section exits */}
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex-grow w-full max-w-6xl mx-auto px-6 py-12"
                                >
                                    {sections[activeTab]}
                                </motion.div>
                            </AnimatePresence>

                            <Footer />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
    }

    export default App;