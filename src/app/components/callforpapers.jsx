const CallForPapers = () => {
    return (
        <div className="text-justify">

            <p className="text-pretty mt-2 mb-2">
                <span className="font-bold text-lg">We invite submissions including but not limited to the following topics:</span>
            </p>

            <div className="mt-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="topic-card bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-xl p-5 border border-sky-100 shadow-sm">
                        <h3 className="font-bold mb-3 flex items-center gap-2 text-sky-900">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white text-sm font-bold">①</span>
                            Foundation Models and Architectures
                        </h3>
                        <ul className="list-none space-y-2 ml-1">
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-sky-400 mt-1 font-bold text-xs">›</span>
                                Large Language Model-assisted Cooperative System
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-sky-400 mt-1 font-bold text-xs">›</span>
                                Foundation Models for Cooperative System
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-sky-400 mt-1 font-bold text-xs">›</span>
                                Reasoning and Memory in Agentic System
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-sky-400 mt-1 font-bold text-xs">›</span>
                                VLA for Robotics and Autonomous Driving (AD)
                            </li>
                        </ul>
                    </div>

                    <div className="topic-card bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-xl p-5 border border-emerald-100 shadow-sm">
                        <h3 className="font-bold mb-3 flex items-center gap-2 text-emerald-900">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-sm font-bold">②</span>
                            Multi-Agent Systems & Collaboration
                        </h3>
                        <ul className="list-none space-y-2 ml-1">
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-emerald-400 mt-1 font-bold text-xs">›</span>
                                Vehicle-to-Everything (V2X): V2V, V2I, V2P, V2D
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-emerald-400 mt-1 font-bold text-xs">›</span>
                                Multi-agent Robotic System and Swarm Robots
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-emerald-400 mt-1 font-bold text-xs">›</span>
                                Swarm of Drones and Aerial Robots
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-emerald-400 mt-1 font-bold text-xs">›</span>
                                Cooperative Motion Prediction and Decision-Making
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-emerald-400 mt-1 font-bold text-xs">›</span>
                                Communication-Efficient Cooperative Perception
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-emerald-400 mt-1 font-bold text-xs">›</span>
                                End-to-End Cooperative Policy Learning
                            </li>
                        </ul>
                    </div>

                    <div className="topic-card bg-gradient-to-br from-violet-50 to-purple-50/50 rounded-xl p-5 border border-violet-100 shadow-sm">
                        <h3 className="font-bold mb-3 flex items-center gap-2 text-violet-900">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-white text-sm font-bold">③</span>
                            Simulation and Evaluation
                        </h3>
                        <ul className="list-none space-y-2 ml-1">
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-violet-400 mt-1 font-bold text-xs">›</span>
                                Simulation Platform for Cooperative System
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-violet-400 mt-1 font-bold text-xs">›</span>
                                Datasets and Benchmarks for Cooperative Learning
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-violet-400 mt-1 font-bold text-xs">›</span>
                                Simulation and Benchmarks for Agentic Systems
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-violet-400 mt-1 font-bold text-xs">›</span>
                                Sim-to-Real Transfer
                            </li>
                        </ul>
                    </div>

                    <div className="topic-card bg-gradient-to-br from-rose-50 to-pink-50/50 rounded-xl p-5 border border-rose-100 shadow-sm">
                        <h3 className="font-bold mb-3 flex items-center gap-2 text-rose-900">
                            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 text-white text-sm font-bold">④</span>
                            Human-Agent Interaction
                        </h3>
                        <ul className="list-none space-y-2 ml-1">
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-rose-400 mt-1 font-bold text-xs">›</span>
                                Explainability and Interpretability for VLA
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-rose-400 mt-1 font-bold text-xs">›</span>
                                Natural Language Interaction for Embodied Agents
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-rose-400 mt-1 font-bold text-xs">›</span>
                                Human-Agent Collaboration
                            </li>
                            <li className="flex items-start gap-2 text-slate-700">
                                <span className="text-rose-400 mt-1 font-bold text-xs">›</span>
                                Safety, Fairness, and Ethical Alignment
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Important Dates */}
            <p className="text-pretty mb-3">
                <span className="font-bold text-lg flex items-center gap-2">
                    <span className="inline-block w-1.5 h-5 rounded-full bg-gradient-to-b from-[#01305f] to-sky-400" />
                    Important Dates
                </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-8">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-xl p-4 border border-sky-100 shadow-sm text-center">
                    <div className="text-xs text-slate-500 font-medium mb-1">Paper Submission Open</div>
                    <div className="font-bold text-sky-700 text-lg">Feb 1, 2026</div>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-xl p-4 border border-sky-100 shadow-sm text-center">
                    <div className="text-xs text-slate-500 font-medium mb-1">Submission Deadline</div>
                    <div className="font-bold text-sky-700 text-lg">Apr 15, 2026</div>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-xl p-4 border border-sky-100 shadow-sm text-center">
                    <div className="text-xs text-slate-500 font-medium mb-1">Notification</div>
                    <div className="font-bold text-sky-700 text-lg">May 13, 2026</div>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-xl p-4 border border-sky-100 shadow-sm text-center">
                    <div className="text-xs text-slate-500 font-medium mb-1">Camera Ready</div>
                    <div className="font-bold text-sky-700 text-lg">May 20, 2026</div>
                </div>
            </div>

            {/* Submission Guidance */}
            <p className="text-pretty mb-3">
                <span className="font-bold text-lg flex items-center gap-2">
                    <span className="inline-block w-1.5 h-5 rounded-full bg-gradient-to-b from-[#01305f] to-sky-400" />
                    Submission Guidance
                </span>
            </p>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-100 shadow-sm mb-8">
                <ul className="list-none space-y-3">
                    <li className="flex items-start gap-2">
                        <span className="text-sky-400 mt-0.5 font-bold">›</span>
                        <span>Submission Portal: <a href="https://openreview.net/group?id=thecvf.com/CVPR/2026/Workshop/MEIS&referrer=%5BHomepage%5D(%2F)#tab-your-consoles" className="text-sky-600 hover:text-sky-700 font-semibold underline decoration-sky-300 underline-offset-2 hover:decoration-sky-500 transition-colors">OpenReview</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-sky-400 mt-0.5 font-bold">›</span>
                        <span>Submission format: Submissions must follow the CVPR 2026 template (<a href="https://cvpr.thecvf.com/Conferences/2026/AuthorGuidelines" className="text-sky-600 hover:text-sky-700 font-semibold underline decoration-sky-300 underline-offset-2 hover:decoration-sky-500 transition-colors">here</a>) and will be peer-reviewed in a double-blind manner.
                            Submission must be no more than 8 pages (excluding references).
                            By default, accepted papers will be included in the CVPR workshop proceedings.
                            Accepted papers will be presented in the form of posters, with several papers being selected for spotlight sessions.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default CallForPapers;
