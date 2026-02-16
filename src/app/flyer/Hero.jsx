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

      {/* lighter gradient overlay for text readability - reduced opacity to show more of the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 via-sky-900/5 to-transparent -z-10" />

      {/* subtle glow orbs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative w-full px-6 sm:px-10 py-12 sm:py-16 text-white">
        <div className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-100/90 text-center font-semibold">
          3rd MEIS Workshop @ CVPR 2026
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-center leading-tight drop-shadow-lg">
          Multi-Agent Embodied Intelligent Systems Meet Generative-AI Era
        </h1>
        <p className="mt-2 text-center text-sm sm:text-base text-sky-100/90 font-medium">
          Opportunities, Challenges, and Futures
        </p>
        <div className="mt-8 pt-6 border-t border-sky-200/30">
          <p className="text-center text-base sm:text-lg font-semibold">
            Wednesday, June 3, 2026 • Denver, CO, USA
          </p>
          <p className="mt-2 text-center text-xs sm:text-sm text-sky-100/90">
            In conjunction with the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
