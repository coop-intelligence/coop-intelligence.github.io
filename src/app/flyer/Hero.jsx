const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* background image filling the entire hero section */}
      <div className="absolute inset-0 -z-20 m-0 p-0">
        <img
          src="/bg.png"
          alt="Denver skyline with mountains"
          className="w-full h-full object-cover object-center scale-x-[2.2] opacity-90 m-0 p-0 block"
        />
      </div>

      {/* darker gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-sky-900/20 to-sky-900/40 -z-10" />

      {/* decorative accent lines */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      {/* subtle glow orbs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative w-full px-6 sm:px-10 py-3 sm:py-4 text-white">
        <div className="text-[10px] uppercase tracking-[0.4em] text-sky-100/80 text-center font-semibold">
          3rd MEIS Workshop @ CVPR 2026
        </div>
        <h1 className="mt-1 text-lg sm:text-xl font-extrabold text-center leading-tight drop-shadow-lg tracking-tight">
          <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text">
            Multi-Agent Embodied Intelligent Systems
          </span>
          <br />
          <span className="text-sky-100 font-bold text-base sm:text-lg">
            Meet Generative-AI Era
          </span>
        </h1>
        <p className="mt-0.5 text-center text-[10px] sm:text-xs text-sky-200/90 font-medium italic">
          Opportunities, Challenges, and Futures
        </p>
        <div className="mt-2 pt-1.5 border-t border-sky-200/20">
          <p className="text-center text-xs sm:text-sm font-semibold tracking-wide">
            📍 Wednesday, June 3, 2026 • Denver, CO, USA
          </p>
          <p className="mt-0.5 text-center text-[9px] sm:text-[10px] text-sky-200/80">
            In conjunction with the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
