const Schedule = () => {
    return <div className="text-justify">
        <div className="mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                    {/* <h3 className="text-lg font-semibold text-gray-800">Workshop Schedule</h3> */}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Date: <span className="font-medium">Upcoming</span></span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Location: <span className="font-medium">Upcoming</span></span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Live: <span className="font-medium">Upcoming</span></span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/70 text-gray-800 px-2 py-1 border border-gray-200">Timezone: <span className="font-medium">GMT-6</span></span>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Time</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">Host</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Morning Session */}
                            <tr className="bg-gray-50/50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9:00 - 9:10</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                        Introduction and Opening Remarks
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9:10 - 9:40</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 1:</span> Autonomous Driving and V2X
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9:40 - 10:10</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 2:</span> Autonomous Driving and V2X
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10:10 - 10:40</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 3:</span> Autonomous Driving and V2X
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="bg-amber-50/50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10:40 - 11:00</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                        <span className="font-medium">Coffee Break</span> & Poster Presentation
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11:00 - 11:30</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 4:</span> Agentic Autonomous Driving
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11:30 - 12:00</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="font-medium">Oral Paper Presentations:</span> 3 orals (each 10 min)
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            {/* Break */}
                            <tr className="bg-gray-100">
                                <td className="px-6 py-6 text-center text-sm font-medium text-gray-600" colSpan="3">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                                        Break
                                    </div>
                                </td>
                            </tr>
                            
                            {/* Afternoon Session */}
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2:00 - 2:30</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 5:</span> Robotics and Cooperation
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2:30 - 3:00</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 6:</span> Robotics and Cooperation
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3:00 - 3:30</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 7:</span> Drones and Cooperation
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="bg-amber-50/50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3:30 - 4:00</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                        <span className="font-medium">Coffee Break</span> & Poster Presentation
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4:00 - 4:30</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 8:</span> Drones and Cooperation
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4:30 - 5:00</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="font-medium">Invited Talk 9:</span> Other Cooperation Applications
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5:00 - 5:20</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="font-medium">Competition:</span> Sharing
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5:20 - 5:50</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="font-medium">Oral Paper Presentations:</span> 3 orals (each 10min)
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                            
                            <tr className="bg-gray-50/50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5:50 - 6:00</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                        Closed Remarks
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TBD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
export default Schedule;