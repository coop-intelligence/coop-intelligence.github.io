import SectionCard from "./SectionCard";

const Overview = () => {
  return (
    <SectionCard id="sos-overview" title="Overview" variant="spacious">
      <p className="mb-4 text-base sm:text-lg">
        The MEIS workshop focuses on{" "}
        <span className="font-bold text-sky-700">
          Multi-Agent Embodied Intelligent Systems
        </span>{" "}
        in the era of large vision–language and foundation models. Our goal is
        to understand how agents endowed with perception, language, and
        reasoning can collaborate with each other and with humans to act
        safely and effectively in complex real-world environments.
      </p>
      <p className="mb-6">
        We bring together researchers working on{" "}
        <span className="font-semibold text-sky-700">large-scale foundation models and architectures</span>,{" "}
        <span className="font-semibold text-sky-700">cooperative and multi-agent systems</span>,{" "}
        <span className="font-semibold text-sky-700">simulation platforms and evaluation</span>, and{" "}
        <span className="font-semibold text-sky-700">human–agent interaction</span>. The workshop highlights both practical
        applications (e.g., autonomous driving, robotics, and interactive
        systems) and fundamental questions around robustness, safety,
        explainability, and alignment.
      </p>
      <div className="bg-sky-50 rounded-lg p-4 sm:p-6 border-l-4 border-sky-500">
        <p className="mb-3 font-bold text-sky-900">
          Representative topics include:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start">
            <span className="text-sky-500 mr-2">•</span>
            <span>Foundation models and architectures for cooperative embodied agents</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-500 mr-2">•</span>
            <span>Multi-agent collaboration, communication, and decision-making</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-500 mr-2">•</span>
            <span>Simulation platforms, datasets, and benchmarks for cooperative systems</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-500 mr-2">•</span>
            <span>Human–agent interaction, safety, ethics, and interpretability</span>
          </li>
        </ul>
      </div>
    </SectionCard>
  );
};

export default Overview;


