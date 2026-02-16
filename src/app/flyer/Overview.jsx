import SectionCard from "./SectionCard";

const Overview = () => {
  return (
    <SectionCard id="sos-overview" title="Overview">
      <p className="mb-3">
        The MEIS workshop focuses on{" "}
        <span className="font-semibold">
          Multi-Agent Embodied Intelligent Systems
        </span>{" "}
        in the era of large vision–language and foundation models. Our goal is
        to understand how agents endowed with perception, language, and
        reasoning can collaborate with each other and with humans to act
        safely and effectively in complex real-world environments.
      </p>
      <p className="mb-3">
        We bring together researchers working on{" "}
        large-scale foundation models and architectures,{" "}
        cooperative and multi-agent systems,{" "}
        simulation platforms and evaluation, and{" "}
        human–agent interaction. The workshop highlights both practical
        applications (e.g., autonomous driving, robotics, and interactive
        systems) and fundamental questions around robustness, safety,
        explainability, and alignment.
      </p>
      <p className="mb-1 font-semibold">
        Representative topics include:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Foundation models and architectures for cooperative embodied agents</li>
        <li>Multi-agent collaboration, communication, and decision-making</li>
        <li>Simulation platforms, datasets, and benchmarks for cooperative systems</li>
        <li>Human–agent interaction, safety, ethics, and interpretability</li>
      </ul>
    </SectionCard>
  );
};

export default Overview;


