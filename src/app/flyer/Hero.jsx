const Hero = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-0 mt-10">
      <div
        className="relative w-full sm:w-[65em] overflow-hidden rounded-3xl text-white shadow-2xl border border-sky-300/60 px-6 py-8 sm:px-10 sm:py-10"
      >
        {/* background image filling the entire box */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/bg.png"
            alt="Denver skyline with mountains"
            className="w-full h-full object-cover object-center scale-x-[2.2]"
          />
        </div>

        {/* subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-sky-900/20 -z-10" />

        {/* subtle glow orbs */}
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative">
          <div className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-100/90 text-center font-semibold">
            3rd MEIS Workshop @ CVPR 2026
          </div>
          <h1 className="mt-3 text-2xl sm:text-4xl font-bold text-center leading-tight drop-shadow-sm">
            Multi-Agent Embodied Intelligent Systems Meet Generative-AI Era
          </h1>
          <p className="mt-1 text-center text-xs sm:text-sm text-sky-100/90">
            Opportunities, Challenges, and Futures
          </p>
          <p className="mt-5 text-center text-sm sm:text-base font-medium">
            Wednesday, June 3, 2026 • Denver, CO, USA
          </p>
          <p className="mt-1 text-center text-xs sm:text-sm text-sky-100/90">
            In conjunction with the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

