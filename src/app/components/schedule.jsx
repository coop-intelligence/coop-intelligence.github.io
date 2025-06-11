const Schedule = () => {
    return <div className="text-justify">
        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
            <li> <span className="font-bold">Date</span> - June 12th, 2025 (Full Day)</li>
            <li><span className="font-bold">Location</span> - Room 102 A, Music City Center, Nashville TN, USA </li>
            <li><span className="font-bold">Live Content</span> - https://cvpr.thecvf.com/virtual/2025/workshop/32357 </li>
            <li><span className="font-bold">Agenda are as follows: </span></li>
        </ul>

        <div className="mt-4 flex justify-center">
            <div className="w-full max-w-4xl">
                <table className="w-full border border-gray-200 text-sm mx-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2 w-[150px]">Time (ET)</th>
                            <th className="border border-gray-300 px-3 py-2">Schedule</th>
                            <th className="border border-gray-300 px-3 py-2 w-[250px]">Hoster</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2">08:50 - 09:00</td>
                            <td className="border border-gray-300 px-3 py-2">Introduction and Opening Remarks <br /> Haibao Yu (HKU)</td>
                            <td className="border border-gray-300 px-3 py-2">-</td>
                        </tr>
                        
                        {/* 第一组Shanghang Zhang */}
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">09:00 - 09:30</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 1: Enze Xie (Nvidia)<br />Talk Title: Building an efficient and high-quality Text to Image foundation generative model from scratch</td>
                            <td className="border border-gray-300 px-3 py-2" rowSpan="3">Shanghang Zhang (PKU)</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">09:30 - 10:00</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 2: Jeannette Bohg (Stanford)<br />Talk Title: Towards collaborative mobile manipulation</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">10:00 - 10:30</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 3: Guillaume Sartoretti (NUS)<br />Talk Title: High-Dimensional Multi-Agent Robot Learning</td>
                        </tr>
                        
                        <tr>
                            <td className="border border-gray-300 px-3 py-2">10:30 - 11:00</td>
                            <td className="border border-gray-300 px-3 py-2">Coffe Break & Poster Presentation</td>
                            <td className="border border-gray-300 px-3 py-2">-</td>
                        </tr>
                        
                        {/* 第二组Shanghang Zhang */}
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">11:00 - 11:30</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 4: Deepak Pathak (SkildAI & CMU)<br />Talk Title: TBD</td>
                            <td className="border border-gray-300 px-3 py-2" rowSpan="2">Shanghang Zhang (PKU)</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">11:30 - 12:00</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 5: Jiachen Li (University of California, Riverside)<br />Talk Title: Toward Trustworthy Embodied Agents: From Individuals to Teams</td>
                        </tr>
                        
                        {/* Haibao Yu主持的时段 */}
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">12:00 - 12:10</td>
                            <td className="border border-gray-300 px-3 py-2">Oral Paper 1: <br />Paper Title: Efficient Task-specific Conditional Diffusion Policies: Shortcut Model Acceleration and SO(3) Optimization<br />Presenter: Haiyong Yu (Remote)</td>
                            <td className="border border-gray-300 px-3 py-2" rowSpan="3">Haibao Yu (HKU)</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">12:10 - 12:20</td>
                            <td className="border border-gray-300 px-3 py-2">Oral Paper 2: <br />Paper Title: Multi-Agent Systems for Robotic Autonomy with LLMs<br />Presenter: Dandan Zhang</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">12:20 - 12:30</td>
                            <td className="border border-gray-300 px-3 py-2">Oral Paper 3: <br />Paper Title: A Multi-Agent Autonomous Mechatronics Design Framework<br />Presenter: Zeyu Wang</td>
                        </tr>
                        
                        <tr>
                            <td className="border border-gray-300 px-3 py-2">-</td>
                            <td className="border border-gray-300 px-3 py-2">Lunch Break</td>
                            <td className="border border-gray-300 px-3 py-2">-</td>
                        </tr>
                        
                        {/* Dandan Zhang主持的时段 */}
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">13:30 - 14:00</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 6: Marco Pavone (Nvidia & Stanford)<br />Talk Title: Ensuring Physical AI Safety in AI-enabled Autonomous Systems</td>
                            <td className="border border-gray-300 px-3 py-2" rowSpan="4">Dandan Zhang (Imperial College London)</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">14:00 - 14:30</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 7: Hongyang Li (OpenDriveLab & HKU)<br />Talk Title: VLAs on the Horizon for Embodied Systems</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">14:30 - 15:00</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 8: Siheng Chen (SJTU)<br />Talk Title: Multi-agent collaborative perception</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">15:00 - 15:30</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 9: Hao Zhao (THU)<br />Talk Title: World Models: Subjunctives</td>
                        </tr>
                        
                        <tr>
                            <td className="border border-gray-300 px-3 py-2">15:30 - 16:00</td>
                            <td className="border border-gray-300 px-3 py-2">Coffe Break & Poster Presentation</td>
                            <td className="border border-gray-300 px-3 py-2">-</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">16:00 - 16:30</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 10: Zsolt Kira (Georgia Institute of Technology)<br />Talk Title: Vision-Language Models for Cooperative Intelligence</td>
                            <td className="border border-gray-300 px-3 py-2" rowSpan="2">Dandan Zhang (Imperial College London)</td>
                        </tr>
                        <tr className="bg-green-50">
                            <td className="border border-gray-300 px-3 py-2">16:30 - 17:00</td>
                            <td className="border border-gray-300 px-3 py-2">Keynote Speak 11: Sergey Levine (PI & UC Berkeley)<br />Talk Title: Responsive and Interactive Vision-Language-Action Models (Remote)</td>
                        </tr>
                        
                        {/* Haibao Yu主持的时段 */}
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">17:00 - 17:15</td>
                            <td className="border border-gray-300 px-3 py-2">Autonomous Driving through V2X Cooperation Challenge: Overview & Awards & Sharing<br /> Ruiyang Hao (THU)</td>
                            <td className="border border-gray-300 px-3 py-2" rowSpan="4">Haibao Yu (HKU)</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">17:15 - 17:30</td>
                            <td className="border border-gray-300 px-3 py-2">RoboTwin Dual-Arm Collaboration Challenge: Overview & Awards & Sharing<br />Yao Mu (HKU & SJTU)</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">17:30 - 17:40</td>
                            <td className="border border-gray-300 px-3 py-2">Oral Paper 4: <br />Paper Title: LangCoop: Collaborative Driving with Language<br />Presenter: Xiangbo Gao</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="border border-gray-300 px-3 py-2">17:40 - 17:50</td>
                            <td className="border border-gray-300 px-3 py-2">Oral Paper 5: <br />Paper Title: RoboFactory: Exploring Embodied Agent Collaboration with Compositional Constraints<br />Presenter: Yiran Qin</td>
                        </tr>
                        
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2">17:50 - 18:00</td>
                            <td className="border border-gray-300 px-3 py-2">Closed Remarks & Best Paper Awards<br />Haibao Yu (HKU)</td>
                            <td className="border border-gray-300 px-3 py-2">-</td>
                        </tr>
                        
                        <tr className="bg-red-50">
                            <td className="border border-gray-300 px-3 py-2">19:00 - 21:00</td>
                            <td className="border border-gray-300 px-3 py-2">MEIS Workshop Banquet (About 20 people)<br />Location: near Center, TBD</td>
                            <td className="border border-gray-300 px-3 py-2">Haibao Yu (HKU)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Schedule;