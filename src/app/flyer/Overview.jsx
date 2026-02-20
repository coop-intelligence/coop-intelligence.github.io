import SectionCard from "./SectionCard";

const Overview = () => {
  return (
    <SectionCard id="sos-overview" title="Overview" variant="default">
      <p className="mb-1.5 text-xs leading-snug">
        The MEIS workshop focuses on{" "}
        <span className="font-bold text-sky-700">
          Multi-Agent Embodied Intelligent Systems
        </span>{" "}
        in the era of large vision–language and foundation models, aiming to understand how agents with perception,
        language, and reasoning can collaborate with each other and with humans to act safely and effectively in complex real-world environments.
        We bring together researchers in {" "}
        <span className="font-semibold text-sky-700">foundation models</span>,{" "}
        <span className="font-semibold text-sky-700">multi-agent systems</span>,{" "}
        <span className="font-semibold text-sky-700">simulation and evaluation</span>, and{" "}
        <span className="font-semibold text-sky-700">human–agent interaction</span>, spanning real-world applications (e.g., autonomous driving, robotics) and core challenges in robustness, safety, explainability, and alignment.
      </p>
      {/* Topics + Important Dates side by side */}
      <div className="grid grid-cols-[4fr_2fr] gap-2">
        {/* Left: Topics */}
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50/50 rounded-lg p-2 border border-sky-200/60 shadow-sm">
          <p className="mb-0.5 font-bold text-[11px] text-sky-900 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
            Representative Topics
          </p>
          <ul className="space-y-0.5 text-[10px] text-slate-700">
            <li className="flex items-start">
              <span className="text-sky-400 mr-1 font-bold">›</span>
              <span>Foundation models and architectures for cooperative embodied agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-1 font-bold">›</span>
              <span>Multi-agent collaboration, communication, and decision-making</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-1 font-bold">›</span>
              <span>Simulation platforms, datasets, and benchmarks for cooperative systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-1 font-bold">›</span>
              <span>Human–agent interaction, safety, ethics, and interpretability</span>
            </li>
          </ul>
        </div>
        {/* Right: Important Dates */}
        <div className="flex flex-col gap-1.5">
          <p className="font-bold text-[11px] text-sky-900 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
            Important Dates
          </p>
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-lg p-1.5 border border-sky-200/60 shadow-sm flex items-baseline justify-between gap-1">
            <span className="text-[9px] text-slate-500 font-medium">Submission</span>
            <span className="text-[11px] font-bold text-sky-700">15 Apr, 2026</span>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-lg p-1.5 border border-sky-200/60 shadow-sm flex items-baseline justify-between gap-1">
            <span className="text-[9px] text-slate-500 font-medium">Notification</span>
            <span className="text-[11px] font-bold text-sky-700">13 May, 2026</span>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-lg p-1.5 border border-sky-200/60 shadow-sm flex items-baseline justify-between gap-1">
            <span className="text-[9px] text-slate-500 font-medium">Workshop</span>
            <span className="text-[11px] font-bold text-sky-700">June 3, 2026</span>
          </div>
        </div>
      </div>

      {/* Awards & Recognition Banner */}
      <div className="mt-2 relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200/70 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="relative flex items-center justify-center gap-4 px-3 py-1.5">
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-amber-500 text-sm">🏆</span>
            <div>
              <span className="font-bold text-amber-800">Best Paper</span>
              <span className="ml-1 font-semibold text-amber-600">$400</span>
            </div>
          </div>
          <div className="w-px h-4 bg-amber-300/60" />
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-amber-500 text-sm">🏆</span>
            <div>
              <span className="font-bold text-amber-800">Best Paper Runner-Up</span>
              <span className="ml-1 font-semibold text-amber-600">$300</span>
            </div>
          </div>
          <div className="w-px h-4 bg-amber-300/60" />
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-amber-500 text-sm">🏆</span>
            <div>
              <span className="font-bold text-amber-800">Best Demo</span>
              <span className="ml-1 font-semibold text-amber-600">$300</span>
            </div>
          </div>
          <div className="w-px h-4 bg-amber-300/60" />
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-sky-500 text-sm">🎙️</span>
            <span className="font-bold text-sky-800">Oral Presentation</span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default Overview;
