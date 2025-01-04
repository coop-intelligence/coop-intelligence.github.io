const Workshop = () => {
    return (
        <div className="text-justify">
           <p>
           This workshop focuses on cooperative intelligence within multi-agent embodied intelligent systems. Artificial intelligence has propelled the development of embodied AI, particularly in autonomous vehicles, robotics, and drones. However, achieving full autonomy in complex and dynamic environments remains a formidable challenge for individual agents. Cooperative intelligence offers a transformative approach that allows agents to collaborate and interact with the infrastructure to handle a wide range of tasks more efficiently.
            1) In autonomous driving, the availability of datasets and breakthrough algorithms has spurred research interest in cooperative autonomous driving. Vehicle-to-Everything (V2X) interactions, including Vehicle-to-Vehicle (V2V) and Vehicle-to-Infrastructure (V2I), empower autonomous vehicles to extend perception, increase safety, and overcome the limitations of single-vehicle autonomy, laying the groundwork for large-scale adoption.
            2) In robotics, the evolution of multi-agent systems is revolutionizing the exploration of unknown environments. These advances allow robots to efficiently assist humans in challenging, open-world tasks.
            3) In drones, aerial robot swarms collaborate to perform complex tasks such as drone shows, 3D printing, and navigating cluttered environments. Furthermore, ground-air collaboration between drones and mobile robots shows immense potential in areas such as large-scale mapping and joint search and rescue.

            Despite progress, challenges in coordinating multi-agent systems remain underexplored. Key hurdles include deciding what information to transmit, how to transmit, and how to fuse data across various levels like perception, prediction, and planning. Moreover, obtaining high-quality real-world datasets is difficult. Recent advances in foundational and generative models offer promising ways to overcome these obstacles. This workshop will explore opportunities, challenges, and future directions for multi-agent embodied intelligent systems in the generative-AI era.
            </p>
            <div className="my-4">
                <img src="/banner.jpg" alt="Cooperative Intelligence in Multi-Agent Systems" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <p className="text-pretty mt-2 mb-2">
            <span className="font-bold">Links to Past Workshops:</span> <a href="https://coop-intelligence.github.io/eccv2024/" className="text-blue-500">1st MAAS Workshop @ECCV2024</a>
            </p>
        </div>
    )
}
export default Workshop;
