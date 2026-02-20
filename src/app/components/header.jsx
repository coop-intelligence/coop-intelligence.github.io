
const Header = () => {
    return (
        <div className="header relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/bg.png"
                    alt="Denver skyline with mountains"
                    className="w-full h-full object-cover object-center opacity-40"
                />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#01305f]/90 via-[#01305f]/80 to-[#01305f]/95 -z-[5]" />
            {/* Decorative accent lines */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            {/* Decorative orbs */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#f5f5f5] font-medium relative z-10">
                <div className="text-center mt-3">
                    <span className="text-sky-300/80 text-[0.45em] uppercase tracking-[0.4em] font-semibold">3rd Workshop</span>
                </div>
                <div className="text-[1.3em] text-center mt-1 font-extrabold tracking-tight drop-shadow-lg">
                    MEIS @ CVPR 2026
                </div>
                <div className="text-[0.7em] text-center mt-1 leading-snug">
                    <span className="underline font-bold text-white decoration-sky-400 decoration-2 underline-offset-2">M</span>ulti-Agent{" "}
                    <span className="underline font-bold text-white decoration-sky-400 decoration-2 underline-offset-2">E</span>mbodied{" "}
                    <span className="underline font-bold text-white decoration-sky-400 decoration-2 underline-offset-2">I</span>ntelligent{" "}
                    <span className="underline font-bold text-white decoration-sky-400 decoration-2 underline-offset-2">S</span>ystems Meet Generative-AI Era
                </div>
                <div className="text-[0.5em] text-sky-200/80 text-center mt-1 italic">
                    Opportunities, Challenges and Futures
                </div>
                <div className="flex items-center justify-center gap-3 mt-4 mb-2">
                    <span className="text-[0.5em] text-white/90 font-semibold flex items-center gap-1.5">
                        📅 Wed June 3, 2026
                    </span>
                    <span className="w-px h-4 bg-sky-300/30" />
                    <span className="text-[0.5em] text-white/90 font-semibold flex items-center gap-1.5">
                        📍 Denver CO, USA
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Header;