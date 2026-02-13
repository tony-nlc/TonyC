import { useState } from "react";

function HomeContent() {
    const [hasWaved, setHasWaved] = useState(false);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 text-center mt-16">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full -z-10" />

            <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white">
                    Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Tony</span>
                    <span
                        className={`inline-block ml-4 cursor-default ${!hasWaved ? "animate-bounce" : "hover:animate-spin"}`}
                        onAnimationEnd={() => setHasWaved(true)}
                    >
                        👋
                    </span>
                </h1>

                <div className="max-w-2xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-400 leading-relaxed">
                        Computer Science Student at <br className="hidden md:block" />
                        <span className="text-gray-200 border-b-2 border-blue-500/30">
                            British Columbia Institute of Technology
                        </span>
                    </h2>
                </div>
            </div>

            {/* Modern CTA or Badge */}
            <div className="mt-10 flex gap-4">
                <div className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300 backdrop-blur-sm">
                     Currently building with React & Node.js
                </div>
            </div>
        </div>
    );
}

export default HomeContent;