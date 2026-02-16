const CallForPapers = () => {
    return (
        <div className="text-justify">
            
            <p className="text-pretty mt-2 mb-2">
            <span className="font-bold text-lg">We invite submissions including but not limited to the following topics:</span>
            </p>
            
            <div className="mt-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold mb-3">① Foundation Models and Architectures</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Large Language Model-assisted Cooperative System</li>
                            <li>Foundation Models for Cooperative System</li>
                            <li>Reasoning and Memory in Agentic System</li>
                            <li>VLA for Robotics and Autonomous Driving (AD)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-3">② Multi-Agent Systems & Collaboration</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Vehicle-to-Everything (V2X): V2V, V2I, V2P, V2D</li>
                            <li>Multi-agent Robotic System and Swarm Robots</li>
                            <li>Swarm of Drones and Aerial Robots</li>
                            <li>Cooperative Motion Prediction and Decision-Making</li>
                            <li>Communication-Efficient Cooperative Perception</li>
                            <li>End-to-End Cooperative Policy Learning</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-3">③ Simulation and Evaluation</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Simulation Platform for Cooperative System</li>
                            <li>Datasets and Benchmarks for Cooperative Learning</li>
                            <li>Simulation and Benchmarks for Agentic Systems</li>
                            <li>Sim-to-Real Transfer</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-3">④ Human-Agent Interaction</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Explainability and Interpretability for VLA</li>
                            <li>Natural Language Interaction for Embodied Agents</li>
                            <li>Human-Agent Collaboration</li>
                            <li>Safety, Fairness, and Ethical Alignment</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-pretty mb-2">
                <span className="font-bold text-lg">Important Dates</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Paper submission open: February 1, 2026</li>
                <li>Paper submission deadline: April 15, 2026</li>
                <li>Notification of acceptance: May 13, 2026</li>
                <li>Camera ready: May 20, 2026</li>
            </ul>
            <p className="text-pretty mb-2">
                <span className="font-bold text-lg">Submission Guidance</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Submission Portal: <a href="https://openreview.net/group?id=thecvf.com/CVPR/2026/Workshop/MEIS&referrer=%5BHomepage%5D(%2F)#tab-your-consoles" className="text-blue-500">Openreview</a> </li>
                <li>Submission format: Submissions must follow the CVPR 2026 template (<a href="https://cvpr.thecvf.com/Conferences/2026/AuthorGuidelines" className="text-blue-500">here</a>) and will be peer-reviewed in a double-blind manner. 
                    Submission must be no more than 8 pages (excluding references). 
                    By default, accepted papers will be included in the CVPR workshop proceedings. 
                    Accepted papers will be presented in the form of posters, with several papers being selected for spotlight sessions. </li>
            </ul>
            {/* <p className="text-pretty mb-2">
                <span className="font-bold text-lg">Awards</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>🏆Best Paper Award ($500) - LangCoop: Collaborative Driving with Language</li>
                <li>🏆Outstanding Paper Award ($500) - RoboFactory: Exploring Embodied Agent Collaboration with Compositional Constraints</li>
            </ul> */}
            <p className="text-pretty mb-2 text-lg">
                <span className="font-bold">Area Chairs</span>
            </p>
            Upcoming
            {/* <ul class="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>
                    <a href="https://www.intelligentrobotics-acrossscales.com/" class="text-blue-500 hover:underline">Dandan Zhang</a> (Imperial College London)
                </li>
                <li>
                    <a href="https://scholar.google.com/citations?hl=en&user=ulZxvY0AAAAJ" class="text-blue-500 hover:underline">Li Chen</a> (Shanghai AI Lab)
                </li>
                <li>
                    <a href="https://leofansq.github.io/" class="text-blue-500 hover:underline">Siqi Fan</a> (Tsinghua University)
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jianing-qiu-91a802224/" class="text-blue-500 hover:underline">Jianing Qiu</a> (Chinese University of Hong Kong)
                </li>
            </ul> */}
            {/* <p className="text-pretty mb-2">
                <span className="font-bold">Accepted Papers (Title-Authors-Link-Oral/Poster)</span>
            </p>
            <ul class="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>
                    SwarmDiff: Swarm Robotic Trajectory Planning in Cluttered Environments via Diffusion Transformer - Kang Ding, Chunxuan Jiao, Yunze Hu, Kangjie Zhou, Pengying Wu, Yao Mu, Chang Liu - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Ding_SwarmDiff_Swarm_Robotic_Trajectory_Planning_in_Cluttered_Environments_via_Diffusion_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Poster
                </li>
                <li>
                    Efficient Task-specific Conditional Diffusion Policies: Shortcut Model Acceleration and SO(3) Optimization - Haiyong Yu, Yanqiong Jin, Yonghao He, Wei Sui - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Yu_Efficient_Task-specific_Conditional_Diffusion_Policies_Shortcut_Model_Acceleration_and_SO3_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Oral
                </li>
                <li>
                    AI Hiring with LLMs: A Context-Aware and Explainable Multi-Agent Framework for Resume Screening - Frank P.-W. Lo, Jianing Qiu, Zeyu Wang, Haibao Yu, Yeming Chen, Gao Zhang, Benny Lo - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Lo_AI_Hiring_with_LLMs_A_Context-Aware_and_Explainable_Multi-Agent_Framework_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Oral
                </li>
                <li>
                    Multi-Agent Systems for Robotic Autonomy with LLMs - Junhong Chen, Ziqi Yang, Haoyuan G Xu, Dandan Zhang, George Mylonas - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Chen_Multi-Agent_Systems_for_Robotic_Autonomy_with_LLMs_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Oral
                </li>
                <li>
                    An LLM-enabled Multi-Agent Autonomous Mechatronics Design Framework - Zeyu Wang, Frank P.-W. Lo, Qian Chen, Yongqi Zhang, Chen Lin, Xu Chen, Zhenhua Yu, Alexander J. Thompson, Eric M. Yeatman, Benny P. L. Lo - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Wang_An_LLM-enabled_Multi-Agent_Autonomous_Mechatronics_Design_Framework_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Oral
                </li>
                <li>
                    Deciding the Path: Leveraging Multi-Agent Systems for Solving Complex Tasks - Iman Abbasnejad, Xuefeng Liu, Atunu Roy - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Abbasnejad_Deciding_the_Path_Leveraging_Multi-Agent_Systems_for_Solving_Complex_Tasks_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Poster
                </li>
                <li>
                    LangCoop: Collaborative Driving with Language - Xiangbo Gao, Yuheng Wu, Rujia Wang, Chenxi Liu, Yang Zhou, Zhengzhong Tu - <a href="https://openaccess.thecvf.com/content/CVPR2025W/MEIS/html/Gao_LangCoop_Collaborative_Driving_with_Language_CVPRW_2025_paper.html" class="text-blue-500 hover:underline">Link</a> - Oral
                </li>
                <li>
                    RoboFactory: Exploring Embodied Agent Collaboration with Compositional Constraints - Yiran Qin, Li Kang, Xiufeng Song, Zhenfei Yin, Xiaohong Liu, Xihui Liu, Ruimao Zhang, Lei Bai - <a href="https://arxiv.org/abs/2503.16408" class="text-blue-500 hover:underline">Link</a> - Oral
                </li>
            </ul> */}

        </div>
    )
}
export default CallForPapers;
