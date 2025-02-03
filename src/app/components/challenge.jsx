// import { Span } from "next/dist/trace";
import Image from "next/image";

const Challenge = () => {
    return (
        <div className="text-justify">
            <p className="text-pretty mb-2">
            We plan to host three challenges: end-to-end autonomous driving through V2X cooperation, multi-robot collaboration, and human–robot interaction.
            </p>
            <table className="w-full border-collapse border border-gray-300 mt-4 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th classNawme="border border-gray-300 p-2">Challenge</th>
                        <th className="border border-gray-300 p-2">Organizing Committee</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">End-to-End Autonomous Driving through V2X Cooperation</td>
                        <td className="border border-gray-300 p-2">Ruiyang Hao, Haibao Yu, Jiaru Zhong, Jiahao Wang, Wenxian Yang, Chuanye Wang, Siqi Fan</td>
                        <td className="border border-gray-300 p-2">Upcoming</td>
                        <td className="border border-gray-300 p-2"><a href="https://coop-intelligence.github.io/V2X-Sec_MEIS/" target="_blank" rel="noopener noreferrer">
                                🌐
                            </a></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">RoboTwin Dual-Arm Collaboration Challenge</td>
                        <td className="border border-gray-300 p-2">Yao Mu, Tianxing Chen, Zhiqiang Xie</td>
                        <td className="border border-gray-300 p-2">Upcoming</td>
                        <td className="border border-gray-300 p-2">Upcoming</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Human–Robot Interaction Challenge</td>
                        <td className="border border-gray-300 p-2">Jianing Qiu, Lin Li, Lipeng Chen</td>
                        <td className="border border-gray-300 p-2">Upcoming</td>
                        <td className="border border-gray-300 p-2"><a href="https://h2tc-roboticsx.github.io/" target="_blank" rel="noopener noreferrer">
                                🌐
                            </a></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Challenge;
