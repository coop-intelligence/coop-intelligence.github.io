import { getAssetPath } from "../../utils/path.js";

const scheduleItems = [
    {
        time: "08:30 - 08:40",
        type: "default",
        session: "Opening Remarks",
        topic: "Welcome & Workshop Overview",
        host: "Organizing Committee",
    },
    {
        time: "08:40 - 09:00",
        type: "keynote",
        session: "Opening Keynote",
        speaker: "Xiangbo Gao",
    },
    {
        time: "09:00 - 09:30",
        type: "keynote",
        session: "Keynote 1",
        speaker: "Xiaopeng Li",
        topic: "Agentic AI for Smart Transportation",
    },
    {
        time: "09:30 - 10:00",
        type: "keynote",
        session: "Keynote 2",
        speaker: "Manabu Tsukada",
        topic: "Cooperative Intelligence for Autonomous Driving: From V2X Communication to Human-Agent Interaction",
    },
    {
        time: "10:00 - 10:30",
        type: "break",
        session: "Poster Session I & Coffee Break",
    },
    {
        time: "10:30 - 11:00",
        type: "keynote",
        session: "Keynote 3",
        speaker: "Bolei Zhou",
        topic: "Scalable Physical AI for Sidewalk Autonomy",
    },
    {
        time: "11:00 - 11:30",
        type: "keynote",
        session: "Keynote 4",
        speaker: "Marco Pavone",
        topic: "Physical AI for End-to-End Vehicle Autonomy",
    },
    {
        time: "11:30 - 12:00",
        type: "break",
        session: "Poster Session II & Coffee Break",
    },
    {
        time: "12:00 - 14:00",
        type: "lunch",
        session: "Lunch Break",
    },
    {
        time: "14:00 - 14:30",
        type: "keynote",
        session: "Keynote 5",
        speaker: "Yanjia Huang",
        topic: "Web based simulation teleoperation for general manipulation",
    },
    {
        time: "14:30 - 15:00",
        type: "keynote",
        session: "Keynote 6",
        speaker: "Angela Dai",
        topic: "TBD",
    },
    {
        time: "15:00 - 15:30",
        type: "keynote",
        session: "Keynote 7",
        speaker: "Bernadette Bucher",
        topic: "Bridging the Interaction Gap: Grounding Low-Level Control in Large-Scale Procedural Worlds",
    },
    {
        time: "15:30 - 15:45",
        type: "oral",
        session: "Oral Presentation 1",
        topic: "Multi-Agent Video Prediction: Self-Correcting Conditional Frames for Dynamic Scene Forecasting",
    },
    {
        time: "15:45 - 16:00",
        type: "oral",
        session: "Oral Presentation 2",
        topic: "Mitigating Multi-Module Errors for Reliable Navigation in Dynamic Environments via Online Trajectory Refinement",
    },
    {
        time: "16:00 - 16:15",
        type: "oral",
        session: "Oral Presentation 3",
        topic: "Bridging the Pretrain-to-Real Gap: Alignment Challenges in Deploying Generalist VLA Models for Additive Manufacturing",
    },
    {
        time: "16:15 - 16:30",
        type: "oral",
        session: "Oral Presentation 4",
        topic: "CoSA-3D: Vision-Only Automatic 3D Annotation for Cooperative Perception",
    },
    {
        time: "16:30 - 17:00",
        type: "break",
        session: "Poster Session IV & Coffee Break",
    },
    {
        time: "17:00 - 17:30",
        type: "keynote",
        session: "Keynote 8",
        speaker: "Jiachen Li",
        topic: "TBD",
    },
    {
        time: "17:30 - 17:45",
        type: "award",
        session: "Paper Awards Ceremony",
        topic: "Best Paper, Runner-Up, Best Demo Paper",
    },
    {
        time: "17:45 - 18:00",
        type: "default",
        session: "Closing Remarks & Group Photo",
        host: "Organizing Committee",
    },
];

const itemStyles = {
    default: {
        row: "bg-gray-50/50",
        dot: "bg-gray-400",
    },
    keynote: {
        row: "hover:bg-green-50/50 transition-colors",
        dot: "bg-green-500",
    },
    break: {
        row: "bg-amber-50/50",
        dot: "bg-amber-500",
    },
    lunch: {
        row: "bg-gray-100",
        dot: "bg-gray-400",
    },
    oral: {
        row: "hover:bg-blue-50/50 transition-colors",
        dot: "bg-blue-500",
    },
    award: {
        row: "bg-yellow-50/70",
        dot: "bg-yellow-500",
    },
};

const speakerImages = {
    "Xiangbo Gao": "/xiangbo_gao.png",
    "Xiaopeng Li": "/xiaopeng_li.png",
    "Manabu Tsukada": "/manabu_tsukada.png",
    "Bolei Zhou": "/bolei_zhou.png",
    "Marco Pavone": "/marco_pavone.jpeg",
    "Yanjia Huang": "/yanjia_huang.png",
    "Angela Dai": "/angela_dai.png",
    "Bernadette Bucher": "/Bernadette_Bucher.png",
    "Jiachen Li": "/jiachen_li.jpg",
};

const SpeakerCell = ({ item }) => {
    const speakerOrHost = item.speaker || item.host;

    if (!speakerOrHost) {
        return <span className="text-gray-400">-</span>;
    }

    if (!item.speaker) {
        return (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                {speakerOrHost}
            </span>
        );
    }

    return (
        <div className="flex min-w-[13rem] items-center gap-3">
            {speakerImages[item.speaker] && (
                <img
                    src={getAssetPath(speakerImages[item.speaker])}
                    alt={item.speaker}
                    width="48"
                    height="48"
                    style={{ width: "48px", height: "48px" }}
                    className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-sky-100"
                />
            )}
            <div className="leading-tight">
                <div className="text-sm font-extrabold text-[#01305f]">{item.speaker}</div>
            </div>
        </div>
    );
};

const Schedule = () => {
    return <div className="text-left">
        <div className="mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                    {/* <h3 className="text-lg font-semibold text-gray-800">Workshop Schedule</h3> */}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Date: <span className="font-medium">Thursday, June 4, 2026</span></span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Location: <span className="font-medium">Denver, CO, USA</span></span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Live: <span className="font-medium">Upcoming</span></span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Timezone: <span className="font-medium">MDT (GMT-6)</span></span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Time</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-48">Session</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#01305f] uppercase tracking-wider w-64">Speaker / Host</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic / Notes</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {scheduleItems.map((item) => {
                                const styles = itemStyles[item.type] || itemStyles.default;
                                return (
                                    <tr className={styles.row} key={`${item.time}-${item.session}-${item.speaker || ""}`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            <div className="flex items-start gap-2">
                                                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${styles.dot}`}></span>
                                                <div className="font-semibold">
                                                    {item.session}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <SpeakerCell item={item} />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {item.topic || item.note ? (
                                                <div>
                                                    {item.topic && <div>{item.topic}</div>}
                                                    {item.note && <div className="mt-1 text-xs font-medium text-amber-700">{item.note}</div>}
                                                </div>
                                            ) : (
                                                <span className="text-gray-400">-</span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
export default Schedule;
