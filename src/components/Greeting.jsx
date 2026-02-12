import { motion } from "framer-motion";

function Greeting({ greetingText }) {
    // Split text into individual characters for animation
    const letters = Array.from(greetingText);

    const containerVariants = {
        before: { opacity: 0 },
        after: { 
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 } 
        },
    };

    const letterVariants = {
        before: { opacity: 0, y: 20, filter: "blur(10px)" },
        after: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { ease: "easeOut", duration: 0.4 } 
        },
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                y: -100, 
                opacity: 0,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 bg-[#0a0a0a] flex flex-col justify-center items-center z-50"
        >
            {/* Minimalist Loading Line */}
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] bg-blue-500 mb-8"
            />

            <motion.h1 
                variants={containerVariants}
                initial="before"
                animate="after"
                className="text-5xl md:text-7xl font-black tracking-tighter text-white flex"
            >
                {letters.map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-4 text-gray-500 font-mono text-sm tracking-[0.2em] uppercase"
            >
                Portfolio Initializing
            </motion.p>
        </motion.div>
    );
}

export default Greeting;