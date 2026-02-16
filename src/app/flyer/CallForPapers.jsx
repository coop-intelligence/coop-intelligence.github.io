import SectionCard from "./SectionCard";

const CallForPapers = () => {
  return (
    <SectionCard id="sos-cfp" title="Call for Papers">
      <div className="space-y-4">
        <p className="text-pretty">
          We invite submissions on algorithms, systems, datasets, and
          applications that advance{" "}
          <span className="font-semibold">
            cooperative and multi-agent embodied intelligence
          </span>{" "}
          in the generative-AI era. Topics of interest include, but are not
          limited to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">
              ① Foundation Models &amp; Architectures
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Large language / vision–language models for cooperative systems</li>
              <li>Foundation models for multi-agent perception and control</li>
              <li>Reasoning and memory in agentic systems</li>
              <li>VLA and foundation models for robotics and autonomous driving</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              ② Multi-Agent Systems &amp; Collaboration
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Vehicle-to-Everything (V2X) and cooperative perception</li>
              <li>Multi-agent robotic systems, swarms, and collaborative drones</li>
              <li>Cooperative motion prediction and decision-making</li>
              <li>End-to-end cooperative policy learning and communication-efficient coordination</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              ③ Simulation &amp; Evaluation
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Simulation platforms for cooperative and agentic systems</li>
              <li>Datasets and benchmarks for cooperative learning</li>
              <li>Evaluation protocols for multi-agent and embodied setups</li>
              <li>Sim-to-real transfer for collaborative agents</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              ④ Human–Agent Interaction
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Natural language interaction for embodied and multi-agent systems</li>
              <li>Explainability and interpretability for VLA and agents</li>
              <li>Human–agent collaboration and shared autonomy</li>
              <li>Safety, fairness, and ethical alignment in cooperative AI</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default CallForPapers;


