// import { Span } from "next/dist/trace";
import Image from "next/image";

const Challenge = () => {
    return (
        <div className="text-justify">
            <div className="mt-2 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center text-green-700 text-lg">🏆</div>
                    <div>
                        <h3 className="font-bold text-lg">Competition: Air-Ground Multi-agent Collaborative Perception</h3>
                        <p className="text-gray-600 text-sm">One unified challenge advancing multi-agent V2X cooperation for autonomous driving</p>
                    </div>
                </div>

                <div className="px-5 py-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-2">Timeline</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-gray-400"></span>
                                <span>Competition announcement: no late by March 2025</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-gray-400"></span>
                                <span>Submission server open: April 10, 2025</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-gray-400"></span>
                                <span>Submission deadline: two weeks before workshop date</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-gray-400"></span>
                                <span>Decision to authors: one week before workshop date</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h4 className="font-semibold mb-2">Organizer Committee</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Xiangbo Gao (Texas A&M University)</li>
                                <li>Yuheng Wu (KAIST)</li>
                                <li>Zhengzhong Tu (Texas A&M University)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-2">Description</h4>
                                <p className="text-sm leading-6 text-gray-800">
                                    This challenge focuses on air–ground collaborative perception and decision-making for autonomous driving, leveraging multi-agent V2X cooperation among vehicles, roadside units (RSUs), and aerial drones. Participants will develop algorithms that enable heterogeneous agents to achieve robust perception, fusion, and planning under diverse environments and drone navigation strategies (hover, patrol, escort). The challenge aims to advance Vehicle-to-Drone (V2D) and Vehicle-to-Infrastructure (V2I) collaboration toward scalable, communication-efficient, and safety-aware autonomous driving.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Datasets and Evaluation</h4>
                                <p className="text-sm leading-6 text-gray-800">
                                    Official training and validation datasets will be provided to ensure fair comparisons. Participants will submit their implemented model agents to a cloud-based evaluation platform via EvalAI. Submissions, in the form of Docker containers, will be evaluated on the challenge’s hidden test set under both open-loop and closed-loop settings.
                                </p>
                                <div className="mt-3 space-y-3 text-sm leading-6 text-gray-800">
                                    <div>
                                        <span className="font-medium">Open-loop evaluation:</span> We will use the AirV2X-Perception dataset, a large-scale co-simulation dataset integrating CARLA and AirSim for unified air–ground V2X research. It includes over 6.7 hours of synchronized multi-modal data (LiDAR + cameras) from up to 15 connected agents per scene (5 vehicles, 5 RSUs, 5 drones) across diverse weather, lighting, and environment conditions. The dataset supports 3D object detection, BEV semantic segmentation, and multi-object tracking tasks. Codebase: <a href="https://github.com/taco-group/AirV2X-Perception" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/taco-group/AirV2X-Perception</a>.
                                    </div>
                                    <div>
                                        <span className="font-medium">Closed-loop evaluation:</span> We will employ the AirV2X-Sim platform, an interactive simulator designed for full-stack air–ground cooperative driving. AirV2X-Sim enables dynamic UAV–vehicle coordination, bandwidth-aware communication, and safety-critical evaluation. The platform will be open-sourced in Dec. 2025, and the enhanced AirV2X-Perception V2 dataset—featuring realistic communication delays, dynamic UAV trajectories, and expanded scenario diversity—will be released in Feb. 2026.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="px-5 py-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">V2X</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">V2D</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">V2I</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">Perception</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">Planning</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">Communication Efficiency</span>
                </div> */}
            </div>

        </div>
    )
}
export default Challenge;
